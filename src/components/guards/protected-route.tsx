import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/configs/routes';
import { useAuth } from '@/contexts/auth-context';

/**
 * ProtectedRoute component restricts access to child routes
 * if the user is not authenticated.
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
