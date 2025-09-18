import { styles } from "@/app/styles/profile-style";
import { IconSizes, Typography } from "@/constants/theme";
import { AccountItem } from "@/types/accountCard";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface AccountCardProps extends AccountItem {
  colors: any; // theme colors
}

export const AccountCard: FC<AccountCardProps> = ({
  icon,
  title,
  description,
  onPress,
  colors,
}) => (
  <TouchableOpacity
    style={[
      styles.cardContainer,
      { backgroundColor: colors.background, borderColor: colors.border },
    ]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View
      style={[
        styles.cardIcon,
        { backgroundColor: colors.cardBackground, borderColor: colors.border },
      ]}
    >
      {icon}
    </View>
    <View style={styles.cardContent}>
      <Text
        style={[
          Typography.bodySmall,
          { fontWeight: "600", color: colors.textPrimary },
        ]}
      >
        {title}
      </Text>
      <Text style={[Typography.bodySmall, { color: colors.textTertiary }]}>
        {description}
      </Text>
    </View>
    <SimpleLineIcons
      name="arrow-right"
      size={IconSizes.sm}
      color={colors.icon}
    />
  </TouchableOpacity>
);
