import { Users } from 'lucide-react';

const Avatar = () => (
  <div className='flex items-center justify-end gap-3 p-4'>
    <div className='rounded-3xl bg-gray-300 p-2'>
      {' '}
      <Users />
    </div>

    <div className='flex flex-col leading-4'>
      <p className='text-md font-medium'>Suvadra Shrestha</p>
      <p className='text-sm text-gray-600'>System Administration</p>
    </div>
  </div>
);

export default Avatar;
