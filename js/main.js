document.addEventListener('DOMContentLoaded', () => {
    // --- Existing Hamburger Logic ---
    const hamburger = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // --- New Scroll Reveal Logic ---
    const revealElements = Array.from(document.querySelectorAll('.news-section, .category-news-container, .footer-container'));
    
    // Add the reveal class to these sections
    revealElements.forEach(el => el.classList.add('reveal'));

    const scrollReveal = () => {
        const triggerBottom = window.innerHeight * 0.85; // Trigger when 85% down the screen

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Run once on load
});
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".mobile-slider .slide");
    if (!slides.length) return;

    let index = 0;
    const next = document.querySelector(".mobile-slider .next");
    const prev = document.querySelector(".mobile-slider .prev");

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);
});
