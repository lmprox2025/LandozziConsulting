document.addEventListener('DOMContentLoaded', () => {
    function updateDeviceClass() {
        const width = window.innerWidth;
        const body = document.body;
        body.classList.remove('device-pc', 'device-tablet', 'device-phone');
        if (width < 768) {
            body.classList.add('device-phone');
        } else if (width < 1024) {
            body.classList.add('device-tablet');
        } else {
            body.classList.add('device-pc');
        }
    }
    updateDeviceClass();
    window.addEventListener('resize', updateDeviceClass);
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            q.classList.toggle('active');
            const answer = q.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    reveals.forEach(r => {
        observer.observe(r);
    });

    const contactForm = document.querySelector('#contatti form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    alert('Grazie per la tua richiesta. Ti contatteremo al più presto!');
                    contactForm.reset();
                } else {
                    alert('Si è verificato un errore durante l\'invio. Riprova più tardi.');
                }
            } catch (error) {
                console.error(error);
                alert('Si è verificato un problema di rete.');
            }
        });
    }
    // ====== MENU INTERATTIVO ======
    (function () {
        const toggle = document.getElementById('menu-toggle');
        const overlay = document.getElementById('menu-overlay');
        const closeBtn = document.getElementById('menu-close');

        if (!toggle || !overlay) return;

        function openMenu() {
            overlay.classList.add('open');
            document.body.classList.add('menu-open');
            overlay.setAttribute('aria-hidden', 'false');
        }

        function closeMenu() {
            overlay.classList.remove('open');
            document.body.classList.remove('menu-open');
            overlay.setAttribute('aria-hidden', 'true');
        }
    
        toggle.addEventListener('click', openMenu);
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenu);
        }
    
        // Chiudi cliccando fuori dal pannello
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                closeMenu();
            }
        });
    
        // ESC per chiudere
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
            closeMenu();
            }
        });

    // Gestione click sui link del menu (chiusura + smooth scroll se stesso file)
        const links = overlay.querySelectorAll('.menu-nav a');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = link.getAttribute('href');
                // Se è un link solo ad un anchor sulla stessa pagina, fai smooth scroll
                try {
                    const url = new URL(href, window.location.href);
                    const samePage = url.pathname === window.location.pathname;
    
                    if (samePage && url.hash) {
                        e.preventDefault();
                        const target = document.querySelector(url.hash);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                } catch (err) {
                    // in caso di URL strano, lascio fare al browser
                }
    
                closeMenu();
            });
        });
    })();

});