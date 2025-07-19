import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from '@/locales/en.json';
import ne from '@/locales/ne.json';

/**
 * i18n configuration for internationalization
 * This file initializes i18next with the necessary configurations and language resources.
 * It sets up English and Nepali translations and configures the default language.
 *
 * The `escapeValue` option is set to false to prevent escaping of values in translations.
 * This is useful for React applications where HTML tags might be included in translations.
 */
void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ne: { translation: ne },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
