# Alma Pastel

Landing page estática para una pastelería artesanal. Presenta las categorías de la marca y dirige a los visitantes hacia WhatsApp para realizar consultas o pedidos.

El sitio tiene 7 páginas: el `index` con las secciones de la marca, las **páginas de categorías** (Tortas, Tartas y Postres) y las **páginas de rellenos** (Dulce de leche, Mousses y Cremas), donde se listan los productos con sus fotos.

La página está publicada en [alma-pastel](https://alma-pastel.vercel.app)

Es un proyecto frontend liviano: **no tiene backend ni base de datos**.

## Tecnologías

- **HTML5**
- **CSS3**
- **Bootstrap 5.3.3** (vía CDN)
- **JavaScript vanilla**
- **Google Fonts** (Playfair Display + Plus Jakarta Sans)
- **SVG inline** (iconos de los pasos y botones)

## Estructura del proyecto

```
.
├── index.html              # Landing: hero, Sobre Alma, Creaciones (cards de categorías), Rellenos, etc.
├── creaciones/
│   ├── tortas.html          # Página de categoría: tortas
│   ├── tartas.html          # Página de categoría: tartas
│   └── postres.html         # Página de categoría: postres
├── rellenos/
│   ├── dulce-de-leche.html  # Página de rellenos: familia dulce de leche
│   ├── mousses.html         # Página de rellenos: familia mousses
│   └── cremas.html          # Página de rellenos: familia cremas
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── components.js    # Layout compartido: navbar, footer y botones flotantes
│   │   └── script.js
│   └── img/
│       ├── creaciones/      # Fotos de tortas, tartas y postres (creacion-*.webp)
│       ├── rellenos/        # Fotos de rellenos (relleno-*.webp)
│       └── generales/       # hero, sobre-alma.jpg, favicon.png y grilla-*.webp
└── .gitignore
```

- **`index.html`** — Markup de la landing: navbar, hero, Sobre Alma, Creaciones (3 cards de categoría que enlazan a las páginas), Cómo pedir, Instagram, CTA final y footer. Es donde se editan los textos y productos de la home.
- **`creaciones/tortas.html` / `creaciones/tartas.html` / `creaciones/postres.html`** — Páginas de categoría: header de la categoría (con enlace "Volver a Creaciones" hacia `../index.html#creaciones`) y el grid de productos con su foto, descripción y botón de WhatsApp por producto.
- **`rellenos/dulce-de-leche.html` / `rellenos/mousses.html` / `rellenos/cremas.html`** — Páginas de rellenos: cada familia lista sus sabores con cards clicables a WhatsApp. Las cards muestran el título sobre la foto con un blur que desaparece al hover (desktop); en dispositivos táctiles el efecto se reproduce automáticamente rotando de card en card y un hint guía el doble toque hacia WhatsApp.
- **`static/css/style.css`** — Estilos propios del proyecto: variables de paleta, tipografías, layout de secciones y estilos responsive (mobile-first). Se combinan con las utilidades de Bootstrap (`text-center`, `d-flex`, `mx-auto`, etc.) para gran parte del layout. Es el **único stylesheet compartido** entre los 7 HTML.
- **`static/js/components.js`** — Renderiza el **layout común** (navbar con enlaces de navegación, footer, botones flotantes y navegación entre categorías) y lo inyecta en los placeholders de cada página. Resuelve las rutas relativas según la carpeta de la página (`pageHref`/`folderDe`). La página activa se marca con `active` según `<body data-page="...">`.
- **`static/js/script.js`** — JavaScript vanilla. Contiene la configuración de WhatsApp, genera los enlaces `wa.me`, y maneja el scroll del navbar, el scroll suave de anclas, los botones flotantes, el parallax del hero, las animaciones reveal-on-scroll (`initScrollReveal`), la rotación automática de las cards de rellenos en dispositivos táctiles y el glasspanel del título de cada relleno.
- **`static/img/`** — Imágenes del proyecto en **WebP** (fotos de tortas, tartas, pavlovas, rellenos, hero, favicon, etc.), organizadas por familia: `creaciones/` (`creacion-*`), `rellenos/` (`relleno-*`) y `generales/` (hero, `sobre-alma.jpg`, `favicon.png` y `grilla-*`).
- **`.gitignore`** — Excluye archivos del sistema (`Thumbs.db`, `.DS_Store`).

> El navbar, el footer y los botones flotantes se inyectan por JavaScript (`components.js`). El contenido principal (hero, productos, rellenos) queda estático en cada HTML para no afectar SEO ni analítica.

## Configuración de WhatsApp

El número de WhatsApp se configura en **una única constante** al inicio de `static/js/script.js`:

```js
var WHATSAPP_PHONE = '+595000000000';
```

Cambiar ese valor actualiza automáticamente **todos** los botones de WhatsApp de la página (navbar, hero, productos, CTA final y botón flotante).

> El número está embebido en el frontend, por lo que es visible para cualquier visitante de la página. Es una característica esperada al tratarse de una web estática que enlaza a WhatsApp.

### Mensajes precargados por producto

Los botones de cada creación en `index.html` incluyen el atributo `data-mensaje`:

```html
<a href="https://wa.me/YOUR_PHONE_NUMBER" class="creacion-cta" data-mensaje="Hola! Quiero consultar por la Torta Rosa.">Pedir esta torta</a>
```

`static/js/script.js` construye el enlace de cada botón:

- Si tiene `data-mensaje`, abre WhatsApp con ese texto precargado: `https://wa.me/NUMERO?text=<mensaje>`.
- Si no lo tiene, abre WhatsApp directo: `https://wa.me/NUMERO`.

Para cambiar o agregar un mensaje, editar el atributo `data-mensaje` del botón correspondiente en `index.html`.

## Imágenes

- Todas las imágenes se colocan en **`static/img/`** en formato **WebP** (`*.webp`), salvo `sobre-alma.jpg` y `favicon.png`, organizadas por familia:
  - `static/img/creaciones/` — fotos de tortas, tartas y postres (`creacion-*`).
  - `static/img/rellenos/` — fotos de rellenos (`relleno-*`).
  - `static/img/generales/` — hero, `sobre-alma.jpg`, `favicon.png` y grid de Instagram (`grilla-*`).
- Se referencian desde `index.html` con rutas relativas (`static/img/creaciones/creacion-vintage.webp`) y desde las páginas de las subcarpetas con `../static/img/...`.
- Se recomienda mantener las imágenes **optimizadas** (compresión y dimensiones razonables) para no afectar el rendimiento.

## Desarrollo local

Al ser una web 100% estática, no requiere compilación ni instalación de dependencias.

La forma más simple de probarla:

1. Abrir `index.html` directamente en el navegador, **o**
2. Servirla con un servidor estático.

Por ejemplo, desde la raíz del proyecto con Python:

```bash
python -m http.server 8000
```

y abrir `http://localhost:8000` en el navegador. También funciona con la extensión «Live Server» de VS Code.

## Deployment

Se publica en **Vercel** conectado al repositorio de GitHub.

1. Subir el proyecto a GitHub en la rama `main`.
2. En Vercel: **Add New → Project** y seleccionar el repositorio `AlmaPastel-landing`.
3. Configuración del proyecto:
   - **Framework Preset**: *Other*
   - **Build Command**: *(vacío)* (sitio 100% estático)
   - **Output Directory**: `.` (la raíz del repo, donde está `index.html`)
4. Cada push a `main` genera un deployment de producción automático; los pull requests generan previews.

> El número de WhatsApp se configura en `static/js/script.js`; no se necesitan variables de entorno.

## Diseño

- Diseño **editorial gastronómico**, con una estética **artesanal, cálida y minimalista**.
- Enfoque **mobile-first** y **responsive** (desktop, tablet y móvil).
- **Paleta de colores** definida mediante variables CSS (`--ap-*`): marfil, crema, rosa sutil, chocolate, espresso y rosa (`--ap-accent-rosa`).
- **Tipografías** (vía Google Fonts): **Playfair Display** para títulos y **Plus Jakarta Sans** para el texto.
- **Animaciones**: reveal-on-scroll de secciones (IntersectionObserver, con soporte para `prefers-reduced-motion`) y entrada animada del hero al cargar.

## Contenido

El contenido es editable directamente:

- **Productos de la home** → se modifican en `index.html` (cards de categorías, textos, botones, mensajes de WhatsApp, etc.).
- **Productos de cada categoría** → se modifican en `creaciones/tortas.html`, `creaciones/tartas.html` y `creaciones/postres.html` (título, descripción y `data-mensaje` de cada card).
- **Rellenos** → se modifican en `rellenos/dulce-de-leche.html`, `rellenos/mousses.html` y `rellenos/cremas.html` (imagen, título y `data-mensaje` de cada card).
- **Navbar y footer** → se editan en `static/js/components.js` (única fuente de verdad del layout común).
- **Imágenes** → se reemplazan o agregan en `static/img/` según la familia: `creaciones/`, `rellenos/` o `generales/` (WebP, con prefijos `creacion-*`, `relleno-*`, `grilla-*`).

Algunas secciones contienen textos provisorios señalados con comentarios HTML, listos para reemplazar por contenido final.

## Buenas prácticas

- **Actualizar el número de WhatsApp** solo desde `static/js/script.js` (constante `WHATSAPP_PHONE`).
- Mantener las **imágenes optimizadas** (compresión y dimensiones razonables) para no afectar el rendimiento.
- **Respetar la estructura de carpetas**: estilos en `static/css/`, scripts en `static/js/`, imágenes en `static/img/`.
- Mantener el proyecto **sin frameworks ni bundlers innecesarios**.
- **Verificar el responsive** (desktop, tablet y móvil) antes de aplicar cambios de layout.
