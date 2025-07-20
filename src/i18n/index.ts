import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

export const LANGUAGES = {
  en: { label: 'English', locale: 'en' },
  ne: { label: 'Nepali', locale: 'ne' },
} as const;

export type Language = keyof typeof LANGUAGES;

/**
 * i18n configuration for internationalization
 * This file initializes i18next with the necessary configurations and language resources.
 * It sets up English and Nepali translations and configures the default language.
 *
 * The `escapeValue` option is set to false to prevent escaping of values in translations.
 * This is useful for React applications where HTML tags might be included in translations.
 */
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      // no reason there is a language called 'dev', just passed it away
      if (language === 'dev') return;
      return import(`./locales/${language}/${namespace}.json`);
    })
  )
  .init({
    debug: true,
    fallbackLng: 'en',
  });

export default i18n;
