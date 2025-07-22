import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import App from '@/app';
import { NotFound } from '@/app/not-found';
import { AuthRedirect } from '@/components/guards/auth-redirect-route';
import CombinedlogComp from '@/components/recentlogcomp/CombinedlogComp';
// import { ProtectedRoute } from '@/components/guards/protected-route';
import { ROUTES } from '@/configs/routes';
import { AuthLayout } from '@/features/auth';
import { DashboardLayout } from '@/features/dashboard';
import SearchLogPage from '@/features/dashboard/search-log';
import UserJourney from '@/features/dashboard/user-journey';
import PortalSelectionPage from '@/features/portal-selection/pages/portal-selection-page';
import { LandingPage } from '@/features/site';

import { ErrorFallback } from '../error-fallback';
import { Loader } from '../loader';

// Auth
const Login = lazy(() => import('@/features/auth/pages/login-page'));

// Dashboard
// const Dashboard = lazy(() => import('@/features/dashboard/home'));

export const router = createBrowserRouter([
  {
    // Layout wraps all routes
    Component: App,
    ErrorBoundary: ErrorFallback,
    loader: Loader,

    children: [
      // Site routes
      { path: ROUTES.HOME, element: <LandingPage /> },
      { path: ROUTES.NAV.BASE, element: <CombinedlogComp /> },

      { path: ROUTES.PORTAL, element: <PortalSelectionPage /> },
      // Auth routes (redirect authenticated users away)
      {
        Component: AuthRedirect,
        children: [
          {
            Component: AuthLayout,
            children: [
              { path: ROUTES.AUTH.BASE, element: <Navigate replace to={ROUTES.AUTH.LOGIN} /> },
              { path: ROUTES.AUTH.LOGIN, element: <Login /> },
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
              { path: ROUTES.DASHBOARD.BASE, element: <UserJourney /> },
              { path: ROUTES.DASHBOARD.SEARCH, element: <SearchLogPage /> },
              {
                path: `${ROUTES.DASHBOARD.BASE}/*`,
                element: <NotFound showBackgroundGlow={false} />,
              },
            ],
          },
          {},

          // Other protected routes can be added here...
        ],
      },

      // Fallback for unmatched routes
      { path: '*', element: <NotFound className='min-h-screen' /> },
    ],
  },
]);
