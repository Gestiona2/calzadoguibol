# Dónde vive cada texto

Todo lo que se puede cambiar está en `src/datos/`. Los `.astro` solo pintan esos datos.

## Global — `sitio.json`

| Sección | Campo | Límites / nota |
|---|---|---|
| Nombre y menú | `nombre`, `menu` | El menú tiene 5 entradas. Si se agrega una página, agregar su entrada aquí |
| WhatsApp | `whatsapp`, `whatsappTexto` | `whatsapp` va sin espacios ni `+`: `573202706283`. Cambiar también los enlaces escritos en `inicio.json` si el número cambia |
| Botón del menú | `ctaPrincipal` | Texto y destino del botón que aparece en todas las páginas |
| Etiquetas de interfaz | `ui` | Nombres de botones, tallas, aviso de demo y pie |
| Mensajes | `mensajes` | Textos que se abren en WhatsApp. Los campos `{producto}`, `{precio}`, `{talla}`, `{nombre}` y `{mensaje}` se rellenan solos: no borrarlos |
| Enlace de salto | `ui.saltarContenido` | Texto del enlace que aparece al recorrer la página con Tab. No cambiar su destino (`#contenido`) |

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
