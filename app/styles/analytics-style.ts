import { IconSizes, Radii, Shadow, Spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: 60,
    rowGap: Spacing.lg,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },
  headerButton: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.sm,
  },
  contentContainer: {
    flex: 1,
    rowGap: Spacing.lg,
  },
  topRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  monthButton: {
    borderWidth: 1,
    borderRadius: Radii.md,
    paddingHorizontal: Spacing.md,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  totalCashflow: {
    rowGap: Spacing.xs,
  },
  statusCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: Spacing.md,
  },
  statusCard: {
    borderWidth: 1,
    borderRadius: Radii.lg,
    gap: Spacing.md,
    padding: Spacing.md,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  statusCardIcon: {
    width: IconSizes.xl,
    height: IconSizes.xl,
    borderRadius: Radii.round,
    alignItems: "center",
    justifyContent: "center",
  },
  statusCardAmount: {
    fontWeight: "500",
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsHeaderButton: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  transactionItem: {
    width: 102,
    borderRadius: Radii.md,
    margin: Spacing.sm,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    alignItems: "center",
    gap: Spacing.md,
    flexShrink: 0,
    ...Shadow.sm,
  },
  transactionItemIcon: {
    width: 50,
    height: 50,
    borderRadius: Radii.round,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionItemName: {
    fontWeight: "500",
  },
});
