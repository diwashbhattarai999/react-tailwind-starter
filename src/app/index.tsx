import { Outlet, ScrollRestoration } from "react-router";

import { TanstackProvider } from "@/components/providers/tanstack-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/auth-context";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";

import { NetworkStatus } from "./network-status";

/**
 * Main App Component
 * Wraps the application with necessary providers for state management, authentication, theming and internationalization.
 * It includes the AuthProvider, TanstackProvider, ThemeProvider, and LanguageProvider.
 *
 * - `Outlet` is used to render the child routes defined in the router configuration.
 * - `NetworkStatus` component is included to monitor and display network connectivity status.
 * - `Toaster` is used to display notifications and messages throughout the application.
 * - `ScrollRestoration` component automatically restores the scroll position on route changes.
 */
export default function App() {
    return (
        <TooltipProvider>
            <AuthProvider>
                <TanstackProvider>
                    <ThemeProvider>
                        <LanguageProvider>
                            {/* Render child routes */}
                            <Outlet />

                            {/* Network Status - Online/Offline Indicator */}
                            <NetworkStatus />

                            {/* Toaster for notifications */}
                            <Toaster />

                            {/* Scroll to top on route change */}
                            <ScrollRestoration />
                        </LanguageProvider>
                    </ThemeProvider>
                </TanstackProvider>
            </AuthProvider>
        </TooltipProvider>
    );
}
