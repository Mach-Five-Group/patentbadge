// Wait for DOM to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', function() {

  // ==================== Testimonial Rotation ====================
  let currentTestimonial = 1;
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let testimonialInterval;

  function updateTestimonials() {
    testimonialCards.forEach((card) => {
      if (parseInt(card.dataset.testimonial) === currentTestimonial) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.zIndex = '10';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.zIndex = '1';
      }
    });

    testimonialDots.forEach((dot) => {
      if (parseInt(dot.dataset.dot) === currentTestimonial) {
        dot.style.background = 'var(--accent)';
      } else {
        dot.style.background = 'transparent';
      }
    });
  }

  function nextTestimonial() {
    currentTestimonial = currentTestimonial === 3 ? 1 : currentTestimonial + 1;
    updateTestimonials();
    resetInterval();
  }

  function previousTestimonial() {
    currentTestimonial = currentTestimonial === 1 ? 3 : currentTestimonial - 1;
    updateTestimonials();
    resetInterval();
  }

  function goToTestimonial(num) {
    currentTestimonial = num;
    updateTestimonials();
    resetInterval();
  }

  function resetInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 5000);
  }

  // Start testimonial rotation
  if (testimonialCards.length > 0) {
    testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 5000);
  }

  // ==================== Mobile Menu Toggle ====================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('#mainNav a').forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('active');
      });
    });
  }

  // ==================== Set Footer Year ====================
  const yearElement = document.getElementById('yr');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==================== Animate Counter ====================
  const counter = document.querySelector('.impact-number');
  if (counter) {
    const target = parseInt(counter.dataset.target);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    let animationStarted = false;

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        current = target;
        counter.textContent = target + '%';
        // Fade in the subtitle after counter completes
        const subtitle = document.querySelector('.impact-subtitle');
        if (subtitle) {
          setTimeout(() => {
            subtitle.style.opacity = '1';
          }, 200);
        }
      } else {
        counter.textContent = Math.floor(current) + '%';
        requestAnimationFrame(updateCounter);
      }
    };

    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
  }

  // ==================== Interactive Dashboard ====================
  let currentScreen = 0;
  const screens = ['submit', 'badge', 'license', 'revenue'];

  function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.dashboard-screen').forEach(screen => {
      screen.style.display = 'none';
    });

    // Show selected screen
    const targetScreen = document.getElementById(`screen-${screenName}`);
    if (targetScreen) {
      targetScreen.style.display = 'flex';
    }

    // Update nav items
    document.querySelectorAll('.dashboard-nav .nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.screen === screenName) {
        item.classList.add('active');
      }
    });
  }

  // Navigate to specific screen when nav item clicked
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const screenName = item.dataset.screen;
      currentScreen = screens.indexOf(screenName);
      showScreen(screenName);
    });
  });

  // Arrow navigation
  const prevBtn = document.getElementById('prev-screen');
  const nextBtn = document.getElementById('next-screen');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentScreen = (currentScreen - 1 + screens.length) % screens.length;
      showScreen(screens[currentScreen]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentScreen = (currentScreen + 1) % screens.length;
      showScreen(screens[currentScreen]);
    });
  }

  // ==================== Form Handler ====================
  const form = document.getElementById('lead');
  if (form) {
    const err = document.getElementById('formError');
    const ok = document.getElementById('successMsg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      err.style.display = 'none';
      ok.style.display = 'none';

      const data = new FormData(form);
      const required = ['name', 'email', 'org'];
      const missing = required.some(key => !String(data.get(key) || '').trim());
      const email = String(data.get('email') || '');
      const emailOk = /.+@.+\..+/.test(email);

      if (missing || !emailOk) {
        err.style.display = 'block';
        return;
      }

      // Fake submit delay
      const btn = form.querySelector('button[type="submit"]');
      const prev = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Submitting…';

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = prev;
        ok.style.display = 'block';
        form.reset();
      }, 700);
    });
  }

  // ==================== Intersection Observer for Fade-in Animations ====================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in sections
  document.querySelectorAll('.fade-in-section').forEach(section => {
    fadeInObserver.observe(section);
  });

  // ==================== License Terms Modal Functions ====================
  window.showLicenseTerms = function(patentNumber) {
    const modal = document.getElementById('licenseModal');
    if (modal) {
      modal.classList.add('active');
    }
  };

  window.closeLicenseModal = function() {
    const modal = document.getElementById('licenseModal');
    if (modal) {
      modal.classList.remove('active');
    }
  };

  // Close modal when clicking outside
  const modal = document.getElementById('licenseModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        window.closeLicenseModal();
      }
    });
  }

}); // End DOMContentLoaded
