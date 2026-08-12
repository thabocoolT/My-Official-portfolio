// =====================================================
// PROJECT DATA — single source of truth for the featured
// slider, the projects grid, and the project modal.
// =====================================================
//
// To feature a project higher in the "Featured Projects" slider,
// give it a more recent `date` (YYYY-MM-DD). The slider always
// sorts newest first automatically.
//
// To add a demo video, paste the YouTube video ID into `videoId`
// (the part after "v=" in a YouTube URL). Leave it as "" until
// you have one — the UI shows a "coming soon" placeholder instead.

const projectData = {
  varsitytrade: {
    icon: "🎓",
    title: "VarsityTrade",
    status: "In Progress",
    statusClass: "in-progress",
    date: "2026-08-01",
    image: "assets/VT_Logo.png",
    logoFit: true,
    videoId: "",
    tagline: "Built for Students, by Students",
    cardBlurb:
      "A full-stack, campus-locked marketplace letting South African students buy, sell and trade safely within their own university — built end-to-end on ASP.NET Core with a 22-table normalised database and JWT auth.",
    description: [
      "VarsityTrade is a full-stack marketplace web application built specifically for South African university students. It enables students to buy, sell and trade items safely within their own campus community.",
      "Every listing on the platform is locked to the seller's registered university, meaning buyers can only ever see items from students at their own institution.",
    ],
    features: [
      "Campus-Locked Marketplace — every listing is locked to the seller's university, buyers only see listings from their own campus",
      "Dual-role user system — all users register as Buyer, Seller profile activated on demand, one account, two roles",
      "JWT Authentication — stateless API auth with access tokens (60 min) and refresh token rotation (7 days)",
      "Listing management — full CRUD: create, edit, soft delete, view count tracking, expiry, featured flag",
      "Category hierarchy — self-referencing categories with subcategories (e.g. Electronics → Laptops & Computers)",
      "Structured trade offers — cash, trade, or combined offers with OfferItems for itemised trades",
      "In-app messaging — conversation threads per listing between buyer and seller with read receipts",
      "Review system — reviews gated by completed transaction, no transaction, no review, prevents fake reviews",
      "Admin panel — user management, listing moderation, reports queue, platform stats, hero banner manager",
      "Hero banner management — admin controls the home page auto-swiping banner: featured listings, reviews, and news slides",
      "Soft delete strategy — users, listings, reviews, and conversations are never hard deleted, DeletedAt preserved for audits",
      "ASP.NET MVC frontend — server-rendered Razor pages built from 31 high-fidelity wireframes",
    ],
    tech: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "REST APIs",
      "SQL Server",
      "JWT Auth",
      "OpenAPI",
    ],
    github: "https://github.com/thabocoolT/VarsityTrade",
    docs: {
      architecture:
        "VarsityTrade is built on a clean layered architecture, a pattern widely used in professional .NET applications. The solution is split into four separate projects, each with a single responsibility. Dependencies flow strictly inward: nothing in Core knows about Infrastructure or the API, and nothing in Infrastructure knows about the API. This separation makes the codebase testable, maintainable, and easy to scale.",
      setup: [
        "Full setup instructions will be published here once the project reaches Phase 7 — Deployment. The backend API, frontend, and mobile app will each have their own setup steps.",
      ],
      usage:
        "On launch the API starts and the startup seeder automatically checks and populates all lookup tables — 21 universities, 33 categories, 4 item conditions, 6 listing statuses, and 5 system settings — if they are not already present. No manual database setup is required beyond running the migration. From Swagger or any API client, a new student registers by providing their name, email, password, university, and location. The platform issues a JWT access token valid for 60 minutes and a refresh token valid for 7 days. Once registered, a student browses listings locked to their university and, when ready to sell, activates a seller profile in one request, giving their shop a name and setting pickup preferences.",
      challenges:
        "The trickiest part so far has been designing the category hierarchy and offer structure so they stay flexible without becoming overcomplicated, since trade offers, cash offers, and combined offers all needed to share the same underlying data model without special-casing each one.",
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

  aiassistant: {
    icon: "🤖",
    title: "SashAI Windows Assistant",
    status: "Completed",
    statusClass: "completed",
    date: "2026-05-15",
    image: "assets/project-4.png",
    videoId: "",
    tagline:
      "AI-powered desktop voice assistant for task automation and productivity.",
    cardBlurb:
      "AI-powered desktop voice assistant designed to automate tasks, improve productivity, and integrate intelligent system interactions.",
    description:
      "SashAI is a voice-activated desktop assistant that listens for spoken commands and uses AI to interpret intent and carry out tasks: opening applications, searching the web, summarizing text, and automating repetitive actions. It's built to feel like a lightweight, personal alternative to built-in assistants, with room to plug in custom skills.",
    features: [
      "Voice command recognition using speech-to-text",
      "Natural language understanding powered by Llama 3 via the Groq API",
      "Task automation: opening apps, controlling media, searching the web",
      "Text summarization and quick Q&A on demand",
      "Modular skill system so new commands can be added without touching core logic",
    ],
    tech: [
      "Python",
      "AI/ML",
      "Automation",
      "Groq API",
      "Llama 3",
      "SpeechRecognition",
    ],
    github: "https://github.com/thabocoolT/Windows-AI-Assistant",
    docs: {
      architecture:
        "The assistant runs a continuous listen-transcribe-interpret-act loop. Audio is captured and converted to text via a speech-recognition library, the transcribed text is sent to Llama 3 through the Groq API to classify intent and extract parameters, and the result is routed to the matching skill handler, a small Python function responsible for one task. This modular skill design means new capabilities can be added as standalone functions registered with the dispatcher, without modifying the listening or interpretation logic.",
      setup: [
        "Clone the repository and navigate into the project folder",
        "Create a virtual environment and activate it",
        "Install dependencies: <code>pip install -r requirements.txt</code>",
        "Add your Groq API key to a <code>.env</code> file as <code>GROQ_API_KEY=your_key_here</code>",
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

  securevision: {
    icon: "🛡",
    title: "SecureVision",
    status: "In Progress",
    statusClass: "in-progress",
    date: "2025-11-10",
    image: "assets/project-1.png",
    videoId: "",
    tagline:
      "Intelligent facial recognition security system for automated authentication and threat detection.",
    cardBlurb:
      "Intelligent facial recognition security system using computer vision and machine learning for secure authentication and automatic system protection.",
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
    date: "2025-06-20",
    image: "assets/project-2.png",
    videoId: "",
    tagline:
      "Secure enterprise network infrastructure designed and simulated in Cisco Packet Tracer.",
    cardBlurb:
      "Designed and simulated a secure enterprise network infrastructure using Cisco Packet Tracer with VLANs, routing, and security implementation.",
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
    docs: {
      architecture:
        "The network is structured around a hierarchical design: a core router connects to a Layer 3 distribution switch, which fans out to access switches serving each department's VLAN. Each VLAN represents a logical department with its own IP subnet, and inter-VLAN routing is handled centrally so departments can reach shared resources while ACLs block traffic between VLANs that shouldn't communicate directly.",
      setup: [
        "Install Cisco Packet Tracer (free for students via the Cisco Networking Academy)",
        "Open the <code>.pkt</code> project file included in the repository",
        "Review the topology diagram to understand VLAN and IP allocation",
        "Click through each device's configuration tab to inspect VLAN, routing, and ACL settings",
        "Use Simulation Mode to trace packets across VLANs and verify routing/ACL behaviour",
      ],
      usage:
        "Open the project file in Packet Tracer and switch to Simulation Mode to test connectivity. Sending a ping from a PC in one VLAN to a PC in another demonstrates inter-VLAN routing in action, while attempting traffic between restricted VLANs demonstrates that the security policy is enforced.",
      challenges:
        "Getting inter-VLAN routing and ACLs to coexist correctly was the trickiest part, since overly broad ACL rules ended up blocking legitimate DHCP and routing traffic. This required carefully ordering ACL statements and testing each rule in isolation before combining them.",
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
    date: "2025-03-05",
    image: "assets/project-3.png",
    videoId: "",
    tagline:
      "Relational database system for SafeRide Transport Services built with Oracle SQL Developer.",
    cardBlurb:
      "Designed and implemented a relational database system for SafeRide Transport Services using Oracle SQL Developer and advanced SQL concepts.",
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
    docs: {
      architecture:
        "The database is modelled around five core entities: Drivers, Vehicles, Customers, Bookings, and Trips, connected through foreign-key relationships that mirror how a real transport booking flows. The schema was normalized to third normal form (3NF) to eliminate redundancy, with stored procedures encapsulating business logic like fare calculation so the same rules apply consistently regardless of which application calls the database.",
      setup: [
        "Install Oracle Database (Express Edition) and Oracle SQL Developer",
        "Clone the repository: <code>git clone https://github.com/thabocoolT/SafeRide-Transport-DBMS.git</code>",
        "Open SQL Developer and connect to your local Oracle instance",
        "Run the schema creation script (<code>schema.sql</code>) to build all tables and constraints",
        "Run the seed data script (<code>seed_data.sql</code>) to populate sample drivers, vehicles, and bookings",
      ],
      usage:
        "Once the schema and seed data are loaded, the included query scripts can be run directly in SQL Developer to explore the system: creating a new booking, calculating a trip fare through the stored procedure, or generating reports such as monthly revenue per route or top-performing drivers.",
      challenges:
        "The hardest part was getting the normalization right without overcomplicating the schema; an early version had too many join tables and made simple queries unnecessarily slow. Writing the fare-calculation stored procedure also required careful handling of edge cases like cancelled bookings and partial trips so reports stayed accurate.",
      future: [
        "Add a reporting view layer for dashboards (e.g. integrate with Power BI)",
        "Introduce a driver ratings table to track service quality over time",
        "Add table partitioning for the trips table as historical data grows",
        "Build a lightweight front-end to interact with the database without writing raw SQL",
      ],
    },
  },
};

// Fixed display order for the main projects grid (independent of date,
// so you keep control over how the full portfolio grid is arranged).
const PROJECT_ORDER = [
  "varsitytrade",
  "aiassistant",
  "securevision",
  "cisco",
  "saferide",
];

// =====================================================
// SHARED MARKUP HELPERS
// =====================================================

function techTagsMarkup(tech) {
  return tech.map((t) => `<span>${t}</span>`).join("");
}

function projectButtonsMarkup(key, github) {
  const githubBtn = github
    ? `<a href="${github}" class="project-btn secondary-btn" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub">GitHub</a>`
    : "";
  return `
    <div class="project-buttons">
      <a href="#" class="project-btn primary-btn view-project-btn" data-project="${key}">View Project</a>
      ${githubBtn}
    </div>`;
}

// YouTube embed if a videoId is set, otherwise a "coming soon" placeholder.
function mediaMarkup(project, mediaClass) {
  if (project.videoId) {
    return `
      <div class="${mediaClass} has-video">
        <iframe
          src="https://www.youtube.com/embed/${project.videoId}"
          title="${project.title} demo video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>`;
  }
  const fitClass = project.logoFit ? " logo-fit" : "";
  return `
    <div class="${mediaClass}">
      <img src="${project.image}" alt="${project.title}" class="${fitClass.trim()}" loading="lazy" />
      <span class="demo-pending-badge"><i class="fa-solid fa-video"></i> Demo video coming soon</span>
    </div>`;
}

function gridCardMarkup(key, p) {
  return `
    <div class="project-card reveal">
      <span class="project-status ${p.statusClass}">${p.status}</span>
      ${mediaMarkup(p, "project-image")}
      <div class="project-content">
        <h3>${p.icon} ${p.title}</h3>
        <p>${p.cardBlurb}</p>
        <div class="project-tech">${techTagsMarkup(p.tech)}</div>
        ${projectButtonsMarkup(key, p.github)}
      </div>
    </div>`;
}

function featuredCardMarkup(key, p) {
  return `
    <article class="featured-card reveal">
      <span class="project-status ${p.statusClass}">${p.status}</span>
      ${mediaMarkup(p, "featured-media")}
      <div class="featured-content">
        <h3>${p.icon} ${p.title}</h3>
        <p>${p.cardBlurb}</p>
        <div class="project-tech">${techTagsMarkup(p.tech)}</div>
        ${projectButtonsMarkup(key, p.github)}
      </div>
    </article>`;
}

// Wires "View Project" buttons found inside a freshly-rendered container
// to open the shared project modal.
function wireViewProjectButtons(container) {
  container.querySelectorAll(".view-project-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(btn.dataset.project);
    });
  });
}

// =====================================================
// PROJECTS GRID — rendered from projectData
// =====================================================

function renderProjectGrid() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = PROJECT_ORDER.map((key) =>
    gridCardMarkup(key, projectData[key]),
  ).join("");
  wireViewProjectButtons(grid);
}

// =====================================================
// FEATURED PROJECTS — single-card swipeable slider,
// sorted by `date` so the newest project always leads.
// =====================================================

function renderFeatured() {
  const section = document.getElementById("featured");
  const viewport = document.getElementById("featuredViewport");
  const track = document.getElementById("featuredTrack");
  const dots = document.getElementById("featuredDots");
  if (!section || !viewport || !track) return;

  const ordered = Object.entries(projectData).sort(
    (a, b) => new Date(b[1].date) - new Date(a[1].date),
  );

  track.innerHTML = ordered
    .map(([key, p]) => featuredCardMarkup(key, p))
    .join("");
  wireViewProjectButtons(track);

  initSingleCardSlider({
    viewport,
    track,
    dotsContainer: dots,
    prevBtn: section.querySelector(".featured-arrow.left-arrow"),
    nextBtn: section.querySelector(".featured-arrow.right-arrow"),
  });
}

// Generic single-card-at-a-time slider: native scroll-snap for swipe,
// plus arrow buttons and dot indicators kept in sync with scroll position.
function initSingleCardSlider({
  viewport,
  track,
  dotsContainer,
  prevBtn,
  nextBtn,
}) {
  const cardCount = track.children.length;
  if (!cardCount) return;

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < cardCount; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "featured-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Go to project ${i + 1}`);
      dot.addEventListener("click", () => scrollToIndex(i));
      dotsContainer.appendChild(dot);
    }
  }

  function currentIndex() {
    const width = viewport.clientWidth || 1;
    return Math.round(viewport.scrollLeft / width);
  }

  function updateDots() {
    if (!dotsContainer) return;
    const idx = currentIndex();
    dotsContainer.querySelectorAll(".featured-dot").forEach((d, i) => {
      d.classList.toggle("active", i === idx);
    });
  }

  function scrollToIndex(i) {
    const clamped = Math.max(0, Math.min(cardCount - 1, i));
    viewport.scrollTo({
      left: clamped * viewport.clientWidth,
      behavior: "smooth",
    });
  }

  prevBtn?.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
  nextBtn?.addEventListener("click", () => scrollToIndex(currentIndex() + 1));

  let scrollDebounce;
  viewport.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(updateDots, 80);
    },
    { passive: true },
  );

  window.addEventListener("resize", () => scrollToIndex(currentIndex()));
}

