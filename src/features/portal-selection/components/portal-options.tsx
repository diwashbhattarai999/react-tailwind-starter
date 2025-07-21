import LoggerText from './logger-text';
import PortalCard from './portal-card';

const data = [
  {
    title: 'Patient Portal',
    desc: '+12% from yesterday',
  },
  {
    title: 'Doctor Portal',
    desc: '+12% from yesterday',
  },
  {
    title: 'Clinic Portal',
    desc: '+12% from yesterday',
  },
  {
    title: 'Pharmacy Portal',
    desc: '+12% from yesterday',
  },
  {
    title: 'Diagnostic Portal',
    desc: '+12% from yesterday',
  },
  {
    title: 'Admin Portal',
    desc: '+12% from yesterday',
  },
];
const PortalOptions = () => (
  <div className='flex flex-col items-center justify-center'>
    <LoggerText />
    <div className='mt-8 grid grid-cols-3 gap-x-6 gap-y-10'>
      {data.map((item, index) => (
        <PortalCard key={index} data={item} />
      ))}
    </div>
  </div>
);

export default PortalOptions;
