import * as React from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  wrapperClassName?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, wrapperClassName, type, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';

    return (
      <div className={cn('relative w-full', wrapperClassName)}>
        <input
          ref={ref}
          type={isPassword && showPassword ? 'text' : type}
          className={cn(
            'border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            { 'ring-destructive focus-visible:ring-destructive': error },
            isPassword ? 'pr-10' : '',
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            className='text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer p-1'
            tabIndex={-1}
            type='button'
            onClick={() => setShowPassword(v => !v)}
          >
            {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
