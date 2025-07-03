import { CircleCheck, CircleX } from 'lucide-react';

import { cn } from '@/lib/utils';

interface FormErrorProps {
  error?: string | null;
  className?: string;
}

export const FormErrorMessage = ({ error, className }: FormErrorProps) => {
  if (!error) return null;

  const message = error || 'An unexpected error occurred. Please try again later.';

  return (
    <div
      className={cn(
        'text-destructive bg-destructive/5 border-destructive/5 flex items-center gap-2 rounded-md border p-4 text-sm font-medium',
        className
      )}
    >
      <CircleX size={16} />
      <span>{message}</span>
    </div>
  );
};

interface FormSuccessProps {
  children: React.ReactNode;
}

export const FormSuccessMessage = ({ children }: FormSuccessProps) => (
  <div className='text-success-foreground bg-success flex items-center gap-2 rounded-md p-4 text-sm font-medium'>
    <CircleCheck size={16} />
    <span>{children}</span>
  </div>
);
