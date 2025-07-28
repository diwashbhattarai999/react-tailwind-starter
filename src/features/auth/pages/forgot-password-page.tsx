import Logo from '@/assets/logo.png';
import { BackgroundGlow } from '@/components/shared/background-glow';

import { ForgotPasswordForm } from '../components/forgot-password-form';

const ForgotPasswordPage = () => (
  <div className='relative flex min-h-screen'>
    {/* Background glow */}
    <BackgroundGlow />

    {/* Main content */}
    <div className='mx-auto flex w-full max-w-md flex-col justify-center gap-12 px-6 md:px-0'>
      {/* Logo */}
      <div className='mx-auto w-fit space-y-2 text-center'>
        <div className='size-16'>
          <img alt='logo' className='size-full rounded-xl' src={Logo} />
        </div>
      </div>

      {/* Heading and description */}
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-bold'>Reset Password</h2>
        <p className='text-foreground/70'>
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <ForgotPasswordForm />
    </div>
  </div>
);

export default ForgotPasswordPage;
