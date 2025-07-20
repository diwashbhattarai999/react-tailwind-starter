import { cn } from '@/lib/utils';

interface PropsWithChildrenAndClassName {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTitle component to display the title of a page.
 * It accepts children as the title content and an optional className for styling.
 * The default styles include a larger font size and bold text.
 */
export const PageTitle = ({ children, className }: PropsWithChildrenAndClassName) => (
  <h1 className={cn('text-lg font-semibold sm:text-xl md:text-2xl', className)}>{children}</h1>
);

/**
 * PageDescription component to display a description or subtitle for a page.
 * It accepts children as the description content and an optional className for styling.
 * The default styles include muted text color and a smaller font size.
 */
export const PageDescription = ({ children, className }: PropsWithChildrenAndClassName) => (
  <p className={cn('text-muted-foreground text-sm font-medium max-sm:hidden', className)}>
    {children}
  </p>
);

/**
 * PageWrapper component to wrap the main content of a page.
 * It accepts children as the content and an optional className for additional styling.
 * The default styles include a flex column layout with a gap between elements.
 */
export const PageWrapper = ({ children, className }: PropsWithChildrenAndClassName) => (
  <div className={cn('flex h-full flex-col gap-8', className)}>{children}</div>
);

/**
 * PageHeader component to display a header section for a page.
 * It accepts children as the header content and an optional className for styling.
 * The default styles include a flex column layout with a gap between elements.
 */
export const PageHeader = ({ children, className }: PropsWithChildrenAndClassName) => (
  <div className={cn('flex flex-col gap-1', className)}>{children}</div>
);
