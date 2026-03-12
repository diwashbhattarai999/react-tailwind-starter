import { lazy } from "react";
import type { RouteObject } from "react-router";

import { NotFound } from "@/app/not-found";
import { ProtectedRoute } from "@/components/guards/protected-route";
import { withSuspense } from "@/components/layouts/with-suspense";
import { ROUTES } from "@/configs/routes";
import { DashboardLayout } from "@/features/dashboard";

// UnAuth
const Dashboard = lazy(() => import("@/features/dashboard/home"));

export const PROTECTED_ROUTES: RouteObject = {
    Component: ProtectedRoute,
    children: [
        // Dashboard Routes
        {
            Component: DashboardLayout,
            children: [
                {
                    path: ROUTES.DASHBOARD.BASE,
                    element: withSuspense(Dashboard),
                },

                // Catch-all for dashboard routes
                {
                    path: `${ROUTES.DASHBOARD.BASE}/*`,
                    element: <NotFound showBackgroundGlow={false} />,
                },
            ],
        },

        // Other protected routes can be added here...
    ],
};
