/**
 * This file defines the environment variables used in the application.
 * These variables are injected at build time by Vite and accessed via `import.meta.env`.
 * To use these variables in the application, import this file and use the `ENV` object.
 */

export const ENV = {
  /**
   * The port number on which the application runs during development.
   */
  PORT: import.meta.env.VITE_PORT,

  /**
   * The base URL for the API that the application interacts with.
   * This is typically used for making network requests to the backend.
   */
  API_URL: import.meta.env.VITE_API_URL,

  /**
   * The API key used for accessing third-party services or APIs.
   * This should be kept secret and not exposed in the client-side code.
   */
  API_KEY: import.meta.env.VITE_API_KEY,
};
