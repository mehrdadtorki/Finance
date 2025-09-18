import React from "react";
import { Button, Dimensions, FlatList, StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import W1 from "./1";
import W2 from "./2";
import W3 from "./3";

const { width } = Dimensions.get("window");

const pages = [
  { component: <W1 />, bg: "#6a11cb" },
  { component: <W2 />, bg: "#2575fc" },
  { component: <W3 />, bg: "#ff6a00" },
];

export default function Welcome({ onFinish }: { onFinish: () => void }) {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const animatedBackground = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      scrollX.value,
      pages.map((_, i) => i * width),
      pages.map((p) => p.bg)
    );
    return { backgroundColor: bgColor };
  });

  return (
    <Animated.View style={[styles.container, animatedBackground]}>
      <FlatList
        data={pages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{ width, justifyContent: "center", alignItems: "center" }}
          >
            {item.component}
            {index === pages.length - 1 && (
              <View style={{ marginTop: 30 }}>
                <Button title="Get Started" onPress={onFinish} />
              </View>
            )}
          </View>
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
