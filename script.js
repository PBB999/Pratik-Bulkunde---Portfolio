// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Active Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Construct mailto link
        const mailtoLink = `mailto:pratikbulkunde08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        
        // Open mailto
        window.location.href = mailtoLink;

        // Show success message
        alert('Thank you for your message! Opening your default email client...');
        contactForm.reset();
    });
}

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill tags and project cards
document.querySelectorAll('.skill-tag, .project-card, .cert-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Count Up Animation for Numbers
function animateCounter(element, target, duration = 2000) {
    let count = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 16);
}

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
    observer.observe(bar);
    bar.addEventListener('animationstart', () => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });
});

// Active Nav Link Styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--accent-color);
        border-bottom: 3px solid var(--accent-color);
        padding-bottom: 3px;
    }
`;
document.head.appendChild(style);

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const scrollPosition = window.scrollY;
        profileImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1e40af, #d97706);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 995;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    pointer-events: none;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'all';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const chatbot = document.querySelector('.chatbot-container');
        if (chatbot && chatbot.classList.contains('active')) {
            chatbot.classList.remove('active');
        }
    }
});

// Add Loading State to Contact Form
if (contactForm) {
    const originalSubmit = contactForm.querySelector('button[type="submit"]');
    if (originalSubmit) {
        originalSubmit.addEventListener('click', function() {
            if (!this.disabled) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    }
}

// Print Friendly Styles
window.addEventListener('beforeprint', () => {
    document.querySelector('.chatbot-toggle').style.display = 'none';
    document.querySelector('.back-to-top').style.display = 'none';
});

window.addEventListener('afterprint', () => {
    document.querySelector('.chatbot-toggle').style.display = 'block';
    document.querySelector('.back-to-top').style.display = 'flex';
});

// Analytics Tracking (Optional)
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Add your analytics code here (Google Analytics, etc.)
}

// Track section views
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            trackEvent('section_view', { section: section.id });
        }
    });
});

// Accessibility Enhancements
document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('focus', function() {
        this.style.outline = '2px solid #1e40af';
        this.style.outlineOffset = '2px';
    });
    el.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('Portfolio loaded successfully! 🚀');
