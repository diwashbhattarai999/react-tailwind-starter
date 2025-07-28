import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';

/**
 * AuthRedirect component that redirects authenticated users to the dashboard.
 * If the user is not authenticated, it renders the child routes (auth pages).
 */
export function AuthRedirect() {
  const { isAuthenticated } = useAuth();

  // If user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate replace to={ROUTES.DASHBOARD.BASE} />;
  }

  // If not authenticated, render child routes (auth pages)
  return <Outlet />;
}
