// =====================================================
// PARALLAX BACKGROUND SCROLL SYSTEM
// =====================================================
(function () {
  const skyLayer = document.querySelector(".sky-layer");
  const starsLayer = document.querySelector(".stars-layer");
  const auroraLayer = document.querySelector(".aurora-layer");
  const orbLayer = document.querySelector(".orb-layer");
  const mountainBack = document.querySelector(".mountain-back");
  const mountainFront = document.querySelector(".mountain-front");
  const terrainLayer = document.querySelector(".terrain-layer");
  const gridLayer = document.querySelector(".grid-layer");

  if (!gridLayer) return;

  // Total scrollable height — layers reach full reveal at the contact section
  // Adjust this if your page is taller/shorter
  const TOTAL = document.body.scrollHeight - window.innerHeight;

  let ticking = false;

  function applyParallax() {
    const y = window.scrollY;
    const p = Math.min(y / TOTAL, 1); // 0 = top, 1 = bottom

    // Sky & stars: always visible, drift very slowly upward
    if (skyLayer) skyLayer.style.transform = `translateY(${y * -0.03}px)`;
    if (starsLayer) starsLayer.style.transform = `translateY(${y * -0.06}px)`;
    if (auroraLayer) auroraLayer.style.transform = `translateY(${y * -0.1}px)`;
    if (orbLayer) orbLayer.style.transform = `translateY(${y * -0.12}px)`;

    // Mountain back: starts hidden below, fades + rises in from ~15% scroll
    if (mountainBack) {
      const prog = Math.max(0, (p - 0.12) / 0.45);
      mountainBack.style.opacity = Math.min(prog * 0.6, 0.6);
      mountainBack.style.transform = `translateY(${(1 - prog) * 90}px)`;
    }

    // Mountain front: slightly later, rises faster
    if (mountainFront) {
      const prog = Math.max(0, (p - 0.22) / 0.38);
      mountainFront.style.opacity = Math.min(prog * 0.75, 0.75);
      mountainFront.style.transform = `translateY(${(1 - prog) * 70}px)`;
    }

    // Terrain: fades in at ~50%
    if (terrainLayer) {
      const prog = Math.max(0, (p - 0.48) / 0.3);
      terrainLayer.style.opacity = Math.min(prog, 1);
    }

    // Grid: rises from bottom, becomes fully visible at contact section
    if (gridLayer) {
      const prog = Math.max(0, (p - 0.62) / 0.35);
      gridLayer.style.opacity = Math.min(prog * 0.85, 0.85);
      gridLayer.style.transform = `perspective(900px) rotateX(80deg) scaleY(2.2) translateY(${(1 - prog) * 130}px)`;
    }

    ticking = false;
  }

  // Recalculate TOTAL on resize since content height can change
  let total = document.body.scrollHeight - window.innerHeight;
  window.addEventListener("resize", () => {
    total = document.body.scrollHeight - window.innerHeight;
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(applyParallax);
        ticking = true;
      }
    },
    { passive: true },
  );

  // Run once on load
  applyParallax();
})();

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

const skillsSlider = document.getElementById("skillsSlider");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

// Pause on card hover — CSS :has() handles it too, but JS ensures broader support
skillsSlider.addEventListener("mouseenter", () => {
  skillsSlider.classList.add("paused");
});
skillsSlider.addEventListener("mouseleave", () => {
  skillsSlider.classList.remove("paused");
});

// Arrow buttons: nudge the animation offset manually
let nudgeOffset = 0;
const NUDGE = 264; // card width + gap

function nudge(direction) {
  // Temporarily pause, shift transform, then resume
  const current = window.getComputedStyle(skillsSlider).transform;
  const matrix = new DOMMatrix(current);
  nudgeOffset += direction * NUDGE;
  skillsSlider.style.animationPlayState = "paused";
  skillsSlider.style.transform = `translateX(${nudgeOffset}px)`;

  setTimeout(() => {
    skillsSlider.style.transform = "";
    skillsSlider.style.animationPlayState = "";
    nudgeOffset = 0;
  }, 600);
}

