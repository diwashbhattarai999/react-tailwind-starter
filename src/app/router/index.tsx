import { createBrowserRouter } from "react-router";

import App from "@/app";

import { ErrorFallback } from "../error-fallback";
import { NotFound } from "../not-found";
import { AUTH_ROUTES } from "./auth.routes";
import { PROTECTED_ROUTES } from "./protected.routes";
import { UNAUTH_ROUTES } from "./unauth.routes";

export const router = createBrowserRouter([
    {
        // Root route
        Component: App,
        ErrorBoundary: ErrorFallback,

        children: [
            // Site routes ( Public / Unprotected )
            ...UNAUTH_ROUTES,

            // Auth routes ( Login, Register, Forgot Password, etc. )
            AUTH_ROUTES,

            // Protected routes ( Dashboard, Profile, etc. )
            PROTECTED_ROUTES,

            // Catch-all route for unmatched routes (404 Not Found)
            { path: "*", element: <NotFound className="min-h-screen" /> },
        ],
    },
]);
