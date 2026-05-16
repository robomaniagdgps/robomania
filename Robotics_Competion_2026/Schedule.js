document.addEventListener("DOMContentLoaded", function () {

    /* ===========================
       NAVIGATION ACTIVE LINK
    =========================== */
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-link')
                .forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* ===========================
       SCROLL FADE-IN ANIMATION
    =========================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    /* ===========================
       PARALLAX EFFECT (HERO)
    =========================== */
    window.addEventListener('scroll', () => {
        const heading = document.querySelector('.page-heading');
        if (heading && window.scrollY < 600) {
            heading.style.transform = `translateY(${window.scrollY * 0.3}px)`;
            heading.style.opacity = `${1 - window.scrollY / 800}`;
        }
    });

    /* ===========================
       SMOOTH SCROLLING
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

    console.log('Schedule Page — JS Loaded Successfully');
});