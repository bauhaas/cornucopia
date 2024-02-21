import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: process.env.LOCAL_DEV
      ? undefined
      : {
          "/api": {
            target: "http://localhost:3000",
            changeOrigin: true,
          },
        },
  },
});
