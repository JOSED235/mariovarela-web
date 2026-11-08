import type { ImageMetadata } from 'astro';
import regSaiRojo from '../assets/productos/reg-sai-rojo.png';
import regSaiCebra from '../assets/productos/reg-sai-cebra.png';
import regSaiVaca from '../assets/productos/reg-sai-vaca.png';
import regSaiJirafa from '../assets/productos/reg-sai-jirafa.png';
import regSaiLeopardo from '../assets/productos/reg-sai-leopardo.png';
import canguroSerpiente from '../assets/productos/canguro-serpiente.png';
import canguroDorado from '../assets/productos/canguro-dorado.png';
import canguroNegro from '../assets/productos/canguro-negro.png';
import canguroCafe from '../assets/productos/canguro-cafe.png';

// Única fuente de los datos del negocio. ⚠️ Lo marcado "por confirmar" se valida con el cliente.
export const negocio = {
  marca: 'Mario Varela',
  razonSocial: 'Disacol Mario Varela S.A.S.',
  nit: '902.012.563-9',
  direccion: 'Carrera 9A # 18-33',
  barrio: 'Barrio Sucre, centro de Cali',
  ciudad: 'Cali',
  instagram: 'https://www.instagram.com/mariovareladisacol/',
  whatsappCliente: '573105255913',
  // shortcut: en el borrador los mensajes llegan a José David; al publicar, usar whatsappCliente.
  whatsapp: '573145727863',
  minimoMayor: 10,
  lema: ['Atrevido.', 'Elegante.', 'Único.'],
} as const;

export interface Variante { id: string; nombre: string; img: ImageMetadata }
export interface Producto {
  id: string;
  nombre: string;
  tipo: 'bolso' | 'canguro';
  resumen: string;
  detalles: string[];
  precio: number | null; // null = por confirmar con el cliente
  variantes: Variante[];
}

export const TIPOS = { bolso: 'Bolsos', canguro: 'Canguros', correa: 'Correas' } as const;

export const productos: Producto[] = [
  {
    id: 'reg-sai',
    nombre: 'Bolso Reg Sai',
    tipo: 'bolso',
    resumen: 'Un bolso, dos estilos. De pie es un tote de mano con aro rígido; doblado con su broche magnético oculto, una cartera cruzada con asa larga.',
    detalles: ['Cuero liso seleccionado y piel con pelo', 'Doble uso: tote o cartera cruzada', 'Herrajes de alta resistencia y cierre magnético'],
    precio: null,
    variantes: [
      { id: 'rojo', nombre: 'Animal print rojo y negro', img: regSaiRojo },
      { id: 'cebra', nombre: 'Cebra y café', img: regSaiCebra },
      { id: 'vaca', nombre: 'Vaca y negro', img: regSaiVaca },
      { id: 'jirafa', nombre: 'Jirafa y negro', img: regSaiJirafa },
      { id: 'leopardo', nombre: 'Leopardo y café', img: regSaiLeopardo },
    ],
  },
  {
    id: 'canguro',
    nombre: 'Canguro',
    tipo: 'canguro',
    resumen: 'El canguro que se lleva cruzado o a la cintura, con correa ajustable y cierres seguros. Estilo que lo acompaña todo el día.',
    detalles: ['Material resistente y de alta calidad', 'Cierres seguros', 'Correa ajustable'],
    precio: null,
    variantes: [
      { id: 'serpiente', nombre: 'Serpiente', img: canguroSerpiente },
      { id: 'dorado', nombre: 'Dorado', img: canguroDorado },
      { id: 'negro', nombre: 'Negro', img: canguroNegro },
      { id: 'cafe', nombre: 'Café', img: canguroCafe },
    ],
  },
];
