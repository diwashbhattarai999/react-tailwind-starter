import { TriangleAlert, UsersRound } from 'lucide-react';

import Navbar from '@/components/layouts/navbar';
import Sidebar from '@/components/layouts/sidebar';
import { ErrorClusterCard } from '@/features/dashboard/error-clusters/components/error-cluster-list';

import { CardDemo } from '../components/error-stats';

// Stats data
const errorStats = [
  {
    title: 'Total Clusters',
    value: '11',
    valueColor: 'text-chart-1',
    icon: <TriangleAlert className="text-chart-1 h-6 w-6" />,
  },
  {
    title: 'Total Errors',
    value: '22',
    valueColor: 'text-chart-1',
    icon: <TriangleAlert className="text-chart-1 h-6 w-6" />,
  },
  {
    title: 'Affected Users',
    value: '17',
    valueColor: 'text-chart-1',
    icon: <UsersRound className="text-chart-1 h-6 w-6" />,
  },
];

// Cluster list data
const clusters = [
  { title: 'Audit Log Viewed', occurrences: 1, users: 1, lastSeen: '4 days ago' },
  { title: 'System Check', occurrences: 3, users: 2, lastSeen: '2 days ago' },
  { title: 'Payment Failed', occurrences: 2, users: 2, lastSeen: '5 days ago' },
  { title: 'Schedule Viewed', occurrences: 3, users: 2, lastSeen: '2 days ago' },
  { title: 'Profile Updated', occurrences: 3, users: 2, lastSeen: '2 days ago' },
  { title: 'Settings Updated', occurrences: 2, users: 2, lastSeen: '3 days ago' },
  { title: 'Login', occurrences: 3, users: 2, lastSeen: '2 days ago' },
  { title: 'Appointment Booked', occurrences: 3, users: 2, lastSeen: '2 days ago' },
  { title: 'Prescription Viewed', occurrences: 1, users: 2, lastSeen: '2 days ago' },
  { title: 'Patient Records Accessed', occurrences: 3, users: 2, lastSeen: '4 days ago' },
];

export default function ErrorDashboard() {
  return (
    <div>
      <Sidebar />

      <Navbar
        description="Monitor and analyze error patterns across your application"
        showExport={false}
        showLive={false}
        title="Error Clusters"
      />

      <main className="mt-24 ml-64 space-y-6 px-10 text-sm">
        {/* Error Stats */}
        <section className="flex space-x-4">
          {errorStats.map(({ title, value, icon, valueColor }, index) => (
            <CardDemo
              key={index}
              icon={icon}
              title={title}
              value={value}
              valueColor={valueColor}
            />
          ))}
        </section>

        {/* Error Clusters */}
        <section className="space-y-2">
          {clusters.map((cluster, index) => (
            <ErrorClusterCard key={index} {...cluster} />
          ))}
        </section>
      </main>
    </div>
  );
}
