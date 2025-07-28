import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';

/**
 * AuthRedirect: Redirects authenticated users away from auth pages
 * (e.g., login/register) back to dashboard or another protected page.
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
