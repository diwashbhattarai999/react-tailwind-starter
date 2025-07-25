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
    SETTINGS: '/dashboard/settings',
    SEARCH: '/dashboard/search',
  },
  NAV: {
    BASE: '/nav/mini',
  },
  ERROR: {
    INTERNAL_SERVER_ERROR: '/500',
  },
} as const;
