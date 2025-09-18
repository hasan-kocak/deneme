import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationTR from './locales/tr/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  // Tarayıcı dilini algılama eklentisini ekle
  .use(LanguageDetector)
  // i18next'i react-i18next'e geçir
  .use(initReactI18next)
  // i18next'i başlat
  .init({
    // Çeviri dosyalarımız
    resources: {
      en: {
        translation: translationEN
      },
      tr: {
        translation: translationTR
      }
    },
    // Eğer algılanan dil için çeviri yoksa bu dili kullan
    fallbackLng: 'tr',
    interpolation: {
      // React zaten XSS'e karşı koruduğu için escape etmeye gerek yok
      escapeValue: false
    }
  });

export default i18n;