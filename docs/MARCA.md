# Manual de marca — Calzado Guibol

> Dirección definida para este demo con el dueño del negocio (noviembre de 2026):
> **cuero premium, editorial cálido**. Es provisional: si el cliente aporta logo, colores
> o tipografías propias, se respetan y se rehace el sitio sobre esa base.

## Paleta de colores

| Uso | Color | Hex | Dónde se usa |
|---|---|---|---|
| Primario | Cuero coñac | `#8A4B2A` | Botones principales, precio, acentos |
| Acento | Cuero claro | `#B07A49` | Cifras sobre fondo oscuro |
| Autoridad | Carbón | `#1C1917` | Texto, bandas de precio y cierre |
| Fondo | Marfil | `#F5F0E8` | Fondo general |
| Texto secundario | Café gris | `#4A4038` | Párrafos |

Tema oscuro: fondo `#17120F`, superficie `#241D18`, texto `#F5F0E8`, acento `#DFB184`.
Los componentes usan variables semánticas (`--bg`, `--text`, `--marca`…), nunca estos hex
directamente. Están todos en `src/styles/global.css`.

## Tipografías

- **Títulos:** Fraunces (serif variable, subset latin). Archivo local en `public/fonts/fraunces-normal.woff2`.
- **Cuerpo:** Manrope (sans variable, subset latin). Archivo local en `public/fonts/manrope-normal.woff2`.
- Ambas bajo licencia SIL Open Font License, auto-hospedadas: no se llama a Google Fonts.

## Tono de voz

Frases cortas, sin adjetivos de folleto. El precio se dice siempre con cifra y moneda.

1. "Somos fabricantes de calzado en cuero. Tres líneas, un mismo precio: $200.000."
2. "Elige un modelo, indícanos tu talla y envíanos el mensaje."
3. "Las tallas que aparecen son de muestra: confirma disponibilidad por WhatsApp."

Tratamiento: de tú, sin jerga técnica y sin prometer plazos, envíos ni descuentos que el
fabricante no haya confirmado.

## Estilo de imagen

Fotografía de producto con fondo limpio o neutro, luz suave y el zapato como protagonista.
Las 15 fotos actuales vienen de Pexels (licencia Pexels, uso comercial permitido) y se
guardan en `public/img/`. Cuando el fabricante aporte fotos propias, se reemplazan por el mismo
nombre de archivo y no hace falta tocar el código.

## Identidad visual

Sin logo recibido. Se usa el nombre `CALZADO GUIBOL` en Fraunces como logotipo tipográfico,
con el rótulo `CALZADO EN CUERO` debajo. Favicon provisional: monograma G sobre carbón.
No hay manual de marca del cliente: ver `conocimiento_generado/PENDIENTES.md`.

## Datos de negocio

- Razón social / NIT: Calzado Guibol / pendiente
- WhatsApp: 320 270 6283 (`573202706283` en el enlace)
- Correo, dirección, ciudad, horario, dominio y redes: pendientes
- Precio de todos los modelos de muestra: $200.000
