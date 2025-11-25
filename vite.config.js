import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    // Performance optimizations
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunking for better caching
          if (id.includes("node_modules")) {
            // React vendor chunk
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("scheduler")
            ) {
              return "react";
            }
            // Motion vendor chunk
            if (id.includes("framer-motion") || id.includes("motion")) {
              return "motion";
            }
            // Swiper vendor chunk
            if (id.includes("swiper")) {
              return "swiper";
            }
            // i18n vendor chunk
            if (id.includes("i18next") || id.includes("react-i18next")) {
              return "i18n";
            }
            // Icons vendor chunk (biggest - split further if needed)
            if (id.includes("lucide-react")) {
              return "icons";
            }
            // Lenis smooth scroll
            if (id.includes("lenis")) {
              return "lenis";
            }
            // Zustand state management
            if (id.includes("zustand")) {
              return "zustand";
            }
            // Other vendor packages
            return "vendor";
          }
        },
        // Asset naming for better caching
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps for production
  },
  // Enable SWC for faster builds (if available)
  esbuild: {
    legalComments: "none",
    treeShaking: true,
  },
  // Optimize deps
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-i18next",
      "i18next",
      "zustand",
      "lenis",
    ],
    exclude: ["lucide-react"], // Tree-shake unused icons
  },
});
