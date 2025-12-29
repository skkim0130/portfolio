// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/portfolio/", // project name
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS에서도 @ 쓸 수 있게
        includePaths: [path.resolve(__dirname, "src")],
        // 모든 SCSS 파일에 자동으로 주입
        additionalData: `
          @use "sass:map";
          @use "@/assets/scss/utils" as *;
        `,
      },
    },
  },
  server: {
    open: true,
    port: 4000,
  },
});
