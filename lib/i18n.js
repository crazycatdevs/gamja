import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18next;
