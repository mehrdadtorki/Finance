import TransactionsChart from "@/components/chart";
import { Entypo, Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import AnalyticsSkeleton from "@/components/skleton/AnalyticsSkletton";
import { IconSizes, Radii, Typography } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { HeaderButtonProps } from "@/types/headerButton";
import { StatusCardProps } from "@/types/StatusCard";
import { TransactionItemProps } from "@/types/TransactionItem";
import { styles } from "../styles/analytics-style";

/** ---------- Reusable Components ---------- **/

const HeaderButton: React.FC<HeaderButtonProps> = ({
  onPress,
  children,
  bordered = false,
  colors,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.headerButton,
          bordered && {
            borderWidth: 1,
            borderRadius: Radii.md,
            borderColor: colors.textDisabled,
          },
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const StatusCard: React.FC<StatusCardProps> = ({
  icon,
  color,
  label,
  amount,
  colors,
}) => {
  return (
    <View
      style={[
        styles.statusCard,
        { borderColor: colors.border, backgroundColor: colors.background },
      ]}
    >
      <View style={[styles.statusCardIcon, { backgroundColor: color }]}>
        {icon}
      </View>
      <View>
        <Text style={[Typography.bodySmall, { color: colors.textTertiary }]}>
          {label}
        </Text>
        <Text
          style={[
            Typography.body,
            styles.statusCardAmount,
            { color: colors.textPrimary },
          ]}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  name,
  amount,
  colors,
}) => {
  return (
    <View
      style={[styles.transactionItem, { backgroundColor: colors.background }]}
    >
      <View
        style={[
          styles.transactionItemIcon,
          {
            borderColor: colors.accent,
            backgroundColor: colors.textSecondary + "7c",
          },
        ]}
      >
        <Ionicons
          name="person"
          color={colors.cardBackground}
          size={IconSizes.lg}
        />
      </View>
      <Text
        style={[
          Typography.body,
          styles.transactionItemName,
          { color: colors.textPrimary },
        ]}
      >
        {name}
      </Text>
      <Text style={[Typography.bodySmall, { color: colors.textTertiary }]}>
        {amount}
      </Text>
    </View>
  );
};

/** ---------- Main Screen ---------- **/

export default function Analytics() {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const transactions: TransactionItemProps[] = [
    { name: "Jane", amount: "$120,000.000", colors },
    { name: "John", amount: "$95,200.000", colors },
    { name: "Emma", amount: "$45,300.000", colors },
    { name: "Liam", amount: "$10,000.000", colors },
    { name: "Olivia", amount: "$87,900.000", colors },
  ];

  if (loading) return <AnalyticsSkeleton />;

  return (
    <View
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <HeaderButton bordered colors={colors}>
          <Entypo
            name="dots-three-horizontal"
            color={colors.textPrimary}
            size={IconSizes.lg}
          />
        </HeaderButton>
        <HeaderButton colors={colors}>
          <Text style={[Typography.heading3, { color: colors.textPrimary }]}>
            All Transactions
          </Text>
        </HeaderButton>
        <HeaderButton bordered colors={colors}>
          <SimpleLineIcons
            name="arrow-left"
            color={colors.textPrimary}
            size={IconSizes.lg}
          />
        </HeaderButton>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <TouchableOpacity
            style={[
              styles.monthButton,
              {
                borderColor: colors.border,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <Text style={[Typography.body, { color: colors.textSecondary }]}>
              Month
            </Text>
          </TouchableOpacity>
          <View style={styles.totalCashflow}>
            <Text
              style={[Typography.bodySmall, { color: colors.textSecondary }]}
            >
              Total Cashflow
            </Text>
            <Text style={[Typography.heading2, { color: colors.textPrimary }]}>
              $498.66
            </Text>
          </View>
        </View>

        <TransactionsChart />

        {/* Status Cards */}
        <View style={styles.statusCardsContainer}>
          <StatusCard
            icon={
              <Feather
                name="arrow-up-right"
                color={colors.background}
                size={IconSizes.md}
              />
            }
            color={colors.accent}
            label="Income"
            amount="$4,600.000"
            colors={colors}
          />
          <StatusCard
            icon={
              <Feather
                name="arrow-down-left"
                color={colors.background}
                size={IconSizes.md}
              />
            }
            color={colors.warning}
            label="Expense"
            amount="$1,498.66"
            colors={colors}
          />
        </View>

        {/* Transactions Scroll */}
        <View>
          <View style={styles.transactionsHeader}>
            <Text
              style={[Typography.heading4, { color: colors.textSecondary }]}
            >
              Transactions
            </Text>
            <TouchableOpacity>
              <View style={styles.transactionsHeaderButton}>
                <Text style={[Typography.body, { color: colors.textPrimary }]}>
                  All Transactions
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {transactions.map((t, idx) => (
              <TransactionItem
                key={idx}
                name={t.name}
                amount={t.amount}
                colors={colors}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
