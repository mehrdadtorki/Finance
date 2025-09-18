import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function W2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stay Connected 🌍</Text>
      <Text style={styles.subtitle}>
        Connect with people around the world effortlessly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "white" },
  subtitle: { fontSize: 16, marginTop: 10, color: "white" },
});
