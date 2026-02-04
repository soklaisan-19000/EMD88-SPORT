document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. MOBILE MENU (HAMBURGER)
    ========================================= */
    const hamburger = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("toggle");
        });

        navItems.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("toggle");
            });
        });

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

    window.addEventListener("scroll", scrollReveal);
    scrollReveal();

    /* =========================================
       3. MOBILE SLIDER (MATCHES CSS)
    ========================================= */
    const slider = document.querySelector(".mobile-slider");
    const slidesWrapper = document.querySelector(".mobile-slider .slides");
    const slides = document.querySelectorAll(".mobile-slider .slide");
    const nextBtn = document.querySelector(".mobile-slider .next");
    const prevBtn = document.querySelector(".mobile-slider .prev");

    if (!slider || !slidesWrapper || !slides.length) return;

    let index = 0;
    const total = slides.length;

    function updateSlider() {
        slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn?.addEventListener("click", () => {
        index = (index + 1) % total;
        updateSlider();
    });

    prevBtn?.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        updateSlider();
    });

    /* Auto slide */
    setInterval(() => {
        index = (index + 1) % total;
        updateSlider();
    }, 5000);

    /* Slide click → link */
    slides.forEach(slide => {
        const link = slide.dataset.link;
        if (link) {
            slide.style.cursor = "pointer";
            slide.addEventListener("click", () => {
                window.location.href = link;
            });
        }
    });
});
