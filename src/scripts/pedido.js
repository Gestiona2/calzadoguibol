/**
 * El pedido: que hay dentro, cuanto suma y como se convierte en un mensaje
 * de WhatsApp.
 *
 * Esta separado de la interfaz a proposito, para poder probarlo sin navegador.
 * Todo lo que toca el DOM vive en carrito.js.
 *
 * Dos decisiones que vale la pena conservar:
 * - La identidad de una linea es slug + variante (talla, color). El mismo modelo
 *   en dos tallas son dos lineas distintas; no se pueden sumar en una sola.
 * - Los datos de entrega son opcionales. Si el sitio no pide un campo, el
 *   mensaje no lo escribe con "undefined" al lado.
 */
import { pesos } from "./formato.js";

/** slug + talla. Si no hay variante, la clave es el slug solo seguido de "::". */
export function claveLinea(producto) {
  return `${producto.slug}::${producto.talla || ""}`;
}

export function crearPedido(opciones = {}) {
  const { envioGratisDesde = null, alCambiar = () => {} } = opciones;

  let lineas = [];

  const avisar = () => alCambiar(api);

  // Busca por slug + variante. Por compatibilidad, si no hay variante tambien
  // acepta el slug suelto que usaban los carritos anteriores.
  const encontrar = (clave) => {
    const buscado = String(clave);
    return (
      lineas.find((l) => claveLinea(l) === buscado) ||
      lineas.find((l) => !l.talla && l.slug === buscado)
    );
  };

  const api = {
    lineas: () => lineas.map((l) => ({ ...l })),

    total: () => lineas.reduce((suma, l) => suma + l.precio * l.cantidad, 0),

    unidades: () => lineas.reduce((suma, l) => suma + l.cantidad, 0),

    agregar(producto, cantidad = 1) {
      const existente = lineas.find((l) => claveLinea(l) === claveLinea(producto));
      if (existente) {
        existente.cantidad += cantidad;
      } else {
        lineas.push({
          slug: producto.slug,
          titulo: producto.titulo,
          precio: Number(producto.precio),
          imagen: producto.imagen,
          ...(producto.talla ? { talla: producto.talla } : {}),
          ...(producto.productoSlug ? { productoSlug: producto.productoSlug } : {}),
          cantidad,
        });
      }
      avisar();
      return api;
    },

    cambiarCantidad(clave, cantidad) {
      const linea = encontrar(clave);
      if (!linea) return api;
      if (cantidad <= 0) {
        lineas = lineas.filter((l) => l !== linea);
      } else {
        linea.cantidad = cantidad;
      }
      avisar();
      return api;
    },

    quitar: (clave) => api.cambiarCantidad(clave, 0),

    vaciar() {
      lineas = [];
      avisar();
      return api;
    },

    // Sin minimo configurado no se afirma que el domicilio es gratis.
    envioGratis: () =>
      Number.isFinite(envioGratisDesde) && api.total() >= envioGratisDesde,

    faltaParaEnvioGratis: () =>
      Number.isFinite(envioGratisDesde)
        ? Math.max(0, envioGratisDesde - api.total())
        : 0,

    // Para guardar y recuperar del navegador
    exportar: () => lineas.map((l) => ({ ...l })),
    importar(guardadas) {
      if (Array.isArray(guardadas)) {
        lineas = guardadas.filter(
          (l) => l && l.slug && Number.isFinite(Number(l.precio)) && l.cantidad > 0
        );
        avisar();
      }
      return api;
    },
  };

  return api;
}

/**
 * Arma el mensaje que se envia por WhatsApp.
 *
 * Se escribe pensando en quien lo recibe: la persona que atiende el negocio
 * tiene que poder leerlo, entenderlo y despacharlo sin preguntar nada.
 *
 * El nombre del negocio entra por parametro: este modulo no sabe de que
 * cliente es. Viene de src/datos/config.json -> negocio.
 */
export function armarMensaje(pedido, datos, opciones = {}) {
  const { negocio = "" } = opciones;
  const lineas = pedido.lineas();
  if (lineas.length === 0) {
    throw new Error("El pedido está vacío");
  }

  const titulo = negocio ? `*Nuevo pedido — ${negocio}*` : "*Nuevo pedido*";
  const partes = [titulo, ""];

  for (const linea of lineas) {
    partes.push(`• ${linea.titulo}`);
    if (linea.talla) partes.push(`   Talla: ${linea.talla}`);
    partes.push(`   x${linea.cantidad} · ${pesos(linea.precio * linea.cantidad)}`);
  }

  partes.push("");
  partes.push(`*Total: ${pesos(pedido.total())}*`);
  if (pedido.envioGratis()) partes.push("Domicilio gratis");
  partes.push("");
  partes.push("*Datos de entrega*");
  if (datos.sede) partes.push(`Sede: ${datos.sede}`);
  if (datos.nombre) partes.push(`Nombre: ${datos.nombre}`);
  if (datos.telefono) partes.push(`Teléfono: ${datos.telefono}`);
  if (datos.direccion) partes.push(`Dirección: ${datos.direccion}`);
  if (datos.barrio) partes.push(`Barrio: ${datos.barrio}`);
  if (datos.ciudad) partes.push(`Ciudad: ${datos.ciudad}`);
  if (datos.ubicacion) partes.push(`Ubicación: ${datos.ubicacion}`);
  if (datos.pago) {
    if (datos.pago === "Efectivo" && datos.vueltas) {
      partes.push(`Pago: Efectivo (vueltas de ${datos.vueltas})`);
    } else {
      partes.push(`Pago: ${datos.pago}`);
    }
  }
  if (datos.nota) partes.push(`Nota: ${datos.nota}`);

  return partes.join("\n");
}

/** La direccion completa de WhatsApp con el pedido dentro. */
export function enlaceWhatsApp(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
