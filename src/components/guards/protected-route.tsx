import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';

/**
 * ProtectedRoute component that checks if the user is authenticated.
 * If not authenticated, it redirects to the login page.
 * If authenticated, it renders the child routes.
 */
export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    return <Navigate replace to={ROUTES.AUTH.LOGIN} />;
  }

  // Render child routes if authenticated
  return <Outlet />;
}
