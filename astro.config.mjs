import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Demo prevista en https://demos.emp2web.com/calzadoguibol
// Si el cliente publica en su propio dominio:
//   PUBLIC_SITE=https://calzadoguibol.com PUBLIC_BASE=/ npm run build
// Los enlaces y recursos pasan por src/lib/ruta.js, así que no hay que tocarlos.
export default defineConfig({
  site: process.env.PUBLIC_SITE || "https://demos.emp2web.com",
  base: process.env.PUBLIC_BASE || "/calzadoguibol",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
