/** Antepone la base del sitio (útil si se publica en una subcarpeta). */
export function ruta(p) {
  const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");
  return `${base}/${String(p).replace(/^\//, "")}`.replace(/\/{2,}/g, "/");
}

/** Respeta enlaces externos y aplica la base solo a las rutas internas. */
export function enlace(href) {
  return /^(https?:|mailto:|tel:|#)/.test(href) ? href : ruta(href);
}

/** Arma un enlace de WhatsApp con un mensaje ya codificado. */
export function whatsapp(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
