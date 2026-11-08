# mariovarela-web

Página web de **Mario Varela** (Disacol Mario Varela S.A.S., NIT 902.012.563-9), marroquinería en Cali: bolsos, canguros y correas en cuero; por mayor, al detal y fabricación para otras marcas.

## Leer antes de trabajar

1. `docs/bitacora.md`: qué se decidió y por qué, sesión por sesión. **Empezar aquí.**
2. `DESIGN.md`: sistema visual (sale del logo y de sus fotos de campaña; no volver a la estética de taller del primer borrador).
3. `docs/empresa.md`, `docs/presencia-digital.md` y `docs/pendientes-cliente.md`: investigación del cliente y lo que falta confirmar.
4. Comercial (fuera del repo): `G:\Mi unidad\02_Personal\Independiente\Propuestas y cotizaciones\Mario Varela\` (estudio, plan y cotización) y `Independiente\00_Contexto\` (estado general de José David).

## Convenciones

- Código, textos y documentos en español. Trato de «usted» en los textos de la página.
- Datos del negocio y catálogo solo en `src/data/negocio.ts`. Fotos en `src/assets/productos/` (Astro las optimiza a WebP). `imagenes/` es material crudo del cliente y está en `.gitignore`.
- La lógica del pedido es pura y tiene pruebas (`src/lib/pedido.js`). Si se cambia, actualizar `pedido.test.js` y correr `npm test`.
- Las animaciones viven en `src/scripts/animaciones.js` y no corren con `prefers-reduced-motion`.
- Lo que el cliente no ha confirmado se marca en la página con `.pendiente` y en el código con `⚠️` o `shortcut:`.
- `negocio.whatsapp` es el número de José David mientras sea borrador. Al publicar la versión real, cambiar a `negocio.whatsappCliente` y quitar `noindex` y el aviso de borrador (`Base.astro`, `index.astro`).
- Antes de commit: `npm test` y `npm run build`. Revisar en escritorio y en 375 px.
- Commits, PRs y tags **sin coautoría**: ni `Co-Authored-By:` ni «Generated with Claude Code». El autor es solo José David.

## Despliegue

GitHub Pages con Actions (`.github/workflows/pages.yml`, `BASE=/mariovarela-web/`). Para subir cambios al workflow, `gh` necesita el permiso `workflow` (`gh auth refresh -h github.com -s workflow`).
