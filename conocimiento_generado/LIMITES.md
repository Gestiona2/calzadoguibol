# Límites del sitio — Calzado Guibol

Este archivo define el alcance de la demo y evita que el día de la entrega se
asuma que algo está incluido cuando no lo está.

## Lo que SÍ está incluido en esta demo

- **Home** con hero, catálogo destacado, colecciones, pasos y preguntas frecuentes.
- **3 páginas de colección**: Elegante, Tenis y Casual (`/coleccion/<slug>`).
- **Página de contacto** (`/contacto`) con formulario que abre WhatsApp.
- **15 fichas de producto** (`/producto/<slug>`) con galería, tallas demo y enlace
  directo de consulta por WhatsApp.
- Diseño responsive, tema claro/oscuro, menú accesible, navegación y estados de
  error (404).
- Fotos de demostración descargadas de Pexels y guardadas en `public/img/`.

## Lo que NO está incluido

- **Carrito de compras ni pago en línea.** El sitio es informativo/escaparate;
  la compra se coordina por WhatsApp.
- **Backend, base de datos ni envío real de formularios.** El formulario arma un
  mensaje y abre WhatsApp; no persiste ni envía correos.
- **Panel de administración** para editar productos desde el navegador. El
  contenido se edita en los archivos JSON de `src/datos/`.
- **Nombres de modelos, tallas y descripciones reales.** Los actuales son
  demostrativos y deben ser confirmados por Calzado Guibol.
- **Fotos propias del negocio.** Las fotos actuales son de banco de imágenes;
  deben reemplazarse por fotografía real del producto.
- **Páginas legales** (política de privacidad, términos, devoluciones). No se
  incluyen en esta demo; deben añadirse antes de publicar.
- **Dominio propio ni hosting de producción.** La demo se publica en el
  subdominio de demostración previsto en `astro.config.mjs`.

## Límites técnicos

- No se instalan dependencias de pago ni servicios externos de terceros.
- Las fuentes (Fraunces, Manrope) se sirven localmente desde `public/fonts/`.
- El precio es único y fijo para toda la demo: todo a $200.000, definido en
  `src/datos/inicio.json` y `src/datos/sitio.json`.
- El número de WhatsApp de la demo es `573202706283` y está centralizado en
  `src/datos/sitio.json`.

## Antes de publicar la demo

Revisar `conocimiento_generado/PENDIENTES.md`: contiene la lista de datos y
revisiones que faltan para pasar de demo a sitio definitivo.
