import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.ts";
import ku from "./ku.ts";
import ar from "./ar.ts";
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "ar", "he"],
    debug: false,
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      he: ku,
      ar,
    },
    detection: {
      caches: ["localStorage"],
      order: ["navigator", "localStorage"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
    },
  });
export default i18next;
