import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    backgroundColor: "#a1e1ffff",
    lottie: require("@/assets/1.json"),
    title: "Hotels",
    subtitle: "All hotels and hostels are sorted by hospitality rating",
    imageAnim: "left",
  },
  {
    backgroundColor: "#6172F3",
    lottie: require("@/assets/2.json"),
    title: "Banks",
    subtitle: "We carefully verify all banks before adding them into the app",
    imageAnim: "top",
  },
  {
    backgroundColor: "#F9FAFB",
    lottie: require("@/assets/3.json"),
    title: "Stores",
    subtitle: "All local stores are categorized for your convenience",
    imageAnim: "right",
  },
];

const maxRadius = Math.sqrt(width * width + height * height) + 50;

const OnboardingScreen = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }: any) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    let translateX: Animated.AnimatedInterpolation<number> = new Animated.Value(
      0
    );
    let translateY: Animated.AnimatedInterpolation<number> = new Animated.Value(
      0
    );

    switch (item.imageAnim) {
      case "left":
        translateX = scrollX.interpolate({
          inputRange,
          outputRange: [-250, 0, 250],
          extrapolate: "clamp",
        });
        break;
      case "right":
        translateX = scrollX.interpolate({
          inputRange,
          outputRange: [250, 0, -250],
          extrapolate: "clamp",
        });
        break;
      case "top":
        translateY = scrollX.interpolate({
          inputRange,
          outputRange: [-250, 0, 250],
          extrapolate: "clamp",
        });
        break;
      case "bottom":
        translateY = scrollX.interpolate({
          inputRange,
          outputRange: [250, 0, -250],
          extrapolate: "clamp",
        });
        break;
    }

    const titleTranslateY = scrollX.interpolate({
      inputRange,
      outputRange: [50, 0, 50],
      extrapolate: "clamp",
    });

    const subtitleOpacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={[styles.page, { backgroundColor: "transparent" }]}>
        <Animated.View style={{ transform: [{ translateX }, { translateY }] }}>
          <LottieView
            source={item.lottie}
            autoPlay
            loop
            style={{ width: 350, height: 350 }}
          />
        </Animated.View>
        <Animated.Text
          style={[
            styles.title,
            { transform: [{ translateY: titleTranslateY }] },
          ]}
        >
          {item.title}
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
          {item.subtitle}
        </Animated.Text>
      </View>
    );
  };

  // Render multiple circles, one per page
  const circles = DATA.map((item, index) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        key={index}
        style={{
          position: "absolute",
          width: maxRadius * 2,
          height: maxRadius * 2,
          borderRadius: maxRadius,
          backgroundColor: item.backgroundColor,
          bottom: -maxRadius + 30,
          right: -maxRadius + 30,
          transform: [{ scale }],
        }}
      />
    );
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Render all circles */}
      {circles}

      <Animated.FlatList
        data={DATA}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  page: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: { width: 250, height: 250, resizeMode: "contain", marginBottom: 30 },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 15 },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default OnboardingScreen;
