import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslation from './locales/ar.json';
import enTranslation from './locales/en.json';
import itTranslation from './locales/it.json';

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

const setBodyDirection = (lng) => {
  document.body.className = lng;
  if (lng === 'ar') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }
};

i18n.on('languageChanged', (lng) => {
  setBodyDirection(lng);
});

setBodyDirection(i18n.language);

export default i18n;
