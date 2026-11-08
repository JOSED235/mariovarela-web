# Bitácora

## 2026-11-07: investigación, acuerdo con el cliente y borrador en Astro

**Origen del cliente**
- Mario Varela es cliente de la mamá de José David; llegó como referido. Por eso el precio es más accesible.
- José David habló con Mario y le dijo que **sí**. Se comprometió a enviarle el **martes 10-nov** la cotización detallada y un borrador de la página para que den su opinión.

**Investigación** (`docs/`)
- Datos del registro: S.A.S. matriculada el 27-nov-2025, microempresa, CIIU 1512. Dirección Carrera 9A # 18-33, barrio Sucre, a pocas cuadras de Calipieles (otro cliente).
- Instagram @mariovareladisacol (8.532 seguidores, activo). WhatsApp Business 310 525 5913, con catálogo en https://wa.me/c/573105255913 (solo se ve desde WhatsApp).
- Salió en El País por la feria IFLS 2026 (madres cabeza de hogar y comunidades del Pacífico) y vende la colección ORIGEN en Sexto Sentido, en Puerto Rico.
- No tiene página web.

**Lo que se le vende** (cotización en Drive, `Propuestas y cotizaciones/Mario Varela/`)
- Página robusta de **$1.500.000** (la grande de los precios de referencia de Fuzyum, que él eligió). Mensualidad de $50.000 si solo toma la página.
- **Chatbot propio de WhatsApp e Instagram**, porque le llegan demasiados mensajes y los responde uno por uno. **Decisión de José David: sin API de Claude ni de otra IA**, para que no haya cobro por consumo. Funciona con menús, botones, palabras clave, búsqueda tolerante en el catálogo y paso a una persona con resumen. El panel deja que ellos mismos agreguen, editen y eliminen productos, sin costo; el catálogo es uno solo para la página y el chatbot. Precio de referido $2.000.000 (normal $2.800.000), pagado en tres partes.
- Mensualidad total de **$120.000** el primer año (luego $150.000): servidor del chatbot (unos $40.000) más mantenimiento. El dominio (.com.co, entre $70.000 y $110.000 al año) lo pagan ellos; el hosting de la página es gratis (Cloudflare Pages).
- Datos de Meta usados: coexistencia de la app de WhatsApp Business con la Cloud API en el mismo número (verificar al conectar); los mensajes de servicio cuestan casi nada en Colombia; Instagram no cobra. La app de Meta va en el Business Manager del cliente para no necesitar revisión de Meta.

**Primer borrador (descartado)**
- HTML, CSS y JS sin compilación, con la estética de una correa de taller (Anybody, suela, achiote y turquesa) y productos dibujados en CSS. Se descartó al ver el logo y las fotos reales: la marca es elegante, no de taller.

**Borrador actual (Astro)**
- José David dejó en `imagenes/` el logo y capturas del catálogo de WhatsApp: **Bolso Reg Sai** (5 combinaciones) y **Canguro** (4 colores). No hay fotos de correas ni precios.
- Identidad nueva (ver `DESIGN.md`): Bodoni Moda (la «M» del logo) + Hanken Grotesk; paleta travertino, piedra, cuero negro, coñac, rojo del Reg Sai y oro; el aro rígido del Reg Sai como motivo (portada en arco, variantes en círculo); escalones en el catálogo.
- Animaciones: la firma de la «M» se dibuja, el lema entra palabra por palabra, la foto se abre como un aro, las líneas se «cosen», las cifras cuentan, y una cinta con el lema. Lenis para el scroll suave.
- Catálogo: una tarjeta por color, vista rápida (`<dialog>`) con aros de color y cantidad, panel de pedido con más y menos, modo detal o mayor con aviso del mínimo de 10, y mensaje de WhatsApp sin inventar total cuando no hay precios.
- Secciones: portada, cinta, tres caminos, catálogo, pieza destacada (Reg Sai 2 en 1), por mayor, su marca (proceso y formulario), historia, manos de aquí, confianza, tallas, visítenos y botón flotante de WhatsApp. En el celular hay menú desplegable y el catálogo va en 2 columnas.
- Verificado: 5 pruebas en verde, build sin errores, sin scroll horizontal en 375 px, todas las piezas se revelan al hacer scroll, contraste AA de la paleta y detector de patrones genéricos limpio.

**Estado al cerrar**
- El código está en GitHub (`ef83428`). `.github/workflows/pages.yml` quedó **local sin subir**: GitHub rechazó el push porque `gh` no tiene el permiso `workflow`. José David lo configura. Hasta entonces, la URL pública muestra el primer borrador.
- Pages ya está en modo «GitHub Actions».

**Pendiente**
- Subir el workflow y verificar https://josed235.github.io/mariovarela-web/.
- Fotos originales sin texto encima, fotos de correas, precios, logo en vector, horario, envíos, medios de pago y autorización para contar lo de las madres cabeza de hogar (`docs/pendientes-cliente.md`).
- Antes de enviar la cotización: completar el RUT, revisar el precio del .com.co y borrar las notas internas.
