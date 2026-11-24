# Dónde vive cada texto

Todo lo que se puede cambiar está en `src/datos/`. Los `.astro` solo pintan esos datos.

## Global — `sitio.json`

| Sección | Campo | Límites / nota |
|---|---|---|
| Nombre y menú | `nombre`, `menu`, `nombreLargo`, `razonSocial`, `lema` | El menú tiene 5 entradas. Si se agrega una página, agregar su entrada aquí. `nombre` es el que aparece en el pedido de WhatsApp |
| WhatsApp | `whatsapp`, `whatsappTexto` | `whatsapp` va sin espacios ni `+`: `573202706283`. El carrito y el contacto lo toman de aquí: no hay que cambiar enlaces en otros archivos |
| Botón del menú | `ctaPrincipal` | Texto y destino del botón que aparece en todas las páginas. Apunta al carrito (`#carrito`) |
| Etiquetas de interfaz | `ui` | Nombres de botones, tallas, aviso de demo y pie |
| Plantilla de ficha | `plantillas.descripcionProducto` | Descripción que ve Google de cada ficha. Los campos `{resumen}` y `{precio}` se rellenan solos: no borrarlos |
| Mensajes | `mensajes` | Textos que se abren en WhatsApp desde la página de contacto. Los campos `{nombre}` y `{mensaje}` se rellenan solos: no borrarlos. El mensaje del pedido se arma en `carrito.json`, no aquí |
| Enlace de salto | `ui.saltarContenido` | Texto del enlace que aparece al recorrer la página con Tab. No cambiar su destino (`#contenido`) |

## Promo Flash — `promo.json`

Aparece en dos lugares: una ventana emergente la primera vez que se entra al sitio desde un
navegador, y un bloque siempre visible en el inicio, entre la banda de precio y las colecciones.
Ambos comparten el mismo contador. No hay descuento: el precio sigue siendo $200.000.

| Sección | Campo | Límites / nota |
|---|---|---|
| Ventana emergente | `ventana.titulo`, `tituloAcento`, `texto` | El título va en dos líneas. La nota debe dejar claro que es demostración |
| Ventana emergente | `ventana.boton` | Texto y destino del botón; sale de la ventana hacia una colección |
| Ventana emergente | `ventana.cerrar` | Etiqueta del botón de cerrar, para lectores de pantalla |
| Bloque del inicio | `bloque.*` | Incluye imagen, textos y el botón «Ver la promo», que vuelve a abrir la ventana |
| Contador | `config.duracionHoras` | Hoy 2. Es de muestra: cambiarlo no cambia el precio ni crea una oferta real |
| Recuerdo | `config.claveVista` | El navegador guarda aquí que ya vio la ventana. No cambiar sin necesidad |

## Carrito y pedido — `carrito.json`

Todo lo que se ve en el panel del carrito y en el pedido final. El número de WhatsApp y el
nombre del negocio salen de `sitio.json`; aquí no se repiten.

| Sección | Campo | Límites / nota |
|---|---|---|
| Botones y etiquetas | `ui.abrirCarrito`, `cerrarCarrito`, `titulo`, `agregar`, `agregado`, `quitar`, `vaciar`, `total` | Textos del panel y del botón «Agregar al carrito» de tarjetas y fichas |
| Tallas | `ui.talla`, `elegirTalla`, `eligeTalla` | `elegirTalla` es la opción vacía del selector; `eligeTalla` es el aviso si se agrega sin talla |
| Carrito vacío | `ui.vacio`, `vacioTexto`, `verModelos` | Se ve cuando no hay nada en el pedido |
| Cantidades | `ui.menos`, `mas`, `cadaUno`, `producto`, `productos` | `menos` y `mas` son solo para lectores de pantalla (los botones muestran − y +) |
| Formulario | `ui.formularioTitulo`, `nombre`, `telefono`, `ciudad`, `nota` y sus `...Placeholder` | Solo se piden nombre, teléfono y ciudad. La nota es opcional. No agregar campos nuevos sin tocar el formulario |
| Envío del pedido | `ui.enviar`, `notaEnvio`, `demo`, `enviado` | `enviado` es el aviso después de abrir WhatsApp |
| Validación | `ui.falta`, `faltan` | `faltan` tiene `nombre`, `telefono` y `ciudad`; deben coincidir con los campos del formulario |
| Sugerencias | `config.sugerenciasLimite` | Cuántos modelos se muestran al final del panel. Hoy 3 |
| Sugerencias | `ui.sugerenciasTitulo`, `sugerenciasTexto`, `sugerenciasAgregar`, `sugerenciasVacio` | Textos del bloque «También te puede gustar». Los modelos no se escriben aquí: se eligen solos |

Los modelos sugeridos salen de `productos.json`: primero los de la misma línea del último
modelo agregado, sin repetir los que ya están en el pedido; si faltan, se completan con otras
líneas. Cada sugerencia lleva su selector de talla y su botón de agregar.

## Inicio — `inicio.json`

| Sección | Campo | Límites / nota |
|---|---|---|
| Título y descripción de Google | `meta` | La descripción conviene tenerla entre 120 y 160 caracteres |
| Portada | `portada` | Titular en dos líneas (`titulo` y `tituloAcento`). El sello muestra `precioSello` |
| Banda de precio | `precio` | `cifra` sin moneda; `moneda` es el `$`. El detalle aclara que es demostración |
| Tres líneas | `colecciones.items` | Exactamente 3: elegante, tenis, casual. `slug` debe coincidir con el nombre del archivo de datos |
| Modelos destacados | `destacados.slugs` | 6 slugs que deben existir en `productos.json`. Con más de 6 la fila se ve apretada |
| Cómo pedir | `pedido.pasos` | 3 pasos |
| Preguntas | `faq.items` | 6 preguntas. Respuestas cortas, sin prometer plazos |
| Cierre | `cierre` | Texto y botón finales |

## Colecciones — `elegante.json`, `tenis.json`, `casual.json`

Cada archivo tiene la misma estructura: `meta`, `portada`, `modelos`, `detalle` y `cierre`.
Los modelos que aparecen no se escriben aquí: se filtran de `productos.json` por `categoria`.
`detalle.puntos` lleva exactamente 3 puntos.

## Modelos — `productos.json`

Un objeto por modelo dentro del arreglo `productos`. Campos:

| Campo | Qué es |
|---|---|
| `slug` | Parte de la dirección `/producto/<slug>`. Sin espacios ni tildes. No repetirlo |
| `nombre`, `categoria`, `resumen`, `descripcion` | Textos de la ficha. `categoria` solo puede ser `elegante`, `tenis` o `casual` |
| `precio`, `precioTexto` | Número y texto con `$`. Actualmente todos son 200000 / `$200.000` |
| `imagen`, `imagenAlt` | Ruta dentro de `/public/img/` y texto alternativo |
| `caracteristicas`, `tallas` | Listas. Las tallas son de muestra; ver `PENDIENTES.md` |

Al agregar un modelo, aparece solo en su colección y en la grilla de modelos relacionados
de las fichas de esa misma línea. No aparece en destacados hasta que se agregue su slug a `inicio.json`.

## Contacto y otros — `contacto.json`, `no-encontrado.json`

`contacto.json` tiene `portada`, `formulario` (etiquetas, textos y botón) y `datos`. El número
de WhatsApp no se repite aquí: sale de `sitio.json`.
`no-encontrado.json` es la página 404: `titulo`, `texto` y `boton`.
