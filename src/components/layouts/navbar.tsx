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
  <header className='border-features-border bg-bg-features absolute top-0 right-0 left-[16.024rem] z-50 flex h-[5.063rem] w-[78.5rem] items-center justify-between border-b p-4 opacity-100'>
    <div className='w-2/3'>
      {/* Title and Description */}
      <h2 className='text-nav-text text-lg font-semibold opacity-100'>{title}</h2>
      <p className='text-nav-subtext align-middle text-sm font-normal tracking-normal text-nowrap opacity-100'>
        {description}
      </p>
    </div>
    {/* Live Status */}
    <div className='flex items-center gap-3'>
      {showLive && (
        <div className='flex items-center justify-between gap-2'>
          <span className='bg-uj-green h-2 w-2 rounded-full opacity-100' />
          <p className='text-live-text text-sm font-normal opacity-100'>Live</p>
        </div>
      )}
      {/* Hidable Export Button */}
      {showExport && (
        <Button
          className='bg-bg-features border-features-border h-[2.5rem] w-[6.834rem] rounded-sm border text-[#0C0A09] opacity-100'
          variant='default'
          onClick={onExport}
        >
          <Download className='mr-2 h-4 w-4' />
          Export
        </Button>
      )}
      {/* Refresh Button */}
      <Button
        className='bg-refresh-button text-uj-background h-[2.5rem] w-[7.186rem] rounded-sm opacity-100'
        onClick={onRefresh}
      >
        <RefreshCw className='mr-2 h-4 w-4' />
        Refresh
      </Button>
    </div>
  </header>
);

export default Navbar;
