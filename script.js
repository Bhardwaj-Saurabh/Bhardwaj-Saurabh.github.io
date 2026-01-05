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
  initChatbot();
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

/* ================================
   CHATBOT FUNCTIONALITY
   ================================ */

function initChatbot() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotMessages = document.getElementById('chatbot-messages');

  if (!chatbotToggle || !chatbotWindow) return;

  // Knowledge base - Portfolio information
  const knowledgeBase = {
    skills: {
      keywords: ['skill', 'technology', 'tech', 'expertise', 'tools', 'framework', 'language', 'programming'],
      response: `Saurabh is an expert in:

**AI/ML Technologies:**
• LangChain & LangGraph (Expert level)
• PyTorch & TensorFlow (Advanced)
• Agentic AI & Multi-Agent Systems
• RAG (Retrieval Augmented Generation)
• Azure OpenAI & AWS SageMaker

**Cloud & MLOps:**
• Azure ML & AWS (Expert level)
• Docker, Kubernetes, Terraform
• MLflow, CI/CD pipelines

**Programming:**
• Python (Advanced)
• SQL/NoSQL, PySpark
• C++/C#

He has 9+ years of AI/ML experience and 8 industry certifications including Azure AI Engineer and multiple Udacity Nanodegrees.`
    },
    projects: {
      keywords: ['project', 'work', 'portfolio', 'built', 'developed', 'created'],
      response: `Here are Saurabh's featured projects:

**1. AI Research Trends RAG**
• Production-grade platform discovering AI research trends
• Uses GPT-4 with RAG for citation-backed insights
• Tech: OpenAI GPT-4, FastAPI, Qdrant, Streamlit

**2. ConformAI - EU AI Regulations**
• RAG system for EU AI regulations (AI Act, GDPR)
• LangGraph orchestration with multi-turn conversations
• Tech: LangGraph, Qdrant, Airflow, Kubernetes

**3. OmniSupply Multi-Agent Platform**
• Supply chain intelligence with 5 specialized AI agents
• Processes 416K+ records for analytics & predictions
• Tech: LangGraph, GPT-4o, ChromaDB, PostgreSQL

View all projects on his [GitHub](https://github.com/Bhardwaj-Saurabh)!`
    },
    experience: {
      keywords: ['experience', 'work history', 'job', 'career', 'company', 'position'],
      response: `**Current Role:**
Lead AI Architect at Delaware UK (Sep 2025 - Present)
• Leading 19-member AI team across UK, Belgium, Netherlands
• Delivered 36 AI solutions generating $1M+ annual value
• Built Agentic AI Deployment Framework
• 3 production systems serving 10,000+ users daily

**Previous Roles:**
• Principal AI Engineer at Unisys (Jul 2024 - Aug 2025)
  - Delivered RAG system reducing legal review time by 60%
  - Automated quality control saving 500+ hours monthly

• Principal Consultant at Nissan (Feb 2018 - Jun 2024)
  - ML price prediction model with 92% accuracy
  - Reduced sourcing time from 12 to 7 weeks

Total: 19+ years experience, 9+ years in AI/ML`
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'connect', 'linkedin', 'github'],
      response: `You can reach Saurabh through:

📧 **Email:** aryan.saurabhbhardwaj@gmail.com

💼 **LinkedIn:** [saurabhbhardwajofficial](https://www.linkedin.com/in/saurabhbhardwajofficial/)

💻 **GitHub:** [Bhardwaj-Saurabh](https://github.com/Bhardwaj-Saurabh)

📍 **Location:** London, United Kingdom

He's currently available for AI consulting, speaking engagements, and collaboration opportunities!`
    },
    impact: {
      keywords: ['impact', 'achievement', 'result', 'outcome', 'success', 'delivered'],
      response: `**Executive Impact Highlights:**

💰 **$2M+ Cost Reduction**
• 60% reduction in legal document review time
• 500+ hours saved monthly in quality control
• 60% cut in equipment downtime

👥 **Team Leadership**
• Built and lead 19-member AI team from scratch
• Across UK, Belgium, and Netherlands

🚀 **Production Systems**
• 3 mission-critical AI systems deployed
• 10,000+ users daily with 99.9% uptime

📊 **AI Strategy**
• 36 AI use cases architected
• GDPR compliant & ethical AI practices`
    },
    certifications: {
      keywords: ['certification', 'certified', 'credential', 'award', 'recognition'],
      response: `**Microsoft Azure Certifications:**
• Azure AI Engineer Associate (AI-102)
• Azure Fabric Analytics Engineer (DP-600)
• Azure Data Scientist Associate (DP-100)

**Udacity Nanodegrees:**
• Agents with LangChain & LangGraph
• Agentic AI Nanodegree
• Generative AI Nanodegree
• ML DevOps Engineer

**Awards:**
🏆 1st Place - Imperial College Data Science Bootcamp (350 participants)
🎤 1st Place - Toastmasters Public Speaking Competition
⭐ Lead ML Engineer Recognition - Omdena`
    },
    education: {
      keywords: ['education', 'degree', 'university', 'study', 'academic'],
      response: `**Education:**
🎓 M.Sc. Applied AI
Cranfield University

**Recognition:**
• 1st Place at Imperial College Data Science Bootcamp (among 350 participants)

**Continuous Learning:**
• 8 industry certifications
• 4 Udacity Nanodegrees in AI/ML
• Active in AI research and development`
    },
    genai: {
      keywords: ['generative ai', 'genai', 'llm', 'gpt', 'chatbot', 'rag', 'langchain'],
      response: `Saurabh is a **Generative AI Specialist** with deep expertise in:

🤖 **Agentic AI & Multi-Agent Systems:**
• Built multi-agent platforms with LangGraph
• Expert in autonomous agent orchestration

🔗 **RAG (Retrieval Augmented Generation):**
• Production RAG systems deployed
• Improved accuracy from 64% to 89%
• Hybrid semantic + BM25 search

⚡ **LLM Frameworks:**
• LangChain & LangGraph (Expert)
• Llama-Index (Advanced)
• Azure OpenAI & GPT-4 integration

📚 **Certifications:**
• Agentic AI Nanodegree (Udacity)
• Generative AI Nanodegree (Udacity)
• Agents with LangChain & LangGraph (Udacity)`
    }
  };

  // Toggle chatbot
  function toggleChatbot() {
    chatbotWindow.classList.toggle('active');
    chatbotToggle.classList.toggle('active');

    if (chatbotWindow.classList.contains('active')) {
      chatbotInput.focus();
    }
  }

  chatbotToggle.addEventListener('click', toggleChatbot);
  chatbotClose.addEventListener('click', toggleChatbot);

  // Add message to chat
  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';

    const content = document.createElement('div');
    content.className = 'message-content';

    // Convert markdown-style links and formatting
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    content.innerHTML = `<p>${formattedText}</p>`;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Show typing indicator
  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';

    typingDiv.appendChild(avatar);
    typingDiv.appendChild(indicator);
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  }

  // Get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon)/.test(lowerMessage)) {
      return "Hello! 👋 I'm Saurabh's AI assistant. I can help you learn about his skills, projects, experience, and more. What would you like to know?";
    }

    // Check for thanks
    if (/thank|thanks|appreciate/.test(lowerMessage)) {
      return "You're welcome! Feel free to ask me anything else about Saurabh's expertise and experience. 😊";
    }

    // Check knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Check for specific technologies
    if (/azure|aws|cloud/.test(lowerMessage)) {
      return "Saurabh is an **Azure & AWS Expert**!\n\n• Azure AI Engineer Associate certified\n• Expert in Azure ML, Azure OpenAI\n• AWS SageMaker experience\n• MLOps with Terraform, Docker, Kubernetes\n\nHe's deployed production systems on both platforms serving 10,000+ users daily.";
    }

    if (/mlops|devops|deployment/.test(lowerMessage)) {
      return "Saurabh is a **MLOps Expert** with:\n\n• Terraform CI/CD pipelines\n• Docker & Kubernetes orchestration\n• MLflow for experiment tracking\n• Azure DevOps certified\n• Reduced deployment time from weeks to hours\n\nHe built Delaware's Agentic AI Deployment Framework!";
    }

    if (/hire|hiring|available|job/.test(lowerMessage)) {
      return "Saurabh is currently **available for new opportunities**!\n\nHe's open to:\n• AI Consulting\n• Speaking Engagements\n• Project Collaboration\n• Full-time positions\n\nReach out via:\n📧 aryan.saurabhbhardwaj@gmail.com\n💼 [LinkedIn](https://www.linkedin.com/in/saurabhbhardwajofficial/)";
    }

    // Default response
    return `I can help you learn about:
• **Skills & Expertise** - AI/ML technologies, cloud platforms
• **Projects** - RAG systems, multi-agent platforms
• **Experience** - 9+ years in AI/ML, team leadership
• **Certifications** - 8 industry certifications
• **Contact** - How to reach Saurabh

What would you like to know more about?`;
  }

  // Handle sending message
  function sendMessage() {
    const message = chatbotInput.value.trim();

    if (!message) return;

    // Add user message
    addMessage(message, true);
    chatbotInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot response delay
    setTimeout(() => {
      removeTypingIndicator();
      const response = getBotResponse(message);
      addMessage(response, false);
    }, 800 + Math.random() * 600); // Random delay between 800-1400ms
  }

  // Send button click
  chatbotSend.addEventListener('click', sendMessage);

  // Enter key to send
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Quick option buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-option')) {
      const query = e.target.dataset.query;
      chatbotInput.value = query;
      sendMessage();
    }
  });
}
