import { Outlet } from 'react-router';

import { LanguageProvider } from '@/components/providers/language-provider';
import { ReduxProvider } from '@/components/providers/redux-provider';
import { TanstackProvider } from '@/components/providers/tanstack-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import { NetworkStatus } from './network-status';

function App() {
  return (
    <ReduxProvider>
      <TanstackProvider>
        <ThemeProvider defaultTheme='dark' storageKey='upn-admin-theme'>
          <LanguageProvider>
            <Outlet />

            <NetworkStatus />

            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </TanstackProvider>
    </ReduxProvider>
  );
}

export default App;
