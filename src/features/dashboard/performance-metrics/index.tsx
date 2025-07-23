import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import Navbar from '@/components/layouts/navbar';

import UjCards from '../user-journey/components/uj-cards';

import clock from './assets/clock.png';
import error from './assets/error.png';
import latency from './assets/latency.png';
import throughput from './assets/throughput.png';
import EndPoints from './components/end-points';
import SlowRequest from './components/slow-request';
const data = [
  { name: '00:24', uv: 100, pv: 120, amt: 10 },
  { name: '01:24', uv: 500, pv: 4800, amt: 10 },
  { name: '02:24', uv: 300, pv: 1500, amt: 10 },
  { name: '03:24', uv: 150, pv: 700, amt: 10 },
  { name: '04:24', uv: 80, pv: 100, amt: 10 },
  { name: '05:24', uv: 70, pv: 90, amt: 10 },
  { name: '06:24', uv: 60, pv: 85, amt: 10 },
  { name: '07:24', uv: 70, pv: 100, amt: 10 },
  { name: '08:24', uv: 75, pv: 105, amt: 10 },
  { name: '09:24', uv: 80, pv: 110, amt: 10 },
  { name: '10:24', uv: 85, pv: 115, amt: 10 },
  { name: '11:24', uv: 90, pv: 120, amt: 10 },
  { name: '12:24', uv: 600, pv: 3000, amt: 10 },
  { name: '13:24', uv: 700, pv: 3200, amt: 10 },
  { name: '14:24', uv: 500, pv: 2000, amt: 10 },
  { name: '15:24', uv: 200, pv: 800, amt: 10 },
  { name: '16:24', uv: 550, pv: 2600, amt: 10 },
  { name: '17:24', uv: 350, pv: 1400, amt: 10 },
  { name: '18:24', uv: 100, pv: 200, amt: 10 },
  { name: '19:24', uv: 90, pv: 110, amt: 10 },
  { name: '20:24', uv: 85, pv: 105, amt: 10 },
  { name: '21:24', uv: 100, pv: 120, amt: 10 },
  { name: '22:24', uv: 300, pv: 800, amt: 10 },
  { name: '23:24', uv: 200, pv: 600, amt: 10 },
];

const cards = [
  {
    title: 'Average Latency',
    number: '0 ms',
    icon: clock,
    iconAlt: 'MapPin',
    numberColorClass: 'black',
  },
  {
    title: 'P95 Latency',
    number: '0 ms',
    icon: latency,
    iconAlt: 'MapPin',
    numberColorClass: 'black',
  },
  {
    title: 'Error Rate',
    number: '0 %',
    icon: error,
    iconAlt: 'MapPin',
    numberColorClass: 'text-red-500',
  },
  {
    title: 'Throughput',
    number: '0/h',
    icon: throughput,
    iconAlt: 'MapPin',
    numberColorClass: 'text-green-500',
  },
];
const slowRequest = [
  {
    name: 'Maria Rodriguez',
    role: 'Patient',
    activity_1: 'Video Call Joined',
    activity_2: 'Appointments',
    timestamp: '16/07/2025, 02:37:40',
    latency_ms: 4958,
    device: 'Android 14',
  },
  {
    name: 'Dr. Michael Park',
    role: 'Doctor',
    activity_1: 'Patient Records Accessed',
    activity_2: 'Schedule',
    timestamp: '16/07/2025, 02:31:28',
    latency_ms: 2756,
    device: 'Edge 120.0',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Patient',
    activity_1: 'Video Call Joined',
    activity_2: 'Profile',
    timestamp: '16/07/2025, 14:12:04',
    latency_ms: 2530,
    device: 'iOS 17.2',
  },
  {
    name: 'Dr. Michael Park',
    role: 'Doctor',
    activity_1: 'Login',
    activity_2: 'Video Consultation',
    timestamp: '16/07/2025, 02:34:41',
    latency_ms: 1847,
    device: 'Edge 120.0',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Doctor',
    activity_1: 'Prescription Uploaded',
    activity_2: 'Patient Records',
    timestamp: '16/07/2025, 17:35:45',
    latency_ms: 1657,
  },
  {
    name: 'Dr. Michael Park',
    role: 'Doctor',
    activity_1: 'Schedule Viewed',
    activity_2: 'Schedule',
    timestamp: '16/07/2025, 02:32:05',
    latency_ms: 1499,
    device: 'Edge 120.0',
  },
  {
    name: 'John Smith',
    role: 'Patient',
    activity_1: 'Login',
    activity_2: 'Prescriptions',
    timestamp: '16/07/2025, 13:13:17',
    latency_ms: 1335,
    device: 'Firefox 121.0',
  },
];

