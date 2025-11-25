import { useLanguageStore } from "@/store";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

/**
 * Custom hook for language management
 * Provides language state and actions with Zustand selector pattern
 *
 * @returns {Object} Language state and actions
 * @property {string} language - Current language ('en' | 'id')
 * @property {Function} toggleLanguage - Toggle between English and Indonesian
 * @property {Function} setLanguage - Set specific language
 *
 * @example
 * const { language, toggleLanguage, setLanguage } = useLanguage();
 */
export function useLanguage() {
  const { i18n } = useTranslation();

  // Using selector pattern to prevent unnecessary re-renders
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  // Sync Zustand state with i18next
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  // Custom toggle that also updates i18next
  const handleToggleLanguage = () => {
    const newLang = language === "en" ? "id" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  // Custom setLanguage that also updates i18next
  const handleSetLanguage = (newLang) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return {
    language,
    toggleLanguage: handleToggleLanguage,
    setLanguage: handleSetLanguage,
    isEnglish: language === "en",
    isIndonesian: language === "id",
  };
}
