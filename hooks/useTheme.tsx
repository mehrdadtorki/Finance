import { Colors } from "@/constants/theme";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const typedTheme = theme as keyof typeof Colors;
  const colors = Colors[typedTheme];

  return {
    theme,
    toggleTheme,
    colors,
  };
}
