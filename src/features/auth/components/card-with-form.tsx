import { LoginForm } from './login-form';

const Cardwithform = () => (
  <>
    <div className='absolute h-[80%] w-[50%] -rotate-[9.67deg] border-1 border-gray-300 bg-white'></div>
    <div className='absolute h-[80%] w-[50%] -rotate-[4.75deg] border-1 border-gray-300 bg-white'></div>
    <div className='absolute flex h-[80%] w-[50%] items-center justify-center border-1 border-gray-300 bg-white'>
      <LoginForm />
    </div>
  </>
);

export default Cardwithform;
