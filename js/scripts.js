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



// Shine-Effect on Buttons

document.addEventListener('DOMContentLoaded', () => {
    const buttonShine = document.querySelectorAll('.button-primary');
    buttonShine.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
        button.addEventListener('mouseleave', () => {
            button.style.setProperty('--mouse-x', 'center');
            button.style.setProperty('--mouse-y', 'center');
        });
    });

});