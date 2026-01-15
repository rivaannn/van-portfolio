// useLanguage Hook
// Provides access to language context for toggling English/Indonesian
import { useContext } from "react";
import { LanguageContext, type LanguageContextType } from "@/context/contexts";

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
