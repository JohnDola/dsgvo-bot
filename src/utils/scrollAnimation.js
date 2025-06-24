/**
 * Utility for adding scroll animations to elements
 * Uses Intersection Observer API to detect when elements enter the viewport
 */

// Options for the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the element is visible
};

/**
 * Initialize scroll animations for elements with the 'scroll-animate' class
 * Add data-animation attribute to specify the animation type:
 * - fade-in
 * - slide-up
 * - slide-in-left
 * - slide-in-right
 * - zoom-in
 * 
 * Example: <div class="scroll-animate" data-animation="fade-in">Content</div>
 */
export function initScrollAnimations() {
    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Get the animation type from the data attribute
                const animationType = entry.target.dataset.animation || 'fade-in';

                // Add the animation class
                entry.target.classList.add('animated', animationType);

                // Stop observing the element after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Get all elements with the scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');

    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
