import { LoaderIcon } from 'lucide-react';

/**
 * Loader component that displays a loading spinner.
 * It uses the LoaderIcon from lucide-react with a spinning animation.
 */
export function Loader() {
  return (
    <div className='flex size-full items-center justify-center py-10'>
      <LoaderIcon className='text-foreground size-4 animate-spin' />
    </div>
  );
}
