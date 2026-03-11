// ============================================
// NAVBAR — scroll glass effect + mobile toggle
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

// ============================================
// SMOOTH SCROLL for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER — fade-in on scroll
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline__item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ============================================
// HERO TYPEWRITER — "Hello, I'm" + roles
// ============================================
const typeTarget = document.getElementById('hero-typewriter');

if (typeTarget) {
    const phrases = [
        'Bagus Insan Pradana',
        'PENS IT Student',
        'Audio Enthusiast',
        'Tech Savvy',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeSpeed = 90;
    const deleteSpeed = 55;
    const holdAfterType = 1200;
    const holdAfterDelete = 300;

    const typeLoop = () => {
        const current = phrases[phraseIndex];

        if (!deleting) {
            // Typing forward
            typeTarget.textContent = current.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                // Hold full phrase, then start deleting
                setTimeout(() => {
                    deleting = true;
                    typeLoop();
                }, holdAfterType);
                return;
            }

            setTimeout(typeLoop, typeSpeed);
        } else {
            // Deleting
            typeTarget.textContent = current.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                // Move to next phrase
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeLoop, holdAfterDelete);
                return;
            }

            setTimeout(typeLoop, deleteSpeed);
        }
    };

    // Small initial delay so it lines up with hero animation
    setTimeout(typeLoop, 600);
}

