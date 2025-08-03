import { Outlet } from 'react-router';

import { ReduxProvider } from '@/components/providers/redux-provider';
import { TanstackProvider } from '@/components/providers/tanstack-provider';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/auth-context';
import { LanguageProvider } from '@/contexts/language-context';
import { ThemeProvider } from '@/contexts/theme-context';

import { NetworkStatus } from './network-status';
import { ScrollToTop } from './scroll-to-top';

/**
 * Main App Component
 * Wraps the application with necessary providers for state management, authentication, theming and internationalization.
 * It includes the ReduxProvider, AuthProvider, TanstackProvider, ThemeProvider, and LanguageProvider.
 *
 * - `Outlet` is used to render the child routes defined in the router configuration.
 * - `NetworkStatus` component is included to monitor and display network connectivity status.
 * - `Toaster` is used to display notifications and messages throughout the application.
 * - `ScrollToTop` component automatically scrolls to the top of the page on route changes.
 */
export default function App() {
  return (
    <ReduxProvider>
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
              <ScrollToTop />
            </LanguageProvider>
          </ThemeProvider>
        </TanstackProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}
