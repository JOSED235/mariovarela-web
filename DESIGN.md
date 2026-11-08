# Sistema visual · Mario Varela

## Brief

- **Qué es:** fábrica de correas y bolsos de cuero del barrio Sucre (Cali). Vende por mayor, al detal y fabrica para otras marcas. La mayoría llega desde Instagram, en el celular.
- **Personalidad:** de taller, directa (precios y mínimos sin rodeos), orgullosa de su origen.
- **Referencia material:** la correa misma: el sello quemado en la etiqueta de cuero, la costura con hilo encerado, los agujeros de talla de la correa y la chaquira de los tejidos del Pacífico con los que trabajan.
- **No debe parecer:** la boutique de lujo de Mario Hernández ni la tienda genérica de Shopify. Tampoco Calipieles (verde botella y Fraunces).
- **Intensidad:** media-alta. Es una marca popular que vende por Instagram, y el acento debe verse desde el celular.

## Tipografía

- **Anybody** (eje de anchura 50–150) para titulares, en anchura 60–80 % y en mayúsculas: recuerda el sello grabado y las letras condensadas de las etiquetas de cuero.
- **Hanken Grotesk** para lectura y formularios: abierta y clara en tamaños chicos, con contraste de anchura frente a la display.
- En el borrador se cargan desde Google Fonts. En producción se autoalojan con subset.

## Escala

Razón 1,333 (cuarta justa), fluida con `clamp()` (`--t-0` a `--t-4`). Da saltos marcados, como una etiqueta: precio y titular grandes, lo demás discreto. La unidad base de espacio es 6 px (`--u`), la separación entre agujeros de una correa.

## Color (OKLCH)

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--suela` | oklch(0.2 0.025 45) | Fondos oscuros y texto principal | 15,7:1 sobre carnaza |
| `--carnaza` | oklch(0.95 0.008 60) | Fondo claro (el lado interno del cuero) | — |
| `--carnaza-2` | oklch(0.89 0.015 60) | Fondos alternos | 13:1 sobre suela |
| `--tinta-suave` | oklch(0.42 0.03 45) | Texto secundario | 7,4:1 sobre carnaza |
| `--miel` | oklch(0.76 0.12 72) | Hilo encerado: costuras, cifras sobre oscuro | 8,3:1 sobre suela |
| `--achiote` | oklch(0.62 0.2 35) | Chaquira roja: acción principal, con texto suela | 4,56:1 |
| `--achiote-texto` | oklch(0.5 0.17 35) | Achiote para texto chico sobre claro | 5,6:1 |
| `--turquesa` | oklch(0.7 0.11 195) | Chaquira turquesa: acento secundario y foco | 7,1:1 con suela |
| `--papel` | oklch(0.99 0.004 60) | Tarjetas y campos (no blanco puro) | — |
| `--pendiente` | oklch(0.5 0.16 300) | Solo del borrador: marca «por confirmar» | 5,6:1 |

## Forma

- Esquinas de 3 px, como un cuero cortado con cuchilla. No se usan radios grandes.
- **Costura:** contorno punteado hacia adentro (`outline: dashed` con `outline-offset` negativo) en tarjetas, sello y formularios, y línea de puntadas bajo los títulos.
- **Sombra dura** desplazada (3 px) solo en el botón principal, como un sello estampado. No hay sombras difusas.
- La franja de datos de la portada es una correa: fondo miel, costuras arriba y abajo y agujeros entre cifras.

## Movimiento

Solo desplazamiento corto al pasar el cursor (`--curva`), y nada con `prefers-reduced-motion`.

## Reglas

- El acento achiote es para acciones. El turquesa marca lo nuevo, el foco y el camino de «su marca».
- Las fotos reales reemplazan las muestras dibujadas (`.muestra`). Si una referencia no tiene foto, se deja la muestra con su color.
