import { useNavigate, useRouteError } from 'react-router';

import { Bug, RefreshCw } from 'lucide-react';

import brokenHeart from '@/assets/error.svg';
import { Button } from '@/components/ui/button';

/**
 * Component: DevErrorDetails
 * Shows stack trace and error message in development mode
 */
const DevErrorDetails = ({ error }: { error: Error }) => (
  <div className='mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-900/10 dark:text-red-100'>
    <div className='mb-2 flex items-center gap-2 font-semibold'>
      <Bug className='text-destructive size-4' />
      Development Error Info
    </div>
    <div className='mb-1'>
      <strong>Message:</strong> {error.message}
    </div>
    {error.stack && (
      <pre className='max-h-96 overflow-y-auto rounded bg-red-100 p-2 text-xs break-words whitespace-pre-wrap dark:bg-red-900/50'>
        {error.stack}
      </pre>
    )}
  </div>
);

/**
 * Component: ErrorActions
 * Renders action buttons like Try Again and Return Home
 */
const ErrorActions = ({
  resetErrorBoundary,
  onNavigateHome,
}: {
  resetErrorBoundary?: () => void;
  onNavigateHome: () => void;
}) => (
  <div className='flex flex-wrap gap-4'>
    {resetErrorBoundary && (
      <Button variant='destructive' onClick={resetErrorBoundary}>
        <RefreshCw className='mr-2 size-4' />
        Try Again
      </Button>
    )}
    <Button variant='outline' onClick={onNavigateHome}>
      Return Home
    </Button>
  </div>
);

/**
 * Component: ErrorInfo
 * Reusable UI shared between both environments
 */
const ErrorInfo = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) => (
  <>
    <h1 className='mb-2 text-xl font-bold md:text-2xl'>{title}</h1>
    <h2 className='text-muted-foreground mb-4'>{subtitle}</h2>
    <p className='text-muted-foreground/80 mb-1 text-sm'>
      Don’t worry, our tech doctors are already on it. Meanwhile, sip some hot tea and try again.
    </p>
    {children}
  </>
);

/**
 * Component: ErrorFallback
 * Main error boundary fallback component
 */
export const ErrorFallback = ({ resetErrorBoundary }: { resetErrorBoundary?: () => void }) => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  const isDev = import.meta.env.DEV;

  const handleResetError = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <div className='flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-12'>
        <div className='flex-1'>
          <ErrorInfo
            subtitle='Even digital doctors need a checkup sometimes.'
            title='Uh-oh, looks like our system caught a cold!'
          >
            {isDev ? (
              <DevErrorDetails error={error} />
            ) : (
              <div className='mb-8 space-y-4'>
                <p className='text-muted-foreground/80 text-sm'>
                  If you need urgent help, please{' '}
                  <a className='text-primary hover:underline' href='/contact'>
                    contact our support
                  </a>
                  . Or visit our{' '}
                  <a className='text-primary hover:underline' href='/help'>
                    Help Center
                  </a>{' '}
                  for answers.
                </p>
              </div>
            )}
            <ErrorActions
              resetErrorBoundary={handleResetError}
              onNavigateHome={() => navigate('/')}
            />
          </ErrorInfo>
        </div>

        {!isDev && (
          <div className='w-full max-w-[250px] md:max-w-[400px]'>
            <img alt='Error illustration' className='h-auto w-full' src={brokenHeart} />
          </div>
        )}

        {/* <NetworkStatusIndicator /> */}
      </div>
    </div>
  );
};