// =====================================================
// PROJECT MODAL — Overview / Demo / Documentation tabs
// =====================================================

const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModal");

const modalStatus = document.getElementById("modalStatus");
const modalTitle = document.getElementById("modalTitle");
const modalTagline = document.getElementById("modalTagline");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
const modalLinks = document.getElementById("modalLinks");
const modalVideoWrap = document.getElementById("modalVideoWrap");

const docArchitecture = document.getElementById("docArchitecture");
const docSetup = document.getElementById("docSetup");
const docUsage = document.getElementById("docUsage");
const docChallenges = document.getElementById("docChallenges");
const docFuture = document.getElementById("docFuture");

const MODAL_TAB_PANELS = {
  overview: "panelOverview",
  demo: "panelDemo",
  docs: "panelDocs",
};

function fillList(el, items, asHTML) {
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    if (asHTML) li.innerHTML = item;
    else li.textContent = item;
    el.appendChild(li);
  });
}

function populateModal(key) {
  const data = projectData[key];
  if (!data) return;

  modalStatus.textContent = data.status;
  modalStatus.className = "modal-status " + data.statusClass;
  modalTitle.textContent = `${data.icon} ${data.title}`;
  modalTagline.textContent = data.tagline;
  modalDescription.textContent = Array.isArray(data.description)
    ? data.description.join(" ")
    : data.description;

  fillList(modalFeatures, data.features, false);

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

  // Demo tab
  modalVideoWrap.innerHTML = data.videoId
    ? `<div class="modal-video-frame">
         <iframe
           src="https://www.youtube.com/embed/${data.videoId}"
           title="${data.title} demo video"
           loading="lazy"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
         ></iframe>
       </div>`
    : `<div class="video-placeholder">
         <i class="fa-solid fa-video"></i>
         <p>Demo video coming soon.</p>
       </div>`;

  // Documentation tab
  docArchitecture.textContent = Array.isArray(data.docs.architecture)
    ? data.docs.architecture.join(" ")
    : data.docs.architecture;
  fillList(docSetup, data.docs.setup, true);
  docUsage.textContent = Array.isArray(data.docs.usage)
    ? data.docs.usage.join(" ")
    : data.docs.usage;
  docChallenges.textContent = data.docs.challenges;
  fillList(docFuture, data.docs.future, false);
}

