# Ver cambios y publicar

## Estado actual

El sitio **todavía no está publicado**. Es una demo para mostrar al cliente. La dirección
prevista para la demo es `https://demos.emp2web.com/calzadoguibol` (sin activar todavía).

## Ver un cambio antes de publicar

1. En la terminal, dentro de la carpeta del sitio: `npm run dev`
2. Abrir la dirección que muestra la terminal (normalmente `http://localhost:4321/calzadoguibol/`)
3. Mirar el cambio en celular (320 y 375 px) y con tema claro y oscuro
4. Mostrárselo al dueño y **esperar aprobación explícita**. El silencio no es aprobación.

## Publicar en la demo (cuando el cliente lo autorice)

1. `npm run build` — debe terminar sin errores
2. Guardar el cambio (`git add`, `git commit`, `git push`)
3. Publicar la rama `gh-pages` con el script correspondiente (lo prepara el proveedor)
4. Avisar que tarda de 1 a 2 minutos en verse; si no aparece, recargar con Ctrl+F5

Si la publicación falla, el sitio sigue mostrando la versión anterior: no se rompe.
Avísale al proveedor y no intentes arreglar la configuración tú solo.

## Deshacer

| El dueño dice | Qué hacer |
|---|---|
| "no me gustó" y aún no se publicó | Descartar el cambio sin guardar |
| "devuélvelo como estaba" | Revertir el último cambio guardado y publicar |
| "vuelve a como estaba ayer" | Buscar ese punto en el historial y revertir hasta ahí |
| "borré algo sin querer" | Recuperarlo del historial |

Nunca borrar historial (`reset --hard`, `push --force`). Revertir siempre hacia adelante.