rightArrow.addEventListener("click", () => nudge(-1));
leftArrow.addEventListener("click", () => nudge(1));

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
  const existing = container.querySelector("." + dotClass + "-wrap");
  if (existing) existing.remove();

  const items = row.querySelectorAll(':scope > *:not([aria-hidden="true"])');
  if (items.length < 2) return;

  const wrap = document.createElement("div");
  wrap.className = dotClass + "-wrap";
  wrap.style.cssText =
    "display:flex;gap:5px;margin-top:10px;padding-left:20px;";

  items.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.style.cssText =
      "display:inline-block;height:5px;border-radius:3px;transition:all 0.3s ease;background:rgba(96,165,250,0.35);width:5px;";
    if (i === 0) {
      dot.style.background = "var(--accent,#00eaff)";
      dot.style.width = "14px";
    }
    wrap.appendChild(dot);
  });

  container.querySelector(rowSelector.split(" ").pop())
    ? container.appendChild(wrap)
    : container.appendChild(wrap);

  row.addEventListener(
    "scroll",
    () => {
      if (!isMobile()) return;
      const dots = wrap.querySelectorAll("span");
      const itemW = items[0].offsetWidth + 10;
      const active = Math.round(row.scrollLeft / itemW);
      dots.forEach((d, i) => {
        if (i === active) {
          d.style.background = "var(--accent,#00eaff)";
          d.style.width = "14px";
        } else {
          d.style.background = "rgba(96,165,250,0.3)";
          d.style.width = "5px";
        }
      });
    },
    { passive: true },
  );
}

function addSwipeHint(containerSelector, label) {
  if (!isMobile()) return;
  const container = document.querySelector(containerSelector);
  if (!container) return;
  if (container.querySelector(".swipe-hint")) return;
  const hint = document.createElement("p");
  hint.className = "swipe-hint";
  hint.textContent = "⟵  " + label + "  ⟶";
  hint.style.cssText =
    "font-size:10px;color:var(--soft-text,#6b7280);text-align:center;margin-top:6px;letter-spacing:0.5px;padding-right:20px;";
  container.appendChild(hint);
}

function initMobileEnhancements() {
  if (!isMobile()) return;

  // Skills scroll dots
  injectScrollDots(".skills-container", "#skillsSlider", "skills-dots");
  addSwipeHint(".skills-container", "swipe to explore all skills");

  // Projects scroll dots
  injectScrollDots(".projects-container", "#projectsGrid", "projects-dots");
  addSwipeHint(".projects-container", "swipe to browse all projects");
}

// Run on load and on resize
window.addEventListener("load", initMobileEnhancements);
window.addEventListener("resize", () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(initMobileEnhancements, 200);
});

// =====================================================
// PROJECT MODAL — data + behaviour
// =====================================================

