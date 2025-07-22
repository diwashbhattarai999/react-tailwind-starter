import { Card, CardContent } from '@/components/ui/card';

import backgroundimage from '../assets/Background.png';
import type { modelType } from '../types/modelType';

export default function Toplogmodal({ title, score, rate, icon }: modelType) {
  return (
    <Card className='border-background grid grid-cols-2 items-center justify-center gap-1 rounded-xl p-4 drop-shadow-md md:justify-between lg:gap-12 xl:gap-24'>
      <CardContent className='flex w-full flex-col items-start p-0'>
        <h2 className='text-ring text-[0.8rem] font-medium text-nowrap'>{title}</h2>
        <p className='text-lg font-bold md:text-2xl'>{score}</p>
        <p className='text-chart-2 whitespace-nowrap'>{rate}% from yesterday</p>
      </CardContent>
      <div className='flex w-full justify-end xl:w-10'>
        <img alt='total log' src={icon || backgroundimage} />
      </div>
    </Card>
  );
}
