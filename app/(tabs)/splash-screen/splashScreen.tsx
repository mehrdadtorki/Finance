import { MeshGradientView } from "expo-mesh-gradient";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function SplashToWelcome() {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const [typedText, setTypedText] = useState("");

  const fullText = "Finance";

  useEffect(() => {
    // Rotate + scale logo
    rotation.value = withTiming(360, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    scale.value = withSequence(
      withTiming(1.2, { duration: 500, easing: Easing.out(Easing.ease) }),
      withTiming(1, { duration: 400, easing: Easing.inOut(Easing.ease) })
    );

    // Typing effect
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Logo animation
  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }, { scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Animated mesh gradient background */}
      <MeshGradientView
        style={StyleSheet.absoluteFill}
        columns={3}
        rows={3}
        colors={[
          "#6172F3",
          "#3645B6",
          "#10153F",
          "#8E2DE2",
          "#4A00E0",
          "#00C9FF",
          "#92FE9D",
        ]}
        points={[
          [0.0, 0.0],
          [0.5, 0.0],
          [1.0, 0.0],
          [0.0, 0.5],
          [0.5, 0.5],
          [1.0, 0.5],
          [0.0, 1.0],
          [0.5, 1.0],
          [1.0, 1.0],
        ]}
      />

      {/* Center content */}
      <View style={styles.center}>
        <Animated.View style={logoStyle}>
          {/* Replace with your SVG/Image logo */}
          <Text style={styles.logo}>⬜</Text>
        </Animated.View>

        <Text style={styles.text}>{typedText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  logo: { fontSize: 60, color: "#fff" },
  text: { fontSize: 30, fontWeight: "bold", color: "white", marginTop: 16 },
});
