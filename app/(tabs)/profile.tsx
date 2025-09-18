import React, { FC, useState } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";

import {
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { AccountCard } from "@/components/AccountCard";
import ProfileSkeleton from "@/components/skleton/ProfileSkletton";
import { IconSizes, Radii, Typography } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { getUserInfo } from "@/services/db";
import { AccountItem } from "@/types/accountCard";
import { User } from "@/types/user";
import { styles } from "../styles/profile-style";

const screen = Dimensions.get("screen");

// --- Main Profile component ---
const Profile: FC = () => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = React.useState<User>({
    name: "",
    email: "",
  });

  React.useEffect(() => {
    const loadData = async () => {
      const userInfo = await getUserInfo();

      setUserInfo(userInfo[0]);
      setLoading(false);
    };

    loadData();
  }, []);

  // Theme-aware icons
  const Icon = {
    Bell: () => (
      <FontAwesome
        name="bell-o"
        size={IconSizes.md}
        color={colors.background}
      />
    ),
    User: () => (
      <FontAwesome name="user-o" size={IconSizes.md} color={colors.icon} />
    ),
    Verified: () => (
      <Octicons name="verified" size={IconSizes.md} color={colors.icon} />
    ),
    PayPal: () => (
      <SimpleLineIcons name="paypal" size={IconSizes.md} color={colors.icon} />
    ),
    Bank: () => (
      <MaterialCommunityIcons
        name="bank-outline"
        size={IconSizes.lg}
        color={colors.icon}
      />
    ),
    Setting: () => (
      <SimpleLineIcons
        name="settings"
        size={IconSizes.md}
        color={colors.background}
      />
    ),
  };

  const accountItems: AccountItem[] = [
    {
      icon: <Icon.User />,
      title: "Profile Information",
      description: "Manage account details",
    },
    {
      icon: <Icon.Verified />,
      title: "Identity Verification",
      description: "Check your verified status",
    },
    {
      icon: <Icon.PayPal />,
      title: "Payment History",
      description: "Review your past transactions",
    },
    {
      icon: <Icon.Bank />,
      title: "Bank Account",
      description: "Manage your bank account",
    },
  ];

  if (loading) return <ProfileSkeleton />;

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bannerBackground }]}
    >
      {/* Header */}
      <ImageBackground
        source={require("@/assets/images/ProfilePageLayoutBG.png")}
        imageStyle={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screen.width,
          zIndex: 1,
        }}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <View style={styles.setting}>
            <Icon.Setting />
          </View>
          <Text style={[Typography.heading2, { color: colors.background }]}>
            Profile
          </Text>
        </View>
      </ImageBackground>

      {/* Main Content */}
      <View
        style={[
          styles.content,
          {
            backgroundColor: colors.cardBackground,
            borderTopLeftRadius: Radii.xl,
            borderTopRightRadius: Radii.xl,
          },
        ]}
      >
        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <View style={styles.profilePicture}>
            <Image
              source={require("@/assets/images/ProfileImage.png")}
              style={{
                width: 72,
                height: 72,
                borderColor: colors.background,
                borderWidth: 4,
                borderRadius: 36,
              }}
              resizeMode="cover"
            />
          </View>
          <Text
            style={[
              Typography.heading3,
              { color: colors.textPrimary, textAlign: "center" },
            ]}
          >
            {userInfo.name}
          </Text>
          <Text
            style={[
              Typography.body,
              { color: colors.textSecondary, textAlign: "center" },
            ]}
          >
            {userInfo.email}
          </Text>
        </View>

        {/* Banner */}
        <View
          style={[styles.banner, { backgroundColor: colors.bannerBackground }]}
        >
          <View style={styles.bannerText}>
            <Text style={[Typography.heading4, { color: colors.background }]}>
              Earn up to 5% coin
            </Text>
            <Text
              style={[Typography.bodySmall, { color: colors.textDisabled }]}
            >
              Learn financial rewards
            </Text>
          </View>
          <View style={styles.bannerImage}>
            <Image
              source={require("@/assets/images/ProfileBanner.png")}
              style={styles.image}
            />
          </View>
        </View>

        {/* Account Details */}
        <View style={styles.accountContainer}>
          <Text
            style={[
              Typography.body,
              { fontWeight: "600", color: colors.textPrimary },
            ]}
          >
            Account Details
          </Text>
          {accountItems.map((item, index) => (
            <AccountCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onPress={item.onPress}
              colors={colors}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Profile;
