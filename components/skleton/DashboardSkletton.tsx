import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const screen = Dimensions.get("screen");

const DashboardSkeleton = () => {
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
        alignItems: "center",
        // justifyContent: "space-",
        paddingTop: 60,
        gap: 20,
        backgroundColor: colors.background,
      }}
    >
      {/* Header */}
      <View
        style={{
          width: screen.width * 0.9,
          flexDirection: "row",
          gap: 20,
          justifyContent: "space-between",
        }}
      >
        <Skeleton
          width={160}
          height={40}
          radius={8}
          colors={skeletonGradient}
        />
        <Skeleton
          width={60}
          height={60}
          radius={30}
          colors={skeletonGradient}
        />
      </View>

      {/* Card */}
      <Skeleton
        width={screen.width * 0.9}
        height={200}
        radius={20}
        colors={skeletonGradient}
      />

      {/* Features */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: screen.width * 0.9,
          marginTop: 10,
          paddingHorizontal: Spacing.md,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <View key={i} style={{ alignItems: "center", gap: 8 }}>
            <Skeleton
              width={55}
              height={55}
              radius={30}
              colors={skeletonGradient}
            />
            <Skeleton
              width={60}
              height={12}
              radius={4}
              colors={skeletonGradient}
            />
          </View>
        ))}
      </View>

      {/* Transactions */}
      <View
        style={{
          width: screen.width * 0.9,
          marginTop: 20,
          gap: 20,
        }}
      >
        <Skeleton
          width={120}
          height={20}
          radius={4}
          colors={skeletonGradient}
        />

        {[...Array(3)].map((_, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {/* Icon */}
            <Skeleton
              width={60}
              height={60}
              radius={12}
              colors={skeletonGradient}
            />

            {/* Texts */}
            <View style={{ flex: 1, gap: 6 }}>
              <Skeleton
                width={100}
                height={14}
                radius={4}
                colors={skeletonGradient}
              />
              <Skeleton
                width={160}
                height={12}
                radius={4}
                colors={skeletonGradient}
              />
            </View>

            {/* Price */}
            <Skeleton
              width={60}
              height={14}
              radius={4}
              colors={skeletonGradient}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default DashboardSkeleton;
