// 1. Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Mobile Nav Toggle
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar-menu');
const bars = document.querySelectorAll('.bar');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.sidebar-menu a');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Toggle Hamburger Animation
    if (sidebar.classList.contains('active')) {
        bars[0].style.transform = 'translateY(8px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
        body.style.overflow = 'auto';
    }
});

// Close sidebar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
        body.style.overflow = 'auto';
    });
});

// 3. Fade In On Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));
