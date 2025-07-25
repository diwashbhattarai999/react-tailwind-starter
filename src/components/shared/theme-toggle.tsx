import { useCallback } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Moon, Sun } from 'lucide-react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

import { useTheme } from '../../contexts/theme-context';

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
  ...props
}: ThemeToggleProps) {
  const Comp = asChild ? Slot : Button;

  const { theme, setTheme } = useTheme();

  const handleThemeToggle = useCallback(
    (e?: React.MouseEvent) => {
      const newMode = theme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      // Set coordinates from the click event
      if (e) {
        root.style.setProperty('--x', `${e.clientX}px`);
        root.style.setProperty('--y', `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newMode);
      });
    },
    [theme, setTheme]
  );

  return (
    <Comp
      aria-label='Toggle theme'
      className={cn(themeToggleVariants({ toggleVariant, className }))}
      size={props.size || 'sm'}
      variant={props.variant || 'ghost'}
      onClick={handleThemeToggle}
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
