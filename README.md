# mariovarela-web

Página web de **Mario Varela** (Disacol Mario Varela S.A.S., NIT 902.012.563-9), fábrica de correas, bolsos y accesorios de cuero en Cali (Carrera 9A # 18-33, barrio Sucre). Vende por mayor y al detal y fabrica para otras marcas.

**Estado (7-nov-2026):** el cliente dijo que sí. El **borrador** en Astro se le envía el martes 10-nov con la cotización: https://josed235.github.io/mariovarela-web/ (`noindex`). Las fotos son capturas de su catálogo de WhatsApp, los precios están por confirmar y los pedidos de prueba llegan al WhatsApp de José David (`negocio.whatsapp` en `src/data/negocio.ts`).

## Uso

```bash
npm install
npm run dev       # http://localhost:4321
npm test          # pruebas del pedido (agregar, cantidades, total, mínimo por mayor, mensaje)
npm run build     # genera dist/
```

Cada push a `main` compila y publica en GitHub Pages (`.github/workflows/pages.yml`, con `BASE=/mariovarela-web/`).

## Estructura

```
src/
  data/negocio.ts        datos del negocio y catálogo (única fuente)
  lib/pedido.js          lógica pura del pedido, con pruebas
  components/            Encabezado, Logo (recreación tipográfica), Catalogo (rejilla + vista rápida), Pedido
  pages/index.astro      la página y sus estilos
  scripts/catalogo.js    filtros, vista rápida, pedido, formulario de marca y menú móvil
  scripts/animaciones.js GSAP + ScrollTrigger + Lenis (nada corre con reduced motion)
  styles/global.css      tokens y estilos compartidos
  assets/productos/      fotos del catálogo (optimizadas a WebP en el build)
imagenes/                material crudo del cliente (ignorado por git)
```

- Para agregar un producto o un color: `src/data/negocio.ts` y su foto en `src/assets/productos/`.
- Sistema visual en [DESIGN.md](DESIGN.md).

## Documentación

| Archivo | Contenido |
|---|---|
| [docs/empresa.md](docs/empresa.md) | Quiénes son, qué venden, contacto, impacto social y exportación |
| [docs/presencia-digital.md](docs/presencia-digital.md) | Instagram, WhatsApp, directorios y los problemas concretos que tienen hoy |
| [docs/mercado.md](docs/mercado.md) | Sector en Cali, competencia y clientes objetivo por línea de negocio |
| [docs/propuesta.md](docs/propuesta.md) | Estructura del sitio, catálogo con pedido por WhatsApp y fases siguientes |
| [docs/pendientes-cliente.md](docs/pendientes-cliente.md) | Inconsistencias y preguntas para la reunión |
| [docs/fuentes.md](docs/fuentes.md) | Todas las fuentes consultadas |

La cotización y el plan comercial están en `G:\Mi unidad\02_Personal\Independiente\Propuestas y cotizaciones\Mario Varela\`.

## Stack

Astro 7 (sitio estático), GSAP + ScrollTrigger + Lenis para las animaciones, Bodoni Moda y Hanken Grotesk autoalojadas con Fontsource. El catálogo es un archivo de datos que después puede leer también el chatbot.
