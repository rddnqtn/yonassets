document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       🟣 STATIC PAGE — LIGHTBOX
    ========================================= */

    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());

        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }


    /* =========================================
       🟣 STATIC PAGE — DISABLE RIGHT CLICK / F12
    ========================================= */

    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
        if (e.key === "F12") e.preventDefault();
    });


    /* =========================================
       🟣 STATIC PAGE — PRICE & CONTACT MODALS
    ========================================= */

    const priceBtn = document.getElementById("open-prices");
    const contactBtn = document.getElementById("open-contact");
    const priceModal = document.getElementById("price-modal");
    const contactModal = document.getElementById("contact-modal");

    if (priceBtn && priceModal) {
        priceBtn.onclick = () => priceModal.classList.add("active");
        priceModal.onclick = () => priceModal.classList.remove("active");
    }

    if (contactBtn && contactModal) {
        contactBtn.onclick = () => contactModal.classList.add("active");
        contactModal.onclick = () => contactModal.classList.remove("active");
    }

    const modal = document.querySelector(".modal");
const modalImg = modal.querySelector("img");

document.querySelectorAll(".zoom-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});


    /* =========================================
       🟣 STATIC PAGE — TOS EXPAND MODAL
    ========================================= */

    const expandBtn = document.getElementById("expand-tos");
    const tosModal = document.getElementById("tos-modal");
    const closeTos = document.getElementById("close-tos");

    if (expandBtn && tosModal && closeTos) {
        expandBtn.onclick = () => tosModal.classList.add("active");

        closeTos.onclick = () => tosModal.classList.remove("active");

        tosModal.onclick = (e) => {
            if (e.target === tosModal) {
                tosModal.classList.remove("active");
            }
        };
    }


    /* =========================================
       🔵 FUTURE — ANIMATED PAGE (EMPTY)
    ========================================= */


    document.addEventListener("DOMContentLoaded", () => {

    // ✅ ONLY run if animated page
    if (!document.body.classList.contains("animated-page")) return;

    /* =========================================
       🟣 STATIC PAGE — LIGHTBOX
    ========================================= */

    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());

        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }


    /* =========================================
       🟣 STATIC PAGE — DISABLE RIGHT CLICK / F12
    ========================================= */

    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
        if (e.key === "F12") e.preventDefault();
    });


    /* =========================================
       🟣 STATIC PAGE — PRICE & CONTACT MODALS
    ========================================= */

    const priceBtn = document.getElementById("open-prices");
    const contactBtn = document.getElementById("open-contact");
    const priceModal = document.getElementById("price-modal");
    const contactModal = document.getElementById("contact-modal");

    if (priceBtn && priceModal) {
        priceBtn.onclick = () => priceModal.classList.add("active");
        priceModal.onclick = () => priceModal.classList.remove("active");
    }

    if (contactBtn && contactModal) {
        contactBtn.onclick = () => contactModal.classList.add("active");
        contactModal.onclick = () => contactModal.classList.remove("active");
    }
    
    const modal = document.querySelector(".modal");
    const modalImg = modal.querySelector("img");

    document.querySelectorAll(".zoom-img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });


    /* =========================================
       🟣 STATIC PAGE — TOS EXPAND MODAL
    ========================================= */

    const expandBtn = document.getElementById("expand-tos");
    const tosModal = document.getElementById("tos-modal");
    const closeTos = document.getElementById("close-tos");

    if (expandBtn && tosModal && closeTos) {
        expandBtn.onclick = () => tosModal.classList.add("active");

        closeTos.onclick = () => tosModal.classList.remove("active");

        tosModal.onclick = (e) => {
            if (e.target === tosModal) {
                tosModal.classList.remove("active");
            }
        };
    }

});
    // Example:
    // const animatedThing = document.querySelector(...);


    /* =========================================
       🟢 FUTURE — TOS PAGE (EMPTY)
    ========================================= */

    // Example:
    // const heroBtn = document.querySelector(...);

});