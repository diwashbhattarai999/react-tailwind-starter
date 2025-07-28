import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import App from '@/app';
import { NotFound } from '@/app/not-found';
import { AuthRedirect } from '@/components/guards/auth-redirect-route';
import { ProtectedRoute } from '@/components/guards/protected-route';
import { withSuspense } from '@/components/layouts/with-suspense';
import { ROUTES } from '@/configs/routes';
import { AuthLayout } from '@/features/auth';
import { DashboardLayout } from '@/features/dashboard';

import { ErrorFallback } from '../error-fallback';

// Auth
const Login = lazy(() => import('@/features/auth/pages/login-page'));
const Register = lazy(() => import('@/features/auth/pages/register-page'));
const ForgotPassword = lazy(() => import('@/features/auth/pages/forgot-password-page'));

const Dashboard = lazy(() => import('@/features/dashboard/home'));
const LandingPage = lazy(() => import('@/features/landing-page/index'));

export const router = createBrowserRouter([
  {
    // Root route
    Component: App,
    ErrorBoundary: ErrorFallback,

    children: [
      // Site routes ( Public / Unprotected )
      { path: ROUTES.HOME, element: withSuspense(LandingPage) },

      // Auth routes
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

      // Protected routes
      {
        Component: ProtectedRoute,
        children: [
          // Dashboard Routes
          {
            Component: DashboardLayout,
            children: [
              { path: ROUTES.DASHBOARD.BASE, element: withSuspense(Dashboard) },

              // Catch-all for dashboard routes
              {
                path: `${ROUTES.DASHBOARD.BASE}/*`,
                element: <NotFound showBackgroundGlow={false} />,
              },
            ],
          },

          // Other protected routes can be added here...
        ],
      },

      // Catch-all route for unmatched routes
      { path: '*', element: <NotFound className='min-h-screen' /> },
    ],
  },
]);
