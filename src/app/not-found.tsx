import { Link } from 'react-router';

import { ArrowLeft } from 'lucide-react';

import NotFoundImg from '@/assets/not-found/page-not-found.svg';
import { BackgroundGlow } from '@/components/shared/background-glow';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const NotFound = ({
  showBackgroundGlow,
  className,
}: {
  className?: string;
  showBackgroundGlow?: boolean;
}) => (
  <div className={cn('bg-background flex size-full flex-col', className)}>
    <div className='flex flex-1 flex-col items-center justify-center px-6 py-12'>
      {showBackgroundGlow && <BackgroundGlow className='z-0' />}

      <div className='flex w-full flex-col items-center justify-center text-center'>
        {/* SVG Illustration */}
        <div className='flex size-[30rem] justify-center'>
          <img alt='404' className='size-full object-contain' src={NotFoundImg} />
        </div>

        <h1 className='text-foreground mb-3 text-4xl font-medium tracking-tight'>Page not found</h1>
        <p className='text-muted-foreground mb-6 max-w-xl text-sm font-medium'>
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        <Link
          className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'group w-48 gap-2')}
          relative='path'
          to='..'
        >
          <ArrowLeft
            className='transition-transform duration-500 group-hover:-translate-x-2'
            size={16}
          />
          Go Back
        </Link>
      </div>
    </div>
  </div>
);
