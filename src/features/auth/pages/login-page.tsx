// import Logo from '@/assets/logo.png';
// import { BackgroundGlow } from '@/components/shared/background-glow';

import FormContainer from '../components/form-container';
import UpnLogo from '../components/upn-logo';

const LoginPage = () => (
  <div className='flex h-[100vh] items-center justify-center border-4 border-gray-200'>
    <div className='w-[80%]'>
      <UpnLogo />
      <FormContainer />
    </div>
  </div>
);

export default LoginPage;
