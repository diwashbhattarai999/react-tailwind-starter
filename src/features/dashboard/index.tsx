import { Outlet } from 'react-router';

export const DashboardLayout = () => (
  <div className='flex h-screen'>
    <main className='flex-1 overflow-auto'>
      <Outlet />
    </main>
  </div>
);
