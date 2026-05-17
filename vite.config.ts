import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
    server: {
      allowedHosts: true,
    },
    // Yeh niche wali line process error ko jadd se khatam kar degi
    define: {
      "process.env": {},
      "process.browser": true,
    },
  },
});