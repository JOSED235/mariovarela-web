// Lógica pura del pedido: sin DOM, probada con node:test. Una línea = producto + variante.

export const pesos = (n) => '$' + n.toLocaleString('es-CO');

export const unidades = (lineas) => lineas.reduce((t, l) => t + l.cantidad, 0);

// null si alguna línea no tiene precio (precios por confirmar).
export function total(lineas) {
  if (lineas.some((l) => l.precio == null)) return null;
  return lineas.reduce((t, l) => t + l.cantidad * l.precio, 0);
}

export const faltanParaMinimo = (lineas, minimo) => Math.max(0, minimo - unidades(lineas));

export function agregar(lineas, item) {
  const i = lineas.findIndex((l) => l.producto === item.producto && l.variante === item.variante);
  if (i === -1) return [...lineas, { ...item }];
  return lineas.map((l, j) => (j === i ? { ...l, cantidad: l.cantidad + item.cantidad } : l));
}

export function cambiarCantidad(lineas, indice, cantidad) {
  return cantidad < 1 ? lineas.filter((_, i) => i !== indice) : lineas.map((l, i) => (i === indice ? { ...l, cantidad } : l));
}

export function mensaje(lineas, modo, { nombre = '', ciudad = '' } = {}) {
  const cab = modo === 'mayor' ? 'Hola, quiero hacer un pedido POR MAYOR:' : 'Hola, quiero hacer este pedido:';
  const filas = lineas.map((l) => `• ${l.cantidad} × ${l.nombre} · ${l.varianteNombre}`);
  const t = total(lineas);
  const resumen = `${unidades(lineas)} unidades${t == null ? '' : ` · total aproximado ${pesos(t)}`}`;
  const datos = [nombre && `Nombre: ${nombre}`, ciudad && `Ciudad: ${ciudad}`].filter(Boolean);
  return [cab, '', ...filas, '', resumen, ...datos].join('\n');
}
