import { Outlet } from 'react-router';

import Sidebar from '@/components/layouts/sidebar';

export const DashboardLayout = () => (
  <div className='flex h-screen'>
    <Sidebar />
    <main className='flex-1 overflow-auto'>
      <Outlet />
    </main>
  </div>
);
