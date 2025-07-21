import UpnLogo from '@/components/shared/upn-logo';

import Avatar from '../components/avatar';
import PortalOptions from '../components/portal-options';
const PortalSelectionPage = () => (
  <div className='flex h-[100vh] flex-col justify-around bg-[#F1F5F9]'>
    <Avatar />
    <div className='mt-[-20px]'>
      <PortalOptions />
    </div>
    <div className='flex items-center justify-center'>
      <UpnLogo />
    </div>
  </div>
);

export default PortalSelectionPage;
