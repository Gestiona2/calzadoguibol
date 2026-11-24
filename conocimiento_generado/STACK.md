# Con qué está hecho el sitio

- **Astro 7.0** (sitio estático, sin servidor) + **Tailwind CSS 4.1** (`@tailwindcss/vite`)
- **Lucide**: subconjunto local de íconos en `public/vendor/lucide/lucide.min.js`
- **Tipografías**: Fraunces y Manrope, archivos woff2 locales en `src/fonts/`
- **Fotos**: 16 WebP en `public/img/`, de Pexels, guardadas dentro del sitio
- **Carrito**: lógica propia en `src/scripts/` (sin librerías), guardada en `localStorage`
- Sin bases de datos, sin API keys, sin formularios con backend

Versiones exactas: `package.json` y `package-lock.json`.

**Por qué las fuentes están en `src/fonts/` y no en `public/`:** Vite las procesa y les
aplica la base del sitio, así que cargan igual en la vista previa (`/calzadoguibol/...`)
que en un dominio propio (`/`). Los recursos que sí quedan en `public/` (favicon, íconos,
fotos) se referencian desde los `.astro` con `ruta()` para que lleven la base correcta.

## Dónde está cada cosa

```
src/datos/            Todo el texto editable (11 archivos JSON)
src/pages/index.astro                 Inicio
src/pages/coleccion/[slug].astro      Las 3 colecciones
src/pages/producto/[slug].astro       Las 16 fichas
src/pages/contacto.astro              Contacto
src/pages/404.astro                   Página no encontrada
src/layouts/Layout.astro              Menú, pie, tema y panel del carrito
src/components/TarjetaProducto.astro  Tarjeta de modelo con talla y botón de agregar
src/scripts/carrito.js                Panel, cantidades, sugerencias, formulario y cierre del pedido
src/scripts/promo.js                  Ventana emergente, reapertura y contador de muestra
src/scripts/pedido.js                 Sumas, tallas y mensaje de WhatsApp (sin pantalla)
src/scripts/formato.js                Precios en pesos colombianos
src/lib/ruta.js                       Enlaces y rutas con la base del sitio
src/styles/global.css                 Tokens de marca y todos los estilos
src/fonts/                             Tipografías locales (Vite las versiona)
public/brand/                          Favicon
public/img/                            Fotografías
public/vendor/                         Íconos
conocimiento_generado/                 Esta documentación
docs/MARCA.md                          Manual de marca completo
```

## Publicación de la demo

La demo está publicada en <https://demos.emp2web.com/calzadoguibol/>. `scripts/publicar-demo.sh`
compila y sube `dist/` a `gh-pages` del repo de demostración `Gestiona2/calzadoguibol`.

`astro.config.mjs` usa `site: https://demos.emp2web.com` y `base: /calzadoguibol` para la
demo. Para publicar en dominio propio se cambia con variables de entorno, sin tocar enlaces:

```
PUBLIC_SITE=https://www.calzadoguibol.com PUBLIC_BASE=/ npm run build
```

Todos los enlaces internos y las rutas de imágenes pasan por `src/lib/ruta.js`, que ya
aplica esa base. El carrito lee la base desde el atributo `data-base` del elemento `<html>`
para que las fotos del pedido carguen igual en la demo que en un dominio propio.

**Por qué el pedido está separado en `pedido.js`:** las sumas, las tallas y el mensaje se
prueban sin navegador. `carrito.js` solo pinta y recoge lo que la persona escribe. El
carrito se guarda en `localStorage` bajo la clave `calzado-guibol-pedido`; si el navegador
lo bloquea, el carrito sigue funcionando durante la visita.

**Sugerencias y promo:** el panel del carrito recibe un catálogo compacto desde
`Layout.astro` y elige los modelos sugeridos en el navegador, sin guardarlos en ningún
servidor. La ventana Flash se recuerda en `localStorage` bajo `calzado-guibol-promo-vista`
(contiene la hora de fin del contador); el contador se reinicia sola al vencerse y nunca
modifica los precios. Si se quiere ver la ventana otra vez desde cero, borrar esa clave.
