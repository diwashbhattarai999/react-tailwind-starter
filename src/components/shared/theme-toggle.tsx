import { cva, type VariantProps } from 'class-variance-authority';
import { Moon, Sun } from 'lucide-react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

import { useTheme } from '../providers/theme-provider';

const themeToggleVariants = cva('font-normal', {
  variants: {
    toggleVariant: {
      default: 'w-full justify-start px-2 !gap-4',
      icon: 'rounded-full size-10',
    },
  },
  defaultVariants: {
    toggleVariant: 'default',
  },
});

export interface ThemeToggleProps extends ButtonProps, VariantProps<typeof themeToggleVariants> {
  asChild?: boolean;
}

export function ThemeToggle({
  className,
  toggleVariant,
  asChild = false,
  onClick,
  ...props
}: ThemeToggleProps) {
  const Comp = asChild ? Slot : Button;

  const { theme, setTheme } = useTheme();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Comp
      aria-label='Toggle theme'
      className={cn(themeToggleVariants({ toggleVariant, className }))}
      size={props.size || 'sm'}
      variant={props.variant || 'ghost'}
      onClick={handleOnClick}
      {...props}
    >
      {theme === 'dark' ? (
        <>
          <Sun />
          {!toggleVariant && <span>Light Mode</span>}
        </>
      ) : (
        <>
          <Moon />
          {!toggleVariant && <span>Dark Mode</span>}
        </>
      )}
    </Comp>
  );
}
