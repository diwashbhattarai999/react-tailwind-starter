import backgroundimage from '../assets/Background.png';
import type { modelType } from '../types/modelType';

export default function Toplogmodal({ title, score, rate, icon }: modelType) {
  return (
    <div className='border-background flex w-fit items-center justify-between gap-20 rounded-xl border p-4 drop-shadow-md'>
      <div className='flex flex-col items-start'>
        <h2 className='text-ring text-[0.8rem] font-medium'>{title}</h2>
        <p className='text-background text-2xl font-bold'>{score} </p>
        <p className='text-chart-2 text-nowrap'>{rate}% from yesterday</p>
      </div>
      <div>
        <img alt='total log' src={icon || backgroundimage} />
      </div>
    </div>
  );
}
