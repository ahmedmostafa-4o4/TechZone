import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import arTranslation from './locales/ar.json';
import enTranslation from './locales/en.json';
import itTranslation from './locales/it.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      it: { translation: itTranslation }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    }
  });

// Function to set body direction
const setBodyDirection = (lng) => {
  document.body.className = lng; // Set class based on the language
  if (lng === 'ar') {
    document.body.style.direction = 'rtl'; // Set direction to RTL for Arabic
  } else {
    document.body.style.direction = 'ltr'; // Set direction to LTR for other languages
  }
};

// Event listener for language changes
i18n.on('languageChanged', (lng) => {
  setBodyDirection(lng);
});

// Set initial direction on load
setBodyDirection(i18n.language);

export default i18n;
