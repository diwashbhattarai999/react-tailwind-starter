import { AlertTriangle, ChevronRight, Clock, Users } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorClusterItemProps {
  title: string;
  occurrences: number;
  users: number;
  lastSeen: string;
  severity?: 'Low' | 'Medium' | 'High';
}

export function ErrorClusterCard({
  title,
  occurrences,
  users,
  lastSeen,
  severity = 'Medium',
}: ErrorClusterItemProps) {
  const severityColor = {
    Low: ' text-green',
    Medium: 'text-brown',
    High: ' text-red',
  };
  return (
    <Card className='hover:border-primary w-full max-w-full border-2 transition-colors'>
      <CardHeader>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <ChevronRight className='h-4 w-4' />
            <div className='bg-chart-5 h-2 w-2 rounded-full' />
          </div>
          <div className='flex-1'>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='text-xs'>
              <div className='flex space-x-4'>
                <span className='mt-3 flex items-center gap-1'>
                  <AlertTriangle className='h-4 w-4' /> {occurrences} occurrences
                </span>
                <span className='mt-3 flex items-center gap-1'>
                  <Users className='h-4 w-4' /> {users} users
                </span>
                <span className='mt-3 flex items-center gap-1'>
                  <Clock className='h-4 w-4' /> Last seen {lastSeen}
                </span>
              </div>
            </CardDescription>
          </div>
        </div>

        <CardAction>
          <Badge className={`${severityColor[severity]} border-chart-5`} variant='outline'>
            {severity}
          </Badge>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
