import { Radii, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { Skeleton } from "moti/skeleton";
import { Dimensions, ScrollView, View } from "react-native";

const screen = Dimensions.get("screen");

const AnalyticsSkeleton = () => {
  const { colors } = useTheme();

  const skeletonGradient = [
    colors.skeleton.background,
    colors.skeleton.highlight,
    colors.skeleton.background,
  ];

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: Spacing.lg,
        rowGap: Spacing.xl,
        backgroundColor: colors.background,
      }}
    >
      {/* Top row */}
      <View
        style={{
          width: screen.width * 0.9,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: Spacing.xxl,
        }}
      >
        <Skeleton
          width={screen.width * 0.2}
          height={40}
          radius={Radii.md}
          colors={skeletonGradient}
        />
        <Skeleton
          width={screen.width * 0.3}
          height={40}
          radius={Radii.md}
          colors={skeletonGradient}
        />
        <Skeleton
          width={screen.width * 0.2}
          height={40}
          radius={Radii.md}
          colors={skeletonGradient}
        />
      </View>

      {/* Second row */}
      <View
        style={{
          width: screen.width * 0.9,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ rowGap: 8 }}>
          <Skeleton
            width={screen.width * 0.2}
            height={20}
            radius={Radii.md}
            colors={skeletonGradient}
          />
          <Skeleton
            width={screen.width * 0.3}
            height={20}
            radius={Radii.md}
            colors={skeletonGradient}
          />
        </View>
        <Skeleton
          width={screen.width * 0.3}
          height={40}
          radius={Radii.md}
          colors={skeletonGradient}
        />
      </View>

      {/* Chart area */}
      <Skeleton
        width={screen.width * 0.9}
        height={300}
        radius={Radii.md}
        colors={skeletonGradient}
      />

      {/* Buttons row */}
      <View
        style={{
          width: screen.width * 0.9,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Skeleton
          width={screen.width * 0.4}
          height={50}
          radius={Radii.md}
          colors={skeletonGradient}
        />
        <Skeleton
          width={screen.width * 0.4}
          height={50}
          radius={Radii.md}
          colors={skeletonGradient}
        />
      </View>

      {/* Scrollable cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(4)].map((_, i) => (
          <View key={i} style={{ marginHorizontal: Spacing.sm }}>
            <Skeleton
              width={102}
              height={120}
              radius={Radii.md}
              colors={skeletonGradient}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AnalyticsSkeleton;
