import { test } from 'node:test';
import assert from 'node:assert/strict';
import { agregar, faltanParaMinimo, mensaje, total, unidades } from './pedido.js';

const base = { codigo: 'MV-C01', nombre: 'Clásica', color: 'negro', colorNombre: 'Negro', talla: 'M', detal: 50000, mayor: 23000 };

test('agregar suma cantidades de la misma referencia, color y talla', () => {
  const l = agregar(agregar([], { ...base, cantidad: 2 }), { ...base, cantidad: 3 });
  assert.equal(l.length, 1);
  assert.equal(l[0].cantidad, 5);
});

test('agregar separa por talla', () => {
  const l = agregar(agregar([], { ...base, cantidad: 1 }), { ...base, talla: 'L', cantidad: 1 });
  assert.equal(l.length, 2);
});

test('total usa el precio del modo', () => {
  const l = [{ ...base, cantidad: 4 }];
  assert.equal(total(l, 'detal'), 200000);
  assert.equal(total(l, 'mayor'), 92000);
});

test('faltan para el mínimo nunca es negativo', () => {
  assert.equal(faltanParaMinimo([{ ...base, cantidad: 4 }], 10), 6);
  assert.equal(faltanParaMinimo([{ ...base, cantidad: 12 }], 10), 0);
});

test('mensaje incluye líneas, total y datos', () => {
  const m = mensaje([{ ...base, cantidad: 10 }], 'mayor', { nombre: 'Ana', ciudad: 'Pasto' });
  assert.match(m, /POR MAYOR/);
  assert.match(m, /10 × MV-C01 Clásica · Negro · talla M/);
  assert.match(m, /\(10 unidades\)/);
  assert.match(m, /Ciudad: Pasto/);
  assert.equal(unidades([{ ...base, cantidad: 10 }]), 10);
});
