# El sitio de Calzado Guibol

## El negocio

Calzado Guibol fabrica calzado en cuero. Las tres líneas que se muestran son **Elegante**,
**Tenis** y **Casual**. Todos los modelos de esta muestra tienen un precio único: **$200.000**.

## Datos de contacto

- WhatsApp: **320 270 6283** (en los enlaces: `573202706283`)
- Correo, NIT, ciudad, dirección, horario, dominio y redes: todavía sin definir (ver `PENDIENTES.md`)

Este sitio es **una demo para presentar al cliente**. Los nombres de los 15 modelos y las
fotografías son de muestra; las fotos son de Pexels y están guardadas dentro del sitio.

## Páginas

| Dirección | Qué muestra | Archivo de datos |
|---|---|---|
| `/` | Inicio: precio, tres líneas, seis modelos destacados, cómo pedir, preguntas | `src/datos/inicio.json` |
| `/coleccion/elegante` | Línea elegante, 5 modelos | `src/datos/elegante.json` |
| `/coleccion/tenis` | Línea tenis, 5 modelos | `src/datos/tenis.json` |
| `/coleccion/casual` | Línea casual, 5 modelos | `src/datos/casual.json` |
| `/producto/<slug>` | 15 fichas de producto, una por modelo | `src/datos/productos.json` |
| `/contacto` | WhatsApp, datos y formulario que arma el mensaje | `src/datos/contacto.json` |
| `/404` | Página cuando una dirección no existe | `src/datos/no-encontrado.json` |

Los datos compartidos (nombre, menú, WhatsApp, etiquetas de botones y mensajes) están en
`src/datos/sitio.json`.

## Qué se puede hacer en el sitio

- Elegir talla en una ficha: el botón de WhatsApp incluye ese dato en el mensaje.
- Escribir un mensaje desde la página de contacto: se abre WhatsApp con el texto listo.
- Cambiar entre tema claro y oscuro (se recuerda en ese navegador).

No hay carrito, pago en línea ni registro de pedidos. Todo el pedido se conversa por WhatsApp.
