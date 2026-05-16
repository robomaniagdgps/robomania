// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================

/**
 * Toggle mobile navigation menu
 * When hamburger icon is clicked, show/hide the navigation menu
 */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    // Toggle 'active' class to show/hide menu
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon to X
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================

/**
 * Add smooth scrolling behavior to all anchor links
 * This creates a smooth transition when jumping to sections
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ANIMATED COUNTER FOR STATS
// ===================================

/**
 * Animate numbers counting up to their target value
 * This creates an engaging visual effect when scrolling to stats
 */
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps = 16ms per frame
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer to trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target, 2000); // 2 seconds duration
            });
            // Disconnect observer after animation runs once
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

// Observe the stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

/**
 * Add fade-in animation to elements as they scroll into view
 * This creates a dynamic, engaging user experience
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all highlight cards for scroll animations
const highlightCards = document.querySelectorAll('.highlight-card');
highlightCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================

/**
 * Add shadow and background to navbar when scrolling down
 * This improves readability and visual hierarchy
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 8, 18, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--darker-bg)';
        navbar.style.backdropFilter = 'none';
    }
});

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================

/**
 * Create subtle parallax scrolling effect in hero section
 * This adds depth and visual interest to the homepage
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const robotIcon = document.querySelector('.robot-icon');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = `${1 - scrolled / 500}`;
    }
    
    if (robotIcon) {
        robotIcon.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================

/**
 * Trigger animations when page is fully loaded
 * This ensures smooth initial rendering
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
});

// Set initial opacity to 0 for fade-in effect
document.body.style.opacity = '0';

// ===================================
// CONSOLE MESSAGE
// ===================================

/**
 * Display a welcome message in the browser console
 * Fun easter egg for curious developers!
 */
console.log('%c Welcome to GD Goenka School Robotics Competition! ', 'background: #00d4ff; color: #0a0e27; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Built with dedication for innovation and technology ', 'color: #00d4ff; font-size: 12px;');
