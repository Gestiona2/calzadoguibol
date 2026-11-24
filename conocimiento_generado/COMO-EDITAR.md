# Cómo hacer los cambios más comunes

Siempre: cambios en `src/datos/`, mostrar antes de publicar, y esperar aprobación.

## Cambiar el WhatsApp

1. `src/datos/sitio.json` → cambiar `whatsapp` (solo números, con indicativo) y `whatsappTexto`.
2. Revisar `src/datos/inicio.json`: hay dos botones con enlaces `wa.me` escritos, en
   `portada.botones` y en `precio.boton` y `cierre.boton`. Cambiar el número en todos.
3. Mostrar la portada y la página de contacto para comprobar los botones.

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

## Quitar el aviso de demo

El aviso está en `sitio.json` → `ui.avisoDemo` y se muestra en el pie. Solo quitarlo cuando
las fotos y los nombres sean definitivos.
