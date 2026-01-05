import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/index";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-(--color-overlay-hover) transition-all duration-200 text-xs font-medium text-(--color-text-primary) cursor-pointer active:scale-95"
      aria-label={`Switch to ${language === "en" ? "Indonesian" : "English"}`}
    >
      <Globe size={16} className="text-(--color-text-secondary)" />
      <span>{language.substring(0, 2).toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitch;