function setActiveModalTab(tabName) {
  document.querySelectorAll(".modal-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".modal-panel").forEach((panel) => {
    panel.classList.remove("active");
  });
  document.getElementById(MODAL_TAB_PANELS[tabName]).classList.add("active");
}

function openProjectModal(key) {
  populateModal(key);
  setActiveModalTab("overview");
  projectModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("show");
  document.body.style.overflow = "";
}

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
  tab.addEventListener("click", () => setActiveModalTab(tab.dataset.tab));
});

// =====================================================
// RENDER PROJECTS + FEATURED before anything below this
// point measures page height or observes ".reveal" cards.
// =====================================================

renderProjectGrid();
renderFeatured();

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

  // Total scrollable height — layers reach full reveal at the contact
  // section. Recalculated on resize since content height can change.
  let total = Math.max(document.body.scrollHeight - window.innerHeight, 1);

  let ticking = false;

  function applyParallax() {
    const y = window.scrollY;
    const p = Math.min(y / total, 1); // 0 = top, 1 = bottom

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

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      total = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      applyParallax();
    }, 150);
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

  applyParallax();
})();

// ================= ACTIVE NAVIGATION =================//
const sections = document.querySelectorAll("section");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      document.querySelector(".nav-links a.active")?.classList.remove("active");
      document
        .querySelector(`.nav-links a[href="#${id}"]`)
        ?.classList.add("active");
    });
  },
  { threshold: 0.5 },
);

