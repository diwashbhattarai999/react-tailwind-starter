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
 * AuthRedirect: Redirects authenticated users away from auth pages
 * (e.g., login/register) back to dashboard or another protected page.
 */
export function AuthRedirect() {
  const isAuthenticated = useAuth();
  if (isAuthenticated) {
    return <Navigate replace to={ROUTES.DASHBOARD.BASE} />;
  }
  return <Outlet />;
}
