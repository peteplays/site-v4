import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      filter: (source) =>
        /\.(png|jpe?g|gif|svg)$/i.test(source) && !source.includes("g4s"),
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 5,
      },
      mozjpeg: {
        quality: 45,
        progressive: true,
      },
      pngquant: {
        quality: [0.5, 0.7],
        speed: 3,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "cleanupIDs", active: true },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
