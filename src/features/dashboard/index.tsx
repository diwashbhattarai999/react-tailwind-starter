import { Outlet } from 'react-router';

import Sidebar from '@/components/layouts/sidebar';

export const DashboardLayout = () => (
  <div className='flex w-[100%]'>
    <Sidebar />
    <Outlet />
  </div>
);
