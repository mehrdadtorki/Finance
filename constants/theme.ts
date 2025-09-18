import { Platform } from "react-native";

const tintColorLight = "#6172F3";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    tint: tintColorLight,
    textPrimary: "#101828",
    textSecondary: "#475467",
    textTertiary: "#667085",
    textDisabled: "#C7D7FE",
    textCard: "#fff",
    background: "#ffffff",
    cardBackground: "#F9FAFB",
    bannerBackground: "#6172F3",
    accent: "#6172F3",
    accentLight: "#EEF4FF",
    warning: "#FDE272",
    success: "#34D399",
    error: "#F87171",
    border: "#EAECF0",
    shadow: "rgba(16, 24, 40, 0.05)",
    icon: "#667085",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    skeleton: {
      background: "#E0E0E0",
      highlight: "#F5F5F5",
    },
  },
  dark: {
    tint: tintColorDark,
    textPrimary: "#ECEDEE",
    textSecondary: "#9BA1A6",
    textTertiary: "#C7D7FE",
    textDisabled: "#475467",
    textCard: "#151718",
    background: "#151718",
    cardBackground: "#1C1E1F",
    bannerBackground: "#6172F3",
    accent: "#6172F3",
    accentLight: "#2F3BEE",
    warning: "#FDE272",
    success: "#34D399",
    error: "#F87171",
    border: "#2C2F33",
    shadow: "rgba(0,0,0,0.25)",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    skeleton: {
      background: "#2A2A2A",
      highlight: "#3A3A3A",
    },
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  android: {
    sans: "normal",
    serif: "serif",
    rounded: "sans-serif",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "sans-serif",
    mono: "monospace",
  },
});

export const Typography = {
  heading1: {
    fontFamily: Fonts.sans,
    fontSize: 28,
    fontWeight: "700" as const,
    lineHeight: 36,
  },
  heading2: {
    fontFamily: Fonts.sans,
    fontSize: 24,
    fontWeight: "600" as const,
    lineHeight: 32,
  },
  heading3: {
    fontFamily: Fonts.sans,
    fontSize: 20,
    fontWeight: "600" as const,
    lineHeight: 28,
  },
  heading4: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    fontWeight: "500" as const,
    lineHeight: 24,
  },
  bodyLarge: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    fontWeight: "400" as const,
    lineHeight: 24,
  },
  body: {
    fontFamily: Fonts.sans,
    fontSize: 14,
    fontWeight: "400" as const,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: Fonts.sans,
    fontSize: 12,
    fontWeight: "400" as const,
    lineHeight: 16,
  },
  caption: {
    fontFamily: Fonts.sans,
    fontSize: 10,
    fontWeight: "400" as const,
    lineHeight: 12,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const Radii = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  round: 50,
};

export const Shadow = {
  sm: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
};

export const IconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
};
