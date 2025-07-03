// ============================================================
// API Client with Axios Interceptors
// - Handles request authentication, error handling, and retries
// ============================================================

import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { ENV } from '@/configs/env';

/**
 * Function to create an Axios instance for a specific API.
 * @param {string} baseUrl - The base URL of the API.
 * @param {string} apiKey - The API key for authentication.
 * @returns {AxiosInstance} - Configured Axios instance.
 */
const createApiClient = (baseUrl: string, apiKey: string): AxiosInstance => {
  const apiClient: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // 10 seconds timeout
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true, // Include cookies in requests
  });

  // Request Interceptor
  apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem('access_token'); // Retrieve token from storage

      // Add Authorization header if token is available
      if (token) config.headers.set('Authorization', `Bearer ${token}`);

      // Add API key to headers
      if (apiKey) config.headers.set('x-api-key', apiKey);

      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  // Response Interceptor
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => response, // Return response data directly
    async (error: AxiosError) => {
      console.error('[API Response Error]:', error);

      // Handle 401 Unauthorized: Refresh token if needed
      if (error.response?.status === 401) {
        console.warn('Unauthorized! Attempting token refresh...');
        // Handle token refresh logic here (if applicable)
      }

      return Promise.reject(error);
    }
  );

  return apiClient;
};

// Create Axios instances for each API
export const clinicApi = createApiClient(ENV.APIS.BASE_URL, ENV.APIS.API_KEY);

// Add more API clients as needed...
