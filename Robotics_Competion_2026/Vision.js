// ===========================
// NAVIGATION ACTIVE LINK
// ===========================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));

            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in cards when they come into view
            if (entry.target.classList.contains('mentor-card')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateX(-50px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, 100);
            }

            // Fade in value cards
            if (entry.target.classList.contains('value-card')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, 100);
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe mentor cards and value cards
document.querySelectorAll('.mentor-card, .value-card').forEach(element => {
    observer.observe(element);
});

// ===========================
// SMOOTH SCROLL FOR NAVIGATION
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// HERO SECTION ANIMATIONS
// ===========================
window.addEventListener('load', function() {
    const heroTextBox = document.querySelector('.hero-text-box');
    const heroQuote = document.querySelector('.hero-quote');
    
    if (heroTextBox) {
        heroTextBox.style.opacity = '0';
        heroTextBox.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroTextBox.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            heroTextBox.style.opacity = '1';
            heroTextBox.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (heroQuote) {
        heroQuote.style.opacity = '0';
        heroQuote.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroQuote.style.transition = 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s';
            heroQuote.style.opacity = '1';
            heroQuote.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===========================
// HOVER EFFECTS FOR VALUE CARDS
// ===========================
document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===========================
// PARALLAX EFFECT ON SCROLL
// ===========================
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const parallaxElements = document.querySelector('.hero-background');
        
        if (parallaxElements && scrollPosition < 600) {
            parallaxElements.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

// ===========================
// MOBILE MENU TOGGLE (OPTIONAL)
// ===========================
// If you add a hamburger menu button in HTML, you can use this code:
/*
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}
*/

// ===========================
// IMAGE LAZY LOADING
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Images are already loaded in this simple version
                // but you could implement lazy loading here
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===========================
// CONSOLE LOG (OPTIONAL - remove in production)
// ===========================
console.log('GD Goenka School - Our Vision Page Loaded Successfully');
