document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking a link
    navLinks.forEach(link => link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    }));


    // --- 2. Dynamic Time Greeting ---
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greetingText = "Good Evening!";
    
    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    }
    
    greetingElement.innerText = greetingText;


    // --- 3. Scroll Spy (Active Link Highlighting) ---
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of section is visible

    sections.forEach(s => observer.observe(s));


    // --- 4. Form Submission Simulation ---
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            feedback.style.color = '#2e7d32'; // Green success color
            feedback.innerText = 'Message sent successfully! (Demo)';
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
});
