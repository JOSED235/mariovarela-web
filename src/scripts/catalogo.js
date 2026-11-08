import { agregar, cambiarCantidad, faltanParaMinimo, mensaje, pesos, unidades } from '../lib/pedido.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const { productos, minimo, whatsapp } = JSON.parse($('#catalogo-datos').textContent);
const estado = { modo: 'detal', lineas: [], producto: null, variante: null };
const escapar = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const precioTexto = (p) => (p.precio ? pesos(p.precio) : 'Precio por confirmar');

// --- Filtros y modo ---
$('[data-filtros]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-tipo]');
  if (!b) return;
  $$('[data-filtros] [data-tipo]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  $$('[data-rejilla] .pieza').forEach((li) => { li.hidden = !!b.dataset.tipo && li.dataset.tipo !== b.dataset.tipo; });
});

$$('[data-modo]').forEach((b) => b.addEventListener('click', () => {
  estado.modo = b.dataset.modo;
  $$('[data-modo]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  $('[data-aviso-mayor]').hidden = estado.modo !== 'mayor';
  pintarPedido();
}));

// --- Vista rápida ---
const vista = $('[data-vista]');

function pintarVista() {
  const p = estado.producto;
  const v = p.variantes.find((x) => x.id === estado.variante);
  const img = $('[data-vista-img]');
  img.src = v.src; img.width = v.ancho; img.height = v.alto; img.alt = `${p.nombre} ${v.nombre}`;
  $('[data-vista-variante]').textContent = v.nombre;
  $$('[data-vista-aros] .aro').forEach((a) => a.setAttribute('aria-pressed', String(a.dataset.v === v.id)));
}

function abrirVista(id, varianteId) {
  const p = productos.find((x) => x.id === id);
  estado.producto = p; estado.variante = varianteId;
  $('[data-vista-tipo]').textContent = p.tipo === 'bolso' ? 'Bolsos' : 'Canguros';
  $('[data-vista-nombre]').textContent = p.nombre;
  $('[data-vista-precio]').textContent = estado.modo === 'mayor' ? `Por mayor desde ${minimo} unidades surtidas` : precioTexto(p);
  $('[data-vista-resumen]').textContent = p.resumen;
  $('[data-vista-detalles]').innerHTML = p.detalles.map((d) => `<li>${escapar(d)}</li>`).join('');
  $('[data-vista-aros]').innerHTML = p.variantes.map((v) => `<button type="button" class="aro" data-v="${v.id}" aria-label="${escapar(v.nombre)}" aria-pressed="false"><img src="${v.src}" alt="" width="56" height="56" loading="lazy"></button>`).join('');
  $('[data-vista-cantidad]').value = estado.modo === 'mayor' ? Math.max(1, faltanParaMinimo(estado.lineas, minimo)) : 1;
  pintarVista();
  vista.showModal();
}

document.addEventListener('click', (e) => {
  const ver = e.target.closest('[data-ver]');
  if (ver) abrirVista(ver.dataset.ver, ver.dataset.variante);
  const aro = e.target.closest('[data-vista-aros] .aro');
  if (aro) { estado.variante = aro.dataset.v; pintarVista(); }
});
$('[data-cerrar-vista]').addEventListener('click', () => vista.close());
vista.addEventListener('click', (e) => { if (e.target === vista) vista.close(); });

$('[data-agregar]').addEventListener('click', () => {
  const p = estado.producto;
  const v = p.variantes.find((x) => x.id === estado.variante);
  const cantidad = Math.max(1, parseInt($('[data-vista-cantidad]').value, 10) || 1);
  estado.lineas = agregar(estado.lineas, { producto: p.id, nombre: p.nombre, variante: v.id, varianteNombre: v.nombre, img: v.src, precio: p.precio, cantidad });
  pintarPedido();
  vista.close();
  abrirPedido(true);
});

// --- Pedido ---
const panel = $('[data-pedido]');
const fondo = $('.pedido-fondo');

function abrirPedido(abrir) {
  panel.hidden = !abrir; fondo.hidden = !abrir;
  if (abrir) $('[data-cerrar-pedido]', panel).focus();
}

function pintarPedido() {
  const n = unidades(estado.lineas);
  $$('[data-contador]').forEach((c) => { c.textContent = n; });
  $('[data-lista]').innerHTML = estado.lineas.length
    ? estado.lineas.map((l, i) => `<li class="linea">
        <img src="${l.img}" alt="" width="64" height="64">
        <span class="linea__texto"><strong>${escapar(l.nombre)}</strong><span>${escapar(l.varianteNombre)}</span></span>
        <span class="linea__cant">
          <button type="button" data-cant="${i}" data-delta="-1" aria-label="Quitar una unidad de ${escapar(l.nombre)}">−</button>
          <span aria-live="polite">${l.cantidad}</span>
          <button type="button" data-cant="${i}" data-delta="1" aria-label="Agregar una unidad de ${escapar(l.nombre)}">+</button>
        </span>
      </li>`).join('')
    : '<li class="linea linea--vacia">Todavía no ha agregado piezas. Toque una del catálogo para elegir color y cantidad.</li>';
  const faltan = faltanParaMinimo(estado.lineas, minimo);
  $('[data-minimo]').textContent = estado.modo !== 'mayor' ? ''
    : faltan ? `Pedido por mayor: le faltan ${faltan} unidades para el mínimo de ${minimo}.` : `Cumple el mínimo por mayor (${minimo} unidades).`;
  $('[data-enviar]').disabled = !estado.lineas.length;
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-abrir-pedido]')) abrirPedido(true);
  if (e.target.closest('[data-cerrar-pedido]')) abrirPedido(false);
  const c = e.target.closest('[data-cant]');
  if (c) {
    const i = Number(c.dataset.cant);
    estado.lineas = cambiarCantidad(estado.lineas, i, estado.lineas[i].cantidad + Number(c.dataset.delta));
    pintarPedido();
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) abrirPedido(false); });

$('[data-enviar]').addEventListener('click', () => {
  const texto = mensaje(estado.lineas, estado.modo, { nombre: $('[data-nombre]').value.trim(), ciudad: $('[data-ciudad]').value.trim() });
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});

// --- Formulario de marca propia ---
const form = $('[data-form-marca]');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const texto = `Hola, quiero fabricar con mi marca.\nNombre: ${d.get('nombre')}\nMarca: ${d.get('marca')}\nProducto: ${d.get('producto')}\nCantidad aproximada: ${d.get('cantidad') || 'por definir'}`;
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});

// --- Menú móvil ---
const menuBoton = $('[data-menu-boton]');
const menu = $('[data-menu]');
menuBoton.addEventListener('click', () => {
  const abierto = menuBoton.getAttribute('aria-expanded') === 'true';
  menuBoton.setAttribute('aria-expanded', String(!abierto));
  menu.toggleAttribute('data-abierto', !abierto);
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) { menuBoton.setAttribute('aria-expanded', 'false'); menu.removeAttribute('data-abierto'); }
});

pintarPedido();
