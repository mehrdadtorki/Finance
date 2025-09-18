import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function W3() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started 🚀</Text>
      <Text style={styles.subtitle}>
        Enjoy smooth experience and awesome features!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "white" },
  subtitle: { fontSize: 16, marginTop: 10, color: "white" },
});
