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
document.querySelectorAll(".nav-links a").forEach(link => {

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

//===================================================================//
//================ SKILLS SLIDER ================

const skillsSlider = document.querySelector(".skills-slider");

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

// RIGHT
rightArrow.addEventListener("click", () => {

    skillsSlider.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});

// LEFT
leftArrow.addEventListener("click", () => {

    skillsSlider.scrollBy({
        left: -320,
        behavior: "smooth"
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

function revealElements(){

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }else{

            element.classList.remove("active");
        }
    });
}

/* Scroll Event */
window.addEventListener(
    "scroll",
    revealElements
);

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
                Accept: "application/json"
            }
        });

        if(response.ok){

            formStatus.textContent =
            "✅ Message sent successfully!";

            formStatus.style.color = "#16a34a";

            contactForm.reset();

        } else {

            formStatus.textContent =
            "❌ Failed to send message.";

            formStatus.style.color = "#dc2626";
        }

    } catch(error){

        formStatus.textContent =
        "❌ Something went wrong.";

        formStatus.style.color = "#dc2626";
    }
});

const themeBtn = document.querySelector(".theme-toggle button");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // optional save
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

