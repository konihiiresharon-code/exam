// Run after the page has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // ===== Contact form handling =====
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // prevent real submission (no backend yet)

            // Show success message
            if (alertBox) {
                alertBox.classList.remove('d-none');
            }

            // Clear form fields
            form.reset();
        });
    }

    // ===== Optional: highlight active nav link by URL (works on all pages) =====
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPath = window.location.pathname.split('/').pop(); // e.g. "contact.html"

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath && !link.classList.contains('active')) {
            link.classList.add('active');
        }
    });
});
