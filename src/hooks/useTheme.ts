// useTheme Hook
// Provides access to theme context for toggling dark/light mode
import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "@/context/contexts";

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
