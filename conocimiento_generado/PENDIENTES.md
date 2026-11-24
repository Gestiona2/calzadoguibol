# Pendientes de Calzado Guibol

Este sitio es un **demo para presentar al cliente**. Lo siguiente no es definitivo.

## Fotos y nombres de producto

- Las 15 fotos son de **Pexels** (licencia Pexels, uso comercial permitido), no del fabricante.
  Están en `public/img/`. Falta que Calzado Guibol aporte fotos propias y revisarlas en pantalla.
- Los 15 nombres de modelos son descriptivos, inventados para la muestra. Confirmar con el dueño.
- Las tallas `38` a `44` son de muestra. Confirmar las tallas reales por modelo.

## Datos del negocio

- NIT, correo, dirección, ciudad, horario, redes y dominio: sin definir.
- WhatsApp **320 270 6283** fue entregado para el demo; confirmar que es el definitivo.
- No hay logo de marca: se usa logotipo tipográfico y favicon provisional.
- Condiciones de envío, pedidos mínimos, plazos y descuentos: sin definir. No se publican
  promesas al respecto.

## Contenido y revisión

- Falta revisión visual en 320, 375 y 390 px y en tema oscuro con una persona mirando (Fase 5.5
  del generador). Quien construyó el sitio no puede ver el renderizado.
- Auditoría técnica hecha el 22 nov 2026: contraste en claro y oscuro, foco de teclado,
  tamaños 390/768/1440 px y pruebas automáticas de accesibilidad, SEO y buenas prácticas
  (100 en las tres, sin avisos). Esto **no sustituye** la revisión de una persona mirando.
- El carrito se probó completo el 23 nov 2026: agregar desde tarjeta y ficha, dos tallas del
  mismo modelo como líneas separadas, cantidades, total, persistencia al recargar, panel en
  claro y oscuro, y mensaje final consolidado sin campos vacíos. Falta que una persona lo
  mire y lo apruebe en la vista previa antes de publicar.
- La promo Flash se probó el 23 nov 2026: ventana al entrar, cierre con Escape y botón,
  reapertura desde el bloque del inicio, contador compartido entre ventana y bloque, y bloque
  visible en la home. Falta la revisión visual de una persona. Es **de muestra**: el
  contador de 2 horas no baja el precio, no ofrece descuento, envío gratis ni plazos.
  El navegador recuerda la ventana con `calzado-guibol-promo-vista`; para volver a verla,
  borrar esa clave.
- Los modelos sugeridos dentro del carrito se probaron el 23 nov 2026: se eligen de la misma
  línea del último modelo agregado, se puede elegir talla y agregarlos, y la talla elegida
  se conserva al actualizarse el panel. No hay una lista revisada por el dueño.
- Faltan páginas legales (política de privacidad, términos, tratamiento de datos). No se
  inventaron textos legales para el demo; los enlaces del pie se dejaron vacíos a propósito.
- Publicación sin decidir con el cliente. `astro.config.mjs` apunta a la demo prevista.
- Sin repositorio remoto: se crea con el cliente cuando se decida la publicación. Hasta
  entonces `doctor.sh` avisará de que el sitio "no está conectado a ningún lugar de
  publicación". No es un fallo del sitio; no inventes un remoto para callar el aviso.

## Decisiones deliberadamente tomadas

- No se activó blog, notificaciones de Telegram ni catálogo con planilla de Excel: el precio
  es fijo y el dueño no pidió esos módulos.
- Sí hay carrito, a petición del dueño, pero **no hay pago en línea ni servidor**: el pedido
  se junta en el navegador y se envía como un solo mensaje de WhatsApp. Se quitaron los
  botones de WhatsApp por producto y el botón flotante para que no haya dos formas distintas
  de pedir. La página de contacto conserva WhatsApp solo para consultas.
- No se promete envío gratis ni plazo de entrega: las condiciones están sin definir y el
  carrito no escribe esa promesa en el mensaje.
- La promo Flash no es una oferta: el contador es decorativo, el precio sigue siendo $200.000
  en los 15 modelos y la nota de la ventana y del bloque lo dice abiertamente.
- Sin analítica ni formulario con backend: los formularios solo arman mensajes de WhatsApp.
