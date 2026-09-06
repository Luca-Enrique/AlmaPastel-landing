// ------------------------------------------------------------
// Número de WhatsApp. Cambialo acá y se actualiza en toda la página.
// ------------------------------------------------------------
var WHATSAPP_PHONE = '+5493436467940';

// Actualizar todos los enlaces de WhatsApp con el número configurado.
// Si el enlace tiene data-mensaje, se agrega el texto precargado (?text=).
(function initWhatsAppLinks() {
    var phone = WHATSAPP_PHONE;
    if (!phone) return;

    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
        var base = 'https://wa.me/' + phone;
        var mensaje = link.getAttribute('data-mensaje');
        if (mensaje) {
            link.href = base + '?text=' + encodeURIComponent(mensaje);
        } else {
            link.href = base;
        }
    });
})();


// Navbar: sombra sutil al hacer scroll
(function initNavbarScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const navbar = header.querySelector('.navbar');
    const SCROLL_THRESHOLD = 10;

    function handleScroll() {
        if (window.scrollY > SCROLL_THRESHOLD) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
})();

(function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            // Cerrar menú hamburguesa en mobile si está abierto
            var navbarCollapse = document.getElementById('navbarMain');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }

            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
})();

// Botones flotantes: volver arriba + WhatsApp, y ocultar el WhatsApp del navbar al hacer scroll
(function initFloatingButtons() {
    var btnTop = document.getElementById('btn-volver-arriba');
    var btnFlotante = document.querySelector('.btn-whatsapp-flotante');
    if (!btnTop) return;

    var navbarWa = document.querySelectorAll('#main-header .btn-whatsapp, #main-header .btn-whatsapp-mobile');

    var SCROLL_THRESHOLD = 400;

    function setFloating(show) {
        btnTop.classList.toggle('visible', show);
        if (btnFlotante) btnFlotante.classList.toggle('visible', show);
        navbarWa.forEach(function(btn) {
            btn.classList.toggle('navbar-wa-hidden', show);
        });
    }

    function handleScroll() {
        setFloating(window.scrollY > SCROLL_THRESHOLD);
    }

    btnTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
})();

// Parallax suave de la imagen de fondo del hero
(function initHeroParallax() {
    var img = document.querySelector('.hero-image');
    var hero = document.getElementById('hero');
    if (!img || !hero) return;

    var MAX = 60; // desplazamiento máximo en px, dentro del margen oculto de la imagen

    var lastY = -1;

    function update() {
        var y = window.scrollY;
        if (y === lastY) return;
        lastY = y;

        var heroTop = hero.getBoundingClientRect().top;
        var heroH = hero.offsetHeight;
        var vh = window.innerHeight;

        // progreso 0..1: 0 cuando el hero entra por abajo, 1 cuando sale por arriba
        var range = vh + heroH;
        var progress = Math.max(0, Math.min(1, (vh - heroTop) / range));

        var ty = (progress * 2 - 1) * MAX; // de -MAX a +MAX
        img.style.transform = 'translateY(' + ty.toFixed(1) + 'px)';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
})();

// Reveal on scroll: agrega .is-visible cuando el elemento entra en viewport
(function initScrollReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    // Fallback: si no hay IntersectionObserver, mostrar todo
    if (!('IntersectionObserver' in window)) {
        items.forEach(function(el) { el.classList.add('is-visible'); });
        return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach(function(el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    items.forEach(function(el) { observer.observe(el); });
})();
