import { Radii, Shadow, Spacing } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  layoutBackgroundImage: {
    height: screen.height,
    width: screen.width,
    zIndex: 1,
  },
  header: {
    height: screen.height * 0.45,
    width: screen.width,
    paddingTop: 60,
    overflow: "hidden",
    // zIndex: -1,
  },
  content: {
    zIndex: 10,
    width: screen.width,
    height: screen.height,
    alignItems: "center",
  },
  welcome: {
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: Spacing.lg,
    justifyContent: "space-between",
  },
  notification: {
    alignSelf: "flex-start",
    padding: Spacing.sm,
    borderWidth: 2,
    borderRadius: Radii.md,
  },
  personalInfo: { flex: 1, gap: Spacing.xs },
  cardContainer: {
    zIndex: 100,
    position: "absolute",
    top: -screen.height * 0.26,
    width: screen.width,
    alignItems: "center",
    paddingTop: Spacing.lg,
  },
  card: {
    width: screen.width * 0.9,
    height: 200,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    justifyContent: "space-between",
    ...Shadow.lg,
  },
  cardContent: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  cardImage: { borderRadius: Radii.lg },
  cardImageNoise: { borderRadius: Radii.lg, opacity: 0.1 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactlessIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
  },
  balanceContainer: { marginTop: Spacing.sm },
  chip: {
    borderRadius: Radii.sm,
    alignSelf: "flex-end",
  },
  featuresList: {
    marginTop: Spacing.lg,
    width: screen.width * 0.9,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radii.md,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.xs,
    ...Shadow.lg,
  },
  featureItem: { rowGap: Spacing.sm, alignItems: "center" },
  featureCard: {
    borderRadius: Radii.round,
    alignItems: "center",
    padding: Spacing.sm,
  },
  transactionsContainer: {
    marginTop: Spacing.lg,
    width: screen.width * 0.9,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radii.md,
    gap: Spacing.xs,
    ...Shadow.lg,
  },
  transactionsContainerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsContainerContent: {
    width: "100%",
    height: 130,
  },
  devider: {
    borderBottomWidth: 1,
    marginTop: Spacing.sm,
  },
  transactionItemCard: {
    width: "100%",
    paddingVertical: Spacing.sm,
    flexDirection: "row",
  },
  transactionItemCardContent: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: Spacing.md,
  },
  transactionItemCardIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: Radii.md,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionItemCardPrice: {
    alignSelf: "center",
  },
});
