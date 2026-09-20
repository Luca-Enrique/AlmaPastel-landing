// ------------------------------------------------------------
// Layout compartido: navbar, footer y botones flotantes.
// Se inyecta en los placeholders de cada página:
//   <header data-inject="navbar">, <footer data-inject="footer">, <div data-inject="flotantes">
// La página actual se define con <body data-page="..."> en cada HTML.
// ------------------------------------------------------------
(function initComponents() {
    var currentPage = document.body.getAttribute('data-page') || 'index';

    var NAV_LINKS_INDEX = [
        { label: 'Alma Pastel', page: 'index', anchor: 'sobre-alma' },
        { label: 'Creaciones', page: 'index', anchor: 'creaciones' },
        { label: 'Rellenos', page: 'index', anchor: 'rellenos' }
    ];

    var NAV_LINKS_CREACIONES = [
        { label: 'Alma Pastel', page: 'index', anchor: 'creaciones' },
        { label: 'Tortas', page: 'tortas' },
        { label: 'Tartas', page: 'tartas' },
        { label: 'Postres', page: 'postres' }
    ];

    var NAV_LINKS_RELLENOS = [
        { label: 'Alma Pastel', page: 'index', anchor: 'rellenos' },
        { label: 'Dulce de leche', page: 'rellenos-dulce-de-leche' },
        { label: 'Mousses', page: 'rellenos-mousses' },
        { label: 'Cremas', page: 'rellenos-cremas' }
    ];

    function navLinksDe() {
        if (currentPage === 'tortas' || currentPage === 'tartas' || currentPage === 'postres') {
            return NAV_LINKS_CREACIONES;
        }
        if (currentPage === 'rellenos-dulce-de-leche' || currentPage === 'rellenos-mousses' || currentPage === 'rellenos-cremas') {
            return NAV_LINKS_RELLENOS;
        }
        return NAV_LINKS_INDEX;
    }

    var WHATSAPP_MENSAJE_GENERAL = 'Hola! Quiero realizar un pedido personalizado.';

    var ICON_WHATSAPP = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

    var ICON_ARROW_UP = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';

    function linkHref(link) {
        if (link.page === currentPage) {
            return link.anchor ? '#' + link.anchor : '#';
        }
        var target = link.page === 'index' ? 'index.html' : link.page + '.html';
        return target + (link.anchor ? '#' + link.anchor : '');
    }

    function isActive(link) {
        return link.page === currentPage && !link.anchor;
    }

    function navLinksHtml() {
        var links = navLinksDe();
        var html = '';
        links.forEach(function(link) {
            var cls = 'nav-link' + (isActive(link) ? ' active' : '');
            html += '<li class="nav-item"><a class="' + cls + '" href="' + linkHref(link) + '">' + link.label + '</a></li>';
        });
        return html;
    }

    function navbarHtml() {
        var brandHref = currentPage === 'index' ? '#' : 'index.html';
        return '' +
            '<nav class="navbar navbar-expand-lg fixed-top">' +
                '<div class="container">' +
                    '<a class="navbar-brand d-inline-flex text-decoration-none" href="' + brandHref + '">' +
                        '<span class="brand-name">Alma Pastel</span>' +
                    '</a>' +
                    '<div class="d-flex align-items-center gap-3">' +
                        '<a href="https://wa.me/" class="btn-whatsapp-mobile d-lg-none rounded-circle" aria-label="Pedir por WhatsApp">' + ICON_WHATSAPP + '</a>' +
                        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Menú de navegación">' +
                            '<span class="navbar-toggler-icon"></span>' +
                        '</button>' +
                    '</div>' +
                    '<div class="collapse navbar-collapse" id="navbarMain">' +
                        '<ul class="navbar-nav mx-auto align-items-lg-center">' + navLinksHtml() + '</ul>' +
                        '<a href="https://wa.me/" class="btn btn-whatsapp rounded-pill d-none d-lg-inline-block" data-mensaje="' + WHATSAPP_MENSAJE_GENERAL + '">Pedir por WhatsApp</a>' +
                    '</div>' +
                '</div>' +
            '</nav>';
    }

    function footerHtml() {
        return '' +
            '<div class="container text-center">' +
                '<p class="footer-brand">Alma Pastel</p>' +
                '<p class="footer-location">Hernández, Entre Ríos, Argentina</p>' +
                '<div class="footer-links">' +
                    '<a href="https://instagram.com/alma_pastel_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>' +
                    '<span class="footer-sep">·</span>' +
                    '<a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>' +
                '</div>' +
            '</div>';
    }

    function flotantesHtml() {
        return '' +
            '<a href="https://wa.me/" class="btn-whatsapp-flotante d-flex align-items-center gap-2 text-decoration-none rounded-pill" aria-label="Consultar disponibilidad por WhatsApp">' +
                ICON_WHATSAPP + '<span>Consultar disponibilidad</span>' +
            '</a>' +
            '<button type="button" id="btn-volver-arriba" class="btn-top" aria-label="Volver arriba">' + ICON_ARROW_UP + '</button>';
    }

    var header = document.querySelector('header[data-inject="navbar"]');
    var footer = document.querySelector('footer[data-inject="footer"]');
    var flotantes = document.querySelector('[data-inject="flotantes"]');

    if (header) header.innerHTML = navbarHtml();
    if (footer) footer.innerHTML = footerHtml();
    if (flotantes) flotantes.innerHTML = flotantesHtml();
})();