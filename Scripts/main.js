document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Custom cursor
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    // Cursor trail
    const trailDots = [];
    const trailDotsCount = 20;

    for (let i = 0; i < trailDotsCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('cursor-trail');
        document.body.appendChild(dot);
        trailDots.push(dot);
    }

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        this.classList.toggle('active'); // Toggle the active state for hamburger icon animation
    });

    // Mouse move event handler
    document.addEventListener('mousemove', (e) => {
        // Update custom cursor position
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;

        // Update cursor trail
        trailDots.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = `${e.clientX}px`;
                dot.style.top = `${e.clientY}px`;
                dot.style.opacity = 1 - (index / trailDotsCount);
                dot.style.width = `${5 - (index * 0.2)}px`;
                dot.style.height = `${5 - (index * 0.2)}px`;
            }, index * 10);
        });

        // Space cursor effect
        const spaceCursor = document.createElement('div');
        spaceCursor.className = 'space-cursor';
        spaceCursor.style.left = e.clientX + 'px';
        spaceCursor.style.top = e.clientY + 'px';

        document.body.appendChild(spaceCursor);

        // Animate and remove the space cursor
        setTimeout(() => {
            spaceCursor.style.opacity = '0';
            spaceCursor.style.transform = 'scale(0.5) translate(10px, -10px)';
            
            setTimeout(() => {
                spaceCursor.remove();
            }, 500);
        }, 100);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Smooth scrolling for "Get in Touch" button
    const getInTouchBtn = document.getElementById('get-in-touch-btn');
    const contactSection = document.getElementById('contact');
    getInTouchBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Glitch effect for h1
    const glitchElement = document.querySelector('.glitch, .glitch-icon, .icon-wrapper');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.animation = 'none';
            void glitchElement.offsetWidth; // Trigger reflow
            glitchElement.style.animation = null;
        }, 2000);
    }

    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted!');
            contactForm.reset();
        });
    }

    // Dynamic star background (in addition to particles.js)
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    setInterval(createStar, 200);
    // PeoplePerHour Widget


    function loadPeoplePerHourWidget() {
        var useSSL = 'https:' == document.location.protocol;
        var js = document.createElement('script');
        js.src = (useSSL ? 'https:' : 'http:') + '//www.peopleperhour.com/hire/1849342053/11672145.js?width=245&height=320&orientation=vertical&theme=dark&rnd=' + parseInt(Math.random()*10000, 10);
        document.body.appendChild(js);
    }

    // Load the PeoplePerHour widget
    loadPeoplePerHourWidget();
    
});