sections.forEach((section) => navObserver.observe(section));

// NAVBAR SHADOW ON SCROLL
const navbar = document.querySelector(".navbar");
let navScrollTicking = false;

function updateScrollEffects() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  navScrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!navScrollTicking) {
      requestAnimationFrame(updateScrollEffects);
      navScrollTicking = true;
    }
  },
  { passive: true },
);

//======================BURGER MENU========================//
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

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
  viewMoreBtn.textContent = aboutRight.classList.contains("show")
    ? "View Less"
    : "View More";
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

  setTimeout(typeEffect, deleting ? 45 : 80);
}

typeEffect();

//================ SKILLS CONVEYOR CAROUSEL ================

const skillsSlider = document.getElementById("skillsSlider");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

// Pause on card hover — CSS :has() handles it too, but JS ensures broader support
skillsSlider.addEventListener("mouseenter", () =>
  skillsSlider.classList.add("paused"),
);
skillsSlider.addEventListener("mouseleave", () =>
  skillsSlider.classList.remove("paused"),
);

// Arrow buttons: nudge the animation offset manually
let nudgeOffset = 0;
const NUDGE = 264; // card width + gap

function nudge(direction) {
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
// Runs after renderProjectGrid()/renderFeatured() above, so dynamically
// created project and featured cards are observed too.

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => revealObserver.observe(element));

