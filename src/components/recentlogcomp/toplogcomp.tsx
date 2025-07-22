import backgroundimage1 from './assets/Background (1).png';
import backgroundimage2 from './assets/Background (2).png';
import backgroundimage3 from './assets/Background (3).png';
import backgroundimage from './assets/Background.png';
import Toplogmodal from './topllogmodel/Toplogmodal';

export default function Topmodal() {
  const miniLogArray = [
    {
      id: 0,
      title: 'Total Logs',
      score: 0,
      rate: +12,
      icon: backgroundimage,
    },
    {
      id: 1,
      title: 'Errors',
      score: 0,
      rate: +5,
      icon: backgroundimage1,
    },
    {
      id: 2,
      title: 'Avg Response',
      score: 0,
      rate: -8,
      icon: backgroundimage2,
    },
    {
      id: 3,
      title: 'Active User',
      score: 0,
      rate: +3,
      icon: backgroundimage3,
    },
  ];

  return (
    <>
      <div className='flex justify-between gap-4'>
        {miniLogArray.map(eh => (
          <div key={eh.id}>
            <Toplogmodal icon={eh.icon} rate={eh.rate} score={eh.score} title={eh.title} />
          </div>
        ))}
      </div>
    </>
  );
}
