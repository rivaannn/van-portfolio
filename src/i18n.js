import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationID from "./locales/id/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "id", // Default language is Indonesian
    lng: "id", // Force start with Indonesian
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
