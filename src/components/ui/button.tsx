import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loaderClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      loaderClassName,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    /**  Loader element to display when in loading state is true. */
    const loaderElement = isLoading ? (
      <div aria-hidden className='relative inline-flex items-center justify-center'>
        <div role='status'>
          <div
            className={cn(
              'border-primary-foreground/20 border-t-primary-foreground size-4 animate-spin rounded-full border-2',
              {
                'border-secondary-foreground/20 border-t-secondary-foreground':
                  variant === 'secondary' || variant === 'outline' || variant === 'ghost',
              },
              loaderClassName
            )}
          />
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    ) : null;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {loaderElement}
        {!isLoading && leftIcon && leftIcon}
        {isLoading ? loadingText : props.children}
        {!isLoading && rightIcon && rightIcon}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
