import type { Theme } from '@/contexts/theme-context';
import type { Language } from '@/i18n';

import { ENV } from './env';

// Interface for site configuration
interface SiteConfig {
  name: string;
  description: string;
  url: string;
  themeStorageKey: string;
  languageStorageKey: string;
  defaultLanguage: Language;
  defaultTheme: Theme;
}

/**
 * Site configuration for the application.
 * This file contains metadata and settings related to the site.
 * It includes the site name, description, URL, and keys for theme and language storage.
 */
export const SITE_CONFIG: SiteConfig = {
  name: 'Foundation React Template',
  description:
    'A production-ready React template setup with Vite, TypeScript, ESLint, Prettier, Tailwind, React Hook Form, Zod, and more.',
  url: ENV.VITE_BASE_URL || 'http://localhost:5173',
  themeStorageKey: 'foundation-react-template-theme',
  languageStorageKey: 'foundation-react-template-language',
  defaultLanguage: 'en',
  defaultTheme: 'light',
};
