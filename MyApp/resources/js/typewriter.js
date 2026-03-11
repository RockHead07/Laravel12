export function initTypewriter() {
    const typewriterElement = document.getElementById('hero-typewriter');
    if (!typewriterElement) {
        console.warn('Typewriter element not found');
        return;
    }

    const phrases = [
        'Bagus Insan Pradana',
        'Audio Enthusiast',
        'Tech-Savvy',
        'at PENS',
        'Indonesian'
    ];

    let phrasIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenPhrases = 2000;

    function type() {
        const currentPhrase = phrases[phrasIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterElement.textContent = currentPhrase.substring(0, charIndex) + (charIndex < currentPhrase.length ? '|' : '');

        let delay = typeSpeed;

        if (isDeleting) {
            delay = deleteSpeed;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = delayBetweenPhrases;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phrasIndex = (phrasIndex + 1) % phrases.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    type();
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', initTypewriter);
