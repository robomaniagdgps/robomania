document.addEventListener("DOMContentLoaded", function () {

    /* ===========================
       NAVIGATION ACTIVE LINK
       (MULTI-PAGE SAFE)
    =========================== */
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-link')
                .forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });


    /* ===========================
       INTERSECTION OBSERVER
    =========================== */
    if ('IntersectionObserver' in window) {

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    entry.target.style.opacity = '0';
                    entry.target.style.animation = 'none';

                    setTimeout(() => {
                        entry.target.style.opacity = '1';

                        if (
                            entry.target.classList.contains('competition-card') ||
                            entry.target.classList.contains('org-group')
                        ) {
                            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                        }

                        if (
                            entry.target.classList.contains('objective-item') ||
                            entry.target.classList.contains('guideline-item')
                        ) {
                            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
                        }

                    }, 50);

                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll(
            '.competition-card, .objective-item, .guideline-item, .org-group'
        ).forEach(el => observer.observe(el));
    }


    /* ===========================
       SMOOTH SCROLL (ONLY # LINKS)
    =========================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });


    /* ===========================
       COMPETITION CARD INTERACTION
    =========================== */
    const competitionCards = document.querySelectorAll('.competition-card');

    competitionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('click', () => {
            const competition = card.dataset.competition;
            if (competition) {
                console.log(`Clicked: ${competition}`);
            }
        });
    });


    /* ===========================
       PAGE LOAD FADE-IN
    =========================== */
    window.addEventListener('load', () => {
        document.querySelectorAll(
            '.introduction-section, .objectives-card, .guidelines-card'
        ).forEach((el, i) => {
            el.classList.add('fade-in');
        });
    });


    /* ===========================
       PARALLAX EFFECT (SAFE)
    =========================== */
    window.addEventListener('scroll', () => {
        const heading = document.querySelector('.page-heading');
        if (heading && window.scrollY < 600) {
            heading.style.transform = `translateY(${window.scrollY * 0.3}px)`;
            heading.style.opacity = `${1 - window.scrollY / 800}`;
        }
    });


    /* ===========================
       BUTTON HOVER SAFETY
    =========================== */
    document.querySelectorAll('.cta-button, .contact-button')
        .forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transition = 'all 0.3s ease';
            });
        });


    /* ===========================
       ACCESSIBILITY
    =========================== */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            console.log('Escape pressed');
        }
    });


    /* ===========================
       IMAGE OBSERVER (SAFE)
    =========================== */
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imageObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
    }


    console.log('About Robation Page — JS Loaded Successfully');

});
