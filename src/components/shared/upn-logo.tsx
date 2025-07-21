import logo from '@/assets/auth/upnlogo.png';
const UpnLogo = () => (
  <div className='flex items-center'>
    <img alt='upachar logo' src={logo}></img>
    <div className='text-gray-700'>
      <p className='text-2xl'>Upchaar Nepal</p>
      <div className='flex items-center gap-[5px]'>
        <div className='h-[1px] w-[25px] bg-gray-700'></div>
        <p className='text-xs'>HEALING THE NATION</p>
        <div className='h-[1px] w-[25px] bg-gray-700'></div>
      </div>
    </div>
  </div>
);

export default UpnLogo;
