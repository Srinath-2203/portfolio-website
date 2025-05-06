document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact form validation (if you plan to add a contact form)
    const contactForm = document.getElementById("contact-form"); 
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!email || !message) {
                e.preventDefault();
                alert("Please fill out all fields!");
            } else if (!email.includes("@")) {
                e.preventDefault();
                alert("Please enter a valid email address!");
            }
        });
    }

    // Dynamic year update in the footer
    document.getElementById("footer").innerHTML = `© ${new Date().getFullYear()} Srinath, All Rights Reserved`;
});