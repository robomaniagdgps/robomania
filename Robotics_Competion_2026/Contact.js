document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal to elements
    const revealElements = document.querySelectorAll('.info-card, .coord-card, .robot-container');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 12, 27, 0.98)';
            header.style.height = '80px';
        } else {
            header.style.background = 'rgba(2, 12, 27, 0.9)';
            header.style.height = '100px';
        }
    });

    // Parallax effect for cards
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.info-card');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        // Subtle tilt only when near cards
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isInRange = e.clientX > rect.left - 100 && e.clientX < rect.right + 100 &&
                             e.clientY > rect.top - 100 && e.clientY < rect.bottom + 100;
            
            if (isInRange) {
                card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
            } else {
                card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
            }
        });
    });
});
