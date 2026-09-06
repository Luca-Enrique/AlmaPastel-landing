# Alma Pastel

Landing page estática para una pastelería artesanal. Presenta las creaciones de la marca y dirige a los visitantes hacia WhatsApp para realizar consultas o pedidos.

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
├── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
└── .gitignore
```

- **`index.html`** — Markup de toda la landing: navbar, hero, Sobre Alma, Creaciones, Cómo pedir, Instagram, CTA final, footer y botones flotantes. Es donde se editan los textos y productos.
- **`static/css/style.css`** — Estilos propios del proyecto: variables de paleta, tipografías, layout de secciones y estilos responsive (mobile-first). Se combinan con las utilidades de Bootstrap (`text-center`, `d-flex`, `mx-auto`, etc.) para gran parte del layout. Incluye el navbar, la imagen de fondo del hero con parallax y los botones flotantes.
- **`static/js/script.js`** — JavaScript vanilla. Contiene la configuración de WhatsApp, genera los enlaces `wa.me`, y maneja el scroll del navbar, el scroll suave de anclas, los botones flotantes, el parallax del hero y las animaciones reveal-on-scroll (`initScrollReveal`).
- **`static/img/`** — Imágenes del proyecto en **WebP** (fotos de tortas, tartas, pavlovas, rellenos, hero, favicon, etc.), con prefijos por uso (`creacion-*`, `relleno-*`, `grilla-*`).
- **`.gitignore`** — Excluye archivos del sistema (`Thumbs.db`, `.DS_Store`).

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

- Todas las imágenes se colocan en **`static/img/`** en formato **WebP** (`*.webp`), salvo `sobre-alma.jpg` y `favicon.png`.
- Se referencian desde `index.html` con rutas relativas (`static/img/creacion-vintage.webp`).
- Los nombres usan prefijos por contexto: `creacion-*` (cards de Creaciones), `relleno-*` (cards de Rellenos), `grilla-*` (grid de Instagram).
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

Se publica en **Netlify** conectado al repositorio de GitHub.

1. Subir el proyecto a GitHub en la rama `main`.
2. En Netlify: **Add new site → Import an existing project → GitHub** y seleccionar el repositorio `AlmaPastel-landing`.
3. Configuración de build:
   - **Build command**: *(vacío)* (sitio 100% estático)
   - **Publish directory**: `.` (la raíz del repo, donde está `index.html`)
4. Cada push a `main` publica automáticamente; los pull requests generan previews.

> El número de WhatsApp se configura en `static/js/script.js`; no se necesitan variables de entorno.

## Diseño

- Diseño **editorial gastronómico**, con una estética **artesanal, cálida y minimalista**.
- Enfoque **mobile-first** y **responsive** (desktop, tablet y móvil).
- **Paleta de colores** definida mediante variables CSS (`--ap-*`): marfil, crema, rosa sutil, chocolate, espresso y rosa (`--ap-accent-rosa`).
- **Tipografías** (vía Google Fonts): **Playfair Display** para títulos y **Plus Jakarta Sans** para el texto.
- **Animaciones**: reveal-on-scroll de secciones (IntersectionObserver, con soporte para `prefers-reduced-motion`) y entrada animada del hero al cargar.

## Contenido

El contenido es editable directamente:

- **Textos y productos** → se modifican en `index.html` (títulos, descripciones, botones, mensajes de WhatsApp, etc.).
- **Imágenes** → se reemplazan o agregan en `static/img/` (WebP, con prefijos `creacion-*`, `relleno-*`, `grilla-*`).

Algunas secciones contienen textos provisorios señalados con comentarios HTML, listos para reemplazar por contenido final.

## Buenas prácticas

- **Actualizar el número de WhatsApp** solo desde `static/js/script.js` (constante `WHATSAPP_PHONE`).
- Mantener las **imágenes optimizadas** (compresión y dimensiones razonables) para no afectar el rendimiento.
- **Respetar la estructura de carpetas**: estilos en `static/css/`, scripts en `static/js/`, imágenes en `static/img/`.
- Mantener el proyecto **sin frameworks ni bundlers innecesarios**.
- **Verificar el responsive** (desktop, tablet y móvil) antes de aplicar cambios de layout.
