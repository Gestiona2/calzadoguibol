/**
 * Carrito de Calzado Guibol: lo que se ve y se toca.
 *
 * La logica del pedido (sumas, cantidades, tallas y mensaje) vive en pedido.js
 * y se prueba sin navegador. Aqui solo esta la interfaz. Lo ya escrito en el
 * formulario se conserva cada vez que se vuelve a pintar el panel.
 */
import { crearPedido, armarMensaje, enlaceWhatsApp, claveLinea } from "./pedido.js";
import { pesos } from "./formato.js";

const CLAVE = "calzado-guibol-pedido";

const guardar = (lineas) => {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lineas));
  } catch {
    /* ventana privada o memoria llena: el carrito sigue sirviendo en la visita */
  }
};

const recuperar = () => {
  try {
    return JSON.parse(localStorage.getItem(CLAVE) || "[]");
  } catch {
    return [];
  }
};

const escapar = (texto) =>
  String(texto).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

export function montarCarrito() {
  const panel = document.getElementById("carrito");
  const cuerpo = document.getElementById("carritoCuerpo");
  if (!panel || !cuerpo) return;

  const base = document.documentElement.dataset.base || "/";
  const whatsapp = panel.dataset.whatsapp || "";
  const negocio = panel.dataset.negocio || "";
  let textos = {};
  try {
    textos = JSON.parse(panel.dataset.textos || "{}");
  } catch {
    /* sin textos no se puede pintar: mejor dejar el botón inerte que romper */
  }
  const t = (clave) => textos[clave] ?? "";
  const conBase = (ruta) =>
    `${base.replace(/\/$/, "")}/${String(ruta).replace(/^\//, "")}`;

  const fondo = document.getElementById("carritoFondo");
  const botonAbrir = document.getElementById("abrirCarrito");
  const globo = document.getElementById("contadorCarrito");
  const aviso = document.getElementById("avisoCarrito");

  const pedido = crearPedido({
    alCambiar: (p) => {
      guardar(p.exportar());
      pintarContadores(p);
      if (!panel.hidden) pintarPanel(p);
    },
  });

  /* ---------- contador de la cabecera ---------- */
  function pintarContadores(p) {
    const unidades = p.unidades();
    if (globo) {
      globo.textContent = unidades;
      globo.hidden = unidades === 0;
    }
    if (botonAbrir) {
      botonAbrir.setAttribute(
        "aria-label",
        `${t("abrirCarrito")}: ${unidades} ${unidades === 1 ? t("producto") : t("productos")} ${t("enCarrito")}`
      );
    }
  }

  /* ---------- panel ---------- */
  function leerFormulario() {
    const formulario = cuerpo.querySelector("#formPedido");
    if (!formulario) return {};
    return Object.fromEntries(new FormData(formulario));
  }

  function pintarPanel(p) {
    const lineas = p.lineas();
    const previos = leerFormulario();

    if (lineas.length === 0) {
      cuerpo.innerHTML = `
        <div class="carrito-vacio">
          <p>${escapar(t("vacio"))}</p>
          <p class="carrito-vacio-texto">${escapar(t("vacioTexto"))}</p>
          <a class="btn btn-primary" href="${conBase("/coleccion/elegante")}" data-cerrar-carrito>${escapar(t("verModelos"))}</a>
        </div>`;
      return;
    }

    cuerpo.innerHTML = `
      <div class="carrito-lista">
        ${lineas
          .map((linea) => {
            const clave = escapar(claveLinea(linea));
            return `
          <article class="carrito-linea">
            <img src="${conBase(linea.imagen)}" alt="" width="64" height="64" loading="lazy">
            <div class="carrito-linea-datos">
              <a href="${conBase(`/producto/${linea.productoSlug || linea.slug}`)}" data-cerrar-carrito>${escapar(linea.titulo)}</a>
              <span>${linea.talla ? `${escapar(linea.talla)} · ` : ""}${escapar(pesos(linea.precio))} ${escapar(t("cadaUno"))}</span>
            </div>
            <div class="carrito-cantidad">
              <button type="button" data-menos="${clave}" aria-label="${escapar(t("menos"))}">−</button>
              <span aria-live="polite">${linea.cantidad}</span>
              <button type="button" data-mas="${clave}" aria-label="${escapar(t("mas"))}">+</button>
            </div>
            <strong class="carrito-linea-total">${escapar(pesos(linea.precio * linea.cantidad))}</strong>
            <button type="button" class="carrito-quitar" data-quitar="${clave}"
                    aria-label="${escapar(t("quitar"))}: ${escapar(linea.titulo)}">×</button>
          </article>`;
          })
          .join("")}
      </div>

      <button type="button" class="btn-texto carrito-vaciar" data-vaciar>${escapar(t("vaciar"))}</button>

      <form class="carrito-formulario" id="formPedido" novalidate>
        <h3>${escapar(t("formularioTitulo"))}</h3>
        <label class="campo">
          ${escapar(t("nombre"))}
          <input name="nombre" required autocomplete="name" placeholder="${escapar(t("nombrePlaceholder"))}" value="${escapar(previos.nombre || "")}">
        </label>
        <label class="campo">
          ${escapar(t("telefono"))}
          <input name="telefono" required inputmode="tel" autocomplete="tel" placeholder="${escapar(t("telefonoPlaceholder"))}" value="${escapar(previos.telefono || "")}">
        </label>
        <label class="campo">
          ${escapar(t("ciudad"))}
          <input name="ciudad" required autocomplete="address-level2" placeholder="${escapar(t("ciudadPlaceholder"))}" value="${escapar(previos.ciudad || "")}">
        </label>
        <label class="campo">
          ${escapar(t("nota"))}
          <textarea name="nota" rows="2" placeholder="${escapar(t("notaPlaceholder"))}">${escapar(previos.nota || "")}</textarea>
        </label>

        <div class="carrito-total">
          <div class="carrito-total-linea"><span>${escapar(t("total"))}</span><strong>${escapar(pesos(p.total()))}</strong></div>
          <button type="submit" class="btn btn-primary carrito-enviar">${escapar(t("enviar"))} <i data-lucide="arrow-up-right"></i></button>
          <p class="carrito-nota">${escapar(t("notaEnvio"))}</p>
          <p class="carrito-nota">${escapar(t("demo"))}</p>
        </div>
      </form>`;

    cuerpo.querySelector("#formPedido")?.addEventListener("submit", enviarPedido);
  }

  /* ---------- enviar ---------- */
  function enviarPedido(evento) {
    evento.preventDefault();
    const formulario = evento.target;
    const datos = Object.fromEntries(new FormData(formulario));

    const faltantes = ["nombre", "telefono", "ciudad"].filter(
      (campo) => !String(datos[campo] || "").trim()
    );
    if (faltantes.length > 0) {
      const campo = formulario.elements[faltantes[0]];
      campo.focus();
      campo.classList.add("campo-falta");
      avisar(`${t("falta")} ${t("faltan")[faltantes[0]] || ""}`.trim());
      return;
    }

    const mensaje = armarMensaje(
      pedido,
      {
        nombre: String(datos.nombre).trim(),
        telefono: String(datos.telefono).trim(),
        ciudad: String(datos.ciudad).trim(),
        nota: String(datos.nota || "").trim(),
      },
      { negocio }
    );
    window.open(enlaceWhatsApp(whatsapp, mensaje), "_blank", "noopener");
    avisar(t("enviado"));
  }

  /* ---------- abrir y cerrar ---------- */
  let ultimoFoco = null;

  const abrir = () => {
    ultimoFoco = document.activeElement;
    panel.hidden = false;
    if (fondo) fondo.hidden = false;
    panel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => panel.classList.add("abierto"));
    pintarPanel(pedido);
    panel.querySelector("#cerrarCarrito")?.focus();
  };

  const cerrar = () => {
    panel.classList.remove("abierto");
    panel.setAttribute("aria-hidden", "true");
    if (fondo) fondo.hidden = true;
    document.body.style.overflow = "";
    setTimeout(() => {
      if (!panel.classList.contains("abierto")) panel.hidden = true;
    }, 280);
    ultimoFoco?.focus();
  };

  function enfocables() {
    return Array.from(
      panel.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])'
      )
    ).filter((el) => el.offsetParent !== null);
  }

  /* ---------- aviso flotante ---------- */
  let temporizadorAviso = null;
  function avisar(texto) {
    if (!aviso || !texto) return;
    aviso.textContent = texto;
    aviso.hidden = false;
    requestAnimationFrame(() => aviso.classList.add("visible"));
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => {
      aviso.classList.remove("visible");
      setTimeout(() => (aviso.hidden = true), 220);
    }, 2800);
  }

  /* ---------- eventos ---------- */
  document.getElementById("cerrarCarrito")?.addEventListener("click", cerrar);
  fondo?.addEventListener("click", cerrar);

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && !panel.hidden) {
      cerrar();
      return;
    }
    if (evento.key !== "Tab" || panel.hidden) return;
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

  document.addEventListener("click", (evento) => {
    if (evento.target.closest("a[href='#carrito'], [data-abrir-carrito]")) {
      evento.preventDefault();
      abrir();
      return;
    }

    if (evento.target.closest("[data-cerrar-carrito]")) {
      cerrar();
      return;
    }

    const agregar = evento.target.closest("[data-agregar]");
    if (agregar) {
      const seleccion = agregar.dataset.tallaSelect
        ? document.getElementById(agregar.dataset.tallaSelect)
        : null;
      const talla = agregar.dataset.talla || (seleccion ? seleccion.value : "");

      if (agregar.dataset.requiereTalla === "true" && !talla) {
        avisar(t("eligeTalla"));
        const grupo = agregar.dataset.grupoTallas
          ? document.getElementById(agregar.dataset.grupoTallas)
          : seleccion;
        const objetivo = grupo?.querySelector?.("button") || grupo;
        objetivo?.focus?.();
        return;
      }

      pedido.agregar(
        {
          slug: agregar.dataset.agregar,
          productoSlug: agregar.dataset.agregar,
          titulo: agregar.dataset.titulo,
          precio: Number(agregar.dataset.precio),
          imagen: agregar.dataset.imagen,
          talla,
        },
        1
      );
      avisar(`${agregar.dataset.titulo} ${t("agregado")}`);
      return;
    }

    const mas = evento.target.closest("[data-mas]");
    if (mas) {
      const linea = pedido.lineas().find((l) => claveLinea(l) === mas.dataset.mas);
      if (linea) pedido.cambiarCantidad(mas.dataset.mas, linea.cantidad + 1);
      return;
    }

    const menos = evento.target.closest("[data-menos]");
    if (menos) {
      const linea = pedido.lineas().find((l) => claveLinea(l) === menos.dataset.menos);
      if (linea) pedido.cambiarCantidad(menos.dataset.menos, linea.cantidad - 1);
      return;
    }

    const quitar = evento.target.closest("[data-quitar]");
    if (quitar) {
      pedido.quitar(quitar.dataset.quitar);
      return;
    }

    if (evento.target.closest("[data-vaciar]")) {
      pedido.vaciar();
    }
  });

  pedido.importar(recuperar());
  pintarContadores(pedido);
}

montarCarrito();
