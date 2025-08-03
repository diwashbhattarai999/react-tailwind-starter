// TypeScript IntelliSense for VITE_ .env variables.
// VITE_ prefixed variables are exposed to the client while non-VITE_ variables aren't
// https://vitejs.dev/guide/env-and-mode.html

/// <reference types="vite/client" />

/**
 * Interface for environment variables used in the application.
 * These variables are injected at build time by Vite.
 */
interface ImportMetaEnv {
  /**
   * The port number on which the application runs during development.
   */
  readonly VITE_PORT: number;

  /**
   * The base URL for the application, used for routing and API calls.
   */
  readonly VITE_BASE_URL: string;

  /**
   * Base URL for API.
   */
  readonly VITE_API_URL: string;

  /**
   * API key for authenticating requests to the API.
   */
  readonly VITE_API_KEY: string;
}

/**
 * Interface for the `import.meta` object.
 * Provides access to the environment variables through `import.meta.env`.
 */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
