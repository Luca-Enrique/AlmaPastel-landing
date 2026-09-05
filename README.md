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
- **`static/css/style.css`** — Estilos del proyecto: variables de paleta, tipografías, layout de secciones y estilos responsive (mobile-first). Incluye el navbar, la imagen de fondo del hero con parallax y los botones flotantes.
- **`static/js/script.js`** — JavaScript vanilla. Contiene la configuración de WhatsApp, genera los enlaces `wa.me`, y maneja el scroll del navbar, el scroll suave de anclas, los botones flotantes y el parallax del hero.
- **`static/img/`** — Imágenes del proyecto (fotos de tortas, tartas, pavlovas, imagen del hero, etc.).
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

- Todas las imágenes se colocan en **`static/img/`**.
- Se referencian desde `index.html` con rutas relativas (`static/img/nombre.jpg`).
- Cada creación y el grid de Instagram usan las imágenes disponibles dentro de `static/img/`.

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

Al tratarse de una web estática, se puede publicar en cualquier servicio de hosting estático habitual, por ejemplo: **GitHub Pages**, **Netlify** o **Vercel**.

> Nota: este repositorio no indica una plataforma de despliegue concreta. Sólo se mencionan opciones posibles.

## Diseño

- Diseño **editorial gastronómico**, con una estética **artesanal, cálida y minimalista**.
- Enfoque **mobile-first** y **responsive** (desktop, tablet y móvil).
- **Paleta de colores** definida mediante variables CSS (`--ap-*`): marfil, crema, rosa sutil, chocolate, espresso y caramelo.
- **Tipografías** (vía Google Fonts): **Playfair Display** para títulos y **Plus Jakarta Sans** para el texto.

## Contenido

El contenido es editable directamente:

- **Textos y productos** → se modifican en `index.html` (títulos, descripciones, botones, mensajes de WhatsApp, textos provisionales, etc.).
- **Imágenes** → se reemplazan o agregan en `static/img/`.

Algunas secciones contienen textos provisorios señalados con comentarios HTML (por ejemplo, la sección «Sobre Alma»), listos para reemplazar por contenido final.

## Buenas prácticas

- **Actualizar el número de WhatsApp** solo desde `static/js/script.js` (constante `WHATSAPP_PHONE`).
- Mantener las **imágenes optimizadas** (compresión y dimensiones razonables) para no afectar el rendimiento.
- **Respetar la estructura de carpetas**: estilos en `static/css/`, scripts en `static/js/`, imágenes en `static/img/`.
- Mantener el proyecto **sin frameworks ni bundlers innecesarios**.
- **Verificar el responsive** (desktop, tablet y móvil) antes de aplicar cambios de layout.
