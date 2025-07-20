import { ChartColumnIncreasing, Menu, Route, TriangleAlert, UsersRound, Zap } from 'lucide-react';

import upachaarlogo from '@/assets/upachaarlogo.png';

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
}

const menuItems: Array<MenuItem> = [
  //   { label: 'border' },
  { icon: <Menu />, label: 'All Logs' },
  { icon: <UsersRound />, label: 'My User Logs' },
  { icon: <ChartColumnIncreasing />, label: 'Analytics Overview' },
  { icon: <Zap />, label: 'Performance' },
  { icon: <TriangleAlert />, label: 'Error Clusters' },
  { icon: <Route />, label: 'User Journeys' },
];

const quickStats = [
  { label: 'Live Sessions', value: '0', valueClass: 'text-chart-2' },
  { label: 'Error Rate', value: '0%', valueClass: 'text-chart-1' },
  { label: 'Avg Response', value: '0ms', valueClass: 'text-sidebar-foreground' },
];

const userInfoItems = [
  {
    name: 'Dr. Prakriti',
    role: 'System Administrator',
    icon: <UsersRound className='h-5 w-5' />,
  },
];

const Sidebar: React.FC = () => (
  <aside className='bg-sidebar border-sidebar-border text-sidebar-foreground flex h-screen w-64 flex-col text-sm shadow-2xl'>
    {/* Top section with logo and menu */}

    <div className='flex-1'>
      {/* Logo */}
      <div className='border-sidebar-border flex items-center gap-2 border-b px-4 py-4'>
        <img alt='' className='h-8 w-8' src={upachaarlogo} />
        <div>
          <h1 className='text-lg font-bold'>UpachaarNepal</h1>
          <p className='text-xs'>Logger | Patient Portal</p>
        </div>
      </div>

      {/* Menu */}
      <ul className='space-y-2 px-4'>
        {menuItems.map(item => (
          <li
            key={item.label}
            className={`hover:bg-chart-2 hover:text-background flex cursor-pointer items-center gap-2 rounded px-3 py-2 transition-colors`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      {/* Quick stats */}
      <div className='border-sidebar-border mt-8 border-t px-4 pt-4'>
        <h3 className='mb-3 px-3 text-xs font-semibold'>QUICK STATS</h3>
        <ul className='space-y-2 text-sm'>
          {quickStats.map(stat => (
            <li
              key={stat.label}
              className='hover:bg-sidebar-accent flex items-center justify-between rounded px-3 py-2'
            >
              <span>{stat.label}</span>
              <span className={`font-medium ${stat.valueClass}`}>{stat.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* User section at bottom */}
    <div className='border-sidebar-border border-t p-4'>
      {userInfoItems.map((user, index) => (
        <div key={index} className='flex items-center gap-3'>
          <div className='flex items-center justify-center rounded-full'>{user.icon}</div>
          <div>
            <p className='font-medium'>{user.name}</p>
            <p className='text-xs'>{user.role}</p>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

export default Sidebar;
