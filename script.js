document.addEventListener("DOMContentLoaded", function () {
    // Function to show an alert with hobbies
    window.showHobbies = function () {
        alert("My hobbies include coding, playing FPS games, driving, and sleeping!");
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Contact form submission handler (Prevent actual form submission)
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        this.reset();
    });
});
