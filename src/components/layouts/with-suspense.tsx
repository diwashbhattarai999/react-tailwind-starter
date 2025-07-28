import { type JSX, Suspense } from 'react';

import { PageLoader } from '@/app/page-loader';

/**
 * Wraps a component with Suspense to enable lazy loading.
 * @param Component The lazy-loaded React component.
 */
export const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);
