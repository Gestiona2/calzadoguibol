/**
 * Promo Flash de demostración.
 *
 * Dos piezas, una sola cuenta: la ventana emergente (una vez por navegador) y
 * el bloque del inicio (siempre visible). La cuenta regresiva es de muestra:
 * no baja el precio, no promete envío ni ofrece descuento real.
 *
 * Los textos y el tiempo viven en src/datos/promo.json y llegan en el atributo
 * data-promo del modal. Aquí no se escribe texto del negocio.
 */

const CLAVE_PREDETERMINADA = "calzado-guibol-promo-vista";
const HORAS_PREDETERMINADAS = 2;

export function montarPromo() {
  const modal = document.getElementById("promoModal");
  const fondo = document.getElementById("promoFondo");
  const panelCarrito = document.getElementById("carrito");
  if (!modal || !fondo) return;

  let datos = {};
  try {
    datos = JSON.parse(modal.dataset.promo || "{}");
  } catch {
    /* sin datos no hay promo: mejor no romper el resto del sitio */
  }

  const config = datos.config || {};
  const clave = config.claveVista || CLAVE_PREDETERMINADA;
  const horas = Number(config.duracionHoras) > 0
    ? Number(config.duracionHoras)
    : HORAS_PREDETERMINADAS;
  const milisegundos = horas * 60 * 60 * 1000;

  const leerEstado = () => {
    try {
      return JSON.parse(localStorage.getItem(clave) || "null");
    } catch {
      return null;
    }
  };

  const guardarEstado = (fin) => {
    try {
      localStorage.setItem(clave, JSON.stringify({ fin }));
    } catch {
      /* si no se puede guardar, la promo sigue funcionando en esta visita */
    }
  };

  const estado = leerEstado();
  const ahora = Date.now();
  const finGuardado = Number(estado?.fin);
  let fin = Number.isFinite(finGuardado) && finGuardado > ahora
    ? finGuardado
    : ahora + milisegundos;

  if (!estado || !(Number.isFinite(finGuardado) && finGuardado > ahora)) {
    guardarEstado(fin);
  }

  /* ---------- cuenta regresiva compartida ---------- */
  function actualizarCuenta() {
    let restante = fin - Date.now();
    if (restante <= 0) {
      /* terminó el tiempo de muestra: se reinicia sin volver a molestar */
      fin = Date.now() + milisegundos;
      guardarEstado(fin);
      restante = milisegundos;
    }
    const segundos = Math.floor(restante / 1000);
    const texto = [
      Math.floor(segundos / 3600),
      Math.floor((segundos % 3600) / 60),
      segundos % 60,
    ]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");
    document.querySelectorAll("[data-promo-cuenta]").forEach((elemento) => {
      elemento.textContent = texto;
    });
  }

  actualizarCuenta();
  setInterval(actualizarCuenta, 1000);

  /* ---------- abrir y cerrar ---------- */
  let ultimoFoco = null;
  let abierto = false;
  let temporizadorCierre = null;

  function enfocables() {
    return Array.from(
      modal.querySelectorAll(
        "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])"
      )
    ).filter((elemento) => elemento.offsetParent !== null);
  }

  function abrir() {
    if (abierto) {
      enfocables()[0]?.focus();
      return;
    }
    if (panelCarrito && !panelCarrito.hidden) return;
    clearTimeout(temporizadorCierre);
    abierto = true;
    ultimoFoco = document.activeElement;
    modal.hidden = false;
    fondo.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      if (abierto) modal.classList.add("abierto");
    });
    document.getElementById("cerrarPromo")?.focus();
  }

  function cerrar() {
    if (!abierto) return;
    abierto = false;
    modal.classList.remove("abierto");
    fondo.hidden = true;
    document.body.style.overflow = "";
    clearTimeout(temporizadorCierre);
    temporizadorCierre = setTimeout(() => {
      if (!abierto) modal.hidden = true;
    }, 240);
    ultimoFoco?.focus?.();
  }

  document.getElementById("cerrarPromo")?.addEventListener("click", cerrar);
  fondo.addEventListener("click", cerrar);
  document.querySelectorAll("[data-abrir-promo]").forEach((boton) => {
    boton.addEventListener("click", abrir);
  });

  document.addEventListener("keydown", (evento) => {
    if (!abierto || (panelCarrito && !panelCarrito.hidden)) return;

    if (evento.key === "Escape") {
      cerrar();
      return;
    }
    if (evento.key !== "Tab") return;

    const elementos = enfocables();
    if (elementos.length === 0) return;
    const primero = elementos[0];
    const ultimo = elementos[elementos.length - 1];
    if (evento.shiftKey && document.activeElement === primero) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
  });

  if (!estado) abrir();
}

montarPromo();
