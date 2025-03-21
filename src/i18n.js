import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


// Retrieve the selected language from Local Storage
const storedLanguage = localStorage.getItem('i18nextLng');
const defaultLanguage = storedLanguage || 'cz';



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    debug: false,
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;