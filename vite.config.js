import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/JASDEGst-Digital-Marketing-SEO-Agency/",
  plugins: [
    react(),
    tailwindcss(),
  ],
});