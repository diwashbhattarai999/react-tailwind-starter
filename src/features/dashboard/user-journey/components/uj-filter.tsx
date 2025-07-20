import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function UjFilter() {
  return (
    <div className='bg-bg-features absolute top-20 left-[16.024rem] flex h-[4.5625rem] w-[77.5rem] items-center border-b'>
      <div className='flex items-center gap-2 p-4'>
        <span className='text-text text-sm leading-[1.25rem] font-medium text-nowrap'>
          Filter by User Id:
        </span>
        <Input
          className='border-features-border bg-bg-features text-uj-subtext hover:none rounded-sm border opacity-100'
          placeholder='Enter User Id (optional)'
          type='text'
        />
        <Button className='border-features-border bg-bg-features text-uj-subtext rounded-sm border opacity-50'>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default UjFilter;
