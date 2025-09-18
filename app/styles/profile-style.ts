import { Radii, Shadow, Spacing } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  header: {
    width: "100%",
    height: screen.height * 0.2,
    paddingVertical: Spacing.lg,
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
  },
  setting: { padding: Spacing.md },
  content: {
    flex: 1,
    width: screen.width,
    minHeight: screen.height * 0.5,
    alignItems: "center",
    paddingVertical: Spacing.lg,
    rowGap: Spacing.lg,
  },
  profileContainer: { rowGap: Spacing.xs, ...Shadow.lg },
  profilePicture: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -screen.height * 0.06,
  },
  banner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: screen.width * 0.9,
    borderRadius: Radii.lg,
    ...Shadow.lg,
  },
  bannerText: { justifyContent: "center", rowGap: Spacing.xs },
  bannerImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    position: "absolute",
    bottom: 0,
    transform: [{ scaleX: -1 }],
  },
  accountContainer: { width: screen.width * 0.9, rowGap: Spacing.md },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Radii.md,
    padding: Spacing.md,
    columnGap: Spacing.md,
    ...Shadow.sm,
  },
  cardIcon: {
    padding: Spacing.sm,
    borderRadius: Radii.round,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: { flex: 1, rowGap: Spacing.xs },
});
