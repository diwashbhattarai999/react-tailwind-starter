import { lazy } from "react";
import type { RouteObject } from "react-router";

import { withSuspense } from "@/components/layouts/with-suspense";
import { ROUTES } from "@/configs/routes";

// UnAuth
const LandingPage = lazy(() => import("@/features/landing-page/index"));

export const UNAUTH_ROUTES: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: withSuspense(LandingPage),
    },
];
