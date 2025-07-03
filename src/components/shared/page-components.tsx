import { cn } from '@/lib/utils';

export const PageTitle = ({ title, className }: { title: React.ReactNode; className?: string }) => (
  <h1 className={cn('text-lg font-semibold sm:text-xl md:text-2xl', className)}>{title}</h1>
);

export const PageDescription = ({
  description,
  className,
}: {
  description: React.ReactNode;
  className?: string;
}) => (
  <p className={cn('text-muted-foreground text-sm font-medium max-sm:hidden', className)}>
    {description}
  </p>
);

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn('flex h-full flex-col gap-8', className)}>{children}</div>;

export const PageHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn('flex flex-col gap-1', className)}>{children}</div>;
