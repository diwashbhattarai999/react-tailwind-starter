import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import searchIcon from './assets/filter/SVG.png';

export default function LogFilterComp() {
  const selectArray = [
    {
      name: 'Role',
      title: 'All Roles',
      option: ['admin', 'user'],
    },
    {
      name: 'Level',
      title: 'All Levels',
      option: ['admin', 'user'],
    },
    {
      name: 'Page',
      title: 'All Pages',
      option: ['admin', 'user'],
    },
  ];

  return (
    <div className='flex flex-wrap items-center justify-between gap-4 py-7 xl:flex-nowrap'>
      <div className='flex flex-wrap gap-4 xl:flex-nowrap'>
        {selectArray.map((selectItem, index) => (
          <div key={index} className='flex items-center justify-between gap-1'>
            <Label htmlFor={selectItem.name}>{selectItem.name}</Label>
            <Select>
              <SelectTrigger className='w-[150px]'>
                <SelectValue placeholder={selectItem.title} />
              </SelectTrigger>
              <SelectContent>
                {selectItem.option.map((opt, i) => (
                  <SelectItem key={i} value={opt}>
                    {opt.charAt(0).toUpperCase() + opt.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap items-center gap-4 xl:flex-nowrap'>
        <div className='flex gap-1'>
          <Label htmlFor='from'>From</Label>
          <Input className='min-w-[140px]' id='from' type='date' />
        </div>
        <div className='flex gap-1'>
          <Label htmlFor='to'>To</Label>
          <Input className='min-w-[140px]' id='to' type='date' />
        </div>
      </div>

      <div className='flex items-center gap-2 rounded-lg border px-4'>
        <img alt='Search Icon' className='h-4 w-4' src={searchIcon} />
        <Input
          className='border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0'
          placeholder='Search logs...'
        />
      </div>
    </div>
  );
}
