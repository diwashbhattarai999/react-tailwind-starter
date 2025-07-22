import { Download, RefreshCcw, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

const SearchLogPage = () => (
  <div className='flex w-[100%] flex-1 flex-col'>
    <div className='flex items-center justify-between border-b border-gray-200 px-3 py-4'>
      <div>
        <p className='text-lg font-semibold'>User Logs</p>
        <p className='mt-[-4px] text-sm text-gray-600'>
          View logs for specific users and track individual user activity
        </p>
      </div>
      <div>
        <Button className='border-gray border-1' variant={'ghost'}>
          <Download />
          Export
        </Button>
        <Button className='ml-[20px]'>
          <RefreshCcw />
          Refresh
        </Button>
      </div>
    </div>
    <div className='flex items-center justify-start gap-4 border-b border-gray-200 px-3 py-4'>
      <p>User ID:</p>
      <input
        className='rounded-sm border-1 border-gray-400 p-2'
        placeholder='Enter user ID'
        type='text'
      />

      <Button className='bg-green'>
        <Search />
        Search
      </Button>
    </div>
    <div className='flex h-[75vh] items-center justify-center bg-[#F8FAFC]'>
      <div className='flex flex-col items-center justify-center gap-3 rounded-xl bg-white p-12 shadow-md'>
        <Search size={50} />
        <p className='text-lg font-bold'>Search User Logs</p>
        <p className='text-sm text-gray-500'>
          Enter a user ID above to view logs for specific user
        </p>
      </div>
    </div>
  </div>
);

export default SearchLogPage;
