import Navbar from '@/components/layouts/navbar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import UjCards from '../user-journey/components/uj-cards';

import errorSVG from './assets/error.svg';
import logsSVG from './assets/logs.svg';
import responseSVG from './assets/response.svg';
import sessionSVG from './assets/session.svg';
import { OverviewCards } from './components/overview-card';
import { PerformanceMetricsChart } from './components/performance-metrix';

const userRole = [
  { name: 'Patients', count: 8 },
  { name: 'Doctor', count: 7 },
  { name: 'Admin', count: 7 },
];
const topActions = [
  { name: 'Login', count: 8 },
  { name: 'Prescription Viewed', count: 7 },
  { name: 'Video Call Joined', count: 7 },
  { name: 'Prescription Uploaded', count: 8 },
  { name: 'Profile Updated', count: 8 },
];
const topPages = [
  { name: 'Prescriptions', count: 8 },
  { name: 'Login', count: 7 },
  { name: 'Video Consultation', count: 7 },
  { name: 'Profile', count: 8 },
  { name: 'Payment', count: 8 },
];

function AnalyticsOverview() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      {/* Navbar */}
      <Navbar
        description='Comprehensive analytics and insights from your healthcare platform logs'
        showLive={false}
        title='Analytics Overview'
      />

      {/* Stats Cards Row - Made compact and responsive */}
      <div className='mt-6 flex flex-wrap justify-center gap-4 px-4'>
        <UjCards icon={errorSVG} number='0%' numberColorClass='text-uj-red' title='Error RAate' />
        <UjCards
          icon={sessionSVG}
          number='0'
          numberColorClass='text-uj-green'
          title='Live Session'
        />
        <UjCards
          icon={responseSVG}
          number='0ms'
          numberColorClass='text-uj-blue'
          title='Avg Response'
        />
        <UjCards icon={logsSVG} number='0' numberColorClass='text-uj-purple' title='Total Lags' />
      </div>

      {/* Main Content - Responsive grid */}
      <div className='mx-auto mt-4 grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-12'>
        {/* Performance Metrics */}
        <div className='sm:col-span-2 lg:col-span-6'>
          <PerformanceMetricsChart />
        </div>

        {/* Status Badges */}
        <div className='sm:col-span-2 lg:col-span-6'>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className='text-xl'>Log Level Distribution</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <div className='flex w-full items-center justify-between'>
                <Badge className='justify-start rounded-full' variant='secondary'>
                  Info
                </Badge>
                <span>37</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <Badge className='justify-start rounded-full' variant='secondary'>
                  Debug
                </Badge>
                <span>7</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <Badge className='justify-start rounded-full' variant='destructive'>
                  Warning
                </Badge>
                <span>6</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <Badge className='justify-start rounded-full' variant='default'>
                  Error
                </Badge>
                <span>1</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overview Cards */}
        <div className='sm:col-span-1 lg:col-span-4'>
          <OverviewCards data={userRole} title='User Role Distribution' />
        </div>
        <div className='sm:col-span-1 lg:col-span-4'>
          <OverviewCards data={topActions} title='Top Actions' />
        </div>
        <div className='sm:col-span-1 lg:col-span-4'>
          <OverviewCards data={topPages} title='Top Pages' />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsOverview;
