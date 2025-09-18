import { Radii, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const screen = Dimensions.get("screen");

const ProfileSkeleton = () => {
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
        justifyContent: "center",
        alignItems: "center",
        padding: Spacing.lg,
        rowGap: Spacing.lg,
        backgroundColor: colors.background,
      }}
    >
      {/* Avatar */}
      <Skeleton width={72} height={72} radius={36} colors={skeletonGradient} />

      {/* Name */}
      <Skeleton width={120} height={20} radius={10} colors={skeletonGradient} />

      {/* Subtitle */}
      <Skeleton width={180} height={16} radius={8} colors={skeletonGradient} />

      {/* Banner */}
      <Skeleton
        width={screen.width * 0.9}
        height={100}
        radius={Radii.lg}
        colors={skeletonGradient}
      />

      {/* Section header */}
      <Skeleton
        width={screen.width * 0.9}
        height={20}
        radius={10}
        colors={skeletonGradient}
      />

      {/* List items */}
      {[...Array(4)].map((_, i) => (
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
              radius={6}
              colors={skeletonGradient}
            />
            <Skeleton
              width={160}
              height={12}
              radius={6}
              colors={skeletonGradient}
            />
          </View>

          {/* Price */}
          <Skeleton
            width={60}
            height={14}
            radius={6}
            colors={skeletonGradient}
          />
        </View>
      ))}
    </View>
  );
};

export default ProfileSkeleton;
