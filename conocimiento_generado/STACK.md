# Con qué está hecho el sitio

- **Astro 7.0** (sitio estático, sin servidor) + **Tailwind CSS 4.1** (`@tailwindcss/vite`)
- **Lucide**: subconjunto local de íconos en `public/vendor/lucide/lucide.min.js`
- **Tipografías**: Fraunces y Manrope, archivos woff2 locales en `src/fonts/`
- **Fotos**: 15 WebP en `public/img/`, de Pexels, guardadas dentro del sitio
- Sin bases de datos, sin API keys, sin formularios con backend

Versiones exactas: `package.json` y `package-lock.json`.

**Por qué las fuentes están en `src/fonts/` y no en `public/`:** Vite las procesa y les
aplica la base del sitio, así que cargan igual en la vista previa (`/calzadoguibol/...`)
que en un dominio propio (`/`). Los recursos que sí quedan en `public/` (favicon, íconos,
fotos) se referencian desde los `.astro` con `ruta()` para que lleven la base correcta.

## Dónde está cada cosa

```
src/datos/            Todo el texto editable (9 archivos JSON)
src/pages/index.astro                 Inicio
src/pages/coleccion/[slug].astro      Las 3 colecciones
src/pages/producto/[slug].astro       Las 15 fichas
src/pages/contacto.astro              Contacto
src/pages/404.astro                   Página no encontrada
src/layouts/Layout.astro              Menú, pie, tema y botones flotantes
src/components/TarjetaProducto.astro  Tarjeta reutilizable de modelo
src/lib/ruta.js                       Enlaces y rutas con la base del sitio
src/styles/global.css                 Tokens de marca y todos los estilos
src/fonts/                             Tipografías locales (Vite las versiona)
public/brand/                          Favicon
public/img/                            Fotografías
public/vendor/                         Íconos
conocimiento_generado/                 Esta documentación
docs/MARCA.md                          Manual de marca completo
```

## Publicación prevista

`astro.config.mjs` usa `site: https://demos.emp2web.com` y `base: /calzadoguibol` para la
demo. Para publicar en dominio propio se cambia con variables de entorno, sin tocar enlaces:

```
PUBLIC_SITE=https://www.calzadoguibol.com PUBLIC_BASE=/ npm run build
```

Todos los enlaces internos y las rutas de imágenes pasan por `src/lib/ruta.js`, que ya
aplica esa base.
