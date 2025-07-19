import { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_CONFIG } from '@/configs/site';

// Define the Language type
export type Language = 'en' | 'ne';

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
};

// Initial state for the language provider
const initialState: LanguageProviderState = {
  language: 'en',
  setLanguage: () => null,
};

// Create a context for the language provider
const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

/**
 * Get the initial language from localStorage or return the default language.
 * This function checks the localStorage for a stored language value.
 * If found, it returns that value; otherwise, it returns the provided default language.
 */
const getInitialLanguage = (storageKey: string, defaultLanguage: Language): Language => {
  const storedLanguage = localStorage.getItem(storageKey) as Language;
  return storedLanguage || defaultLanguage;
};

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
  const [language, setLanguage] = useState<Language>(() =>
    getInitialLanguage(storageKey, defaultLanguage)
  );

  // Initialize language from localStorage or defaultLanguage
  useEffect(() => {
    const storedLanguage = localStorage.getItem(storageKey) as Language;
    if (storedLanguage) {
      setLanguage(storedLanguage);
      void i18n.changeLanguage(storedLanguage);
    } else {
      void i18n.changeLanguage(defaultLanguage);
    }
  }, [defaultLanguage, i18n, storageKey]);

  // Function to handle language change
  const handleLanguageChange = (newLanguage: Language) => {
    void i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem(storageKey, newLanguage);
  };

  // Value to be provided to the context
  const value = {
    language,
    setLanguage: handleLanguageChange,
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
  const context = useContext(LanguageProviderContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
