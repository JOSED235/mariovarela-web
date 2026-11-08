// Lógica pura del pedido: sin DOM, para poder probarla con node:test.

export const pesos = (n) => '$' + n.toLocaleString('es-CO');

export function unidades(lineas) {
  return lineas.reduce((t, l) => t + l.cantidad, 0);
}

export function total(lineas, modo) {
  return lineas.reduce((t, l) => t + l.cantidad * (modo === 'mayor' ? l.mayor : l.detal), 0);
}

export function faltanParaMinimo(lineas, minimo) {
  return Math.max(0, minimo - unidades(lineas));
}

// Agrega o suma una línea; la clave es referencia + color + talla.
export function agregar(lineas, item) {
  const i = lineas.findIndex((l) => l.codigo === item.codigo && l.color === item.color && l.talla === item.talla);
  if (i === -1) return [...lineas, { ...item }];
  return lineas.map((l, j) => (j === i ? { ...l, cantidad: l.cantidad + item.cantidad } : l));
}

export function mensaje(lineas, modo, { nombre = '', ciudad = '' } = {}) {
  const cab = modo === 'mayor' ? 'Hola, quiero hacer un pedido POR MAYOR:' : 'Hola, quiero hacer este pedido:';
  const filas = lineas.map((l) => `• ${l.cantidad} × ${l.codigo} ${l.nombre} · ${l.colorNombre}${l.talla ? ' · talla ' + l.talla : ''}`);
  const datos = [nombre && `Nombre: ${nombre}`, ciudad && `Ciudad: ${ciudad}`].filter(Boolean);
  return [cab, '', ...filas, '', `Total aproximado: ${pesos(total(lineas, modo))} (${unidades(lineas)} unidades)`, ...datos].join('\n');
}
