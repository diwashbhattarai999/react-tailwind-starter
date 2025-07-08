import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/configs/routes';

/**
 * Checks if the user is authenticated.
 * Replace this with your real auth logic.
 */
const useAuth = () => {
  // For demo: pretend we check if a token exists in localStorage
  const token = localStorage.getItem('authToken');
  return !!token;
};

/**
 * ProtectedRoute component restricts access to child routes
 * if the user is not authenticated.
 */
export function ProtectedRoute() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate replace to={ROUTES.AUTH.LOGIN} />;
  }

  // Render child routes if authenticated
  return <Outlet />;
}
