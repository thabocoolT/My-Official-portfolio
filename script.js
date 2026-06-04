// ================= ACTIVE NAVIGATION =================//
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const senctionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= senctionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

//======================BURGER MENU========================//
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

/* Toggle Menu */
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});
/* Close Menu When Clicking Links */
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burger.classList.remove("active");
  });
});

//======================View More Button========================//
const viewMoreBtn = document.getElementById("viewMoreBtn");
const aboutRight = document.querySelector(".about-right");

viewMoreBtn.addEventListener("click", () => {
  aboutRight.classList.toggle("show");

  if (aboutRight.classList.contains("show")) {
    viewMoreBtn.textContent = "View Less";
  } else {
    viewMoreBtn.textContent = "View More";
  }
});

//=====================================TYPING EFFECT========================//
const typingElement = document.getElementById("typing-text");

const words = [
  "Bsc IT Student...",
  "Software Developer",
  "Network Engineer",
  "Systems Analyst",
  "AI Enthusiast",
  "Problem Solver",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
//===================================================================//
//================ SKILLS CONVEYOR CAROUSEL ================

const skillsSlider = document.getElementById('skillsSlider');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow  = document.querySelector('.left-arrow');

// Pause on card hover — CSS :has() handles it too, but JS ensures broader support
skillsSlider.addEventListener('mouseenter', () => {
  skillsSlider.classList.add('paused');
});
skillsSlider.addEventListener('mouseleave', () => {
  skillsSlider.classList.remove('paused');
});

// Arrow buttons: nudge the animation offset manually
let nudgeOffset = 0;
const NUDGE = 264; // card width + gap

function nudge(direction) {
  // Temporarily pause, shift transform, then resume
  const current = window.getComputedStyle(skillsSlider).transform;
  const matrix = new DOMMatrix(current);
  nudgeOffset += direction * NUDGE;
  skillsSlider.style.animationPlayState = 'paused';
  skillsSlider.style.transform = `translateX(${nudgeOffset}px)`;

  setTimeout(() => {
    skillsSlider.style.transform = '';
    skillsSlider.style.animationPlayState = '';
    nudgeOffset = 0;
  }, 600);
}

rightArrow.addEventListener('click', () => nudge(-1));
leftArrow.addEventListener('click',  () => nudge(1));

//================ SOFT SKILLS POPUP ================

const softSkillsBtn = document.querySelector(".soft-skills-btn");

const softSkills = document.querySelector(".soft-skills");

const skillsSection = document.querySelector(".skills");

softSkillsBtn.addEventListener("click", () => {
  softSkills.classList.toggle("show");

  skillsSection.classList.toggle("blur-background");
});

/*================ SCROLL REVEAL ================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

/* Scroll Event */
window.addEventListener("scroll", revealElements);

/* Initial Load */
revealElements();

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formStatus.textContent = "✅ Message sent successfully!";

      formStatus.style.color = "#16a34a";

      contactForm.reset();
    } else {
      formStatus.textContent = "❌ Failed to send message.";

      formStatus.style.color = "#dc2626";
    }
  } catch (error) {
    formStatus.textContent = "❌ Something went wrong.";

    formStatus.style.color = "#dc2626";
  }
});

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

// Update icon based on current theme
function updateThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.className = "fa-solid fa-sun";
  } else {
    themeIcon.className = "fa-solid fa-moon";
  }
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Set correct icon on page load
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  // Update icon after switching theme
  updateThemeIcon();
});

// load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
}



// =====================================================
// MOBILE: Scroll-dot indicators + swipe hints
// =====================================================
function isMobile() {
  return window.innerWidth <= 768;
}

function injectScrollDots(containerSelector, rowSelector, dotClass) {
  if (!isMobile()) return;
  const container = document.querySelector(containerSelector);
  const row = document.querySelector(rowSelector);
  if (!container || !row) return;

  // Remove existing dots if any
  const existing = container.querySelector('.' + dotClass + '-wrap');
  if (existing) existing.remove();

  const items = row.querySelectorAll(':scope > *:not([aria-hidden="true"])');
  if (items.length < 2) return;

  const wrap = document.createElement('div');
  wrap.className = dotClass + '-wrap';
  wrap.style.cssText = 'display:flex;gap:5px;margin-top:10px;padding-left:20px;';

  items.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.style.cssText = 'display:inline-block;height:5px;border-radius:3px;transition:all 0.3s ease;background:rgba(96,165,250,0.35);width:5px;';
    if (i === 0) { dot.style.background = 'var(--accent,#00eaff)'; dot.style.width = '14px'; }
    wrap.appendChild(dot);
  });

  container.querySelector(rowSelector.split(' ').pop())
    ? container.appendChild(wrap)
    : container.appendChild(wrap);

  row.addEventListener('scroll', () => {
    if (!isMobile()) return;
    const dots = wrap.querySelectorAll('span');
    const itemW = items[0].offsetWidth + 10;
    const active = Math.round(row.scrollLeft / itemW);
    dots.forEach((d, i) => {
      if (i === active) {
        d.style.background = 'var(--accent,#00eaff)';
        d.style.width = '14px';
      } else {
        d.style.background = 'rgba(96,165,250,0.3)';
        d.style.width = '5px';
      }
    });
  }, { passive: true });
}

function addSwipeHint(containerSelector, label) {
  if (!isMobile()) return;
  const container = document.querySelector(containerSelector);
  if (!container) return;
  if (container.querySelector('.swipe-hint')) return;
  const hint = document.createElement('p');
  hint.className = 'swipe-hint';
  hint.textContent = '⟵  ' + label + '  ⟶';
  hint.style.cssText = 'font-size:10px;color:var(--soft-text,#6b7280);text-align:center;margin-top:6px;letter-spacing:0.5px;padding-right:20px;';
  container.appendChild(hint);
}

function initMobileEnhancements() {
  if (!isMobile()) return;

  // Skills scroll dots
  injectScrollDots('.skills-container', '#skillsSlider', 'skills-dots');
  addSwipeHint('.skills-container', 'swipe to explore all skills');

  // Projects scroll dots
  injectScrollDots('.projects-container', '#projectsGrid', 'projects-dots');
  addSwipeHint('.projects-container', 'swipe to browse all projects');
}

// Run on load and on resize
window.addEventListener('load', initMobileEnhancements);
window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(initMobileEnhancements, 200);
});
