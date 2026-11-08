# Sistema visual · Mario Varela

*Rehecho el 7-nov-2026 a partir del logo y de las fotos de campaña del cliente. El primer borrador (correa de taller, achiote y turquesa) quedó descartado porque no correspondía a la marca.*

## Brief

- **Qué es:** fábrica de marroquinería del barrio Sucre (Cali): bolsos, canguros y correas en cuero. Vende por mayor, al detal y fabrica para otras marcas. La mayoría llega desde Instagram, en el celular.
- **Personalidad:** el lema de la marca, **«Atrevido. Elegante. Único.»**, más el orgullo de taller («Somos fabricantes»).
- **Referencias de la propia marca:**
  1. el **logo**: una «M» con serifas de alto contraste, una firma en trazo libre, «MARIO VARELA» en mayúsculas muy espaciadas y «Marroquineria» en cursiva;
  2. las **fotos de campaña**: escalones de piedra travertino, luz de tarde, flores secas;
  3. el **aro rígido** del bolso Reg Sai, su pieza insignia.
- **No debe parecer:** una tienda Shopify genérica ni una boutique de lujo fría en blanco y negro.
- **Intensidad:** media. Fondo de piedra cálida con un acento rojo vivo tomado del Reg Sai rojo.

## Tipografía

- **Bodoni Moda** (variable, eje de tamaño óptico) para titulares: es la serifa de alto contraste más cercana a la «M» del logo. Va con `opsz` 36–48: a 96 los trazos finos casi desaparecen en pantalla. La cursiva se usa como acento en una palabra por titular, igual que «Marroquineria» en el logo.
- **Hanken Grotesk** para lectura, formularios y rótulos. Los rótulos van en mayúsculas con tracking de 0,2 a 0,32 em, como «MARIO VARELA».
- Autoalojadas con Fontsource (sin peticiones a Google).
- *Bodoni* no está en la lista negra. La elección se justifica por la marca, no por moda.

## Escala

Razón 1,414 (cuarta aumentada), fluida con `clamp()` (`--t-0` a `--t-4`). Da el contraste de un catálogo de moda: titulares muy grandes y texto discreto. Unidad de espacio de 8 px (`--u`).

## Color (OKLCH)

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--negro` | oklch(0.17 0.008 50) | Cuero negro: texto y secciones oscuras | 16:1 sobre travertino |
| `--travertino` | oklch(0.94 0.022 78) | Piedra de la campaña: fondo | — |
| `--piedra` | oklch(0.87 0.035 74) | Escalones: fondos alternos | — |
| `--arena` | oklch(0.975 0.01 80) | Tarjetas, campos y modales | — |
| `--texto-2` | oklch(0.42 0.03 55) | Texto secundario | 7,2:1 / 5,7:1 sobre piedra |
| `--conac` | oklch(0.47 0.09 50) | Cuero coñac: rótulos y precios | 5,9:1 / 4,75:1 |
| `--rojo` | oklch(0.5 0.19 27) | Rojo del Reg Sai: palabra acento, hover y foco | 5,6:1 sobre travertino |
| `--oro` | oklch(0.76 0.09 82) | Herrajes: líneas y acentos sobre negro | 8,9:1 sobre negro |
| `--pendiente` | oklch(0.48 0.15 300) | Solo del borrador: «por confirmar» | 5,9:1 |

El fondo cálido no es el cliché «crema anti-IA»: sale literalmente de la piedra de sus fotos.

## Forma

- **Rectángulo de etiqueta** (0 px de radio) para botones, tarjetas, campos y modales.
- **Círculo** solo para lo que evoca el aro: la ventana de la foto de portada (arco), el aro negro que la cruza, las variantes de color, los pasos del proceso, el sello de la historia y los botones redondos (cerrar, WhatsApp).
- Líneas de 1 px (`.hilo`) en lugar de sombras. Sin sombras difusas ni transparencias.
- **Escalones:** en el catálogo, la columna central baja 48 px, y los tres caminos bajan en escalera, como los escalones de travertino.

## Movimiento (GSAP + ScrollTrigger + Lenis)

- **Firma:** el trazo de la «M» se dibuja solo (`Logo` con `animar`).
- **Portada:** el lema entra palabra por palabra, la foto se abre como un aro (`clip-path: circle`) y el aro negro aparece después. Parallax suave de la foto.
- Las líneas (`.hilo`) se «cosen» de izquierda a derecha; las cifras cuentan; las piezas suben al entrar.
- Cinta con el lema en cursiva en movimiento continuo.
- Curva propia `--curva` / `expo.out`. Con `prefers-reduced-motion` no corre nada (ni Lenis).

## Reglas

- Una sola palabra en cursiva por titular, y en rojo solo la de la portada.
- El rojo es para acción y acento; nunca para fondos grandes.
- Las fotos actuales son capturas del catálogo de WhatsApp, con texto de campaña encima. Se cambian por los originales sin texto en cuanto el cliente los envíe.
- El logo es una recreación tipográfica (`Logo.astro`) hasta tener el vector oficial.
