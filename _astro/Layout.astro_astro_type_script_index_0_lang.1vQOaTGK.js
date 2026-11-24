var e=new Intl.NumberFormat(`es-CO`,{style:`currency`,currency:`COP`,maximumFractionDigits:0});function t(t){return t==null||Number.isNaN(t)?``:e.format(t).replace(/\s/g,``)}function n(e){return`${e.slug}::${e.talla||``}`}function r(e={}){let{envioGratisDesde:t=null,alCambiar:r=()=>{}}=e,i=[],a=()=>r(s),o=e=>{let t=String(e);return i.find(e=>n(e)===t)||i.find(e=>!e.talla&&e.slug===t)},s={lineas:()=>i.map(e=>({...e})),total:()=>i.reduce((e,t)=>e+t.precio*t.cantidad,0),unidades:()=>i.reduce((e,t)=>e+t.cantidad,0),agregar(e,t=1){let r=i.find(t=>n(t)===n(e));return r?r.cantidad+=t:i.push({slug:e.slug,titulo:e.titulo,precio:Number(e.precio),imagen:e.imagen,...e.talla?{talla:e.talla}:{},...e.productoSlug?{productoSlug:e.productoSlug}:{},cantidad:t}),a(),s},cambiarCantidad(e,t){let n=o(e);return n&&(t<=0?i=i.filter(e=>e!==n):n.cantidad=t,a()),s},quitar:e=>s.cambiarCantidad(e,0),vaciar(){return i=[],a(),s},envioGratis:()=>Number.isFinite(t)&&s.total()>=t,faltaParaEnvioGratis:()=>Number.isFinite(t)?Math.max(0,t-s.total()):0,exportar:()=>i.map(e=>({...e})),importar(e){return Array.isArray(e)&&(i=e.filter(e=>e&&e.slug&&Number.isFinite(Number(e.precio))&&e.cantidad>0),a()),s}};return s}function i(e,n,r={}){let{negocio:i=``}=r,a=e.lineas();if(a.length===0)throw Error(`El pedido está vacío`);let o=[i?`*Nuevo pedido — ${i}*`:`*Nuevo pedido*`,``];for(let e of a)o.push(`• ${e.titulo}`),e.talla&&o.push(`   Talla: ${e.talla}`),o.push(`   x${e.cantidad} · ${t(e.precio*e.cantidad)}`);return o.push(``),o.push(`*Total: ${t(e.total())}*`),e.envioGratis()&&o.push(`Domicilio gratis`),o.push(``),o.push(`*Datos de entrega*`),n.sede&&o.push(`Sede: ${n.sede}`),n.nombre&&o.push(`Nombre: ${n.nombre}`),n.telefono&&o.push(`Teléfono: ${n.telefono}`),n.direccion&&o.push(`Dirección: ${n.direccion}`),n.barrio&&o.push(`Barrio: ${n.barrio}`),n.ciudad&&o.push(`Ciudad: ${n.ciudad}`),n.ubicacion&&o.push(`Ubicación: ${n.ubicacion}`),n.pago&&(n.pago===`Efectivo`&&n.vueltas?o.push(`Pago: Efectivo (vueltas de ${n.vueltas})`):o.push(`Pago: ${n.pago}`)),n.nota&&o.push(`Nota: ${n.nota}`),o.join(`
`)}function a(e,t){return`https://wa.me/${e}?text=${encodeURIComponent(t)}`}var o=`calzado-guibol-pedido`,s=e=>{try{localStorage.setItem(o,JSON.stringify(e))}catch{}},c=()=>{try{return JSON.parse(localStorage.getItem(o)||`[]`)}catch{return[]}},l=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function u(){let e=document.getElementById(`carrito`),o=document.getElementById(`carritoCuerpo`);if(!e||!o)return;let u=document.documentElement.dataset.base||`/`,d=e.dataset.whatsapp||``,f=e.dataset.negocio||``,p={};try{p=JSON.parse(e.dataset.textos||`{}`)}catch{}let m=e=>p[e]??``,h=e=>`${u.replace(/\/$/,``)}/${String(e).replace(/^\//,``)}`,g=[];try{g=JSON.parse(e.dataset.catalogo||`[]`)}catch{}let _={};try{_=JSON.parse(e.dataset.config||`{}`)}catch{}let v=Number(_.sugerenciasLimite)>0?Number(_.sugerenciasLimite):3,y=new Map,b=document.getElementById(`carritoFondo`),x=document.getElementById(`abrirCarrito`),S=document.getElementById(`contadorCarrito`),C=document.getElementById(`avisoCarrito`),w=r({alCambiar:t=>{s(t.exportar()),T(t),e.hidden||A(t)}});function T(e){let t=e.unidades();S&&(S.textContent=t,S.hidden=t===0),x&&x.setAttribute(`aria-label`,`${m(`abrirCarrito`)}: ${t} ${m(t===1?`producto`:`productos`)} ${m(`enCarrito`)}`)}function E(){let e=o.querySelector(`#formPedido`);return e?Object.fromEntries(new FormData(e)):{}}function D(){o.querySelectorAll(`[data-sugerencia-talla]`).forEach(e=>{y.set(e.dataset.sugerenciaTalla,e.value)})}function O(e){let t=new Set(e.lineas().map(e=>e.slug)),n=e.lineas()[e.lineas().length-1],r=g.find(e=>e.slug===n?.slug)?.categoria||``,i=g.filter(e=>!t.has(e.slug));return[...i.filter(e=>e.categoria===r),...i.filter(e=>e.categoria!==r)].slice(0,v)}function k(e){if(!g.length)return``;let n=O(e),r=n.length===0?`<p class="carrito-sugerencias-vacio">${l(m(`sugerenciasVacio`))}</p>`:`<div class="carrito-sugerencias-lista">
          ${n.map(e=>{let n=`sugerencia-talla-${e.slug}`,r=y.get(e.slug)||``;return`
            <article class="sugerencia">
              <img src="${h(e.imagen)}" alt="" width="56" height="56" loading="lazy">
              <div class="sugerencia-datos">
                <a class="sugerencia-nombre" href="${h(`/producto/${e.slug}`)}" data-cerrar-carrito>${l(e.nombre)}</a>
                <span class="sugerencia-precio">${l(t(e.precio))}</span>
                <div class="sugerencia-accion">
                  <select id="${n}" class="sugerencia-talla" data-sugerencia-talla="${l(e.slug)}"
                          aria-label="${l(m(`talla`))}: ${l(e.nombre)}">
                    <option value="">${l(m(`elegirTalla`))}</option>
                    ${(e.tallas||[]).map(e=>`<option value="${l(e)}"${e===r?` selected`:``}>${l(e)}</option>`).join(``)}
                  </select>
                  <button type="button" class="btn btn-primary sugerencia-boton"
                          data-agregar="${l(e.slug)}"
                          data-titulo="${l(e.nombre)}"
                          data-precio="${Number(e.precio)}"
                          data-imagen="${l(e.imagen)}"
                          data-talla-select="${n}"
                          data-requiere-talla="true"
                          aria-label="${l(m(`agregar`))}: ${l(e.nombre)}">
                    ${l(m(`sugerenciasAgregar`))}
                  </button>
                </div>
              </div>
            </article>`}).join(``)}
        </div>`;return`
      <section class="carrito-sugerencias" aria-labelledby="sugerenciasTitulo">
        <h3 id="sugerenciasTitulo">${l(m(`sugerenciasTitulo`))}</h3>
        <p>${l(m(`sugerenciasTexto`))}</p>
        ${r}
      </section>`}function A(e){let r=e.lineas(),i=E();D(),r.length===0?o.innerHTML=`
        <div class="carrito-vacio">
          <p>${l(m(`vacio`))}</p>
          <p class="carrito-vacio-texto">${l(m(`vacioTexto`))}</p>
          <a class="btn btn-primary" href="${h(`/coleccion/elegante`)}" data-cerrar-carrito>${l(m(`verModelos`))}</a>
        </div>
        ${k(e)}`:(o.innerHTML=`
      <div class="carrito-lista">
        ${r.map(e=>{let r=l(n(e));return`
          <article class="carrito-linea">
            <img src="${h(e.imagen)}" alt="" width="64" height="64" loading="lazy">
            <div class="carrito-linea-datos">
              <a href="${h(`/producto/${e.productoSlug||e.slug}`)}" data-cerrar-carrito>${l(e.titulo)}</a>
              <span>${e.talla?`${l(e.talla)} · `:``}${l(t(e.precio))} ${l(m(`cadaUno`))}</span>
            </div>
            <div class="carrito-cantidad">
              <button type="button" data-menos="${r}" aria-label="${l(m(`menos`))}">−</button>
              <span aria-live="polite">${e.cantidad}</span>
              <button type="button" data-mas="${r}" aria-label="${l(m(`mas`))}">+</button>
            </div>
            <strong class="carrito-linea-total">${l(t(e.precio*e.cantidad))}</strong>
            <button type="button" class="carrito-quitar" data-quitar="${r}"
                    aria-label="${l(m(`quitar`))}: ${l(e.titulo)}">×</button>
          </article>`}).join(``)}
      </div>

      <button type="button" class="btn-texto carrito-vaciar" data-vaciar>${l(m(`vaciar`))}</button>

      <form class="carrito-formulario" id="formPedido" novalidate>
        <h3>${l(m(`formularioTitulo`))}</h3>
        <label class="campo">
          ${l(m(`nombre`))}
          <input name="nombre" required autocomplete="name" placeholder="${l(m(`nombrePlaceholder`))}" value="${l(i.nombre||``)}">
        </label>
        <label class="campo">
          ${l(m(`telefono`))}
          <input name="telefono" required inputmode="tel" autocomplete="tel" placeholder="${l(m(`telefonoPlaceholder`))}" value="${l(i.telefono||``)}">
        </label>
        <label class="campo">
          ${l(m(`ciudad`))}
          <input name="ciudad" required autocomplete="address-level2" placeholder="${l(m(`ciudadPlaceholder`))}" value="${l(i.ciudad||``)}">
        </label>
        <label class="campo">
          ${l(m(`nota`))}
          <textarea name="nota" rows="2" placeholder="${l(m(`notaPlaceholder`))}">${l(i.nota||``)}</textarea>
        </label>

        <div class="carrito-total">
          <div class="carrito-total-linea"><span>${l(m(`total`))}</span><strong>${l(t(e.total()))}</strong></div>
          <button type="submit" class="btn btn-primary carrito-enviar">${l(m(`enviar`))} <i data-lucide="arrow-up-right"></i></button>
          <p class="carrito-nota">${l(m(`notaEnvio`))}</p>
          <p class="carrito-nota">${l(m(`demo`))}</p>
        </div>
      </form>
      ${k(e)}`,o.querySelector(`#formPedido`)?.addEventListener(`submit`,j))}function j(e){e.preventDefault();let t=e.target,n=Object.fromEntries(new FormData(t)),r=[`nombre`,`telefono`,`ciudad`].filter(e=>!String(n[e]||``).trim());if(r.length>0){let e=t.elements[r[0]];e.focus(),e.classList.add(`campo-falta`),L(`${m(`falta`)} ${m(`faltan`)[r[0]]||``}`.trim());return}let o=i(w,{nombre:String(n.nombre).trim(),telefono:String(n.telefono).trim(),ciudad:String(n.ciudad).trim(),nota:String(n.nota||``).trim()},{negocio:f});window.open(a(d,o),`_blank`,`noopener`),L(m(`enviado`))}let M=null,N=()=>{M=document.activeElement,e.hidden=!1,b&&(b.hidden=!1),e.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`,requestAnimationFrame(()=>e.classList.add(`abierto`)),A(w),e.querySelector(`#cerrarCarrito`)?.focus()},P=()=>{e.classList.remove(`abierto`),e.setAttribute(`aria-hidden`,`true`),b&&(b.hidden=!0),document.body.style.overflow=``,setTimeout(()=>{e.classList.contains(`abierto`)||(e.hidden=!0)},280),M?.focus()};function F(){return Array.from(e.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])`)).filter(e=>e.offsetParent!==null)}let I=null;function L(e){C&&e&&(C.textContent=e,C.hidden=!1,requestAnimationFrame(()=>C.classList.add(`visible`)),clearTimeout(I),I=setTimeout(()=>{C.classList.remove(`visible`),setTimeout(()=>C.hidden=!0,220)},2800))}document.getElementById(`cerrarCarrito`)?.addEventListener(`click`,P),b?.addEventListener(`click`,P),document.addEventListener(`keydown`,t=>{let n=document.getElementById(`promoModal`);if(n&&n.classList.contains(`abierto`))return;if(t.key===`Escape`&&!e.hidden){P();return}if(t.key!==`Tab`||e.hidden)return;let r=F();if(r.length===0)return;let i=r[0],a=r[r.length-1];t.shiftKey&&document.activeElement===i?(t.preventDefault(),a.focus()):!t.shiftKey&&document.activeElement===a&&(t.preventDefault(),i.focus())}),document.addEventListener(`click`,e=>{if(e.target.closest(`a[href='#carrito'], [data-abrir-carrito]`)){e.preventDefault(),N();return}if(e.target.closest(`[data-cerrar-carrito]`)){P();return}let t=e.target.closest(`[data-agregar]`);if(t){let e=t.dataset.tallaSelect?document.getElementById(t.dataset.tallaSelect):null,n=t.dataset.talla||(e?e.value:``);if(t.dataset.requiereTalla===`true`&&!n){L(m(`eligeTalla`));let n=t.dataset.grupoTallas?document.getElementById(t.dataset.grupoTallas):e;(n?.querySelector?.(`button`)||n)?.focus?.();return}w.agregar({slug:t.dataset.agregar,productoSlug:t.dataset.agregar,titulo:t.dataset.titulo,precio:Number(t.dataset.precio),imagen:t.dataset.imagen,talla:n},1),L(`${t.dataset.titulo} ${m(`agregado`)}`);return}let r=e.target.closest(`[data-mas]`);if(r){let e=w.lineas().find(e=>n(e)===r.dataset.mas);e&&w.cambiarCantidad(r.dataset.mas,e.cantidad+1);return}let i=e.target.closest(`[data-menos]`);if(i){let e=w.lineas().find(e=>n(e)===i.dataset.menos);e&&w.cambiarCantidad(i.dataset.menos,e.cantidad-1);return}let a=e.target.closest(`[data-quitar]`);a?w.quitar(a.dataset.quitar):e.target.closest(`[data-vaciar]`)&&w.vaciar()}),w.importar(c()),T(w)}u();var d=`calzado-guibol-promo-vista`,f=2;function p(){let e=document.getElementById(`promoModal`),t=document.getElementById(`promoFondo`),n=document.getElementById(`carrito`);if(!e||!t)return;let r={};try{r=JSON.parse(e.dataset.promo||`{}`)}catch{}let i=r.config||{},a=i.claveVista||d,o=(Number(i.duracionHoras)>0?Number(i.duracionHoras):f)*60*60*1e3,s=()=>{try{return JSON.parse(localStorage.getItem(a)||`null`)}catch{return null}},c=e=>{try{localStorage.setItem(a,JSON.stringify({fin:e}))}catch{}},l=s(),u=Date.now(),p=Number(l?.fin),m=Number.isFinite(p)&&p>u?p:u+o;l&&Number.isFinite(p)&&p>u||c(m);function h(){let e=m-Date.now();e<=0&&(m=Date.now()+o,c(m),e=o);let t=Math.floor(e/1e3),n=[Math.floor(t/3600),Math.floor(t%3600/60),t%60].map(e=>String(e).padStart(2,`0`)).join(`:`);document.querySelectorAll(`[data-promo-cuenta]`).forEach(e=>{e.textContent=n})}h(),setInterval(h,1e3);let g=null,_=!1,v=null;function y(){return Array.from(e.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])`)).filter(e=>e.offsetParent!==null)}function b(){_?y()[0]?.focus():(!n||n.hidden)&&(clearTimeout(v),_=!0,g=document.activeElement,e.hidden=!1,t.hidden=!1,document.body.style.overflow=`hidden`,requestAnimationFrame(()=>{_&&e.classList.add(`abierto`)}),document.getElementById(`cerrarPromo`)?.focus())}function x(){_&&(_=!1,e.classList.remove(`abierto`),t.hidden=!0,document.body.style.overflow=``,clearTimeout(v),v=setTimeout(()=>{_||(e.hidden=!0)},240),g?.focus?.())}document.getElementById(`cerrarPromo`)?.addEventListener(`click`,x),t.addEventListener(`click`,x),document.querySelectorAll(`[data-abrir-promo]`).forEach(e=>{e.addEventListener(`click`,b)}),document.addEventListener(`keydown`,e=>{if(!_||n&&!n.hidden)return;if(e.key===`Escape`){x();return}if(e.key!==`Tab`)return;let t=y();if(t.length===0)return;let r=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}),l||b()}p();