import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import App from '@/app';
import { NotFound } from '@/app/not-found';
import { AuthRedirect } from '@/components/guards/auth-redirect-route';
import { withSuspense } from '@/components/shared/with-suspense';
// import { ProtectedRoute } from '@/components/guards/protected-route';
import { ROUTES } from '@/configs/routes';
import { AuthLayout } from '@/features/auth';
import { DashboardLayout } from '@/features/dashboard';

import { ErrorFallback } from '../error-fallback';

// Auth
const Login = lazy(() => import('@/features/auth/pages/login-page'));
const Register = lazy(() => import('@/features/auth/pages/register-page'));
const ForgotPassword = lazy(() => import('@/features/auth/pages/forgot-password-page'));

// Dashboard
const Dashboard = lazy(() => import('@/features/dashboard/home'));
const LandingPage = lazy(() => import('@/features/landing-page/index'));

export const router = createBrowserRouter([
  {
    // Layout wraps all routes
    Component: App,
    ErrorBoundary: ErrorFallback,

    children: [
      // Site routes
      { path: ROUTES.HOME, element: withSuspense(LandingPage) },

      // Auth routes (redirect authenticated users away)
      {
        Component: AuthRedirect,
        children: [
          {
            Component: AuthLayout,
            children: [
              { path: ROUTES.AUTH.BASE, element: <Navigate replace to={ROUTES.AUTH.LOGIN} /> },
              { path: ROUTES.AUTH.LOGIN, element: withSuspense(Login) },
              { path: ROUTES.AUTH.REGISTER, element: withSuspense(Register) },
              { path: ROUTES.AUTH.FORGOT_PASSWORD, element: withSuspense(ForgotPassword) },
            ],
          },
        ],
      },

      // Protected dashboard routes
      {
        // Component: ProtectedRoute,
        children: [
          // Dashboard Routes
          {
            Component: DashboardLayout,
            children: [
              { path: ROUTES.DASHBOARD.BASE, element: withSuspense(Dashboard) },
              {
                path: `${ROUTES.DASHBOARD.BASE}/*`,
                element: <NotFound showBackgroundGlow={false} />,
              },
            ],
          },

          // Other protected routes can be added here...
        ],
      },

      // Fallback for unmatched routes
      { path: '*', element: <NotFound className='min-h-screen' /> },
    ],
  },
]);
