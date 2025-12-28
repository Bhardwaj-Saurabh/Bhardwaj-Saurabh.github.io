/* ================================
   MAIN INITIALIZATION
   ================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  // initParticles(); // Removed for executive-level simplicity
  // initTypingEffect(); // Removed for executive-level simplicity
  initScrollAnimations();
  initDarkModeToggle();
  initSkillFilters();
  initProjectFilters();
  initContactForm();
  initSmoothScroll();
  initBackToTop();
  initNavbarScroll();
  initScrollIndicator();
});

/* ================================
   HAMBURGER MENU (Keep existing)
   ================================ */

function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}

/* ================================
   PARTICLES.JS CONFIGURATION
   ================================ */

function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#a855f7'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.4,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#a855f7',
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

/* ================================
   TYPED.JS TYPING EFFECT
   ================================ */

function initTypingEffect() {
  if (typeof Typed !== 'undefined') {
    const typed = new Typed('#typed-text', {
      strings: [
        'Lead AI Architect',
        'Machine Learning Expert',
        'Generative AI Specialist',
        'MLOps Engineer',
        'AI Innovation Leader'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false
    });
  }
}

/* ================================
   AOS (ANIMATE ON SCROLL)
   ================================ */

function initScrollAnimations() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }
}

/* ================================
   DARK MODE TOGGLE
   ================================ */

function initDarkModeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) return;

  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Listen for toggle clicks
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update icon
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  // Add transition effect
  document.body.style.transition = 'background 0.5s ease, color 0.5s ease';
}

/* ================================
   SKILL FILTERS
   ================================ */

function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skills-filters .filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (filterBtns.length === 0 || skillCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filterValue = e.target.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      // Filter skills with smooth animation
      skillCards.forEach(card => {
        const category = card.dataset.category;

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ================================
   PROJECT FILTERS
   ================================ */

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filterValue = e.target.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      // Filter projects with smooth animation
      projectCards.forEach(card => {
        const category = card.dataset.category;

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ================================
   CONTACT FORM VALIDATION
   ================================ */

function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success-message');

  if (!form) return;

  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearError(input));
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all required fields
    const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let allValid = true;

    requiredInputs.forEach(input => {
      if (!validateField(input)) {
        allValid = false;
      }
    });

    if (!allValid) {
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      form.style.display = 'none';
      successMessage.classList.remove('hidden');

      // Log data (remove in production)
      console.log('Form submitted:', data);

      // Optional: Send email using FormSubmit.co or EmailJS
      // Example: https://formsubmit.co/your-email@example.com

    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again or email directly.');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

function validateField(field) {
  const value = field.value.trim();
  const errorSpan = field.parentElement.querySelector('.error-message');
  let isValid = true;
  let errorMessage = '';

  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }

  // Display error
  if (!isValid) {
    field.classList.add('error');
    if (errorSpan) {
      errorSpan.textContent = errorMessage;
      errorSpan.style.display = 'block';
    }
  } else {
    field.classList.remove('error');
    if (errorSpan) {
      errorSpan.style.display = 'none';
    }
  }

  return isValid;
}

function clearError(field) {
  field.classList.remove('error');
  const errorSpan = field.parentElement.querySelector('.error-message');
  if (errorSpan) {
    errorSpan.style.display = 'none';
  }
}

/* ================================
   SMOOTH SCROLL
   ================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Ignore empty anchors
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu if open
        const menuLinks = document.querySelector('.menu-links');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        if (menuLinks && menuLinks.classList.contains('open')) {
          menuLinks.classList.remove('open');
          hamburgerIcon.classList.remove('open');
        }
      }
    });
  });
}

/* ================================
   BACK TO TOP BUTTON
   ================================ */

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  if (!backToTopBtn) return;

  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ================================
   NAVBAR SCROLL EFFECT
   ================================ */

function initNavbarScroll() {
  const nav = document.querySelector('nav');

  if (!nav) return;

  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, 10));
}

/* ================================
   SCROLL INDICATOR
   ================================ */

function initScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');

  if (!indicator) return;

  // Hide indicator on scroll
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 200) {
      indicator.style.opacity = '0';
      indicator.style.pointerEvents = 'none';
    } else {
      indicator.style.opacity = '1';
      indicator.style.pointerEvents = 'auto';
    }
  }, 10));

  // Scroll to next section on click
  indicator.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

/* ================================
   UTILITY FUNCTIONS
   ================================ */

// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* ================================
   LAZY LOADING SUPPORT
   ================================ */

// Check if browser supports lazy loading
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

/* ================================
   PERFORMANCE OPTIMIZATIONS
   ================================ */

// Preload critical resources
window.addEventListener('load', () => {
  const preloadLinks = [
    { href: './assets/IMG_3708.jpg', as: 'image' },
    { href: './assets/IMG_3682.jpg', as: 'image' }
  ];

  preloadLinks.forEach(link => {
    const preload = document.createElement('link');
    preload.rel = 'preload';
    preload.href = link.href;
    preload.as = link.as;
    document.head.appendChild(preload);
  });
});

// Add smooth transitions for skill card filtering
document.querySelectorAll('.skill-card').forEach(card => {
  card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// Add smooth transitions for project card filtering
document.querySelectorAll('.project-card').forEach(card => {
  card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

/* ================================
   CONSOLE MESSAGE
   ================================ */

console.log('%c🚀 Portfolio by Saurabh Bhardwaj', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cLead AI Architect | ML Specialist | AI Innovation Leader', 'color: #764ba2; font-size: 14px;');
console.log('%cWebsite built with passion using HTML, CSS & JavaScript', 'color: #4a4a6a; font-size: 12px;');