const projectData = {
  varsitytrade: {
    icon: "🛡",
    title: "VarsityTrade",
    status: "In Progress",
    statusClass: "in-progress",
    tagline: "Built for Students, by Students",
    description: [
      "VarsityTrade is a full-stack marketplace web application built specifically for South African university students. It enables students to buy, sell and trade items safely withing their own campus community.",
      "Every listing on the platform is locked to the seller's registered university, meaning buyers can only ever see items from students at their own institution.",
    ],
    features: [
      "Campus-Locked Marketplace->Every listing is locked to the seller's university-buyers only see listings from their own campus",
      "Dual-role user system->All users register as Buyer. Seller profile activated on demand-one account, two roles",
      "JWT Authentication->Stateless API auth with access tokens(60 min) and refresh token rotation (7 days)",
      "Listing management-> Full CRUD-create, edit, soft delete, view count tracking, expiry, featured flag",
      "Category Hierarchy-> Self-referencing categories with subcategories(e.g. Electronics-> Laptops & Computers",
      "Structured Trade Offers-> Cash, trade, or combined offers with OfferItems for itemised trades",
      "In-App Messaging-> Conversation threads per listing between buyer and seller with read receipts",
      "Review System-> Reviews gated by completed transaction-no transaction, no review. Prevents fake reviews",
      "Admin Panel-> User management, listing moderation, reports queue, platform stats, hero banner manager",
      "Hero Banner Management-> Admin controls home page auto-swiping banner-featured-listings, reviews and news slides",
      "Software Delete Strategy-> Users, listings, reviews, and conversations are never hard deleted-DeletedAt preserved for audits",
      "ASP .NET MVC Frontend-> Server-rendered Razor pages built from 31 high-fidelity wireframes",
    ],
    tech: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "RestApis",
      "SQL Server",
      "JWT Auth",
      "OpenApi",
    ],
    github: "https://github.com/thabocoolT/VarsityTrade",
    demo: null,
    docs: {
      architecture: [
        "Varsity Trade is built on a clean layered architecture- a pattern widely used in professional .NET applications. The solution is split into four separate projects, each with a single responsibilty.",
        "Dependencies floe strictly inward: nothing in Core knows about Infrastructure or API, and nothing in infrastructure knows about the API. This separation makes the codebase testable, maintanble, and easy to scare.",
      ],
      setup: [
        "Full setup instructions will be published here once the project reaches Phase 7 — Deployment. The backend API, frontend, and mobile app will each have their own setup steps.",
      ],
      usage: [
        "On launch the API starts and the startup seeder automatically checks and populates all lookup tables — 21 universities, 33 categories, 4 item conditions, 6 listing statuses, and 5 system settings — if they are not already present. No manual database setup is required beyond running the migration.",
        "From Swagger or any API client, a new student registers by providing their name, email, password, university, and location. The platform issues a JWT access token valid for 60 minutes and a refresh token valid for 7 days. All subsequent requests use the access token in the Authorization header.",
        "Once registered, a student browses listings locked to their university — they cannot see listings from any other campus. When they are ready to sell, they activate a seller profile in one request, giving their shop a name and setting their pickup preferences. From that point they can create listings, receive offers, message buyers, and manage their shop — all without leaving their campus marketplace.",
      ],
      challenges:
        "Once registered, a student browses listings locked to their university — they cannot see listings from any other campus. When they are ready to sell, they activate a seller profile in one request, giving their shop a name and setting their pickup preferences. From that point they can create listings, receive offers, message buyers, and manage their shop — all without leaving their campus marketplace.",
      future: [
        "Complete the ASP.NET MVC Razor frontend built from the 31 existing high-fidelity wireframes",
        "Add real-time messaging using SignalR so conversation threads update live without page refreshes",
        "Build the .NET MAUI mobile app for iOS and Android, sharing the same backend API",
        "Implement student verification by cross-referencing student numbers against university records",
        "Add image upload support using Azure Blob Storage for listing and profile photos",
        "Introduce push notifications for new messages, offer updates, and price drops",
        "Deploy to Azure with a full CI/CD pipeline using GitHub Actions",
        "Add full-text search across listing titles and descriptions using SQL Server Full-Text Search",
        "Implement listing expiry automation as a background job using a hosted service",
        "Build out the admin analytics dashboard with exportable reports across all universities",
      ],
    },
  },

  securevision: {
    icon: "🛡",
    title: "SecureVision",
    status: "In Progress",
    statusClass: "in-progress",
    tagline:
      "Intelligent facial recognition security system for automated authentication and threat detection.",
    description:
      "SecureVision is a real-time facial recognition security system built with computer vision and machine learning. It identifies authorized users from a live camera feed, flags unrecognized faces, and can trigger automated protective actions, aiming to give small setups (home offices, labs, server rooms) enterprise-style access monitoring without expensive hardware.",
    features: [
      "Real-time face detection and recognition from a live webcam feed",
      "Confidence-based authentication, rejecting low-certainty matches",
      "Automatic logging of every detection event with timestamp and snapshot",
      "Configurable alert system for unrecognized faces",
      "Lightweight enough to run continuously on a standard laptop or mini PC",
    ],
    tech: [
      "Python",
      "OpenCV",
      "AI & ML",
      "Computer Vision",
      "face_recognition",
      "NumPy",
    ],
    github: "https://github.com/thabocoolT/SecureVision",
    demo: null,
    docs: {
      architecture:
        "The system follows a three-stage pipeline: capture, recognition, and response. OpenCV pulls frames from the camera feed; each frame is passed through a face-detection model to locate face regions, which are then encoded and compared against a stored database of known face embeddings using the face_recognition library. A confidence threshold decides whether a match counts as authenticated. The response stage is decoupled from recognition so alerts, logging, or future hardware triggers (door locks, notifications) can be added without touching the core detection logic.",
      setup: [
        "Clone the repository: <code>git clone https://github.com/thabocoolT/SecureVision.git</code>",
        "Create and activate a virtual environment: <code>python -m venv venv</code>",
        "Install dependencies: <code>pip install -r requirements.txt</code>",
        "Add reference images of authorized users to the <code>known_faces/</code> folder",
        "Run the app: <code>python main.py</code>",
      ],
      usage:
        "On launch, SecureVision opens the default webcam and begins scanning frames continuously. Recognized faces are outlined in green with the matched name displayed; unrecognized faces are outlined in red and logged to the events file with a timestamped snapshot. Press Q at any time to safely close the camera feed and exit.",
      challenges:
        "The biggest challenge was balancing recognition speed against accuracy on lower-end hardware, since running a full face-recognition model on every frame caused noticeable lag. This was addressed by only running full recognition every few frames and using lightweight detection in between. Lighting conditions also affected accuracy significantly, which pushed the confidence threshold to be tuned carefully to avoid false rejections.",
      future: [
        "Add multi-camera support for monitoring several entry points at once",
        "Integrate with a hardware relay to control physical door locks",
        "Build a small dashboard to review historical detection logs",
        "Explore anti-spoofing checks (e.g. liveness detection) to prevent photo-based bypass",
      ],
    },
  },

  cisco: {
    icon: "🌐",
    title: "Cisco Network Project",
    status: "Completed",
    statusClass: "completed",
    tagline:
      "Secure enterprise network infrastructure designed and simulated in Cisco Packet Tracer.",
    description:
      "This project models a realistic small-to-medium enterprise network: multiple departments, VLAN segmentation, inter-VLAN routing, and basic security hardening, all designed and tested entirely in Cisco Packet Tracer. The goal was to apply systems analysis and networking theory to a network that could plausibly run a real office, rather than a simplified textbook topology.",
    features: [
      "VLAN segmentation separating departments (e.g. HR, Finance, IT) for traffic isolation",
      "Inter-VLAN routing configured on a Layer 3 switch / router",
      "Access control lists (ACLs) restricting traffic between sensitive VLANs",
      "DHCP configured per VLAN for automatic address assignment",
      "Basic switch port security to prevent unauthorized device access",
      "Full topology diagram documenting IP scheme, VLAN map, and device roles",
    ],
    tech: ["Cisco", "Networking", "Security", "Packet Tracer", "VLANs", "ACLs"],
    github: null,
    demo: null,
    docs: {
      architecture:
        "The network is structured around a hierarchical design: a core router connects to a Layer 3 distribution switch, which fans out to access switches serving each department's VLAN. Each VLAN represents a logical department with its own IP subnet, and inter-VLAN routing is handled centrally so departments can reach shared resources (like a server VLAN) while ACLs block traffic between VLANs that shouldn't communicate directly, for example restricting the guest VLAN from reaching the finance VLAN.",
      setup: [
        "Install Cisco Packet Tracer (free for students via the Cisco Networking Academy)",
        "Open the <code>.pkt</code> project file included in the repository",
        "Review the topology diagram to understand VLAN and IP allocation",
        "Click through each device's configuration tab to inspect VLAN, routing, and ACL settings",
        "Use Simulation Mode to trace packets across VLANs and verify routing/ACL behaviour",
      ],
      usage:
        "Open the project file in Packet Tracer and switch to Simulation Mode to test connectivity. Sending a ping from a PC in one VLAN to a PC in another demonstrates inter-VLAN routing in action, while attempting traffic between restricted VLANs (per the ACL rules) demonstrates that the security policy is enforced. Each device's terminal can also be opened directly to inspect its running configuration.",
      challenges:
        "Getting inter-VLAN routing and ACLs to coexist correctly was the trickiest part, since overly broad ACL rules ended up blocking legitimate DHCP and routing traffic. This required carefully ordering ACL statements and testing each rule in isolation with Packet Tracer's simulation tools before combining them. Subnetting the IP scheme cleanly across departments without wasting address space also took several redesigns.",
      future: [
        "Add a simulated VPN connection for secure remote access",
        "Introduce redundant links with spanning tree protocol for failover",
        "Simulate a firewall device for perimeter security between the network and the internet",
        "Document the configuration as a reusable template for smaller offices",
      ],
    },
  },

  saferide: {
    icon: "🗄",
    title: "SafeRide Transport DB",
    status: "Completed",
    statusClass: "completed",
    tagline:
      "Relational database system for SafeRide Transport Services built with Oracle SQL Developer.",
    description:
      "SafeRide Transport DB is a complete relational database designed to support the day-to-day operations of a transport service: managing drivers, vehicles, customers, bookings, and trip records. The project covers the full database lifecycle, from requirements analysis and ER modelling through to normalized schema design, implementation, and query development in Oracle SQL Developer.",
    features: [
      "Fully normalized schema (3NF) covering drivers, vehicles, customers, bookings, and trips",
      "Entity-Relationship Diagram (ERD) documenting all entities and relationships",
      "Referential integrity enforced through primary and foreign key constraints",
      "Stored procedures and functions for common operations (e.g. booking creation, fare calculation)",
      "Advanced SQL queries for reporting: driver performance, revenue by route, booking trends",
      "Triggers to maintain data consistency (e.g. auto-updating vehicle availability)",
    ],
    tech: ["Oracle SQL", "ERD", "DB Design", "SQL", "PL/SQL", "Normalization"],
    github: "https://github.com/thabocoolT/SafeRide-Transport-DBMS",
    demo: null,
    docs: {
      architecture:
        "The database is modelled around five core entities: Drivers, Vehicles, Customers, Bookings, and Trips, connected through foreign-key relationships that mirror how a real transport booking flows: a customer creates a booking, a booking is assigned a driver and vehicle, and a completed booking becomes a trip record. The schema was normalized to third normal form (3NF) to eliminate redundancy, with stored procedures encapsulating business logic like fare calculation so the same rules apply consistently regardless of which application calls the database.",
      setup: [
        "Install Oracle Database (Express Edition) and Oracle SQL Developer",
        "Clone the repository: <code>git clone https://github.com/thabocoolT/SafeRide-Transport-DBMS.git</code>",
        "Open SQL Developer and connect to your local Oracle instance",
        "Run the schema creation script (<code>schema.sql</code>) to build all tables and constraints",
        "Run the seed data script (<code>seed_data.sql</code>) to populate sample drivers, vehicles, and bookings",
      ],
      usage:
        "Once the schema and seed data are loaded, the included query scripts can be run directly in SQL Developer to explore the system: creating a new booking, calculating a trip fare through the stored procedure, or generating reports such as monthly revenue per route or top-performing drivers. The ERD included in the repository is a useful reference for understanding how each query traverses the relationships between tables.",
      challenges:
        "The hardest part was getting the normalization right without overcomplicating the schema; an early version had too many join tables and made simple queries unnecessarily slow. Simplifying the relationships while still avoiding data duplication took a few redesign passes. Writing the fare-calculation stored procedure also required careful handling of edge cases like cancelled bookings and partial trips so reports stayed accurate.",
      future: [
        "Add a reporting view layer for dashboards (e.g. integrate with Power BI)",
        "Introduce a driver ratings table to track service quality over time",
        "Add table partitioning for the trips table as historical data grows",
        "Build a lightweight front-end to interact with the database without writing raw SQL",
      ],
    },
  },

  aiassistant: {
    icon: "🤖",
    title: "Windows AI Assistant",
    status: "In Progress",
    statusClass: "in-progress",
    tagline:
      "AI-powered desktop voice assistant for task automation and productivity.",
    description:
      "Windows AI Assistant is a voice-activated desktop assistant that listens for spoken commands and uses AI to interpret intent and carry out tasks: opening applications, searching the web, summarizing text, and automating repetitive actions. It's built to feel like a lightweight, personal alternative to built-in assistants, with room to plug in custom skills.",
    features: [
      "Voice command recognition using speech-to-text",
      "Natural language understanding powered by the OpenAI API",
      "Task automation: opening apps, controlling media, searching the web",
      "Text summarization and quick Q&A on demand",
      "Modular skill system so new commands can be added without touching core logic",
    ],
    tech: [
      "Python",
      "AI",
      "Automation",
      "OpenAI API",
      "Speech Recognition",
      "pyttsx3",
    ],
    github: null,
    demo: null,
    docs: {
      architecture:
        "The assistant runs a continuous listen-transcribe-interpret-act loop. Audio is captured and converted to text via a speech-recognition library, the transcribed text is sent to the OpenAI API to classify intent and extract parameters, and the result is routed to the matching skill handler, a small Python function responsible for one task (opening an app, fetching a summary, and so on). This modular skill design means new capabilities can be added as standalone functions registered with the dispatcher, without modifying the listening or interpretation logic.",
      setup: [
        "Clone the repository and navigate into the project folder",
        "Create a virtual environment and activate it",
        "Install dependencies: <code>pip install -r requirements.txt</code>",
        "Add your OpenAI API key to a <code>.env</code> file as <code>OPENAI_API_KEY=your_key_here</code>",
        "Run the assistant: <code>python assistant.py</code>",
      ],
      usage:
        "Once running, the assistant listens passively for a wake phrase. After being activated, it accepts a spoken command, for example asking it to open an application, search for information, or summarize a block of clipboard text, and responds both with synthesized speech and an on-screen confirmation of the action taken.",
      challenges:
        "Reliable wake-word detection without excessive false triggers was the main early hurdle, since background noise frequently activated the assistant unintentionally. Tuning the sensitivity and adding a short confirmation chime helped considerably. Latency from the AI API call was also noticeable during conversational commands, which led to adding local fallback handling for simple, frequently used commands so they don't depend on a network round-trip.",
      future: [
        "Add offline command handling for core actions to reduce API dependency",
        "Build a small settings UI instead of editing config files directly",
        "Support custom user-defined skills via a plugin folder",
        "Add multi-turn conversation memory for follow-up commands",
      ],
    },
  },
};

