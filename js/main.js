document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. MOBILE MENU (HAMBURGER)
    ========================================= */
    const hamburger = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a");

    if (hamburger && navLinks) {
        // Toggle menu
        hamburger.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("toggle");
        });

        // Close menu on link click
        navItems.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("toggle");
            });
        });

        // Close menu on outside click
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".navbar")) {
                navLinks.classList.remove("active");
                hamburger.classList.remove("toggle");
            }
        });
    }

    /* =========================================
       2. SCROLL REVEAL
    ========================================= */
    const revealElements = document.querySelectorAll(
        ".news-section, .category-news-container, .footer-container"
    );

    revealElements.forEach(el => el.classList.add("reveal"));

    function scrollReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < triggerBottom) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", scrollReveal, { passive: true });
    scrollReveal();

    /* =========================================
       3. MOBILE SLIDER
    ========================================= */
    const slider = document.querySelector(".mobile-slider");
    const slidesWrapper = document.querySelector(".mobile-slider .slides");
    const slides = document.querySelectorAll(".mobile-slider .slide");
    const nextBtn = document.querySelector(".mobile-slider .next");
    const prevBtn = document.querySelector(".mobile-slider .prev");

    if (!slider || !slidesWrapper || slides.length === 0) return;

    let index = 0;
    const total = slides.length;

    function updateSlider() {
        slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // Next/Prev buttons
    nextBtn?.addEventListener("click", () => {
        stopAutoSlide();
        index = (index + 1) % total;
        updateSlider();
    });

    prevBtn?.addEventListener("click", () => {
        stopAutoSlide();
        index = (index - 1 + total) % total;
        updateSlider();
    });

    // Auto-slide with interval
    let autoSlide = setInterval(() => {
        index = (index + 1) % total;
        updateSlider();
    }, 5000);

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Slide click → redirect
    slides.forEach(slide => {
        const link = slide.dataset.link;
        if (link) {
            slide.style.cursor = "pointer";
            slide.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = link;
            });
        }
    });

    // Optional: pause slider on hover
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", () => {
        autoSlide = setInterval(() => {
            index = (index + 1) % total;
            updateSlider();
        }, 5000);
    });

});
