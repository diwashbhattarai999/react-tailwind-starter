import { Cable, Eye, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { innermainLogtype } from '../types/modelType';

export default function InnerMain({
  timestamp,
  level,
  user,
  action,
  page,
  device,
  latency,
  actions,
}: innermainLogtype) {
  const rowCount = timestamp.length;

  return (
    <div>
      <div>
        <Table>
          <TableHeader className='-mx-5 w-full bg-gray-200 text-center font-semibold'>
            <TableRow>
              <TableHead className='py-5'> TIMESTAMP</TableHead>
              <TableHead> LEVEL</TableHead>
              <TableHead> USERS</TableHead>
              <TableHead> ACTION</TableHead>
              <TableHead> PAGE</TableHead>
              <TableHead> DEVICE</TableHead>
              <TableHead> LATENCY</TableHead>
              <TableHead> ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(rowCount)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className='py-5'>{timestamp[index]} </TableCell>
                <TableCell>
                  <Badge
                    className={` ${level[index] == 'info' ? 'bg-green/20 text-green border-green/50' : level[index] == 'warning' ? 'bg-warning-text/20 text-warning-text border-warning-text/50' : level[index] == 'error' ? 'bg-chart-1/20 text-chart-1' : ''}`}
                  >
                    {level[index]}
                  </Badge>
                </TableCell>
                <TableCell>
                  {' '}
                  <div className='flex min-w-[120px] flex-1 items-center justify-center gap-1 px-2 py-2'>
                    <div className='bg-profile-bg rounded-full p-1'>
                      <User className='b h-4 w-4 rounded-full' />
                    </div>
                    {user[index]}
                  </div>{' '}
                </TableCell>
                <TableCell>{action[index]} </TableCell>
                <TableCell>{page[index]} </TableCell>
                <TableCell>{device[index]} </TableCell>
                <TableCell
                  className={`${
                    latency[index]?.includes('ms')
                      ? 'text-green-600'
                      : latency[index]?.includes('s')
                        ? parseFloat(latency[index]) > 1.5
                          ? 'text-red-500'
                          : 'text-yellow-500'
                        : ''
                  }`}
                >
                  {latency[index]}{' '}
                </TableCell>
                <TableCell>
                  <div className='flex min-w-[120px] flex-1 items-center justify-center gap-1 px-2 py-2'>
                    <Eye className='h-3 w-3' />
                    {actions[index]}
                    <Cable className='mx-1 h-3 w-3 rotate-90' /> Journey
                  </div>{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='flex items-center justify-between py-3 text-sm text-nowrap'>
          <h2 className='w-full p-3'>Showing 1 to 10 of 50 results</h2>
          <Pagination className='flex items-center justify-end'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className='border-foreground text-foreground rounded-md border px-3 py-2'
                  href='#'
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='border-foreground text-foreground rounded-md border px-3 py-2'
                  href='#'
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='border-foreground text-foreground rounded-md border px-3 py-2'
                  href='#'
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='border-foreground text-foreground rounded-md border px-3 py-2'
                  href='#'
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className='border-foreground text-foreground rounded-md border px-3 py-2'
                  href='#'
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
