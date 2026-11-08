import { COLORES, MINIMO_MAYOR, REFERENCIAS, TALLAS, TIPOS, WHATSAPP } from './datos.js';
import { agregar, faltanParaMinimo, mensaje, pesos, unidades } from './pedido.js';

const $ = (s, r = document) => r.querySelector(s);
const estado = { tipo: '', color: '', texto: '', modo: 'detal', lineas: [] };

// --- Filtros ---
function chips(cont, opciones, clave) {
  const todos = [['', 'Todos'], ...Object.entries(opciones).map(([k, v]) => [k, typeof v === 'string' ? v : v.nombre])];
  cont.innerHTML = todos.map(([k, v]) => `<button type="button" class="chip" aria-pressed="${k === ''}" data-valor="${k}">${v}</button>`).join('');
  cont.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    estado[clave] = b.dataset.valor;
    cont.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === b)));
    pintar();
  });
}

const normal = (s) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

function visibles() {
  const t = normal(estado.texto.trim());
  return REFERENCIAS.filter((r) =>
    (!estado.tipo || r.tipo === estado.tipo) &&
    (!estado.color || r.colores.includes(estado.color)) &&
    (!t || normal(`${r.codigo} ${r.nombre}`).includes(t)));
}

// --- Tarjetas ---
function muestra(r, color) {
  const c = COLORES[color].cuero;
  return r.tipo === 'correa'
    ? `<div class="muestra muestra--correa" style="--cuero:${c}"><span class="hebilla"></span></div>`
    : `<div class="muestra muestra--${r.tipo}" style="--cuero:${c}"></div>`;
}

function tarjeta(r) {
  const precio = estado.modo === 'mayor' ? r.mayor : r.detal;
  const tallas = r.tipo === 'correa'
    ? `<label>Talla <select name="talla">${TALLAS.map((t) => `<option>${t}</option>`).join('')}</select></label>` : '';
  return `<li class="ref">
    <div class="ref__foto" data-foto>${muestra(r, r.colores[0])}${r.nueva ? '<span class="nueva">Nueva</span>' : ''}</div>
    <div class="ref__info">
      <p class="ref__codigo">${r.codigo}</p>
      <h3>${r.nombre}</h3>
      <p class="ref__precio">${pesos(precio)}<small>${estado.modo === 'mayor' ? ' c/u por mayor' : ''}</small></p>
      <form class="ref__form" data-codigo="${r.codigo}">
        <fieldset class="colores"><legend>Color</legend>
          ${r.colores.map((c, i) => `<label class="color"><input type="radio" name="color" value="${c}" ${i === 0 ? 'checked' : ''}><span style="--cuero:${COLORES[c].cuero}" title="${COLORES[c].nombre}"></span><span class="oculto">${COLORES[c].nombre}</span></label>`).join('')}
        </fieldset>
        ${tallas}
        <label>Cant. <input name="cantidad" type="number" min="1" value="1" inputmode="numeric"></label>
        <button class="boton boton--fuerte boton--chico" type="submit">Agregar</button>
      </form>
    </div>
  </li>`;
}

function pintar() {
  const lista = visibles();
  $('[data-rejilla]').innerHTML = lista.map(tarjeta).join('');
  $('[data-resultado]').textContent = lista.length
    ? `${lista.length} referencias de ejemplo${estado.modo === 'mayor' ? ' · precios por mayor' : ''}`
    : 'No hay referencias con ese filtro.';
}

// --- Pedido ---
function pintarPedido() {
  const n = unidades(estado.lineas);
  $('[data-contador]').textContent = n;
  $('[data-lista]').innerHTML = estado.lineas.length
    ? estado.lineas.map((l, i) => `<li><span>${l.cantidad} × ${l.codigo} · ${l.colorNombre}${l.talla ? ' · ' + l.talla : ''}</span><button type="button" class="quitar" data-quitar="${i}" aria-label="Quitar ${l.codigo}">Quitar</button></li>`).join('')
    : '<li class="vacio">Todavía no ha agregado referencias.</li>';
  const faltan = faltanParaMinimo(estado.lineas, MINIMO_MAYOR);
  $('[data-minimo]').textContent = estado.modo !== 'mayor' ? ''
    : faltan ? `Le faltan ${faltan} unidades para el mínimo por mayor (${MINIMO_MAYOR}).` : 'Ya cumple el mínimo por mayor.';
  $('[data-enviar]').disabled = !estado.lineas.length;
}

function abrirPedido(abrir) {
  const p = $('#pedido');
  p.hidden = !abrir;
  if (abrir) $('.cerrar', p).focus();
}

document.addEventListener('submit', (e) => {
  const f = e.target.closest('.ref__form');
  if (!f) return;
  e.preventDefault();
  const r = REFERENCIAS.find((x) => x.codigo === f.dataset.codigo);
  const d = new FormData(f);
  const color = d.get('color');
  const cantidad = Math.max(1, parseInt(d.get('cantidad'), 10) || 1);
  estado.lineas = agregar(estado.lineas, { ...r, color, colorNombre: COLORES[color].nombre, talla: d.get('talla') || '', cantidad });
  pintarPedido();
  const b = $('button[type=submit]', f);
  b.textContent = 'Agregado ✓';
  setTimeout(() => { b.textContent = 'Agregar'; }, 1200);
});

// Cambiar el color en la tarjeta cambia la muestra.
document.addEventListener('change', (e) => {
  if (e.target.name !== 'color') return;
  const li = e.target.closest('.ref');
  const r = REFERENCIAS.find((x) => x.codigo === $('.ref__form', li).dataset.codigo);
  $('[data-foto]', li).firstElementChild.outerHTML = muestra(r, e.target.value);
});

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-abrir-pedido]')) abrirPedido(true);
  if (e.target.closest('[data-cerrar-pedido]')) abrirPedido(false);
  const q = e.target.closest('[data-quitar]');
  if (q) { estado.lineas = estado.lineas.filter((_, i) => i !== Number(q.dataset.quitar)); pintarPedido(); }
  const m = e.target.closest('[data-modo]');
  if (m) {
    estado.modo = m.dataset.modo;
    document.querySelectorAll('[data-modo]').forEach((b) => b.setAttribute('aria-pressed', String(b === m)));
    pintar(); pintarPedido();
  }
});

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') abrirPedido(false); });

$('[data-enviar]').addEventListener('click', () => {
  const texto = mensaje(estado.lineas, estado.modo, { nombre: $('[data-nombre]').value.trim(), ciudad: $('[data-ciudad]').value.trim() });
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});

$('[data-form-marca]').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const texto = `Hola, quiero fabricar con mi marca.\nNombre: ${d.get('nombre')}\nMarca: ${d.get('marca')}\nProducto: ${d.get('producto')}\nCantidad aproximada: ${d.get('cantidad') || 'por definir'}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});

$('[data-buscar]').addEventListener('input', (e) => { estado.texto = e.target.value; pintar(); });
chips($('[data-filtro="tipo"]'), TIPOS, 'tipo');
chips($('[data-filtro="color"]'), COLORES, 'color');
pintar();
pintarPedido();
