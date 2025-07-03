import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import App from '@/app';
import { NotFound } from '@/app/not-found';
import { ROUTES } from '@/configs/routes';
import { AuthLayout } from '@/features/auth';
import { DashboardLayout } from '@/features/dashboard';
import LandingPage from '@/features/site';

import { ErrorFallback } from './error-fallback';
import { Loader } from './loader';

// Auth
const Login = lazy(() => import('@/features/auth/pages/login-page'));

// Dashboard
const Dashboard = lazy(() => import('@/features/dashboard/home'));

export const router = createBrowserRouter([
  {
    // Layout wraps all routes
    Component: App,
    ErrorBoundary: ErrorFallback,
    loader: Loader,

    children: [
      // Site routes
      { path: ROUTES.HOME, element: <LandingPage /> },

      // Auth routes
      {
        Component: AuthLayout,
        children: [
          { path: ROUTES.AUTH.BASE, element: <Navigate replace to={ROUTES.AUTH.LOGIN} /> },
          { path: ROUTES.AUTH.LOGIN, element: <Login /> },
        ],
      },

      // Dashboard routes
      {
        Component: DashboardLayout,
        children: [
          { path: ROUTES.DASHBOARD.BASE, element: <Dashboard /> },

          // Fallback for unmatched dashboard routes
          { path: `${ROUTES.DASHBOARD.BASE}/*`, element: <NotFound showBackgroundGlow={false} /> },
        ],
      },

      // Fallback for unmatched routes
      { path: '*', element: <NotFound className='min-h-screen' /> },
    ],
  },
]);
