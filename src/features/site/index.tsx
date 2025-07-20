import { useTranslation } from 'react-i18next';

import Logo from '@/assets/logo.png';
import { BackgroundGlow } from '@/components/shared/background-glow';
import LanguageSwitcher from '@/components/shared/language-switcher';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export function LandingPage() {
  const { t } = useTranslation('translation');

  return (
    <main className='relative flex min-h-screen items-center justify-center px-4'>
      <BackgroundGlow />

      <div className='flex flex-col items-center justify-center gap-y-10 text-center'>
        <div className='mx-auto size-16'>
          <img alt='logo' className='size-full rounded-xl' src={Logo} />
        </div>

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
