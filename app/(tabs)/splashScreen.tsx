import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Lottie animation in the center */}
      <LottieView
        source={require("@/assets/images/splash-icon.json")} // your lottie file
        autoPlay
        loop
        style={styles.lottie}
      />

      <Text style={styles.title}>Finance App</Text>
      <Text style={styles.subtitle}>Loading your finances...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6172F3",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ECEDEE",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#9BA1A6",
  },
});

export default SplashScreen;
