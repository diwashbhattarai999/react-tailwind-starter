import { createContext, useContext, useEffect, useState } from 'react';

import { SITE_CONFIG } from '@/configs/site';

// Define the Theme type
export type Theme = 'dark' | 'light' | 'system';

// Props for the ThemeProvider component
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

// State type for the theme provider
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Initial state for the theme provider
const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

// Create a context for the theme provider
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * Get the initial theme from localStorage or return the default theme.
 * This function checks the localStorage for a stored theme value.
 * If found, it returns that value; otherwise, it returns the provided default theme.
 */
export function ThemeProvider({
  children,
  defaultTheme = SITE_CONFIG.defaultTheme || 'system',
  storageKey = SITE_CONFIG.themeStorageKey || 'react-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Initialize theme from localStorage or defaultTheme
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Create a value object to be provided to the context
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Custom hook to use the ThemeProvider context.
 * This hook provides access to the current theme and a function to change it.
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