const SlowestEndpoints = [
  {
    category: 'Appointments',
    requests: 3,
    errors: '33%',
    avg_latency_ms: 1962,
  },
  {
    category: 'Schedule',
    requests: 5,
    errors: '0%',
    avg_latency_ms: 990,
  },
  {
    category: 'Profile',
    requests: 6,
    errors: '0%',
    avg_latency_ms: 727,
  },
  {
    category: 'Video Consultation',
    requests: 7,
    errors: '0%',
    avg_latency_ms: 627,
  },
  {
    category: 'Patient Records',
    requests: 5,
    errors: '0%',
    avg_latency_ms: 564,
  },
  {
    category: 'Prescriptions',
    requests: 7,
    errors: '0%',
    avg_latency_ms: 527,
  },
  {
    category: 'Audit Logs',
    requests: 1,
    errors: '0%',
    avg_latency_ms: 462,
  },
  {
    category: 'Payment',
    requests: 5,
    errors: '0%',
    avg_latency_ms: 334,
  },
  {
    category: 'Dashboard',
    requests: 2,
    errors: '0%',
    avg_latency_ms: 334,
  },
  {
    category: 'Reports',
    requests: 3,
    errors: '0%',
    avg_latency_ms: 286,
  },
];

const PerformanceMetricsPage = () => (
  <div className='ml-64 w-[100%]'>
    <Navbar
      description='monitor application performance, latency and throughput'
      showExport={false}
      showLive={false}
      title='Performance Metrics'
    />
    <div className='mt-20 flex w-[100%] items-center justify-between border-b border-gray-200 p-4'>
      <p className='text-md font-semibold'>Performance overview</p>
      <select className='rounded-sm border-1 border-gray-400 p-2'>
        <option>Last 24 hours</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
      </select>
    </div>
    <div className='flex justify-between p-4'>
      {cards.map((card, index: number) => (
        <UjCards
          key={index}
          icon={card.icon}
          iconAlt={card.iconAlt}
          number={card.number}
          numberColorClass={card.numberColorClass}
          title={card.title}
        />
      ))}
    </div>
    <div className='mx-4 rounded-xl border-1 border-gray-300 px-3 text-[10px]'>
      <p className='text-lg font-semibold'>Performance trends</p>
      <LineChart data={data} height={300} width={1200}>
        <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Line dataKey='uv' stroke='#8884d8' type='monotone' />
        <Line dataKey='pv' stroke='#82ca9d' type='monotone' />
      </LineChart>
    </div>
    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className='rounded-xl border-1 border-gray-300 p-3'>
        <p className='text-lg font-semibold'>Slowest endpoints</p>
        <div className='mx-2 mt-4 flex flex-col gap-4'>
          {SlowestEndpoints.map((endpoint, index) => (
            <EndPoints
              key={index}
              errors={parseInt(endpoint.errors)}
              ms={endpoint.avg_latency_ms}
              request={`${endpoint.requests} requests`}
              title={endpoint.category}
            />
          ))}
        </div>
      </div>
      <div className='rounded-xl border-1 border-gray-300 p-3'>
        <p className='text-lg font-semibold'>Recent Slow Request</p>

        <div className='mx-2 mt-4 flex flex-col gap-4'>
          {slowRequest.map((endpoint, index) => (
            <SlowRequest key={index} data={endpoint} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PerformanceMetricsPage;
