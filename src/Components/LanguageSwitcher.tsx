import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";

interface LanguageOption {
  value: string;
  name: string;
  dir: string;
}

const languages: LanguageOption[] = [
  { value: "en", name: "En", dir: "ltr" },
  { value: "ar", name: "Ar", dir: "rtl" },
  { value: "he", name: "Ku", dir: "rtl" },
];

const LanguageSwitcher: React.FC<{
  isMobile?: boolean;
  onSelect?: () => void;
}> = ({ isMobile = false, onSelect }) => {
  const { i18n } = useTranslation();
  const { isDarkMode } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = ["ar", "he"].includes(lng) ? "rtl" : "ltr";
    if (onSelect) onSelect();
  };

  const getActiveLanguageClass = (lang: string) => {
    const isActive = i18n.language === lang;
    return isActive
      ? isDarkMode
        ? "text-primary-dark"
        : "text-orange-700"
      : isDarkMode
      ? "hover:border-red-400"
      : "hover:border-secondary";
  };

  return (
    <div
      className={`flex ${
        isMobile ? "justify-center items-center" : "items-center"
      }`}
    >
      {languages.map((lang) => (
        <button
          key={lang.value}
          onClick={() => changeLanguage(lang.value)}
          className={`mx-2 font-medium transition-colors cursor-pointer  ${
            i18n.language === "en" ? "py-1 text-base" : " text-base"
          } ${getActiveLanguageClass(lang.value)}`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