//================ CONTACT FORM ================

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
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

//================ THEME TOGGLE ================

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

function updateThemeIcon() {
  themeIcon.className = document.body.classList.contains("dark-mode")
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
}

const savedTheme = localStorage.getItem("theme");
document.body.classList.toggle("dark-mode", savedTheme === "dark");
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light",
  );
  updateThemeIcon();
});

// =====================================================
// MOBILE: Scroll-dot indicators + swipe hints
// (skills & projects rows — the Featured slider has its
// own dots/arrows already, wired in initSingleCardSlider)
// =====================================================

function isMobile() {
  return window.innerWidth <= 768;
}

function injectScrollDots(containerSelector, rowSelector, dotClass) {
  if (!isMobile()) return;
  const container = document.querySelector(containerSelector);
  const row = document.querySelector(rowSelector);
  if (!container || !row) return;

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

  container.appendChild(wrap);

  if (row.dataset.initialized) return;
  row.dataset.initialized = "true";

  row.addEventListener(
    "scroll",
    () => {
      if (!isMobile()) return;
      const dotEls = wrap.querySelectorAll("span");
      const itemW = items[0].offsetWidth + 10;
      const active = Math.round(row.scrollLeft / itemW);
      dotEls.forEach((d, i) => {
        const isActive = i === active;
        d.style.background = isActive
          ? "var(--accent,#00eaff)"
          : "rgba(96,165,250,0.3)";
        d.style.width = isActive ? "14px" : "5px";
      });
    },
    { passive: true },
  );
}

function addSwipeHint(containerSelector, label) {
  if (!isMobile()) return;
  const container = document.querySelector(containerSelector);
  if (!container || container.querySelector(".swipe-hint")) return;
  const hint = document.createElement("p");
  hint.className = "swipe-hint";
  hint.textContent = `⟵  ${label}  ⟶`;
  hint.style.cssText =
    "font-size:10px;color:var(--soft-text,#6b7280);text-align:center;margin-top:6px;letter-spacing:0.5px;padding-right:20px;";
  container.appendChild(hint);
}

function initMobileEnhancements() {
  if (!isMobile()) return;
  injectScrollDots(".skills-container", "#skillsSlider", "skills-dots");
  addSwipeHint(".skills-container", "swipe to explore all skills");
  injectScrollDots(".projects-container", "#projectsGrid", "projects-dots");
  addSwipeHint(".projects-container", "swipe to browse all projects");
}

window.addEventListener("load", initMobileEnhancements);
window.addEventListener("resize", () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(initMobileEnhancements, 200);
});
