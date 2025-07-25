import { LoaderIcon } from 'lucide-react';

export function Loader() {
  return (
    <div className='flex size-full items-center justify-center py-10'>
      <LoaderIcon className='text-foreground size-4 animate-spin' />
    </div>
  );
}
