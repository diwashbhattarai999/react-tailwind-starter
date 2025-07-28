import { useCallback } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Moon, Sun } from 'lucide-react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme-context';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

// Variants for the ThemeToggle component
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

// Interface for the ThemeToggle component props
export interface ThemeToggleProps extends ButtonProps, VariantProps<typeof themeToggleVariants> {
  asChild?: boolean;
}

/**
 * ThemeToggle component to switch between light and dark modes.
 * It uses the `useTheme` context to manage the theme state.
 * The component can be used as a button or any other element by passing `asChild`.
 */
export function ThemeToggle({
  className,
  toggleVariant,
  asChild = false,
  ...props
}: ThemeToggleProps) {
  // Use Slot if asChild is true, otherwise use Button
  const Comp = asChild ? Slot : Button;

  // Get the current theme and the function to set the theme from the context
  const { theme, setTheme } = useTheme();

  // Handler to toggle the theme
  const handleThemeToggle = useCallback(
    (e?: React.MouseEvent) => {
      // Determine the new theme based on the current theme
      const newMode = theme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      // If the browser does not support view transitions, set the theme directly
      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      // If the event exists, set CSS variables for the transition effect
      // This allows for a smooth transition effect based on the mouse position
      // This is useful for creating a ripple effect when the theme is toggled
      if (e) {
        root.style.setProperty('--x', `${e.clientX}px`);
        root.style.setProperty('--y', `${e.clientY}px`);
      }

      // Use the view transition API to smoothly change the theme
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
