# Ver cambios y publicar

## Estado actual

El sitio **está publicado** en <https://demos.emp2web.com/calzadoguibol/>. Es una demo para
presentar al cliente: 22 páginas, 15 modelos a $200.000 y el Tenis blanco Flash a $150.000.
El dueño aprobó publicarla el 24 nov 2026.

El código vive en `https://github.com/Gestiona2/calzadoguibol` (repositorio de demostración
del proveedor, **no** es el repositorio definitivo del cliente). La rama `main` conserva el
código y `gh-pages` sirve la versión publicada.

## Ver un cambio antes de publicar

1. En la terminal, dentro de la carpeta del sitio: `npm run dev`
2. Abrir la dirección que muestra la terminal (normalmente `http://localhost:4321/calzadoguibol/`)
3. Mirar el cambio en celular (320, 375 y 390 px) y con tema claro y oscuro
4. Mostrárselo al dueño y **esperar aprobación explícita**. El silencio no es aprobación.

## Publicar un cambio ya aprobado

1. Guardar el cambio en `src/datos/` y verificarlo en la vista previa
2. `git add`, `git commit`, `git push` en `main` (opcional para la demo, pero deja el historial ordenado)
3. Ejecutar `bash scripts/publicar-demo.sh` — compila y publica `dist/` en `gh-pages`
4. Avisar que tarda de 1 a 2 minutos en verse; si no aparece, recargar con Ctrl+F5

El script parte siempre de la versión publicada: agrega un commit encima y nunca borra
historial. Si falla, el sitio sigue mostrando la versión anterior: no se rompe. Avísale al
proveedor y no intentes arreglar la configuración tú solo.

## Deshacer

| El dueño dice | Qué hacer |
|---|---|
| "no me gustó" y aún no se publicó | Descartar el cambio sin guardar |
| "devuélvelo como estaba" | Revertir el último cambio guardado y publicar |
| "vuelve a como estaba ayer" | Buscar ese punto en el historial y revertir hasta ahí |
| "borré algo sin querer" | Recuperarlo del historial |

Nunca borrar historial (`reset --hard`, `push --force`). Revertir siempre hacia adelante.
