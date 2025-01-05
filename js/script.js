document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove visibility when scrolling out
            }
        });
    }, {
        threshold: 0.2, // Trigger animations when 20% of the section is in view
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove visibility when scrolling out
            }
        });
    }, {
        threshold: 0.2, // Trigger animations when 20% of the section is in view
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Lightbox functionality
    const expandableImages = document.querySelectorAll(".expandable");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <img src="" alt="Expanded image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".close");

    // Open lightbox
    expandableImages.forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    // Close lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close lightbox on background click
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage && e.target !== closeBtn) {
            lightbox.style.display = "none";
        }
    });
});