const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModal");

const modalStatus = document.getElementById("modalStatus");
const modalTitle = document.getElementById("modalTitle");
const modalTagline = document.getElementById("modalTagline");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
const modalLinks = document.getElementById("modalLinks");

const docArchitecture = document.getElementById("docArchitecture");
const docSetup = document.getElementById("docSetup");
const docUsage = document.getElementById("docUsage");
const docChallenges = document.getElementById("docChallenges");
const docFuture = document.getElementById("docFuture");

function populateModal(key) {
  const data = projectData[key];
  if (!data) return;

  modalStatus.textContent = data.status;
  modalStatus.className = "modal-status " + data.statusClass;
  modalTitle.textContent = data.icon + " " + data.title;
  modalTagline.textContent = data.tagline;
  modalDescription.textContent = data.description;

  modalFeatures.innerHTML = "";
  data.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  modalTech.innerHTML = "";
  data.tech.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    modalTech.appendChild(span);
  });

  modalLinks.innerHTML = "";
  if (data.github) {
    const a = document.createElement("a");
    a.href = data.github;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "modal-link-btn modal-link-primary";
    a.innerHTML = '<i class="fa-brands fa-github"></i> View on GitHub';
    modalLinks.appendChild(a);
  }
  if (data.demo) {
    const a = document.createElement("a");
    a.href = data.demo;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "modal-link-btn modal-link-secondary";
    a.innerHTML =
      '<i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo';
    modalLinks.appendChild(a);
  }

  docArchitecture.textContent = data.docs.architecture;

  docSetup.innerHTML = "";
  data.docs.setup.forEach((step) => {
    const li = document.createElement("li");
    li.innerHTML = step;
    docSetup.appendChild(li);
  });

  docUsage.textContent = data.docs.usage;
  docChallenges.textContent = data.docs.challenges;

  docFuture.innerHTML = "";
  data.docs.future.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    docFuture.appendChild(li);
  });
}

function openProjectModal(key) {
  populateModal(key);

  // Reset to overview tab every time the modal opens
  document
    .querySelectorAll(".modal-tab")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".modal-panel")
    .forEach((panel) => panel.classList.remove("active"));
  document
    .querySelector('.modal-tab[data-tab="overview"]')
    .classList.add("active");
  document.getElementById("panelOverview").classList.add("active");

  projectModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("show");
  document.body.style.overflow = "";
}

document.querySelectorAll(".view-project-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const key = btn.getAttribute("data-project");
    openProjectModal(key);
  });
});

closeModalBtn.addEventListener("click", closeProjectModal);

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProjectModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("show")) {
    closeProjectModal();
  }
});

document.querySelectorAll(".modal-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".modal-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".modal-panel")
      .forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    const panelId =
      tab.getAttribute("data-tab") === "overview"
        ? "panelOverview"
        : "panelDocs";
    document.getElementById(panelId).classList.add("active");
  });
});
