import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Multi-page build configuration.
 * Used by `node scripts/build-pages.mjs` (client build + SSR pre-render).
 * The default `vite.config.ts` still produces the single-file bundle.
 */
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  base: "/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: isSsrBuild ? ".ssr-tmp" : "dist",
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Same asset naming for client + SSR so pre-rendered <img src> matches the emitted files
        assetFileNames: (info) => {
          const n = info.names?.[0] ?? "";
          if (/\.(woff2?|ttf|otf)$/.test(n)) return "assets/fonts/[name]-[hash][extname]";
          if (/\.(jpe?g|png|webp|svg)$/.test(n)) return "assets/images/[name]-[hash][extname]";
          if (/\.css$/.test(n)) return "assets/app-[hash][extname]";
          return "assets/[name]-[hash][extname]";
        },
        ...(isSsrBuild
          ? { entryFileNames: "[name].mjs" }
          : { entryFileNames: "assets/app-[hash].js", chunkFileNames: "assets/[name]-[hash].js" }),
      },
    },
  },
  ssr: { noExternal: ["clsx", "tailwind-merge"] },
}));
