/** Medidas reales de las fotos de muestra (public/img). Evita saltos de página al cargar. */
const medidas = {
  "elegante-01.webp": [1200, 1200],
  "elegante-02.webp": [960, 1200],
  "elegante-03.webp": [1200, 800],
  "elegante-04.webp": [795, 1200],
  "elegante-05.webp": [1200, 800],
  "tenis-01.webp": [960, 1200],
  "tenis-02.webp": [960, 1200],
  "tenis-03.webp": [1200, 801],
  "tenis-04.webp": [1200, 800],
  "tenis-05.webp": [1200, 801],
  "casual-01.webp": [1200, 1200],
  "casual-02.webp": [800, 1200],
  "casual-03.webp": [960, 1200],
  "casual-04.webp": [1200, 1200],
  "casual-05.webp": [1200, 1200],
  "tenis-flash.webp": [1200, 1200],
};

/** Devuelve el ancho y alto de una foto a partir de su ruta. */
export function tamanoImagen(rutaImagen) {
  const nombre = String(rutaImagen).split("/").pop();
  const [ancho, alto] = medidas[nombre] ?? [1200, 1200];
  return { ancho, alto };
}
