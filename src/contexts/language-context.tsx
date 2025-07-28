import { createContext, useContext, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_CONFIG } from '@/configs/site';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { type Language, LANGUAGES } from '@/i18n';

// Props for the LanguageProvider component
type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

// State type for the language provider
type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  getAvailableLanguages: () => Array<{ locale: Language; name: string }>;
  getDisplayName: (locale: string, displayLocale?: string) => string;
};

// Initial state for the language provider
const initialState: LanguageProviderState = {
  language: SITE_CONFIG.defaultLanguage || 'en',
  setLanguage: () => null,
  getAvailableLanguages: () => [],
  getDisplayName: () => '',
};

// Create a context for the language provider
const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

/**
 * LanguageProvider component to provide language context to the application.
 *
 * This component initializes the i18n library with the provided languages and sets up the context for managing the current language.
 * It allows components to access and change the current language through the context.
 */
export function LanguageProvider({
  children,
  defaultLanguage = SITE_CONFIG.defaultLanguage || 'en',
  storageKey = SITE_CONFIG.languageStorageKey || 'foundation-react-template-language',
  ...props
}: LanguageProviderProps) {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useLocalStorage<Language>(storageKey, defaultLanguage);

  // Initialize language from localStorage or defaultLanguage
  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [i18n, language]);

  // Function to get the display name of a locale
  const getLocaleDisplayName = (locale: string, displayLocale?: string) => {
    const displayName = new Intl.DisplayNames([displayLocale || locale], {
      type: 'language',
    }).of(locale)!;
    return displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1);
  };

  // Memoize the available languages to avoid unnecessary recalculations
  const getAvailableLanguages = useMemo(
    () =>
      LANGUAGES.map(locale => ({
        locale,
        name: getLocaleDisplayName(locale),
      })),
    []
  );

  // Function to handle language change
  const handleLanguageChange = (newLanguage: Language) => {
    void i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  // Value to be provided to the context
  const value = {
    language,
    setLanguage: handleLanguageChange,
    getAvailableLanguages: () => getAvailableLanguages,
    getDisplayName: (locale: string, displayLocale?: string) =>
      getLocaleDisplayName(locale, displayLocale),
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

/**
 * Custom hook to use the LanguageProvider context.
 * This hook provides access to the current language and a function to change it.
 */
export const useLanguage = () => {
  // Get the context value
  const context = useContext(LanguageProviderContext);

  // Throw an error if the context is undefined, indicating that the hook must be used within a LanguageProvider
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');

  // Return the context value
  return context;
};
