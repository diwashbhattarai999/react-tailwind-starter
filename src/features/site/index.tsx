import { useTranslation } from 'react-i18next';

import { BackgroundGlow } from '@/components/shared/background-glow';
import LanguageSwitcher from '@/components/shared/language-switcher';
import { Logo } from '@/components/shared/logo';
import { ThemeToggle } from '@/components/shared/theme-toggle';




export function LandingPage() {
  const { t } = useTranslation('translation');

  return (
    <main className='relative flex min-h-screen items-center justify-center px-4'>
      <BackgroundGlow />

      <div className='flex flex-col items-center justify-center gap-y-10 text-center'>
        <Logo />

        <LanguageSwitcher />

        <ThemeToggle className='w-fit' />

        <div className='space-y-4'>
          <h1 className='text-4xl font-bold'>{t('title')}</h1>
          <p className='text-muted-foreground text-lg'>{t('description')}</p>
        </div>
      </div>
    </main>

  );
}
