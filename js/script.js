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
