/**
 * This file defines the environment variables used in the application.
 * These variables are injected at build time by Vite and accessed via `import.meta.env`.
 * To use these variables in the application, import this file and use the `ENV` object.
 */

export const ENV = {
  /**
   * The current environment of the application.
   * Can be one of 'development', 'production', 'staging', or 'test'.
   */
  NODE_ENV: process.env.NODE_ENV,

  /**
   * The port number on which the application runs during development.
   */
  VITE_PORT: import.meta.env.VITE_PORT,

  /**
   * API configurations for various services.
   * Each service has a base URL and an API key for authentication.
   */
  APIS: {
    BASE_URL: import.meta.env.VITE__API_URL,
    API_KEY: import.meta.env.VITE__API_KEY,
  },
};
