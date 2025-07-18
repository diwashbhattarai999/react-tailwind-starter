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
  <header className='fixed top-0 right-0 z-50 flex h-[81px] w-[1256px] items-center justify-between border-b border-gray-200 bg-[#FFFFFF] p-4 opacity-100 shadow-sm'>
    <div className='w-2/3'>
      {/* Title and Description */}
      <h2 className='font-inter top-[16px] left-[24px] h-[28px] w-[72.65px] text-[18.91px] leading-[28px] font-semibold text-[#0F172A] opacity-100'>
        {title}
      </h2>
      <p className='font-inter top-[44px] left-[24px] h-[20px] w-[600px] align-middle text-[13.56px] leading-[20px] font-normal tracking-normal text-[#64748B] opacity-100'>
        {description}
      </p>
    </div>
    {/* Live Status */}
    <div className='flex items-center gap-3'>
      {showLive && (
        <div className='flex items-center justify-between gap-2'>
          <span className='top-[36px] left-[933.55px] h-2 w-2 rounded-full bg-[#22C55E] opacity-100' />
          <p className='font-inter top-[30px] left-[949.55px] h-[20px] w-[26.33px] text-[13.67px] leading-[20px] font-normal text-[#475569] opacity-100'>
            Live
          </p>
        </div>
      )}
      {/* Hidable Export Button */}
      {showExport && (
        <Button
          className='top-[20px] left-[991.67px] h-[40px] w-[109.34px] rounded-[6px] border-[1px] border-[#E7E5E4] bg-[#FFFFFF] text-[#0C0A09] opacity-100'
          variant='default'
          onClick={onExport}
        >
          <Download className='mr-2 h-4 w-4' />
          Export
        </Button>
      )}
      {/* Refresh Button */}
      <Button
        className='top-[20px] left-[1117.02px] h-[40px] w-[114.98px] rounded-[6px] bg-[#059669] text-[#FAFCFF] opacity-100'
        onClick={onRefresh}
      >
        <RefreshCw className='mr-2 h-4 w-4' />
        Refresh
      </Button>
    </div>
  </header>
);

export default Navbar;
