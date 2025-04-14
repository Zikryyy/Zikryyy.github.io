// Enhanced Parallax Effects
function initParallax() {
    // Simple parallax effect for background positions
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.backgroundPosition = `center ${yPos}px`;
        });
    });

    // Re-initialize on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            document.querySelectorAll('.parallax').forEach(el => {
                el.style.backgroundAttachment = 'scroll';
            });
        } else {
            document.querySelectorAll('.parallax').forEach(el => {
                el.style.backgroundAttachment = 'fixed';
            });
        }
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
    // Keep your existing animations
    animateOnScroll();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});