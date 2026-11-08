import { test } from 'node:test';
import assert from 'node:assert/strict';
import { agregar, cambiarCantidad, faltanParaMinimo, mensaje, total, unidades } from './pedido.js';

const base = { producto: 'reg-sai', nombre: 'Bolso Reg Sai', variante: 'rojo', varianteNombre: 'Animal print rojo y negro', precio: null };

test('agregar suma la misma variante y separa variantes distintas', () => {
  let l = agregar([], { ...base, cantidad: 2 });
  l = agregar(l, { ...base, cantidad: 3 });
  l = agregar(l, { ...base, variante: 'cebra', varianteNombre: 'Cebra y café', cantidad: 1 });
  assert.deepEqual(l.map((x) => x.cantidad), [5, 1]);
});

test('cambiar a cantidad 0 quita la línea', () => {
  const l = cambiarCantidad([{ ...base, cantidad: 2 }], 0, 0);
  assert.equal(l.length, 0);
});

test('total es null si falta algún precio', () => {
  assert.equal(total([{ ...base, cantidad: 2 }]), null);
  assert.equal(total([{ ...base, precio: 120000, cantidad: 2 }]), 240000);
});

test('faltan para el mínimo nunca es negativo', () => {
  assert.equal(faltanParaMinimo([{ ...base, cantidad: 4 }], 10), 6);
  assert.equal(faltanParaMinimo([{ ...base, cantidad: 12 }], 10), 0);
});

test('mensaje sin precios no inventa un total', () => {
  const m = mensaje([{ ...base, cantidad: 10 }], 'mayor', { ciudad: 'Pasto' });
  assert.match(m, /POR MAYOR/);
  assert.match(m, /10 × Bolso Reg Sai · Animal print rojo y negro/);
  assert.match(m, /^10 unidades$/m);
  assert.doesNotMatch(m, /total/);
  assert.match(m, /Ciudad: Pasto/);
  assert.equal(unidades([{ ...base, cantidad: 10 }]), 10);
});
