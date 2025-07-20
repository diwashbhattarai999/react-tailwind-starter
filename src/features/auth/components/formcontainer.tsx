import Cardwithform from './cardwithform';

const FormContainer = () => (
  <div className='flex flex-col items-center justify-center gap-[30px] py-5'>
    <div className='flex items-center gap-[5px]'>
      <div className='h-[2px] w-[50px] bg-gray-700'></div>
      <p className='text-xl text-gray-700'>Logger System</p>
      <div className='h-[2px] w-[50px] bg-gray-700'></div>
    </div>
    <div className='relative flex h-[370px] w-full items-center justify-center bg-[var(--green)]'>
      <Cardwithform />
    </div>
  </div>
);

export default FormContainer;
