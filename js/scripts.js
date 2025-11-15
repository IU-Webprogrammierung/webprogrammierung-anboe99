// Fading in Elements on Scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    treshold: 0.15
});

const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');

elementsToAnimate.forEach((el) => observer.observe(el));