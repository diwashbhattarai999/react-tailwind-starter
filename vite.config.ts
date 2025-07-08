// ============================================================
// Vite Configuration File
// This file configures the Vite development and build setup
// ============================================================

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default ({ mode }: { mode: string }) => {
  // ============================================================
  // Load environment variables based on the current mode
  // This merges the existing process.env with the environment variables
  // from the .env file corresponding to the specified mode
  // ============================================================
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // ============================================================
    // Plugins
    // Adding support for React and TailwindCSS
    // ============================================================
    plugins: [react(), tailwindcss()],

    // ============================================================
    // Development Server Configuration
    // - port: The port on which the dev server runs
    // - open: Automatically opens the browser when the server starts
    // ============================================================
    server: {
      port: Number(process.env.VITE_PORT) || 5173,
      // open: true,
    },

    // ============================================================
    // Module Resolution Configuration
    // - alias: Defines path aliases to simplify imports (e.g. When importing '@/components', it will resolve to 'src/components')
    // ============================================================
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
};
