import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ActionItem {
  name: string;
  count: number;
}

interface OverviewCardsProps {
  title: string;
  data: Array<ActionItem>;
  className?: string;
}

export function OverviewCards({ title, data, className }: OverviewCardsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className='text-xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex flex-wrap items-center justify-between gap-2 sm:gap-40'
            >
              <span className='text-uj-black text-sm font-medium whitespace-nowrap'>
                {item.name}
              </span>
              <Badge variant='outline'>{item.count}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
