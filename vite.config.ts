import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import path from "path";

export default ({ mode }: { mode: string }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],

    // ============================================================
    // Development Server Configuration
    // - port: The port on which the dev server runs
    // - open: Automatically opens the browser when the server starts
    // ============================================================
    server: {
      port: Number(process.env.VITE_PORT) || 3000,
      // open: true,
    },

    // ============================================================
    // Preview Configuration
    // - port: The port on which the preview server runs
    // ============================================================
    preview: {
      port: Number(process.env.VITE_PORT) || 8000,
    },

    // ============================================================
    // Build Configuration
    // - outDir: Output directory for the build
    // - minify: Specifies the minification strategy ('terser' used for better compression)
    // - sourcemap: Generates source maps for debugging in development mode
    // ============================================================
    build: {
      outDir: "dist",
      minify: "terser",
      sourcemap: process.env.NODE_ENV === "development",
    },

    // ============================================================
    // Module Resolution Configuration
    // - alias: Defines path aliases to simplify imports (e.g. When importing '@/components', it will resolve to 'src/components')
    // ============================================================
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
