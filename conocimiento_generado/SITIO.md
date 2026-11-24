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
`src/datos/sitio.json`. Los textos del carrito están en `src/datos/carrito.json`.

## Qué se puede hacer en el sitio

- Elegir talla en la tarjeta o en la ficha y agregar el modelo al carrito. El mismo modelo
  en dos tallas cuenta como dos productos distintos.
- Juntar varios modelos en el carrito, cambiar cantidades, quitar uno o vaciarlo todo.
- El carrito se guarda en ese navegador: no se pierde al cambiar de página ni al volver.
- Enviar un **solo pedido por WhatsApp** con todos los modelos, tallas, cantidades, total y
  los datos de entrega. No hay botón de WhatsApp por producto.
- Escribir un mensaje desde la página de contacto: se abre WhatsApp con el texto listo.
- Cambiar entre tema claro y oscuro (se recuerda en ese navegador).

No hay pago en línea ni registro de pedidos en un servidor. El carrito vive en el navegador
y el pedido se envía como un mensaje de WhatsApp para que el negocio lo confirme.
