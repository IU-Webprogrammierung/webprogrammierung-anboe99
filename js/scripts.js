// ============================
// Fading in Elements on Scroll
// ============================

// Use IntersectionObserver to detect when an element enters the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // If an element enters the viewport, add a class to trigger the CSS transition
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {

    // Animation is triggered when 15 % of an element is visible
    treshold: 0.15
});

// Select all elements that should animate on scroll
const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');

// Start observing each selected element
elementsToAnimate.forEach((el) => observer.observe(el));


// =======================
// Shine-Effect on Buttons
// =======================

// Wait for the entire page to be fully loaded before running this script
document.addEventListener('DOMContentLoaded', () => {

    // Select all primary buttons
    const buttonShine = document.querySelectorAll('.button-primary');

    buttonShine.forEach(button => {
        // Track mouse movement when it's on the button
        button.addEventListener('mousemove', (e) => {

            // Get the button's position and size relative to the viewport
            const rect = button.getBoundingClientRect();

            // Calculate the mouse position relative to the button's top left corner
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables to position the radial gradient following the cursor
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });

        // Reset variables once the mouse leaves the button
        button.addEventListener('mouseleave', () => {
            button.style.setProperty('--mouse-x', 'center');
            button.style.setProperty('--mouse-y', 'center');
        });
    });

});