// Referencias DE EJEMPLO para el borrador. En producción salen del catálogo real del cliente.
// `cuero`: color de la muestra que se dibuja mientras no haya foto.
export const COLORES = {
  negro: { nombre: 'Negro', cuero: 'oklch(0.24 0.01 40)' },
  cafe: { nombre: 'Café', cuero: 'oklch(0.38 0.07 45)' },
  miel: { nombre: 'Miel', cuero: 'oklch(0.58 0.11 60)' },
  vino: { nombre: 'Vino', cuero: 'oklch(0.35 0.11 20)' },
  hueso: { nombre: 'Hueso', cuero: 'oklch(0.86 0.03 80)' },
};

export const TIPOS = { correa: 'Correas', bolso: 'Bolsos', clutch: 'Clutch', accesorio: 'Accesorios' };

export const REFERENCIAS = [
  { codigo: 'MV-C01', nombre: 'Clásica lisa 3,5 cm', tipo: 'correa', colores: ['negro', 'cafe', 'miel'], detal: 50000, mayor: 23000, nueva: false },
  { codigo: 'MV-C02', nombre: 'Trenzada', tipo: 'correa', colores: ['cafe', 'miel'], detal: 65000, mayor: 31000, nueva: true },
  { codigo: 'MV-C03', nombre: 'Doble costura 4 cm', tipo: 'correa', colores: ['negro', 'cafe'], detal: 58000, mayor: 27000, nueva: false },
  { codigo: 'MV-C04', nombre: 'Ejecutiva reversible', tipo: 'correa', colores: ['negro', 'cafe'], detal: 70000, mayor: 34000, nueva: false },
  { codigo: 'MV-C05', nombre: 'Grabada cocodrilo', tipo: 'correa', colores: ['negro', 'vino', 'miel'], detal: 62000, mayor: 29000, nueva: true },
  { codigo: 'MV-C06', nombre: 'Delgada de dama 2 cm', tipo: 'correa', colores: ['hueso', 'negro', 'vino'], detal: 52000, mayor: 24000, nueva: false },
  { codigo: 'MV-B01', nombre: 'Bolso bandolera', tipo: 'bolso', colores: ['cafe', 'negro'], detal: 180000, mayor: 95000, nueva: false },
  { codigo: 'MV-B02', nombre: 'Bolso con tejido del Pacífico', tipo: 'bolso', colores: ['miel', 'hueso'], detal: 220000, mayor: 120000, nueva: true },
  { codigo: 'MV-K01', nombre: 'Clutch con correa', tipo: 'clutch', colores: ['negro', 'vino', 'hueso'], detal: 120000, mayor: 62000, nueva: false },
  { codigo: 'MV-K02', nombre: 'Clutch sobre', tipo: 'clutch', colores: ['miel', 'negro'], detal: 110000, mayor: 56000, nueva: false },
  { codigo: 'MV-A01', nombre: 'Billetera de bolsillo', tipo: 'accesorio', colores: ['negro', 'cafe'], detal: 55000, mayor: 26000, nueva: false },
  { codigo: 'MV-A02', nombre: 'Llavero de cuero', tipo: 'accesorio', colores: ['miel', 'vino', 'cafe'], detal: 18000, mayor: 8000, nueva: false },
];

export const MINIMO_MAYOR = 10;
export const TALLAS = ['XS', 'S', 'M', 'L', 'XL', 'A medida'];
// shortcut: en el borrador los pedidos llegan a José David; en producción, 573105255913 (Mario Varela)
export const WHATSAPP = '573145727863';
