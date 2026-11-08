# mariovarela-web

Página web de **Mario Varela** (Disacol Mario Varela S.A.S., NIT 902.012.563-9), fábrica de correas, bolsos y accesorios de cuero en Cali (Carrera 9A # 18-33, barrio Sucre). Vende por mayor y al detal y fabrica para otras marcas.

**Estado (7-nov-2026):** el cliente dijo que sí. Hay un **borrador** estático (`index.html`) para enviarle el martes 10-nov con la cotización. Fotos, precios y referencias son de ejemplo, y los pedidos de prueba llegan al WhatsApp de José David (`js/datos.js`).

## Ver el borrador

```bash
npx http-server -s .   # los módulos de JS no cargan con file://
node --test js/        # pruebas del pedido (agregar, total, mínimo por mayor, mensaje)
```

- `js/datos.js`: referencias de ejemplo, colores, mínimo por mayor y número de WhatsApp.
- `js/pedido.js`: lógica pura del pedido (con pruebas en `pedido.test.js`).
- `js/main.js`: filtros, tarjetas, panel del pedido y formulario de marca propia.
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

## Stack previsto

Sitio estático con Vite (igual que `calipieles-landing`), catálogo alimentado por un archivo de datos y publicado en Cloudflare Pages o GitHub Pages.
