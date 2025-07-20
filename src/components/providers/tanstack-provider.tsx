import type React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * TanstackProvider component that wraps the application with Tanstack Query Client.
 * It provides the Query Client to the application for data fetching and caching.
 *
 * @param {Object} props - The props for the TanstackProvider component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 */
export const TanstackProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
