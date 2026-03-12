import { lazy } from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router";

import { AuthRedirect } from "@/components/guards/auth-redirect-route";
import { withSuspense } from "@/components/layouts/with-suspense";
import { ROUTES } from "@/configs/routes";
import { AuthLayout } from "@/features/auth";

// Auth
const Login = lazy(() => import("@/features/auth/pages/login-page"));
const Register = lazy(() => import("@/features/auth/pages/register-page"));
const ForgotPassword = lazy(
    () => import("@/features/auth/pages/forgot-password-page")
);

export const AUTH_ROUTES: RouteObject = {
    Component: AuthRedirect,
    children: [
        {
            Component: AuthLayout,
            children: [
                {
                    path: ROUTES.AUTH.BASE,
                    element: <Navigate replace to={ROUTES.AUTH.LOGIN} />,
                },
                {
                    path: ROUTES.AUTH.LOGIN,
                    element: withSuspense(Login),
                },
                {
                    path: ROUTES.AUTH.REGISTER,
                    element: withSuspense(Register),
                },
                {
                    path: ROUTES.AUTH.FORGOT_PASSWORD,
                    element: withSuspense(ForgotPassword),
                },
            ],
        },
    ],
};
