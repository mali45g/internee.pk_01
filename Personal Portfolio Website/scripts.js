document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle for mobile view
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar ul');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        skillBars.forEach(skillBar => {
            const skillBarTop = skillBar.getBoundingClientRect().top;
            if (skillBarTop < triggerBottom) {
                skillBar.classList.add('active');
            } else {
                skillBar.classList.remove('active');
            }
        });
    });

    // Initialize contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
