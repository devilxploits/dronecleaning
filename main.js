/**
 * Sky Cleaner Services — main.js (v2 — Static Hero)
 * Navbar scroll, hero entry animations, particles, stat counters, form, mobile menu
 */

/* ============================================================
   NAVBAR SCROLL
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


/* ============================================================
   HERO ENTRY ANIMATIONS
   ============================================================ */
function runHeroEntrance() {
  const animElements = document.querySelectorAll('[data-animate="fade-up"]');
  animElements.forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => el.classList.add('in'), delay + 120);
  });
}
// Run on load
window.addEventListener('load', runHeroEntrance);
// Fallback
setTimeout(runHeroEntrance, 300);


/* ============================================================
   HERO PARALLAX (subtle)
   ============================================================ */
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroH = document.getElementById('hero').offsetHeight;
    if (scrolled < heroH) {
      const shift = scrolled * 0.3;
      heroBgImg.style.transform = `translateY(${shift}px) scale(1.05)`;
    }
  }, { passive: true });
}


/* ============================================================
   HERO PARTICLES (mist/water droplets)
   ============================================================ */
(function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const PARTICLE_COUNT = 18;

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    const el = document.createElement('div');
    const size = randomBetween(3, 9);
    const x    = randomBetween(5, 95);
    const y    = randomBetween(15, 85);
    const dur  = randomBetween(8, 18);
    const del  = randomBetween(0, 10);

    Object.assign(el.style, {
      position: 'absolute',
      left: x + '%',
      top:  y + '%',
      width:  size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,${randomBetween(0.4, 0.8)}), rgba(111,168,220,${randomBetween(0.1, 0.3)}))`,
      animation: `particle-float ${dur}s ${del}s ease-in-out infinite`,
      pointerEvents: 'none',
    });

    container.appendChild(el);
  }

  // Inject keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-float {
      0%   { transform: translate(0, 0) scale(1);   opacity: 0; }
      15%  { opacity: 1; }
      50%  { transform: translate(${randomBetween(-30,30)}px, ${randomBetween(-40,-10)}px) scale(1.2); opacity: 0.7; }
      85%  { opacity: 0.3; }
      100% { transform: translate(${randomBetween(-20,20)}px, ${randomBetween(-60,-30)}px) scale(0.6); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  for (let i = 0; i < PARTICLE_COUNT; i++) createParticle();
})();


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function setupRevealObserver() {
  const targets = document.querySelectorAll(
    '.industry-card, .process-step, .tech-card, .eco-metric, .eco-list li, .contact-left, .contact-form'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.revealed)')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('revealed'), idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}


/* ============================================================
   ECO METRIC BAR ANIMATION
   ============================================================ */
function setupEcoMetrics() {
  const fills = document.querySelectorAll('.eco-metric-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Width is already set inline — just trigger CSS transition by re-setting
        const el = entry.target;
        const targetW = el.style.width;
        el.style.width = '0%';
        requestAnimationFrame(() => {
          setTimeout(() => { el.style.width = targetW; }, 80);
        });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  fills.forEach(el => observer.observe(el));
}


/* ============================================================
   STAT COUNTERS (ribbon numbers are static, but eco metrics animate)
   ============================================================ */
function setupStatCounters() {
  const metricNumbers = document.querySelectorAll('.eco-metric-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const text    = entry.target.textContent;
        const numeric = parseInt(text);
        if (!isNaN(numeric) && numeric > 0) {
          animateCount(entry.target, numeric, text.replace(String(numeric), ''));
        }
      }
    });
  }, { threshold: 0.5 });

  metricNumbers.forEach(el => observer.observe(el));
}

function animateCount(el, target, suffix) {
  const duration = 1600;
  const start = performance.now();
  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + (suffix || '');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + (suffix || '');
  }
  requestAnimationFrame(step);
}


/* ============================================================
   MOBILE NAV
   ============================================================ */
function setupMobileNav() {
  const hamburger  = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn   = document.getElementById('mobileMenuClose');

  function openMenu()  { mobileMenu.classList.add('open'); hamburger.setAttribute('aria-expanded','true');  document.body.style.overflow = 'hidden'; }
  function closeMenu() { mobileMenu.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); document.body.style.overflow = ''; }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('.mobile-link, .mobile-cta').forEach(l => l.addEventListener('click', closeMenu));
  mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) closeMenu(); });
}


/* Contact form is handled by lang.js (with translation support) */


/* ============================================================
   SMOOTH ANCHORS
   ============================================================ */
function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}


/* ============================================================
   CORE CAPABILITIES CAROUSEL (DRAG & AUTO SCROLL)
   ============================================================ */
function setupCarousel() {
  const track = document.getElementById('capabilitiesTrack');
  const wrapper = document.querySelector('.carousel-wrapper');
  if (!track || !wrapper) return;

  let isDown = false;
  let isHovered = false;
  let startX;
  let scrollLeft;
  
  // Auto-scroll variables
  let scrollSpeed = 0.5; // pixels per frame
  let direction = 1;

  function autoScroll() {
    if (!isDown && !isHovered) {
      wrapper.scrollLeft += (scrollSpeed * direction);
      
      // Reverse direction if hitting the edges
      if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 1) {
        direction = -1;
      } else if (wrapper.scrollLeft <= 0) {
        direction = 1;
      }
    }
    requestAnimationFrame(autoScroll);
  }
  
  // Start the auto-scroll loop
  requestAnimationFrame(autoScroll);

  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    wrapper.style.cursor = 'grabbing';
    startX = e.pageX - wrapper.offsetLeft;
    // We use actual scroll instead of translate for simpler accessibility/bounding
    scrollLeft = wrapper.scrollLeft;
  });
  
  wrapper.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  wrapper.addEventListener('mouseleave', () => {
    isDown = false;
    isHovered = false;
    wrapper.style.cursor = 'grab';
  });

  wrapper.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.style.cursor = 'grab';
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    wrapper.scrollLeft = scrollLeft - walk;
  });

  // Simple touch support
  wrapper.addEventListener('touchstart', (e) => {
    isDown = true;
    isHovered = true; // Pause auto-scroll on touch
    startX = e.touches[0].pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
  }, {passive:true});

  wrapper.addEventListener('touchend', () => { 
    isDown = false; 
    isHovered = false;
  });
  wrapper.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 2;
    wrapper.scrollLeft = scrollLeft - walk;
  }, {passive:true});
}

/* ============================================================
   ZIG-ZAG SLIDE-IN ANIMATIONS
   ============================================================ */
function setupZigzagAnimations() {
  const zzEls = document.querySelectorAll('[data-zz]');
  if (!zzEls.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('zz-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  zzEls.forEach(el => obs.observe(el));
}


/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setupRevealObserver();
  setupEcoMetrics();
  setupStatCounters();
  setupMobileNav();
  setupSmoothAnchors();
  setupZigzagAnimations();
  setupCarousel();
  /* Note: contact form handled by lang.js */
});




(function() {
  emailjs.init("kRxm71ZSJ4U9kgCC8"); // 🔑 replace this
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value;
  const last = document.getElementById("lastName").value;

  const templateParams = {
    full_name: first + " " + last,
    first_name: first,
    last_name: last,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    building_type: document.getElementById("buildingType").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_1l0ac24", "template_p5aegib", templateParams)
    .then(function() {
      alert("✅ Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function(error) {
      alert("❌ Failed to send message. Try again.");
      console.error(error);
    });
});




