import type { ReactNode } from 'react';

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  valueColor?: string;
}

export function CardDemo({ title, value, icon, valueColor }: CardProps) {
  return (
    <Card className='w-full max-w-sm border-2 hover:border-primary transition-colors'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={`text-xl font-medium ${valueColor || ''}`}>
          {value}
        </CardDescription>

        {icon && <CardAction>{icon}</CardAction>}
      </CardHeader>
    </Card>
  );
}
