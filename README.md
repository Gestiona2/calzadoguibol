# Calzado Guibol — demo

Sitio de demostración para presentar a Calzado Guibol, fabricante de calzado en cuero.
Los 15 modelos originales aparecen a **$200.000** y el Tenis blanco Flash a **$150.000**.
El pedido se coordina por WhatsApp (**320 270 6283** en la demo).

**No es el sitio definitivo.** Las fotos son de Pexels y los nombres de modelos y tallas son
de muestra. La lista completa de lo que falta está en
`conocimiento_generado/PENDIENTES.md`.

Demo prevista: `https://demos.emp2web.com/calzadoguibol` (aún no publicada).

## Páginas

- Portada: `/`
- Colecciones: `/coleccion/elegante`, `/coleccion/tenis`, `/coleccion/casual`
- 16 fichas de producto: `/producto/<slug>`
- Contacto: `/contacto`
- Error: `/404`

## Arrancar en local

```bash
npm install
npm run dev
```

La vista previa queda en `http://localhost:4321/calzadoguibol/`.

```bash
npm run build   # comprueba que el sitio compila
bash doctor.sh  # revisa el equipo (en Windows: .\doctor.ps1)
```

## Dónde se edita el contenido

Todo el texto editable vive en `src/datos/`, un archivo por página. Los `.astro` contienen
el diseño y no llevan texto escrito directamente:

| Archivo | Qué controla |
|---|---|
| `sitio.json` | Nombre, WhatsApp, menú, pie y textos de interfaz |
| `inicio.json` | Portada: hero, precio, colecciones, destacados, pasos y FAQ |
| `elegante.json`, `tenis.json`, `casual.json` | Textos de cada colección |
| `productos.json` | Los 16 modelos, slugs, fotos, precios y tallas |
| `contacto.json` | Página de contacto |
| `no-encontrado.json` | Página 404 |

El detalle de cada campo está en `conocimiento_generado/SECCIONES.md` y las recetas en
`COMO-EDITAR.md`.

## Antes de publicar

1. `npm run build` sin errores.
2. Revisar en 320, 375 y 390 px y en tema claro y oscuro.
3. Mostrar al cliente y esperar aprobación explícita.
4. Publicar y avisar de que tarda de 2 a 4 minutos.

Ver `conocimiento_generado/PUBLICAR.md` y `LIMITES.md`.

## Entrega

`AGENTS.md` y `CLAUDE.md` son el asistente que viaja con el sitio; `TUTORIAL.md` y
`MANUAL.md` son las instrucciones para el dueño del negocio. Proveedor: **Emp2Web**,
+57 302 552 6058.
