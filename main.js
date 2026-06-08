// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements
  const revealElements = document.querySelectorAll('.glass, .timeline-item, .section-title, .hero > div');
  
  revealElements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });

  // Smooth scroll for navigation
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

  // Dynamic Navbar Background
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.padding = '1rem 5%';
      nav.style.background = 'hsla(230, 35%, 7%, 0.95)';
    } else {
      nav.style.padding = '1.5rem 5%';
      nav.style.background = 'hsla(230, 35%, 7%, 0.8)';
    }
  });
});

// CSS for reveal animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .reveal {
    opacity: 1;
    transform: translateY(0);
  }
  .hero > div.reveal {
    transition-delay: 0.2s;
  }
`;
document.head.appendChild(styleSheet);
