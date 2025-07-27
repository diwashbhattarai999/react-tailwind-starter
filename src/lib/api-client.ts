import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { ENV } from '@/configs/env';

/**
 * Interceptors type definition for request and response interceptors.
 * It allows customization of request and response handling in the Axios instance.
 */
type Interceptors = {
  onRequest?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  onRequestError?: (error: AxiosError) => Promise<never>;
  onResponse?: (response: AxiosResponse) => AxiosResponse;
  onResponseError?: (error: AxiosError) => Promise<never>;
};

interface CreateApiInstanceParams {
  baseUrl: string;
  apiKey: string;
  interceptors?: Interceptors;
}

/**
 * Creates an Axios instance with the provided base URL and interceptors.
 * This function sets up the Axios instance with default headers, timeout, and request/response interceptors.
 *
 * @param {CreateApiInstanceParams} params - The parameters for creating the API instance.
 * @returns {AxiosInstance} - The configured Axios instance.
 */
const createApiInstance = ({
  apiKey,
  baseUrl,
  interceptors,
}: CreateApiInstanceParams): AxiosInstance => {
  // Create an Axios instance with the provided base URL and default settings
  const apiInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // 10 seconds timeout
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true, // Include cookies in requests
  });

  /**
   * Request Interceptor
   *
   * It uses the onRequest or onRequestError function from the interceptors object if provided,
   * otherwise it uses a default function that adds an Authorization header
   * with a token from localStorage and an API key to the request headers.
   */
  apiInstance.interceptors.request.use(
    // Use provided onRequest interceptor or default one
    interceptors?.onRequest ??
      ((config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('access_token'); // Retrieve token from storage

        // Add Authorization header if token is available
        if (token) config.headers.set('Authorization', `Bearer ${token}`);

        // Add API key to headers
        if (apiKey) config.headers.set('x-api-key', apiKey);

        return config;
      }),

    // Use provided onRequestError interceptor or default one
    interceptors?.onRequestError ?? ((error: AxiosError) => Promise.reject(error))
  );

  /**
   * Response Interceptor
   *
   * It uses the onResponse or onResponseError function from the interceptors object if provided,
   * otherwise it returns the response data directly or handles errors.
   */
  apiInstance.interceptors.response.use(
    // Use provided onResponse interceptor or default one
    interceptors?.onResponse ?? ((response: AxiosResponse) => response),

    // Use provided onResponseError interceptor or default one
    interceptors?.onResponseError ??
      (async (error: AxiosError) => {
        // eslint-disable-next-line no-console
        console.error('[API Response Error]:', error);

        // Handle 401 Unauthorized: Refresh token if needed
        if (error.response?.status === 401) {
          // eslint-disable-next-line no-console
          console.warn('Unauthorized! Attempting token refresh...');
          // Handle token refresh logic here (if applicable)
        }

        return Promise.reject(error);
      })
  );

  return apiInstance;
};

// Create Axios instances for each API
export const apiClient = createApiInstance({
  baseUrl: ENV.APIS.BASE_URL,
  apiKey: ENV.APIS.API_KEY,
});
