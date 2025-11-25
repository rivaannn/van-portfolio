import { useThemeStore } from '@/store';

/**
 * Custom hook for theme management
 * Provides theme state and actions with Zustand selector pattern
 * 
 * @returns {Object} Theme state and actions
 * @property {string} theme - Current theme ('light' | 'dark')
 * @property {Function} toggleTheme - Toggle between light and dark theme
 * @property {Function} setTheme - Set specific theme
 * 
 * @example
 * const { theme, toggleTheme, setTheme } = useTheme();
 */
export function useTheme() {
  // Using selector pattern to prevent unnecessary re-renders
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
}
