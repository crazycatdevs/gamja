import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

//import en from "../locales/en.json";
//import fr from "../locales/fr.json";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    backend: {
       loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    ns: ['translation'],
    defaultNS: 'translation',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18next;
