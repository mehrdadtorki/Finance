import { Colors, Radii, Shadow } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const TransactionsChart: React.FC = () => {
  const [period, setPeriod] = useState<"day" | "month" | "year">("month");

  // Sample datasets
  const dayData = [
    { value: 1.2, label: "Mon", frontColor: "#6172F3", spacing: 2 },
    { value: 2.3, frontColor: "#FDE272" },
    { value: 1.8, label: "Tue", frontColor: "#6172F3", spacing: 2 },
    { value: 3.4, frontColor: "#FDE272" },
    { value: 2.9, label: "Wed", frontColor: "#6172F3", spacing: 2 },
    { value: 1.7, frontColor: "#FDE272" },
    { value: 2.4, label: "Thu", frontColor: "#6172F3", spacing: 2 },
    { value: 2.1, frontColor: "#FDE272" },
    { value: 1.9, label: "Fri", frontColor: "#6172F3", spacing: 2 },
    { value: 2.7, frontColor: "#FDE272" },
    { value: 3.2, label: "Sat", frontColor: "#6172F3", spacing: 2 },
    { value: 2.6, frontColor: "#FDE272" },
    { value: 2.8, label: "Sun", frontColor: "#6172F3", spacing: 2 },
  ];

  const monthData = [
    { value: 3.4, label: "Jan", frontColor: "#6172F3", spacing: 2 },
    { value: 2.3, frontColor: "#FDE272" },
    { value: 3.9, label: "Feb", frontColor: "#6172F3", spacing: 2 },
    { value: 3, frontColor: "#FDE272" },
    { value: 3.15, label: "Mar", frontColor: "#6172F3", spacing: 2 },
    { value: 2.2, frontColor: "#FDE272" },
    { value: 3.2, label: "Apr", frontColor: "#6172F3", spacing: 2 },
    { value: 3.1, frontColor: "#FDE272" },
    { value: 3.7, label: "May", frontColor: "#6172F3", spacing: 2 },
    { value: 2.8, frontColor: "#FDE272" },
    { value: 3.1, label: "Jun", frontColor: "#6172F3", spacing: 2 },
    { value: 2.9, frontColor: "#FDE272" },
    { value: 2.7, label: "July", frontColor: "#6172F3", spacing: 2 },
    { value: 3.8, frontColor: "#FDE272" },
  ];

  const yearData = [
    { value: 26, label: "2017", frontColor: "#6172F3", spacing: 2 },
    { value: 12, frontColor: "#FDE272" },
    { value: 15, label: "2018", frontColor: "#6172F3", spacing: 2 },
    { value: 21, frontColor: "#FDE272" },
    { value: 12, label: "2019", frontColor: "#6172F3", spacing: 2 },
    { value: 28, frontColor: "#FDE272" },
    { value: 12, label: "2020", frontColor: "#6172F3", spacing: 2 },
    { value: 15, frontColor: "#FDE272" },
    { value: 20, label: "2021", frontColor: "#6172F3", spacing: 2 },
    { value: 17, frontColor: "#FDE272" },
    { value: 14, label: "2022", frontColor: "#6172F3", spacing: 2 },
    { value: 19, frontColor: "#FDE272" },
    { value: 28, label: "2023", frontColor: "#6172F3", spacing: 2 },
    { value: 25, frontColor: "#FDE272" },
  ];

  const chartData =
    period === "day" ? dayData : period === "month" ? monthData : yearData;

  return (
    <View style={styles.container}>
      {/* Toggle Buttons */}
      <View style={styles.buttonGroup}>
        {["day", "month", "year"].map((p) => (
          <TouchableOpacity
            key={p}
            style={[styles.button, period === p && styles.buttonActive]}
            onPress={() => setPeriod(p as "day" | "month" | "year")}
          >
            <Text
              style={[
                styles.buttonText,
                period === p && styles.buttonTextActive,
              ]}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Chart */}
      <BarChart
        data={chartData.map((d) => ({
          ...d,
          labelTextStyle: { color: "gray" },
          labelWidth: 30,
        }))}
        barWidth={8}
        spacing={24}
        roundedTop
        roundedBottom
        yAxisLabelPrefix="$"
        yAxisLabelSuffix="k"
        rulesType="dashed"
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: "#969696" }}
        xAxisLabelTextStyle={{ color: "#969696" }}
        noOfSections={3}
        maxValue={period === "year" ? 30 : 4}
      />
    </View>
  );
};

export default TransactionsChart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.light.background,
    borderRadius: Radii.lg,
    ...Shadow.lg,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  buttonActive: {
    backgroundColor: "#6172F3",
  },
  buttonText: {
    color: "#000",
    fontWeight: "500",
  },
  buttonTextActive: {
    color: "#fff",
  },
});
