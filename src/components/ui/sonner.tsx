import { Toaster as Sonner, type ToasterProps } from 'sonner';

import { useTheme } from '../../contexts/theme-context';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      className='toaster group'
      theme={theme as ToasterProps['theme']}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
