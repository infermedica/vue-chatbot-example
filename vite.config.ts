import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    ViteComponents({
      dirs: ["./src/components"],
      extensions: ["vue"],
      deep: false,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/index.scss";`,
      },
    },
  },
});
