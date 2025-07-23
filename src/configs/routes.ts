export const ROUTES = {
  HOME: '/',
  PORTAL: '/portal',
  AUTH: {
    BASE: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  DASHBOARD: {
    BASE: '/dashboard',
    ANALYTICSOVERVIEW: '/analytics-overview',
    SETTINGS: '/dashboard/settings',
    ERROR_CLUSTERS: '/dashboard/error-clusters',
    SEARCH: '/dashboard/search',
    PERFORMANCE_METRICS: '/dashboard/performance',
  },
  NAV: {
    BASE: '/nav/mini',
  },
} as const;
