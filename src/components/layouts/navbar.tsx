import type React from 'react';

import { Download, RefreshCw } from 'lucide-react';

import { Button } from '../ui/button';

interface NavbarProps {
  title?: string;
  description?: string;
  showLive?: boolean;
  showExport?: boolean;
  onExport?: () => void;
  onRefresh?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  title = 'All Logs',
  description = 'Real-time monitoring across Patient App, Doctor Dashboard, and Admin Panel',
  showLive = true,
  showExport = true,
  onExport,
  onRefresh,
}) => (
  <header className='border-features-border bg-bg-features fixed top-0 z-50 flex w-full flex-col items-start justify-between border-b px-4 py-3 sm:h-[5.063rem] sm:w-[calc(100%-16.024rem)] sm:flex-row sm:items-center sm:pl-[16.024rem]'>
    {/* Title and Description */}
    <div className='w-full sm:w-2/3'>
      <h2 className='text-nav-text text-lg font-semibold'>{title}</h2>
      <p className='text-nav-subtext truncate text-sm font-normal tracking-normal whitespace-nowrap sm:whitespace-normal'>
        {description}
      </p>
    </div>

    {/* Buttons and Live Status */}
    <div className='mt-3 flex w-full flex-wrap items-center justify-start gap-3 sm:mt-0 sm:w-auto sm:justify-end'>
      {showLive && (
        <div className='flex items-center gap-2'>
          <span className='bg-uj-green h-2 w-2 rounded-full' />
          <p className='text-live-text text-sm font-normal'>Live</p>
        </div>
      )}
      {showExport && (
        <Button
          className='bg-bg-features border-features-border h-[2.5rem] w-auto rounded-sm border text-[#0C0A09]'
          variant='default'
          onClick={onExport}
        >
          <Download className='mr-2 h-4 w-4' />
          Export
        </Button>
      )}
      <Button
        className='bg-refresh-button text-uj-background h-[2.5rem] w-auto rounded-sm'
        onClick={onRefresh}
      >
        <RefreshCw className='mr-2 h-4 w-4' />
        Refresh
      </Button>
    </div>
  </header>
);

export default Navbar;
