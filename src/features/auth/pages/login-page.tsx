import { BackgroundGlow } from '@/components/shared/background-glow';

import { LoginForm } from '../components/login-form';

const LoginPage = () => (
  <div className='relative flex min-h-screen'>
    {/* Background glow */}
    <BackgroundGlow />

    {/* Main content */}
    <div className='mx-auto flex w-full max-w-md flex-col justify-center gap-12 px-6 md:px-0'>
      {/* Logo - React Starter */}
      <div className='mx-auto w-fit space-y-2 text-center'>React Starter</div>

      {/* Heading and description */}
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-bold'>Welcome Back!</h2>
        <p className='text-foreground/70'>
          Please enter your credentials to log in to your account.
        </p>
      </div>

      {/* Form */}
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
