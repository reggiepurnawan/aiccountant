import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

// Determine if we are running Storybook
const isStorybook = process.env.STORYBOOK === "true";
console.log(`Vite Config: Running in Storybook mode? ${isStorybook}`);

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // Only include the Remix plugin when not running Storybook
    !isStorybook && remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
  ].filter(Boolean), // Filter out any false values
  resolve: {
    alias: {
      "~": "/app",
    },
  },
  css: {
    // Explicitly point to your postcss config file
    postcss: './postcss.config.cjs',
  },
  ...(isStorybook && {
    // Storybook-specific configuration:
    optimizeDeps: {
      include: ["@storybook/react"],
    },
    build: {
      rollupOptions: {
        external: ["@remix-run/node"],
      },
    },
  }),
});
