import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  site: "https://vilanova.severinobiu.com.br",
  output: "static",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": srcDir,
      },
    },
    // Evita 504 "Outdated Optimize Dep" com lucide-react em ilhas (dev).
    optimizeDeps: {
      include: ["lucide-react"],
    },
    ssr: {
      noExternal: ["lucide-react"],
    },
  },
});
