import type React from 'react';

import arrowSVG from '../assets/arrow.svg';
import bwMapPinSVG from '../assets/bwMapPin.svg';
import bwStepsSVG from '../assets/bwSteps.svg';
import profileSVG from '../assets/profile.svg';

import StatusBadge from './status-badge';

interface UjCardProps {
  name?: string;
  role?: string;
  steps?: number;
  activeTime?: string;
  browser?: string;
  status?: 'completed' | 'active' | 'error';
}

const UjDetailCards: React.FC<UjCardProps> = ({
  name = 'Maria Rodriguez',
  role = 'Patient',
  steps = 10,
  activeTime = 'about 2 hours ago (ongoing)',
  browser = 'Firefox 121.0',
  status = 'active',
}) => (
  <div className='bg-bg-features relative flex h-[6.5rem] w-[75.5rem] items-center gap-5 rounded-md p-4 shadow-md'>
    <div>
      <img alt='Arrow Icon' src={arrowSVG} />
    </div>
    <div className='bg-profile-bg flex h-8 w-8 rounded-full p-2'>
      <img alt='Profile Icon' src={profileSVG} />
    </div>
    <div className='flex flex-col gap-2'>
      <h2 className='text-uj-black text-lg font-semibold'>{name}</h2>
      <div className='flex items-center justify-center gap-5'>
        <div className='border-features-border flex h-[1.375rem] w-[3.99125rem] items-center justify-center rounded-full border'>
          <p className='text-uj-black text-xs font-medium opacity-100'>{role}</p>
        </div>
        <p className='text-uj-subtext flex text-xs text-nowrap'>
          <span>
            <img alt='Map Pin' src={bwMapPinSVG} />
          </span>
          {steps} steps
        </p>
        <p className='text-uj-subtext flex gap-1 text-xs'>
          <span>
            <img alt='Steps' src={bwStepsSVG} />
          </span>
          {activeTime}
        </p>
        <p className='text-uj-subtext text-xs'>{browser}</p>
      </div>
    </div>
    <div className='absolute right-0 mr-5'>
      <StatusBadge status={status} />
    </div>
  </div>
);

export default UjDetailCards;
