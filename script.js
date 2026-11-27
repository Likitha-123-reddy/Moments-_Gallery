
/* ===================================
   IMAGE LIGHTBOX FUNCTIONALITY
=================================== */

// Get all images inside the gallery
const galleryImages = document.querySelectorAll(".gallery-card img");

// Get the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");


// ===================================
// OPEN IMAGE WHEN CLICKED
// ===================================

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        // Get the clicked image URL
        lightboxImage.src = image.src;

        // Get the image alt text
        lightboxImage.alt = image.alt;

        // Find the title inside the image card
        const card = image.closest(".gallery-card");
        const title = card.querySelector("h3");

        // Display the title as the caption
        lightboxCaption.textContent = title.textContent;

        // Show the lightbox
        lightbox.classList.add("active");

        // Prevent page scrolling while image is open
        document.body.style.overflow = "hidden";

    });

});


// ===================================
// CLOSE USING CLOSE BUTTON
// ===================================

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    // Restore page scrolling
    document.body.style.overflow = "auto";

});


// ===================================
// CLOSE WHEN CLICKING OUTSIDE IMAGE
// ===================================

lightbox.addEventListener("click", (event) => {

    // Close only if the background is clicked
    if (event.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});


// ===================================
// CLOSE USING ESCAPE KEY
// ===================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});
