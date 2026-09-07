# Changelog

Todas las modificaciones notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/), y este proyecto se adhiere a [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).

## [1.1.3] - 2026-09-06

### Docs

- docs: README con enlace a la versión publicada (alma-pastel.vercel.app)

## [1.1.2] - 2026-09-06

### Fixed

- fix: captions de Creaciones con alto y ancho uniformes (iguales a la card de cada fila) para evitar que las cajitas desalineen entre sí

## [1.1.1] - 2026-09-06

### Changed

- style: captions de Creaciones y Rellenos como cajitas separadas debajo de cada card, con borde, radio y hover sutil (borde en rosa y sombra leve, solo en dispositivos con hover real)

## [1.1.0] - 2026-09-06

### Added

- feat: sección Rellenos con 9 sabores reales (imagen + nombre), reemplazando la grilla placeholder
- feat: animaciones reveal-on-scroll (IntersectionObserver) en todas las secciones
- feat: animación de entrada del hero al cargar
- feat: efecto hover en las cards de Creaciones y Rellenos (elevación + zoom de imagen)
- feat: favicon del sitio (`static/img/favicon.png`)
- feat: nuevas creaciones: Coquette, Key Lime Pie, Mini tarta de durazno, Pavlova de frutilla y Pavlova de durazno

### Changed

- refactor: imágenes convertidas a WebP y renombradas (`creacion-*`, `relleno-*`, `grilla-*`); eliminadas las imágenes sin uso
- refactor: estilos migrados a utilidades de Bootstrap (menos CSS propio en `style.css`)
- style: cards de Creaciones renombradas (Vintage, Coquette, Blue) y reordenadas
- style: ajuste de padding en `#cta-final` y `#como-pedir`
- fix: "chantilly" → "chantillí"

### Docs

- docs: actualizado `README.md` (WebP, animaciones, utilidades Bootstrap, deploy en Vercel)

## [1.0.1] - 2026-09-05

### Changed

- refactor: mover estilos, imágenes y scripts a `static/` (estructura de assets estáticos) y actualizar las rutas en `index.html`
- docs: actualizar `README.md` con la estructura de `static/`

## [1.0.0] - 2026-09-05

### Added

- feat: estructura de secciones (hero, alma pastel, creaciones, pausa visual, rellenos, cómo pedir, instagram, cta final, footer)
- feat: navbar fijo con scroll suave y enlaces a Alma Pastel, Creaciones y Rellenos
- feat: enlaces de WhatsApp por producto con mensaje precargado (`data-mensaje`)
- feat: botón flotante "Consultar disponibilidad" y botón "Volver arriba"
- feat: parallax del hero en todas las resoluciones
- feat: sección Rellenos como grilla placeholder
- feat: sección Instagram con grilla `@alma_pastel_`
- feat: tipografías Playfair Display + Plus Jakarta Sans y paleta de variables `--ap-*`

### Changed

- refactor: número de WhatsApp centralizado en `js/script.js` (removidos `js/config.js` y `js/config.example.js`)
- refactor: sección "Cómo pedir" reubicada arriba del footer
- style: sombra en las cards de creaciones y efecto vidrio en los captions
- style: hero rediseñado con fondo a pantalla completa y texto frontal

### Docs

- docs: agregado `README.md` y este `CHANGELOG.md`

### Chore

- chore: `.gitignore` inicial