document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  /* ===== MENU INTERATTIVO ===== */
  const menuToggle = document.getElementById('menu-toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuClose = document.getElementById('menu-close');

  function openMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.add('open');
    body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('open');
    body.classList.remove('menu-open');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (menuOverlay && menuOverlay.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  /* Chiudi menu quando clicchi un link nel pannello */
  document.querySelectorAll('.menu-nav a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  /* ===== REVEAL ON SCROLL ===== */
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else {
    // fallback
    function onScrollReveal() {
      const windowBottom = window.innerHeight + window.scrollY;
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (windowBottom > top + rect.height * 0.15) {
          el.classList.add('visible');
        }
      });
<<<<<<< Updated upstream
    }
<<<<<<< Updated upstream
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
=======
    window.addEventListener('scroll', onScrollReveal);
    onScrollReveal();
  }

  /* ===== FAQ ACCORDION ===== */
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (!answer) return;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ===== PAGE LOADER ===== */
  const pageLoader = document.getElementById('page-loader');

  function showLoader() {
    if (!pageLoader) return;
    body.classList.add('page-loading');
  }

  function hideLoader() {
    if (!pageLoader) return;
    body.classList.remove('page-loading');
  }

  // Assicurati che all'arrivo sulla pagina sia nascosto
  hideLoader();

  // Mostra la barra quando clicchi su un link di navigazione
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // evita mail, tel e target _blank
    if (
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.target === '_blank'
    ) {
      return;
    }
=======
    }
    window.addEventListener('scroll', onScrollReveal);
    onScrollReveal();
  }

  /* ===== FAQ ACCORDION ===== */
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (!answer) return;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ===== PAGE LOADER ===== */
  const pageLoader = document.getElementById('page-loader');

  function showLoader() {
    if (!pageLoader) return;
    body.classList.add('page-loading');
  }

  function hideLoader() {
    if (!pageLoader) return;
    body.classList.remove('page-loading');
  }

  // Assicurati che all'arrivo sulla pagina sia nascosto
  hideLoader();

  // Mostra la barra quando clicchi su un link di navigazione
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // evita mail, tel e target _blank
    if (
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.target === '_blank'
    ) {
      return;
    }
>>>>>>> Stashed changes

    link.addEventListener('click', (e) => {
      // anchor sulla stessa pagina (#qualcosa)
      if (href.charAt(0) === '#') {
        showLoader();
        // finto caricamento breve
        setTimeout(hideLoader, 500);
        return;
      }

      // navigazione verso un'altra pagina .html
      showLoader();
      // la pagina si ricaricherà e il loader sparirà sul nuovo DOM
    });
  });

  // Se il browser usa bfcache (back/forward), nascondi il loader quando torni
  window.addEventListener('pageshow', () => {
    hideLoader();
  });

  /* ===== DEVICE CLASSES (opzionale, se le usi) ===== */
  const w = window.innerWidth;
  if (w >= 1024) {
    body.classList.add('device-pc');
  } else if (w >= 768) {
    body.classList.add('device-tablet');
  } else {
    body.classList.add('device-phone');
  }
});
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
