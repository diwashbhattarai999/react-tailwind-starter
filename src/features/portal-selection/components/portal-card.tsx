import danger from '@/assets/danger.png';
import logo from '@/assets/portal-options-img.png';

type PortalCardProps = {
  data: {
    title: string;
    desc: string;
  };
};
const PortalCard = ({ data }: PortalCardProps) => (
  <div className='flex flex-col gap-2 rounded-lg bg-white px-7 py-5 shadow-md'>
    <div className='flex items-center gap-4'>
      <p className='text-lg font-medium text-gray-600'>{data.title}</p>
      <img alt='img' src={logo}></img>
    </div>
    <div className='flex items-center gap-4 text-red-400'>
      <img alt='danger' src={danger}></img>
      <p className='text-sm'>{data.desc}</p>
    </div>
  </div>
);

export default PortalCard;
