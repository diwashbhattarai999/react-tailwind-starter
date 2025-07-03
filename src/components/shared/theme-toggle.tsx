import { cva, type VariantProps } from 'class-variance-authority';
import { Moon, Sun } from 'lucide-react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

import { useTheme } from '../providers/theme-provider';

const themeToggleVariants = cva('w-full justify-start !gap-4 px-2 font-normal', {
  variants: {
    toggleVariant: {
      default: '',
      icon: '',
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
          <Sun className='size-[1.2rem]' />
          Light Mode
        </>
      ) : (
        <>
          <Moon className='size-[1.2rem]' />
          Dark Mode
        </>
      )}
    </Comp>
  );
}
