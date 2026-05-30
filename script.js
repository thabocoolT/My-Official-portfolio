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
//================ SKILLS SLIDER ================

const skillsSlider = document.querySelector(".skills-slider");

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

// RIGHT
rightArrow.addEventListener("click", () => {
  skillsSlider.scrollBy({
    left: 320,
    behavior: "smooth",
  });
});

// LEFT
leftArrow.addEventListener("click", () => {
  skillsSlider.scrollBy({
    left: -320,
    behavior: "smooth",
  });
});

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


const skillCards = document.querySelectorAll(".skill-card");
const slider = document.querySelector(".skills-slider");

let positions = [
  "pos-1",
  "pos-2",
  "pos-3",
  "pos-4",
  "pos-5",
  "pos-6"
];

function rotateCarousel() {
  positions.unshift(positions.pop());

  skillCards.forEach((card, index) => {
    card.classList.remove(
      "pos-1",
      "pos-2",
      "pos-3",
      "pos-4",
      "pos-5",
      "pos-6"
    );

    card.classList.add(positions[index]);
  });
}

let carouselInterval = setInterval(rotateCarousel, 3000);