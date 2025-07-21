import { Eye, User } from 'lucide-react';

import type { innermainLogtype } from '../types/modelType';

export default function InnerMain({
  timestamp,
  level,
  user,
  action,
  page,
  device,
  latency,
  actions,
}: innermainLogtype) {
  const rowCount = timestamp.length;

  return (
    <div className='w-full overflow-x-auto'>
      {/* HEADER ROW */}
      <div className='flex bg-gray-200 text-center font-semibold'>
        {['TIMESTAMP', 'LEVEL', 'USERS', 'ACTION', 'PAGE', 'DEVICE', 'LATENCY', 'ACTIONS'].map(
          (heading, idx) => (
            <div
              key={idx}
              className='min-w-[120px] flex-1 border-r border-gray-300 py-2 text-[12px]'
            >
              {heading}
            </div>
          )
        )}
      </div>

      {/* DATA ROWS */}
      {[...Array(rowCount)].map((_, index) => (
        <div
          key={index}
          className='border-primary-foreground mb-1 flex items-stretch border-b text-center text-[11px]'
        >
          {/* TIMESTAMP */}
          <div className='flex h-15 min-w-[120px] flex-1 items-center justify-center px-2 py-2'>
            {timestamp[index]}
          </div>

          {/* LEVEL */}
          <div
            className={`flex min-w-[120px] flex-1 items-center justify-center rounded-xl px-2 py-2 ${level[index] == 'info' ? 'bg-chart-2/40 text-chart-2' : level[index] == 'warning' ? 'bg-chart-4 text-chart-5' : level[index] == 'error' ? 'bg-chart-1/40 text-chart-1' : ''}`}
          >
            {level[index]}
          </div>

          {/* USER */}
          <div className='flex min-w-[120px] flex-1 items-center justify-center gap-1 px-2 py-2'>
            <User className='h-4 w-4' />
            {user[index]}
          </div>

          {/* ACTION */}
          <div className='flex min-w-[120px] flex-1 items-center justify-center px-2 py-2'>
            {action[index]}
          </div>

          {/* PAGE */}
          <div className='flex min-w-[120px] flex-1 items-center justify-center px-2 py-2'>
            {page[index]}
          </div>

          {/* DEVICE */}
          <div className='flex min-w-[120px] flex-1 items-center justify-center px-2 py-2'>
            {device[index]}
          </div>

          {/* LATENCY */}
          <div className='flex min-w-[120px] flex-1 items-center justify-center px-2 py-2'>
            {latency[index]}
          </div>

          {/* ACTIONS */}
          <div className='flex min-w-[120px] flex-1 items-center justify-center gap-1 px-2 py-2'>
            <Eye />
            {actions[index]}
          </div>
        </div>
      ))}
      <div className='my-2 flex h-8 justify-between text-[11px]'>
        <h2 className='p-3'>Showing 1 to 10 of 50 results</h2>
        <div className='flex gap-2'>
          <button className='border-foreground text-foreground rounded-md border px-3 py-2'>
            Previous
          </button>
          <button className='border-foreground rounded-md border px-3 py-2'>1</button>
          <button className='border-foreground rounded-md border px-3 py-2'>2</button>
          <button className='border-foreground rounded-md border px-3 py-2'>3</button>
          <button className='border-foreground rounded-md border px-3 py-2'>4</button>
          <div className='flex items-end'>.....</div>
          <button className='border-foreground rounded-md border px-3 py-2'>Next</button>
        </div>
      </div>
    </div>
  );
}
