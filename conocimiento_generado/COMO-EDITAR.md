# Cómo hacer los cambios más comunes

Siempre: cambios en `src/datos/`, mostrar antes de publicar, y esperar aprobación.

## Cambiar el WhatsApp

1. `src/datos/sitio.json` → cambiar `whatsapp` (solo números, con indicativo) y `whatsappTexto`.
2. No hay que cambiar nada más: el carrito y la página de contacto toman el número de ahí.
   Los botones del inicio ya no llevan un enlace de WhatsApp escrito, sino al carrito.
3. Mostrar la portada, agregar un modelo al carrito y abrir el pedido para comprobar que el
   mensaje va al número nuevo. Revisar también la página de contacto.

## Cambiar un precio

Todos los modelos están en **$200.000**, el precio fijado para esta muestra. Si el dueño
pide otro valor:

1. Decir antes: *"Está en $200.000 y me pides $X: eso lo **sube/baja** $Y. ¿Lo hago?"*
2. Cambiar `precio` y `precioTexto` en cada modelo de `productos.json`.
3. Cambiar las cifras de `inicio.json` (`portada.precioSello`, `precio.cifra`) y los textos
   de `elegante.json`, `tenis.json` y `casual.json` que mencionan $200.000.
4. Mostrar la banda de precio y una ficha antes de publicar.

## Cambiar el nombre de un modelo

`src/datos/productos.json` → buscar el `slug` y cambiar `nombre`, `resumen` y `descripcion`.
El slug no se cambia: es la dirección de la página.

## Agregar un modelo nuevo

1. Copiar un objeto completo dentro de `productos.json` y pegarlo al final.
2. Cambiar `slug`, `nombre`, `categoria`, textos e `imagen`.
3. Poner la foto en `public/img/` con el mismo nombre que se escribió en `imagen`.
4. Si debe aparecer en el inicio, agregar el slug a `inicio.json` → `destacados.slugs`.

## Cambiar una foto

Guardar la nueva imagen en `public/img/` y escribir su nombre en el campo `imagen` del modelo
o de la sección correspondiente. Si se llama igual que la anterior, no hay que tocar nada.

## Cambiar preguntas frecuentes

`src/datos/inicio.json` → `faq.items`. Una pregunta por objeto, con `pregunta` y `respuesta`.

## Cambiar textos del formulario de contacto

`src/datos/contacto.json` → `formulario`. El mensaje que se abre en WhatsApp sale de
`sitio.json` → `mensajes.contacto`; no borrar los campos entre llaves.

## Cambiar textos del carrito o del pedido

`src/datos/carrito.json` → `ui`. Ahí están el botón «Agregar al carrito», los avisos, las
etiquetas del formulario y el texto que acompaña al pedido. El nombre del negocio y el
número de WhatsApp **no** se cambian aquí: salen de `sitio.json`.

Si se cambia el texto de un campo obligatorio (`nombre`, `telefono`, `ciudad`), cambiar
también su versión corta en `ui.faltan`, que es la que aparece en el aviso cuando falta.

## Cambiar la promo Flash

1. `src/datos/promo.json` → textos de `ventana` (la emergente) y `bloque` (el recuadro del
   inicio). El título se parte en `titulo` y `tituloAcento`.
2. Para cambiar cuánto dura el contador, cambiar `config.duracionHoras` (hoy 2). Es solo una
   cuenta de muestra: **no baja el precio ni crea una oferta real**.
3. Mostrar la página de inicio: la ventana aparece sola la primera vez, el bloque siempre
   está, y el botón «Ver la promo» vuelve a abrir la ventana.
4. Si el precio llegara a cambiar, avisar antes: está en $200.000 en los 15 modelos.

## Cambiar los modelos sugeridos del carrito

1. No hay una lista fija que editar: se eligen solos los modelos de la misma línea del último
   que se agregó, sin repetir los que ya están en el pedido.
2. Para cambiar cuántos aparecen: `src/datos/carrito.json` → `config.sugerenciasLimite` (hoy 3).
3. Para cambiar lo que dice el bloque: los campos `sugerencias...` de ese mismo archivo.
4. Mostrar el carrito vacío y con productos; comprobar que se puede elegir talla y agregar.

## Cambiar el nombre que aparece en el pedido

El mensaje de WhatsApp empieza con «Nuevo pedido — [nombre]». Ese nombre sale de
`sitio.json` → `nombre`. No escribir otro texto en `carrito.json`.

## Quitar el aviso de demo

El aviso está en `sitio.json` → `ui.avisoDemo` y se muestra en el pie. Solo quitarlo cuando
las fotos y los nombres sean definitivos.
