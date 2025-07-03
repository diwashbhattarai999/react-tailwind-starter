import { cn } from '@/lib/utils';

export const BackgroundGlow = ({ className }: { className?: string }) => (
  <div className={cn('pointer-events-none absolute inset-0 z-[-1]', className)}>
    <div className='relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_at_center,##6669f320,transparent)] [&>div]:opacity-60 [&>div]:mix-blend-multiply'>
      <div></div>
    </div>
  </div>
);
