import type React from 'react';
import { useLocation, useNavigate } from 'react-router';

import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';
import { handleServerError } from '@/utils/handle-server-error';
import {
  QueryCache,
  QueryClient,
  type QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';

/**
 * TanstackProvider component that wraps the application with Tanstack Query Client.
 * It provides the Query Client to the application for data fetching and caching.
 *
 * This provider is responsible for managing the query client configuration,
 * including retry logic, error handling, and query caching.
 *
 * @param {Object} props - The props for the TanstackProvider component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 */
export const TanstackProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  /**
   * Configurations for the Tanstack Query Client.
   * This can be extended with options like cache time, retry logic, etc.
   */
  const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          // Log the failure count and error in development mode
          // eslint-disable-next-line no-console
          if (import.meta.env.DEV) console.log({ failureCount, error });

          // Retry logic based on failure count and environment
          if (failureCount >= 0 && import.meta.env.DEV) return false; // In development, do not retry
          if (failureCount > 3 && import.meta.env.PROD) return false; // In production, do not retry after 3 failures

          // Do not retry on 401 or 403 errors
          return !(error instanceof AxiosError && [401, 403].includes(error.response?.status ?? 0));
        },
        refetchOnWindowFocus: import.meta.env.PROD, // Refetch on window focus in production
        staleTime: 10 * 1000, // 10 seconds stale time
      },
      mutations: {
        onError: error => handleServerError(error),
      },
    },
    queryCache: new QueryCache({
      onError: error => {
        if (error instanceof AxiosError) {
          const status = error.response?.status ?? 0;

          // If the error is a 401, log out the user and redirect to login
          if (status === 401) {
            toast.error('Session expired!');
            logout();

            const redirect = location.pathname + location.search + location.hash;
            void navigate(ROUTES.AUTH.LOGIN, { state: { redirect } });
          }

          // If the error is a 500, show an error message and redirect to the internal server error page
          if (status === 500) {
            toast.error('Internal Server Error!');
            void navigate(ROUTES.ERROR.INTERNAL_SERVER_ERROR);
          }

          // If the error is a 403, you can handle it here if needed
          if (status === 403) {
            // Optional: navigate(ROUTES.ERROR.FORBIDDEN);
          }
        }
      },
    }),
  };

  // Create a new QueryClient instance with the defined configuration
  const queryClient = new QueryClient(queryClientConfig);

  // Return the QueryClientProvider with the created queryClient and children components
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
