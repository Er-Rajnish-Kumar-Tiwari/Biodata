import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",

    server: {
      allowedHosts: true,
    },

    define: {
      global: "globalThis",
      process: {
        env: {},
      },
    },
  },
});