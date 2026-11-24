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
- Faltan páginas legales (política de privacidad, términos, tratamiento de datos). No se
  inventaron textos legales para el demo; los enlaces del pie se dejaron vacíos a propósito.
- Publicación sin decidir con el cliente. `astro.config.mjs` apunta a la demo prevista.
- Sin repositorio remoto: se crea con el cliente cuando se decida la publicación. Hasta
  entonces `doctor.sh` avisará de que el sitio "no está conectado a ningún lugar de
  publicación". No es un fallo del sitio; no inventes un remoto para callar el aviso.

## Decisiones deliberadamente tomadas

- No se activó blog, notificaciones de Telegram ni catálogo con planilla de Excel: el precio
  es fijo y el dueño no pidió esos módulos.
- No hay carrito ni pago en línea: el pedido se conversa por WhatsApp.
- Sin analítica ni formulario con backend: el formulario solo arma el mensaje de WhatsApp.
