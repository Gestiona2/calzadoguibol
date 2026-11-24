# Límites del sitio — Calzado Guibol

Este archivo define el alcance de la demo y evita que el día de la entrega se
asuma que algo está incluido cuando no lo está.

## Lo que SÍ está incluido en esta demo

- **Home** con hero, catálogo destacado, colecciones, pasos y preguntas frecuentes.
- **3 páginas de colección**: Elegante, Tenis y Casual (`/coleccion/<slug>`).
- **Página de contacto** (`/contacto`) con WhatsApp para consultas y formulario que abre
  WhatsApp. Es el único WhatsApp directo que queda: ya no hay botón por producto ni botón
  flotante.
- **16 fichas de producto** (`/producto/<slug>`) con galería, tallas demo y botón de
  agregar al carrito.
- **Carrito y pedido**: selector de talla en tarjetas y fichas, varias líneas por modelo y
  talla, cantidades, quitar/vaciar, datos de entrega y un solo mensaje de WhatsApp con el
  pedido completo. Se guarda en el navegador.
- **Promo Flash**: ventana emergente una vez por navegador y bloque en el inicio, con un
  contador de muestra y un botón para volver a abrir la ventana. El bloque muestra el Tenis
  blanco Flash a $150.000, con talla y botón para agregarlo al pedido. No baja precios.
- **Sugerencias dentro del carrito**: otros modelos de la misma línea con selector de talla
  y botón de agregar al pedido.
- Diseño responsive, tema claro/oscuro, menú accesible, navegación y estados de
  error (404).
- Fotos de demostración descargadas de Pexels y guardadas en `public/img/`.

## Lo que NO está incluido

- **Pago en línea ni pasarela.** El carrito junta el pedido pero no cobra: el negocio
  confirma y acuerda el pago en la conversación de WhatsApp.
- **Servidor, base de datos ni envío real de pedidos.** El carrito se guarda solo en el
  navegador de quien lo arma; el pedido arma un mensaje y abre WhatsApp. No persiste en el
  negocio, no envía correos y no genera comprobantes.
- **Condiciones de envío.** No se promete domicilio gratis, plazos ni pedido mínimo: esos
  datos están sin definir y el mensaje no los inventa.
- **Descuentos ni ofertas reales.** La promo Flash es de presentación: su contador no baja
  los precios publicados ($200.000 en 15 modelos y $150.000 en el modelo Flash) y no
  habilita ningún beneficio.
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
- Las fuentes (Fraunces, Manrope) se sirven localmente desde `src/fonts/`.
- Los precios son fijos para toda la demo: 15 modelos a $200.000 y el Tenis blanco Flash a
  $150.000, definidos en `src/datos/productos.json` y repetidos en los textos de
  `inicio.json`, `sitio.json`, `promo.json` y las colecciones.
- El número de WhatsApp de la demo es `573202706283` y está centralizado en
  `src/datos/sitio.json`.
- La ventana Flash se recuerda en `localStorage` bajo `calzado-guibol-promo-vista`. Guarda
  solo la hora de fin del contador de muestra; no guarda datos de la persona ni del pedido.

## Antes de publicar la demo

Revisar `conocimiento_generado/PENDIENTES.md`: contiene la lista de datos y
revisiones que faltan para pasar de demo a sitio definitivo.
