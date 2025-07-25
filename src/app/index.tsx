import { Outlet } from 'react-router';

import { ReduxProvider } from '@/components/providers/redux-provider';
import { TanstackProvider } from '@/components/providers/tanstack-provider';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/auth-context';
import { LanguageProvider } from '@/contexts/language-context';
import { ThemeProvider } from '@/contexts/theme-context';

import { NetworkStatus } from './network-status';

function App() {
  return (
    <ReduxProvider>
      <AuthProvider>
        <TanstackProvider>
          <ThemeProvider>
            <LanguageProvider>
              <Outlet />

              <NetworkStatus />

              <Toaster />
            </LanguageProvider>
          </ThemeProvider>
        </TanstackProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default App;
