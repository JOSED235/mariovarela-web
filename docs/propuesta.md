# Propuesta de sitio

*Primera versión, 7-nov-2026. Se ajusta después de la reunión con el cliente.*

## Objetivo

Que un mayorista, una marca o un comprador final vea el catálogo, entienda las condiciones y escriba por WhatsApp **con el pedido ya armado**. Hoy primero escribe y después espera el catálogo.

## Estructura (una página larga más un catálogo)

1. **Portada.** «Fábrica de correas y bolsos de cuero en Cali · Más de 15 años · Por mayor y al detal». Dos botones: «Ver catálogo» y «Fabricar para mi marca». Video corto del taller (sacado de sus reels).
2. **Tres caminos:** Por mayor (desde 10 unidades surtidas) · Para su marca (maquila) · Al detal (desde $50.000).
3. **Catálogo.**
   - Filtros por tipo (correa, bolso, clutch, accesorio), ancho, color y estilo.
   - Cada referencia con foto, código, colores y tallas.
   - Precio al detal visible. El precio por mayor, según lo que decida el cliente: visible o «pídalo por WhatsApp».
   - Botón «Agregar a mi pedido». Al final, «Enviar pedido por WhatsApp» arma el mensaje con códigos, colores y cantidades.
   - Sin carrito ni pago en línea en la primera versión.
4. **Por mayor:** pedido mínimo, cómo se paga, envíos a todo el país, tiempos y preguntas frecuentes.
5. **Fabricamos para su marca:** proceso (selección del cuero, corte, costura y detalles), mínimos, muestras, marcado con logo y caso ORIGEN para Puerto Rico. Formulario corto que llega por WhatsApp.
6. **Historia:** de Zarzal a Cali, empezó con una unidad y hoy fabrica para todo el país. Con foto de Mario Varela.
7. **Hecho por manos de aquí:** las madres cabeza de hogar y las comunidades del Pacífico. Solo con autorización.
8. **Guía de tallas** de correas (XS a XL y a medida: cómo medirse).
9. **Visítenos:** dirección, mapa, horario con «abierto ahora», cómo llegar y WhatsApp.
10. **Pie:** razón social y NIT, redes y autorización de datos (Ley 1581) en el formulario.

## Técnica

- Sitio estático, igual que Calipieles y la demo de gimnasio: Vite, HTML, CSS y JS. Hosting gratis (Cloudflare Pages o GitHub Pages).
- **El catálogo se alimenta de un archivo de datos** (JSON o CSV exportado de una hoja de cálculo). Agregar referencias no exige tocar código: la mensualidad cubre cargar las nuevas.
- Fotos en WebP. Con 350 referencias, las fotos son el cuello de botella: ver «Fotos» abajo.
- SEO local: «fábrica de correas de cuero en Cali», «correas por mayor Cali», «maquila de correas». Datos estructurados `LocalBusiness` y `Product`.
- Vista previa al compartir por WhatsApp (Open Graph).

## Fotos

- Primera versión con **60 referencias**, las más vendidas, con foto sobre fondo uniforme.
- Si no hay fotos de catálogo, sesión en el taller con el celular y caja de luz (extra en la cotización).
- Las demás referencias se cargan por tandas desde la mensualidad o en paquetes.

## Después (fases siguientes)

- Lista de precios por mayor detrás de un código que el cliente da a sus mayoristas.
- Tienda con pago en línea (Wompi) para el detal.
- Versión en inglés para compradores de afuera.
- Ficha de Google Business verificada.
- Vigilancia y mantenimiento (producto B).
