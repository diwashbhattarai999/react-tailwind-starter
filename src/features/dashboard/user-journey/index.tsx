import Navbar from '@/components/layouts/navbar';

import errorSVG from './assets/error.svg';
import sessionSVG from './assets/sessions.svg';
import stepSVG from './assets/steps.svg';
import UjCards from './components/uj-cards';
import UjDetailCards from './components/uj-detail-card';
import UjFilter from './components/uj-filter';

function UserJourney() {
  return (
    <div className='bg-uj-background'>
      <Navbar
        description='Track user sessions and step-by-step interactions'
        title='User Journeys'
      />
      <UjFilter />
      <div className='absolute top-42 left-75 flex gap-4'>
        <UjCards numberColorClass='text-uj-black' />
        <UjCards
          icon={sessionSVG}
          number='16'
          numberColorClass='text-uj-green'
          title='Active Sessions'
        />
        <UjCards icon={errorSVG} number='17' numberColorClass='text-uj-red' title='With Errors' />
        <UjCards icon={stepSVG} number='6' numberColorClass='text-uj-purple' title='Avg Steps' />
      </div>
      <div className='absolute top-68 left-75 flex flex-col gap-2'>
        <UjDetailCards />
        <UjDetailCards
          activeTime='about 8 hours'
          browser='Safari 17.2'
          name='Dr.Emily Chen'
          role='Doctor'
          status='completed'
          steps={5}
        />
        <UjDetailCards
          activeTime='about 10 hours'
          browser='IOS 17.2'
          name='Dr.Emily Chen'
          role='Doctor'
          status='completed'
          steps={10}
        />
        <UjDetailCards
          activeTime='about 10 hours ago (ongoing)'
          browser='IOS 17.2'
          name='Maria Roudrigez'
          role='Patient'
          status='completed'
          steps={5}
        />
        <UjDetailCards
          activeTime='about 8 hours'
          browser='Safari 17.2'
          name='Dr.Emily Chen'
          role='Doctor'
          status='completed'
          steps={5}
        />
        <UjDetailCards
          activeTime='about 20 hours'
          browser='Firefox 121.0'
          name='Admin User'
          role='Admin'
          status='completed'
          steps={1}
        />
        <UjDetailCards
          activeTime='about 22 hours'
          browser='Android 14'
          name='Maria Roudrigez'
          role='Patient'
          status='error'
          steps={5}
        />
        <UjDetailCards
          activeTime='about 8 hours'
          browser='Safari 17.2'
          name='Dr.Emily Chen'
          role='Doctor'
          status='completed'
          steps={5}
        />
      </div>
    </div>
  );
}

export default UserJourney;
