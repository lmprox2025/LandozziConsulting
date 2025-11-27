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
});