import type { Theme } from '@/contexts/theme-context';
import type { Language } from '@/i18n';

interface SiteConfig {
  name: string;
  description: string;
  url: string;
  themeStorageKey: string;
  languageStorageKey: string;
  defaultLanguage: Language;
  defaultTheme: Theme;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Foundation React Template',
  description:
    'A production-ready React template setup with Vite, TypeScript, ESLint, Prettier, Tailwind, React Hook Form, Zod, and more.',
  url: '',
  themeStorageKey: 'foundation-react-template-theme',
  languageStorageKey: 'foundation-react-template-language',
  defaultLanguage: 'en',
  defaultTheme: 'light',
};
