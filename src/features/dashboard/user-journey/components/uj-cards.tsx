import locationSVG from '../assets/SVG.svg';

interface UjCardProps {
  title?: string;
  number?: number | string;
  icon?: string;
  iconAlt?: string;
  numberColorClass?: string;
}

const UjCards: React.FC<UjCardProps> = ({
  title = 'All Logs',
  number = 50,
  icon = locationSVG,
  iconAlt = 'MapPin',
  numberColorClass,
}) => (
  <div className='bg-bg-features relative flex h-[5.375rem] w-[18.125rem] items-center rounded-md border shadow'>
    <div className='text-uj-subtext flex flex-col items-start p-[1.0625rem] text-justify'>
      <h2 className='text-sm font-medium text-nowrap'>{title}</h2>
      <p className={`mt-2 text-2xl font-bold ${numberColorClass}`}>{number}</p>
    </div>
    <div className='absolute right-0 mr-4'>
      <img alt={iconAlt} src={icon} />
    </div>
  </div>
);

export default UjCards;
