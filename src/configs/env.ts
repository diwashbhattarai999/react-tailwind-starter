/**
 * This file defines the environment variables used in the application.
 * These variables are injected at build time by Vite and accessed via `import.meta.env`.
 * To use these variables in the application, import this file and use the `ENV` object.
 */

type EnvVariables = Pick<
  ImportMetaEnv,
  'VITE_PORT' | 'VITE_API_URL' | 'VITE_API_KEY' | 'VITE_BASE_URL'
>;

export const ENV: EnvVariables = {
  /**
   * The port number on which the application runs during development.
   */
  VITE_PORT: import.meta.env.VITE_PORT,

  /**
   * The base URL for the application, used for routing and API calls.
   */
  VITE_BASE_URL: import.meta.env.VITE_BASE_URL,

  /**
   * The base URL for the API that the application interacts with.
   * This is typically used for making network requests to the backend.
   */
  VITE_API_URL: import.meta.env.VITE_API_URL,

  /**
   * The API key used for accessing third-party services or APIs.
   * This should be kept secret and not exposed in the client-side code.
   */
  VITE_API_KEY: import.meta.env.VITE_API_KEY,
};
