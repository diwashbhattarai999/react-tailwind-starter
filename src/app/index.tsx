import { Outlet } from 'react-router';

import { TanstackProvider } from '@/components/providers/tanstack-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import { NetworkStatus } from './network-status';

function App() {
  return (
    <TanstackProvider>
      <ThemeProvider defaultTheme='dark' storageKey='upn-admin-theme'>
        <Outlet />

        <NetworkStatus />

        <Toaster />
      </ThemeProvider>
    </TanstackProvider>
  );
}

export default App;
