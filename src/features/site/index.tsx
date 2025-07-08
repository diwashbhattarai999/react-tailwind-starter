import Logo from '@/assets/logo.png';
import { BackgroundGlow } from '@/components/shared/background-glow';

export function LandingPage() {
  return (
    <main className='relative flex min-h-screen items-center justify-center px-4'>
      <BackgroundGlow />

      <div className='space-y-10 text-center'>
        <div className='mx-auto size-16'>
          <img alt='logo' className='size-full rounded-xl' src={Logo} />
        </div>

        <div className='space-y-4'>
          <h1 className='text-4xl font-bold'>React TypeScript Template</h1>
          <p className='text-muted-foreground text-lg'>
            A lightweight, production-ready starter template powered by Vite, Tailwind CSS, ESLint,
            Prettier, and more.
          </p>
        </div>
      </div>
    </main>
  );
}
