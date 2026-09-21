# Changelog

Todas las modificaciones notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/), y este proyecto se adhiere a [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).

## [1.3.1] - 2026-09-21

### Added

- feat: los botones flotantes (WhatsApp y volver arriba) se detienen sobre el borde del footer con 16px de separación — en index en tablets y móviles, y en desktop en todas las páginas
- feat: en creaciones y rellenos se elimina el botón flotante "Consultar disponibilidad" y el WhatsApp del navbar queda siempre activo

### Fixed

- fix: transición de entrada y salida suaves en el hint "Tocá de nuevo para pedir" de las cards de rellenos (la entrada respeta `prefers-reduced-motion`)

## [1.3.0] - 2026-09-21

### Changed

- chore: reestructuración del proyecto en carpetas: páginas de categorías en `creaciones/` (tortas, tartas, postres) y de rellenos en `rellenos/` (dulce de leche, mousses, cremas), con nombres de archivo más cortos; imágenes organizadas en `static/img/{creaciones,rellenos,generales}`; rutas relativas por profundidad y navegación consciente de carpeta (`folderDe`/`pageHref`) en `components.js`

## [1.2.2] - 2026-09-21

### Added

- feat: navegación "anterior y siguiente" entre categorías arriba del footer, con encadenado Postres → Rellenos (Dulce de leche) y Dulce de leche → Creaciones; botón de estilo uniforme (relleno rosa) en todas las resoluciones
- feat: hint "Tocá de nuevo para pedir" en el preview táctil de las cards de rellenos, haciendo intuitiva la redirección a WhatsApp con el doble toque

### Fixed

- fix: el glasspanel del título de los rellenos ahora muestra su blur (copia borrosa de la foto vía `--relleno-img`); `backdrop-filter` no se veía porque la imagen con `filter` queda aislada del backdrop
- fix: cards de rellenos ocupando todo el ancho en móvil y tablet (una por fila), con 4 por fila en desktop

### Changed

- style: el menú hamburguesa se cierra al hacer scroll hacia abajo en móviles y tablets

## [1.2.1] - 2026-09-20

### Added

- feat: navbar contextual según la página — index (Alma Pastel / Creaciones / Rellenos), categorías (Alma Pastel / Tortas / Tartas / Postres) y rellenos (Alma Pastel / Dulce de leche / Mousses / Cremas), definido por `NAV_LINKS_INDEX`, `NAV_LINKS_CREACIONES` y `NAV_LINKS_RELLENOS` en `components.js`
- feat: "Alma Pastel" enlaza a `index.html#creaciones` en las páginas de categorías y a `index.html#rellenos` en las de rellenos; en el index scrollea a la sección Sobre Alma
- feat: nuevos rellenos Dulce de leche con nuez y Crema chantillí; Chocotorta pasa a la familia Cremas, con grillas a 2 cards por fila en móvil

### Changed

- style: breadcrumb de las páginas de categorías ahora dice "← Volver a Creaciones" y enlaza a `index.html#creaciones`

## [1.2.0] - 2026-09-20

### Added

- feat: páginas de categorías Tortas, Tartas y Postres (`tortas.html`, `tartas.html`, `postres.html`) con sus productos y mensajes de WhatsApp
- feat: navbar con navegación entre categorías y resaltado de la página activa
- feat: sección Creaciones del index con 3 cards de categoría que enlazan a las páginas nuevas
- feat: layout compartido (navbar, footer y botones flotantes) renderizado por `static/js/components.js` mediante placeholders `data-inject`, evitando markup duplicado entre páginas
- feat: páginas de rellenos (`rellenos-dulce-de-leche.html`, `rellenos-mousses.html`, `rellenos-cremas.html`) con los 9 sabores agrupados por familia y enlaces de WhatsApp por relleno
- feat: sección Rellenos del index rediseñada como 3 cards de categoría (Dulce de leche, Mousses, Cremas) que enlazan a las páginas nuevas; sin cambios en el navbar
- feat: nuevas tortas Lingote y Margarita en `tortas.html`
- feat: mini tartas Key Lime, Toffi, Oreo y de frutilla en `tartas.html`
- feat: cards de rellenos con título sobre la foto y blur en la imagen que desaparece al hover
- feat: en dispositivos táctiles el efecto de las cards de rellenos se reproduce y rota automáticamente card a card (4 s por card, solo mientras estén en viewport, respeta `prefers-reduced-motion`)
- chore: meta tag de verificación de Google Search Console y eliminación de `google20fb76b8fbb30988.html`

### Changed

- refactor: `index.html` con placeholders de layout y orden de scripts (`components.js` → Bootstrap → `script.js`)
- style: estilos para el header de categorías y cards de categoría en `static/css/style.css`
- style: sección Rellenos del index sin subtítulo descriptivo
- refactor: cards de rellenos sin caption debajo (título sobre la imagen); la card completa es clicable a WhatsApp con su mensaje precargado
- docs: README y estructura actualizados para el sitio multi-página

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