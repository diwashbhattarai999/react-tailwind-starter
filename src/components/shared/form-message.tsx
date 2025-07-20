import { CircleCheck, CircleX } from 'lucide-react';

import { cn } from '@/lib/utils';

interface FormErrorProps {
  error?: string | null;
  className?: string;
}

/**
 * FormErrorMessage component to display error messages in forms, specifically for api error responses.
 *
 * This component renders an error message with a specific style, including an icon and a message.
 * It is designed to be used in forms to provide feedback to users when an error occurs.
 */
const FormErrorMessage = ({ error, className }: FormErrorProps) => {
  if (!error) return null;

  const message = error || 'An unexpected error occurred. Please try again later.';

  return (
    <div
      className={cn(
        'text-destructive bg-destructive/5 border-destructive/5 flex items-center gap-2 rounded-md border p-4 text-xs font-medium',
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

/**
 * FormSuccessMessage component to display success messages in forms, specifically for api success responses.
 *
 * This component renders a success message with a specific style, including an icon and a message.
 * It is designed to be used in forms to provide feedback to users when an action is successful.
 */
const FormSuccessMessage = ({ children }: FormSuccessProps) => (
  <div className='text-success-foreground bg-success flex items-center gap-2 rounded-md p-4 text-sm font-medium'>
    <CircleCheck size={16} />
    <span>{children}</span>
  </div>
);

export { FormErrorMessage, FormSuccessMessage };
