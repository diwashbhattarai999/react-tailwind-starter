import axios, {
    type AxiosError,
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from "axios";

import { ENV } from "@/configs/env";

/**
 * Custom interceptor handlers for the Axios instance.
 *
 * These allow consumers to override default request and response behavior.
 */
interface Interceptors {
    /**
     * Executes before the request is sent.
     */
    onRequest?: (
        config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig;

    /**
     * Handles request errors before they are sent.
     */
    onRequestError?: (error: AxiosError) => Promise<never>;

    /**
     * Executes after a successful response is received.
     */
    onResponse?: (response: AxiosResponse) => AxiosResponse;

    /**
     * Handles response errors.
     */
    onResponseError?: (error: AxiosError) => Promise<never>;
}

/**
 * Parameters required to create an API client instance.
 */
interface CreateApiInstanceParams {
    /**
     * API key sent with every request.
     */
    apiKey?: string;

    /**
     * Base URL for all API requests.
     */
    baseUrl: string;

    /**
     * Optional custom interceptors.
     */
    interceptors?: Interceptors;
}

/**
 * Creates a configured Axios instance for API communication.
 *
 * Responsibilities:
 * - Sets base configuration for requests
 * - Adds authentication headers
 * - Attaches request and response interceptors
 * - Provides centralized error handling
 *
 * @param params Configuration parameters for the API instance.
 *
 * @returns {AxiosInstance}
 *
 * @example
 * ```ts
 * const api = createApiInstance({
 *   baseUrl: "https://api.example.com",
 *   apiKey: "abc123",
 * });
 * ```
 *
 * @remarks
 * - Automatically attaches:
 *   - `Authorization` header from localStorage
 *   - `x-api-key`
 * - Includes cookies via `withCredentials`
 * - Handles unauthorized responses (401)
 */
const createApiInstance = ({
    apiKey,
    baseUrl,
    interceptors,
}: CreateApiInstanceParams): AxiosInstance => {
    const apiInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        timeout: 10_000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        // withCredentials: true, // Uncomment if API requires cookies for auth/session management
    });

    /**
     * Request interceptor.
     *
     * Adds authentication headers and executes optional custom logic.
     */
    apiInstance.interceptors.request.use(
        interceptors?.onRequest ??
            ((config: InternalAxiosRequestConfig) => {
                const token = localStorage.getItem("access_token");

                if (token)
                    config.headers.set("Authorization", `Bearer ${token}`);

                if (apiKey) config.headers.set("x-api-key", apiKey);

                return config;
            }),
        interceptors?.onRequestError ??
            ((error: AxiosError) => Promise.reject(error))
    );

    /**
     * Response interceptor.
     *
     * Centralizes response transformation and error handling.
     */
    apiInstance.interceptors.response.use(
        interceptors?.onResponse ?? ((response) => response),
        interceptors?.onResponseError ??
            ((error: AxiosError) => {
                console.error("[API Response Error]:", error);

                if (error.response?.status === 401) {
                    console.warn(
                        "Unauthorized request detected. Token refresh may be required."
                    );
                }

                return Promise.reject(error);
            })
    );

    return apiInstance;
};

/**
 * Default API client used throughout the application.
 */
export const apiClient = createApiInstance({
    baseUrl: ENV.VITE_API_URL,
    apiKey: ENV.VITE_API_KEY,
});
