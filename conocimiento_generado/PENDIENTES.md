# Pendientes de Calzado Guibol

Este sitio es un **demo para presentar al cliente**, publicado en
<https://demos.emp2web.com/calzadoguibol/> desde el 24 nov 2026. Lo siguiente no es
definitivo.

## Fotos y nombres de producto

- Las 16 fotos son de **Pexels** (licencia Pexels, uso comercial permitido), no del fabricante.
  Están en `public/img/`. Falta que Calzado Guibol aporte fotos propias y revisarlas en pantalla.
- Los 16 nombres de modelos son descriptivos, inventados para la muestra. Confirmar con el dueño.
- El **Tenis blanco Flash** se creó para esta demo a petición del dueño. Su nombre, sus
  tallas y su precio de $150.000 son de muestra: confirmarlos antes de pasar al sitio
  definitivo.
- Las tallas `38` a `44` son de muestra. Confirmar las tallas reales por modelo.

## Datos del negocio

- NIT, correo, dirección, ciudad, horario, redes y dominio: sin definir.
- WhatsApp **320 270 6283** fue entregado para el demo; confirmar que es el definitivo.
- No hay logo de marca: se usa logotipo tipográfico y favicon provisional.
- Condiciones de envío, pedidos mínimos, plazos y descuentos: sin definir. No se publican
  promesas al respecto.

## Contenido y revisión

- Falta revisión visual en 320, 375 y 390 px y en tema oscuro con una persona mirando (Fase 5.5
  del generador). Quien construyó el sitio no puede ver el renderizado. El dueño aprobó
  publicar la demo, pero eso no sustituye esa revisión.
- Auditoría técnica hecha el 22 nov 2026: contraste en claro y oscuro, foco de teclado,
  tamaños 390/768/1440 px y pruebas automáticas de accesibilidad, SEO y buenas prácticas
  (100 en las tres, sin avisos). Esto **no sustituye** la revisión de una persona mirando.
- El carrito se probó completo el 23 nov 2026: agregar desde tarjeta y ficha, dos tallas del
  mismo modelo como líneas separadas, cantidades, total, persistencia al recargar, panel en
  claro y oscuro, y mensaje final consolidado sin campos vacíos. Falta que una persona lo
  mire y lo apruebe en la versión publicada.
- La promo Flash se probó el 23 nov 2026: ventana al entrar, cierre con Escape y botón,
  reapertura desde el bloque del inicio, contador compartido entre ventana y bloque, y bloque
  visible en la home. Falta la revisión visual de una persona. Es **de muestra**: el
  contador de 2 horas no baja el precio, no ofrece descuento, envío gratis ni plazos.
  El navegador recuerda la ventana con `calzado-guibol-promo-vista`; para volver a verla,
  borrar esa clave.
- Los modelos sugeridos dentro del carrito se probaron el 23 nov 2026: se eligen de la misma
  línea del último modelo agregado, se puede elegir talla y agregarlos, y la talla elegida
  se conserva al actualizarse el panel. No hay una lista revisada por el dueño.
- El Tenis blanco Flash y su precio de $150.000 se agregaron el 23 nov 2026. Ya aparece en
  la demo publicada (bloque de la promo, ficha, colección Tenis y carrito); falta que una
  persona lo mire antes de darlo por definitivo.
- Faltan páginas legales (política de privacidad, términos, tratamiento de datos). No se
  inventaron textos legales para el demo; los enlaces del pie se dejaron vacíos a propósito.
- Demo publicada con aprobación explícita del dueño el 24 nov 2026. El repositorio
  `Gestiona2/calzadoguibol` es de demostración del proveedor: el día de la entrega se crea
  el repositorio del cliente. `scripts/publicar-demo.sh` publica la rama `gh-pages` sin
  borrar historial.

## Decisiones deliberadamente tomadas

- No se activó blog, notificaciones de Telegram ni catálogo con planilla de Excel: el precio
  es fijo y el dueño no pidió esos módulos.
- Sí hay carrito, a petición del dueño, pero **no hay pago en línea ni servidor**: el pedido
  se junta en el navegador y se envía como un solo mensaje de WhatsApp. Se quitaron los
  botones de WhatsApp por producto y el botón flotante para que no haya dos formas distintas
  de pedir. La página de contacto conserva WhatsApp solo para consultas.
- No se promete envío gratis ni plazo de entrega: las condiciones están sin definir y el
  carrito no escribe esa promesa en el mensaje.
- La promo Flash no es una oferta: el contador es decorativo y no baja precios. Muestra el
  Tenis blanco Flash a $150.000 y recuerda que los otros 15 siguen a $200.000. La nota de la
  ventana y del bloque lo dice abiertamente.
- Sin analítica ni formulario con backend: los formularios solo arman mensajes de WhatsApp.
