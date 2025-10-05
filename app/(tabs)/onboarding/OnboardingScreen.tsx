import Svg1 from "@/assets/images/onboarding/credit.svg";
import Svg2 from "@/assets/images/onboarding/security.svg";
import Svg3 from "@/assets/images/onboarding/transaction.svg";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    blob: require("@/assets/images/onboarding/bg2.png"),
    svg: Svg3,
    title: "Finance Growth",
    subtitle: "Experience healthier air and a more vibrant home.",
    animFrom: "right" as const,
  },
  {
    blob: require("@/assets/images/onboarding/bg1.png"),
    svg: Svg1, // SVG path
    title: "Easy Transaction",
    subtitle: "Transform your space with lush plants and fresh vibes.",
    animFrom: "left" as const,
  },
  {
    blob: require("@/assets/images/onboarding/bg3.png"),
    svg: Svg2,
    title: "High Security",
    subtitle: "Smart care tips and gentle reminders for thriving plants.",
    animFrom: "top" as const,
  },
];

const OnboardingWithSVG = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<Animated.FlatList<any> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onMomentumScrollEnd = (e: any) => {
    const idx = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(idx);
  };

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      const next = currentIndex + 1;
      flatListRef.current?.scrollToOffset({
        offset: next * width,
        animated: true,
      });
      setCurrentIndex(next);
    } else {
      navigation.replace("/Home");
    }
  };

  const renderItem = ({ item, index }: any) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const translateX =
      item.animFrom === "left"
        ? scrollX.interpolate({
            inputRange,
            outputRange: [-50, 0, 50],
            extrapolate: "clamp",
          })
        : item.animFrom === "right"
        ? scrollX.interpolate({
            inputRange,
            outputRange: [50, 0, -50],
            extrapolate: "clamp",
          })
        : 0;

    const translateY =
      item.animFrom === "top"
        ? scrollX.interpolate({
            inputRange,
            outputRange: [-40, 0, 40],
            extrapolate: "clamp",
          })
        : 0;

    const titleTranslateY = scrollX.interpolate({
      inputRange,
      outputRange: [30, 0, 30],
      extrapolate: "clamp",
    });

    const subtitleOpacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });

    const SvgComponent = item.svg;

    return (
      <View style={styles.page}>
        <Animated.View style={{ transform: [{ translateX }, { translateY }] }}>
          <SvgComponent width={width * 0.9} height={height * 0.5} />
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

  const blobs = DATA.map((d, i) => {
    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.95, 1, 0.95],
      extrapolate: "clamp",
    });
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [40 * (i - 1), 0, -40 * (i - 1)],
      extrapolate: "clamp",
    });

    return (
      <Animated.Image
        key={`blob-${i}`}
        source={d.blob}
        resizeMode="cover"
        style={[
          styles.blob,
          { opacity, transform: [{ scale }, { translateX }] },
        ]}
      />
    );
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.baseBg} />
      {blobs}

      <Animated.FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(_, idx) => String(idx)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />

      <View style={styles.indicatorContainer}>
        {DATA.map((_, i) => {
          const scale = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.7, 1.25, 0.7],
            extrapolate: "clamp",
          });
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={[styles.dot, { transform: [{ scale }], opacity }]}
            />
          );
        })}
      </View>

      <View style={styles.nextContainer}>
        <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
          <Text style={styles.nextText}>
            {currentIndex === DATA.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  baseBg: { ...StyleSheet.absoluteFillObject, backgroundColor: "#FAFBFF" },
  blob: {
    position: "absolute",
    width: Math.round(Math.max(width, height) * 1.6),
    height: Math.round(Math.max(width, height) * 1.6),
    left: (width - Math.round(Math.max(width, height) * 1.6)) / 2,
    top: (height - Math.round(Math.max(width, height) * 1.6)) / 2 - 60,
    opacity: 0.85,
  },
  page: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0f1724",
    marginTop: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 24,
    paddingHorizontal: 32,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 180,
    alignSelf: "center",
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0b1220",
    marginHorizontal: 6,
  },
  nextContainer: {
    position: "absolute",
    bottom: 60,
    width,
    alignItems: "center",
  },
  nextBtn: {
    backgroundColor: "#0b1220",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  nextText: { color: "#fff", fontSize: 18, fontWeight: "800" },
});

export default OnboardingWithSVG;
