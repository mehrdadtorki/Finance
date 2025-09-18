import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

// DataBase
import { getCardInfo, getFeatures, getTransactions } from "@/services/db";

// Credit Card Assets
import CardCircuitIcon from "@/assets/images/credit-card/Circuit.svg";
import CardContentIcon from "@/assets/images/credit-card/Content.svg";
import CardContactLessIcon from "@/assets/images/credit-card/icon-contactless.svg";
import CardMasterCardIcon from "@/assets/images/credit-card/mastercard.svg";
import DashboardSkeleton from "@/components/skleton/DashboardSkletton";

import { ICON_MAP } from "@/constants/icon-map";
import { Typography } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { CardInfo } from "@/types/card";
import { Features } from "@/types/feature";
import { Transaction } from "@/types/transaction";
import { maskCardNumber } from "@/utils/utils";
import { styles } from "../styles/home-style";

const screen = Dimensions.get("screen");

// --- Main Component ---

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [features, setFeatures] = React.useState<Features[]>([]);
  const [cardInfo, setCardInfo] = React.useState<CardInfo>({
    cardNumber: "",
    balance: "",
  });
  const { colors } = useTheme();

  React.useEffect(() => {
    const loadData = async () => {
      const txs = await getTransactions();
      const feats = await getFeatures();
      const cardInfo = await getCardInfo();

      setTransactions(txs);
      setFeatures(feats);
      setCardInfo(cardInfo[0]);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) return <DashboardSkeleton />;

  return (
    <View
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
    >
      <ImageBackground
        source={require("@/assets/images/LayoutBG.png")}
        imageStyle={styles.layoutBackgroundImage}
      >
        {/* Header with SVG curve */}
        <View style={styles.header}>
          <Svg
            width={screen.width}
            height={screen.height * 0.4}
            style={StyleSheet.absoluteFill}
          >
            <Path
              d={`M0,0 H${screen.width} V${screen.height * 0.35} Q${
                screen.width / 2.5
              },${screen.height * 0.25} 0,${screen.height * 0.35} Z`}
              fill={colors.bannerBackground}
            />
          </Svg>

          <View style={styles.welcome}>
            <View
              style={[
                styles.notification,
                { borderColor: colors.textDisabled },
              ]}
            >
              <FontAwesome name="bell-o" size={20} color={colors.textCard} />
            </View>
            <View style={styles.personalInfo}>
              <Text style={[Typography.body, { color: colors.textDisabled }]}>
                Good morning 👋
              </Text>
              <Text style={[Typography.heading3, { color: colors.textCard }]}>
                Raisa Adriana
              </Text>
            </View>
          </View>
        </View>

        {/* Main content */}
        <View
          style={[styles.content, { backgroundColor: colors.cardBackground }]}
        >
          {/* Card */}
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require("@/assets/images/credit-card/CardBG.png")}
              style={styles.card}
              imageStyle={styles.cardImage}
            >
              <ImageBackground
                source={require("@/assets/images/credit-card/Noise.png")}
                style={StyleSheet.absoluteFill}
                imageStyle={styles.cardImageNoise}
              />

              <View style={styles.cardContent}>
                <View style={styles.topRow}>
                  <CardContentIcon />
                  <View style={styles.contactlessIcon}>
                    <CardContactLessIcon />
                    <CardMasterCardIcon />
                  </View>
                </View>

                <Text style={[Typography.heading2, { color: colors.textCard }]}>
                  {cardInfo
                    ? maskCardNumber(cardInfo.cardNumber)
                    : "•••• •••• •••• ••••"}
                </Text>

                <View style={styles.bottomRow}>
                  <View style={styles.balanceContainer}>
                    <Text style={[Typography.body, { color: colors.textCard }]}>
                      Balance
                    </Text>
                    <Text
                      style={[Typography.heading3, { color: colors.textCard }]}
                    >
                      ${cardInfo.balance}
                    </Text>
                  </View>
                  <View style={styles.chip}>
                    <CardCircuitIcon />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* Features */}
          <View
            style={[
              styles.featuresList,
              { backgroundColor: colors.background },
            ]}
          >
            {features.map(({ title, icon }) => {
              const IconComponent = ICON_MAP[icon];
              return (
                <View key={title} style={styles.featureItem}>
                  <View
                    style={[
                      styles.featureCard,
                      { backgroundColor: colors.accentLight },
                    ]}
                  >
                    {IconComponent && <IconComponent width={55} height={55} />}
                  </View>
                  <Text
                    style={[
                      Typography.bodySmall,
                      { color: colors.textPrimary },
                    ]}
                  >
                    {title}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* Transactions */}
          <View
            style={[
              styles.transactionsContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <View style={styles.transactionsContainerHeader}>
              <Text
                style={[Typography.heading4, { color: colors.textPrimary }]}
              >
                Transactions
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[Typography.body, { color: colors.textSecondary }]}
                >
                  All Transactions
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[styles.devider, { borderBottomColor: colors.border }]}
            />

            <View style={styles.transactionsContainerContent}>
              {transactions.map((tx, index) => {
                const IconComponent = ICON_MAP[tx.icon];
                return (
                  <React.Fragment key={index}>
                    <View style={styles.transactionItemCard}>
                      <View
                        style={[
                          styles.transactionItemCardIcon,
                          { borderColor: colors.border },
                        ]}
                      >
                        {IconComponent && (
                          <IconComponent width={34} height={34} />
                        )}
                      </View>
                      <View style={styles.transactionItemCardContent}>
                        <Text
                          style={[
                            Typography.body,
                            { color: colors.textPrimary },
                          ]}
                        >
                          {tx.title}
                        </Text>
                        <Text
                          style={[
                            Typography.bodySmall,
                            { color: colors.textSecondary },
                          ]}
                        >
                          {tx.description}
                        </Text>
                      </View>
                      <View style={styles.transactionItemCardPrice}>
                        <Text
                          style={[
                            Typography.body,
                            { color: colors.textPrimary },
                          ]}
                        >
                          {tx.amount}
                        </Text>
                      </View>
                    </View>
                    {index < transactions.length - 1 && (
                      <View
                        style={[
                          styles.devider,
                          { borderBottomColor: colors.border },
                        ]}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
