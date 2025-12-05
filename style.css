/* --- 1. RESET & VARIABLES --- */
:root {
    --bg-dark: #100a1f;       /* Deep Violet Background */
    --bg-card: #1a102e;       /* Lighter Violet for Cards */
    --primary: #ffffff;       /* Text Color */
    --accent: #00c3ff;        /* Cyan Accent */
    --text-gray: #a2a2d0;     /* Muted Text */
    --font-head: 'Oswald', sans-serif;
    --font-body: 'Roboto', sans-serif;
    --transition: 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--primary);
    font-family: var(--font-body);
    line-height: 1.6;
}

/* Accessibility: Focus States */
a:focus, button:focus, input:focus, textarea:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

/* --- 2. NAVIGATION (Fixed) --- */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(16, 10, 31, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-head);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 8px;
}

.play-icon { color: var(--accent); }

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--primary);
    font-family: var(--font-head);
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    opacity: 0.7;
    transition: var(--transition);
}

.nav-link:hover, .nav-link.active {
    opacity: 1;
    color: var(--accent);
}

/* Mobile Hamburger */
.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--primary);
    transition: var(--transition);
}

/* --- 3. COMMON LAYOUTS --- */
section {
    padding: 5rem 2rem;
    min-height: 100vh; /* Make sections substantial */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
}

.section-label {
    font-family: var(--font-head);
    color: var(--text-gray);
    letter-spacing: 2px;
    font-size: 0.9rem;
    text-transform: uppercase;
}

.section-heading {
    font-family: var(--font-head);
    font-size: 2.5rem;
    margin: 0.5rem 0 1rem;
    text-transform: uppercase;
}

.blue-line {
    width: 60px;
    height: 4px;
    background-color: var(--accent);
    margin-bottom: 2rem;
}

/* --- 4. HERO SECTION --- */
.hero {
    position: relative;
    padding-top: 80px; /* Offset for fixed header */
    background: radial-gradient(circle at 80% 50%, #2b1b4d 0%, #100a1f 70%);
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
}

.main-title {
    font-family: var(--font-head);
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 2rem;
}

.btn-corner {
    display: inline-block;
    padding: 1rem 2rem;
    color: var(--primary);
    font-family: var(--font-head);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
}

.btn-corner:hover {
    background: rgba(0, 195, 255, 0.1);
}

.corner-top-left {
    position: absolute;
    top: 0; left: 0;
    width: 15px; height: 15px;
    border-top: 2px solid var(--accent);
    border-left: 2px solid var(--accent);
}

.corner-bottom-right {
    position: absolute;
    bottom: 0; right: 0;
    width: 15px; height: 15px;
    border-bottom: 2px solid var(--accent);
    border-right: 2px solid var(--accent);
}

.hero-img-placeholder {
    width: 100%;
    height: 400px;
    background: linear-gradient(to bottom, transparent, var(--bg-dark)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    opacity: 0.8;
}

/* --- 5. ABOUT SECTION --- */
.about-text {
    max-width: 700px;
}

.skills-list {
    list-style: none;
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.skills-list li {
    font-family: var(--font-head);
    color: var(--text-gray);
    letter-spacing: 1px;
}

/* --- 6. PROJECTS SECTION --- */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-card);
    border-radius: 4px;
    overflow: hidden;
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.card-image {
    height: 200px;
    background-color: #2a2a40;
    background-size: cover;
    background-position: center;
}

/* Placeholder Colors for Projects */
.project-1-img { background-image: linear-gradient(45deg, #2b5876, #4e4376); }
.project-2-img { background-image: linear-gradient(45deg, #134e5e, #71b280); }
.project-3-img { background-image: linear-gradient(45deg, #cc2b5e, #753a88); }

.card-content {
    padding: 1.5rem;
}

.card-content h3 {
    font-family: var(--font-head);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
}

.card-content p {
    color: var(--text-gray);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

.btn-text {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.85rem;
}

/* --- 7. CONTACT SECTION --- */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-detail {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: var(--primary);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: var(--primary);
    font-family: var(--font-body);
}

/* --- 8. FOOTER --- */
footer {
    text-align: center;
    padding: 2rem;
    background: #0b0716;
    color: var(--text-gray);
    font-size: 0.9rem;
}

/* --- 9. RESPONSIVE --- */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 80%;
        height: calc(100vh - 70px);
        background: var(--bg-card);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
    }

    .nav-menu.active {
        right: 0;
    }

    .hamburger { display: block; }
    
    .hero-container, .contact-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-img-placeholder { height: 300px; order: -1; }
    
    .main-title { font-size: 2.5rem; }
    
    .blue-line { margin: 0 auto 2rem; }
}
