import { GitCommitHorizontal } from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PerformanceData {
  time: string;
  latency: number;
  throughput: number;
}

const performanceData: Array<PerformanceData> = [
  { time: '00:08', latency: 400, throughput: 200 },
  { time: '03:08', latency: 300, throughput: 300 },
  { time: '06:08', latency: 600, throughput: 500 },
  { time: '09:08', latency: 800, throughput: 700 },
  { time: '11:08', latency: 750, throughput: 900 },
  { time: '13:08', latency: 900, throughput: 800 },
  { time: '15:08', latency: 600, throughput: 600 },
  { time: '17:08', latency: 400, throughput: 400 },
  { time: '20:08', latency: 300, throughput: 300 },
  { time: '23:08', latency: 200, throughput: 200 },
];

export function PerformanceMetricsChart() {
  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-xl'>Performance Metrics (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-[9.5rem]'>
          <ResponsiveContainer height='100%' width='100%'>
            <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
              <CartesianGrid opacity={0.1} strokeDasharray='3 3' />
              <XAxis
                className='text-xs'
                dataKey='time'
                tick={{ fill: '#6b7280' }}
                tickMargin={10}
              />
              <YAxis
                className='text-xs'
                domain={[0, 1200]}
                orientation='left'
                stroke='#8884d8'
                tick={{ fill: '#6b7280' }}
                tickMargin={10}
                yAxisId='left'
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  borderColor: '#374151',
                  borderRadius: '0.375rem',
                }}
              />
              <Area
                activeDot={{ r: 6 }}
                dataKey='latency'
                fill='#8884d8'
                fillOpacity={0.2}
                name='Avg Latency (ms)'
                stroke='#8884d8'
                type='monotone'
                yAxisId='left'
              />
              <Area
                activeDot={{ r: 6 }}
                dataKey='throughput'
                fill='#82ca9d'
                fillOpacity={0.2}
                name='Throughput (req/h)'
                stroke='#82ca9d'
                type='monotone'
                yAxisId='left'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-uj-blue flex text-sm'>
            <span>
              <GitCommitHorizontal />
            </span>
            Avg Latency (ms)
          </span>
          <span className='text-uj-green flex text-sm'>
            <span>
              <GitCommitHorizontal />
            </span>
            Throughput (req/h)
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
