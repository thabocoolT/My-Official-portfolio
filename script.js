// =====================================================
// PROJECT DATA — single source of truth for the flagship
// card, the projects grid, the filters and the project modal.
// =====================================================
//
// Fields per project
//   status / statusClass : "Completed" (completed), "Active Development" /
//                          "In Development" (in-progress), "Prototype" (planning)
//   categories           : any of "web" "dotnet" "python" "database" "ai" "networking"
//                          (drives the filter buttons in index.html)
//   metrics              : optional [{ value, label }] — only verifiable numbers
//   problem / solution   : optional short strings (Overview tab cards)
//   learned              : optional array of strings (Documentation tab)
//   screenshots          : [{ src, caption }] — leave [] until real images exist;
//                          the Screenshots block stays hidden while it is empty
//   image                : card image path, or null to show an icon tile
//   live                 : optional live-site URL
//   videoId              : YouTube video ID, or "" for none
//
// VARSITY TRADE SCREENSHOT PLAN (add real captures, then fill the array):
//   assets/screenshots/varsitytrade/01-landing.png
//   02-login-register, 03-buyer-dashboard, 04-seller-dashboard,
//   05-create-listing, 06-listing-details, 07-messaging, 08-offers,
//   09-admin-dashboard, 10-database-erd, 11-swagger-api
//   e.g. { src: "assets/screenshots/varsitytrade/01-landing.png", caption: "Landing page" }

const FLAGSHIP_KEY = "varsitytrade";

const projectData = {
  varsitytrade: {
    icon: "🎓",
    title: "VarsityTrade",
    status: "Active Development",
    statusClass: "in-progress",
    categories: ["web", "dotnet", "database"],
    image: "assets/VT_Logo.png",
    logoFit: true,
    videoId: "",
    tagline: "Built for Students, by Students",
    cardBlurb:
      "A full-stack, campus-locked marketplace letting South African students buy, sell and trade safely within their own university — built end-to-end on ASP.NET Core with a 22-table normalised database and JWT auth.",
    metrics: [
      { value: "22", label: "Normalised DB tables" },
      { value: "4", label: "Layered solution projects" },
      { value: "31", label: "UI wireframes" },
      { value: "JWT", label: "Access + refresh tokens" },
    ],
    description: [
      "VarsityTrade is a full-stack marketplace web application built specifically for South African university students. It enables students to buy, sell and trade items safely within their own campus community.",
      "Every listing on the platform is locked to the seller's registered university, meaning buyers can only ever see items from students at their own institution.",
    ],
    problem:
      "Students who want to buy, sell or trade second-hand items need a marketplace limited to people from their own university, with structured offers and reviews that can be trusted.",
    solution:
      "A campus-locked marketplace where every listing is tied to the seller's university, backed by a REST API with JWT authentication, structured cash, trade and combined offers, and reviews gated by completed transactions.",
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
      "ASP.NET MVC frontend — 31 high-fidelity wireframes designed for server-rendered Razor pages (frontend build in progress)",
    ],
    tech: [
      "C#",
      "ASP.NET Core",
      ".NET",
      "EF Core",
      "SQL Server",
      "REST APIs",
      "ASP.NET Identity",
      "JWT Auth",
      "OpenAPI",
    ],
    github: "https://github.com/thabocoolT/VarsityTrade",
    screenshots: [],
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
      learned: [
        "Designing a normalised schema where cash, trade and combined offers share one data model",
        "Structuring a solution into separate projects with dependencies flowing inward",
        "Using soft deletes to keep an audit trail instead of hard-deleting data",
      ],
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
    categories: ["python", "ai"],
    image: "assets/project-4.png",
    videoId: "",
    tagline:
      "AI-powered desktop voice assistant for task automation and productivity.",
    cardBlurb:
      "AI-powered desktop voice assistant designed to automate tasks, improve productivity, and integrate intelligent system interactions.",
    problem:
      "Repetitive desktop tasks such as opening applications, searching the web and summarising text take manual effort, and built-in assistants are hard to extend.",
    solution:
      "A lightweight, voice-activated assistant that uses Llama 3 (via the Groq API) to interpret spoken commands and route them to small, pluggable skill functions.",
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
    screenshots: [],
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
      learned: [
        "Tuning wake-word sensitivity so background noise doesn't trigger the assistant",
        "Handling frequent simple commands locally to avoid API latency",
      ],
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
    status: "In Development",
    statusClass: "in-progress",
    categories: ["python", "ai"],
    image: "assets/project-1.png",
    videoId: "",
    tagline:
      "Intelligent facial recognition security system for automated authentication and threat detection.",
    cardBlurb:
      "Intelligent facial recognition security system using computer vision and machine learning for secure authentication and automatic system protection.",
    problem:
      "Small setups such as home offices, labs and server rooms rarely have enterprise-style access monitoring without expensive hardware.",
    solution:
      "A real-time facial recognition system that identifies authorised users from a live camera feed, flags unrecognised faces and logs every detection event.",
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
    screenshots: [],
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
      learned: [
        "Balancing recognition speed against accuracy on lower-end hardware",
        "Tuning confidence thresholds to cope with changing lighting conditions",
      ],
      future: [
        "Add multi-camera support for monitoring several entry points at once",
        "Integrate with a hardware relay to control physical door locks",
        "Build a small dashboard to review historical detection logs",
        "Explore anti-spoofing checks (e.g. liveness detection) to prevent photo-based bypass",
      ],
    },
  },

  saferide: {
    icon: "🗄",
    title: "SafeRide Transport DB",
    status: "Completed",
    statusClass: "completed",
    categories: ["database"],
    image: "assets/project-3.png",
    videoId: "",
    tagline:
      "Relational database system for SafeRide Transport Services built with Oracle SQL Developer.",
    cardBlurb:
      "Designed and implemented a relational database system for SafeRide Transport Services using Oracle SQL Developer and advanced SQL concepts.",
    metrics: [
      { value: "5", label: "Core entities" },
      { value: "3NF", label: "Normalised schema" },
    ],
    problem:
      "A transport service needs one consistent source of truth for drivers, vehicles, customers, bookings and trip records.",
    solution:
      "A normalised Oracle schema with constraints, stored procedures, triggers and reporting queries covering the full database lifecycle from requirements to implementation.",
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
    screenshots: [],
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
      learned: [
        "Balancing normalisation against query complexity",
        "Handling edge cases such as cancelled bookings and partial trips in stored procedures",
      ],
      future: [
        "Add a reporting view layer for dashboards (e.g. integrate with Power BI)",
        "Introduce a driver ratings table to track service quality over time",
        "Add table partitioning for the trips table as historical data grows",
        "Build a lightweight front-end to interact with the database without writing raw SQL",
      ],
    },
  },

  cisco: {
    icon: "🌐",
    title: "Cisco Network Project",
    status: "Completed",
    statusClass: "completed",
    categories: ["networking"],
    image: "assets/project-2.png",
    videoId: "",
    tagline:
      "Secure enterprise network infrastructure designed and simulated in Cisco Packet Tracer.",
    cardBlurb:
      "Designed and simulated a secure enterprise network infrastructure using Cisco Packet Tracer with VLANs, routing, and security implementation.",
    problem:
      "Textbook topologies are often too simplified to show how a real office network is segmented and secured.",
    solution:
      "A simulated small-to-medium enterprise network with department VLANs, inter-VLAN routing, ACLs, per-VLAN DHCP and basic port security, tested in Packet Tracer.",
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
    screenshots: [],
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
      learned: [
        "Ordering ACL statements and testing each rule in isolation before combining them",
        "Keeping security rules from blocking legitimate DHCP and routing traffic",
      ],
      future: [
        "Add a simulated VPN connection for secure remote access",
        "Introduce redundant links with spanning tree protocol for failover",
        "Simulate a firewall device for perimeter security between the network and the internet",
        "Document the configuration as a reusable template for smaller offices",
      ],
    },
  },

  portfolio: {
    icon: "💻",
    title: "Personal Portfolio Website",
    status: "Completed",
    statusClass: "completed",
    categories: ["web"],
    image: null, // add e.g. "assets/project-portfolio.png" for a real screenshot
    videoId: "",
    tagline:
      "Hand-built portfolio in vanilla HTML, CSS and JavaScript — no frameworks or templates.",
    cardBlurb:
      "Responsive developer portfolio built with vanilla HTML, CSS and JavaScript: glassmorphism UI, light/dark themes, data-driven project cards and modals, and a Formspree-powered contact form.",
    description:
      "This portfolio was built without a template or frontend framework so that every UI effect, from the layered background and glassmorphism cards to the theme switcher and project modal, is written and understood from first principles.",
    features: [
      "Responsive layout for desktop, tablet and mobile",
      "Light and dark themes persisted with Local Storage",
      "Data-driven project cards, filters and modal rendered from one projectData object",
      "Contact form powered by Formspree",
      "Scroll-reveal animations and a layered parallax background",
      "Downloadable CV and links to GitHub and LinkedIn",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Formspree", "Netlify", "Git & GitHub"],
    github: null, // add the repository URL once confirmed
    live: "https://thabo-motau-portfolio.netlify.app/",
    screenshots: [],
    docs: {
      architecture:
        "A static site made of index.html, style.css, mediaquery.css and script.js with no build step. Project content lives in one projectData object in script.js, which renders the flagship card, the filterable projects grid and the project modal, so adding a project means adding one entry.",
      setup: [
        "Download or clone the repository",
        "Open <code>index.html</code> in a browser (no dependencies or build step)",
        "Edit <code>projectData</code> in <code>script.js</code> to change project content",
      ],
      usage:
        "Browse the sections from the navigation, filter projects by category, open any project to see its overview and documentation, and switch between light and dark themes (the choice is remembered in the browser).",
      challenges:
        "Keeping a rich visual style — glassmorphism, a layered background and many animations — smooth across devices without a framework, which is why performance and accessibility remain ongoing areas of improvement.",
      learned: [
        "Building responsive layouts and theme switching without a framework",
        "Structuring reusable JavaScript for data-driven cards and modals",
      ],
      future: [
        "Blog section",
        "Backend-powered contact form",
        "More projects as I build them",
        "Continued accessibility and performance work",
      ],
    },
  },
};

// Fixed display order for the projects grid (the flagship leads).
const PROJECT_ORDER = [
  "varsitytrade",
  "aiassistant",
  "securevision",
  "saferide",
  "cisco",
  "portfolio",
];

// Decorative icon fonts should not be announced by screen readers.
document
  .querySelectorAll('i[class*="fa-"], i[class*="devicon-"]')
  .forEach((icon) => icon.setAttribute("aria-hidden", "true"));

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// =====================================================
// SHARED MARKUP HELPERS
// =====================================================

function techTagsMarkup(tech) {
  return tech.map((t) => `<span>${t}</span>`).join("");
}

function metricsMarkup(metrics) {
  if (!metrics || !metrics.length) return "";
  return `<div class="project-metrics">${metrics
    .map(
      (m) =>
        `<div class="metric"><strong>${m.value}</strong><span>${m.label}</span></div>`,
    )
    .join("")}</div>`;
}

function projectButtonsMarkup(key, p, label) {
  const githubBtn = p.github
    ? `<a href="${p.github}" class="project-btn secondary-btn" target="_blank" rel="noopener noreferrer" aria-label="${p.title} on GitHub">GitHub</a>`
    : "";
  return `
    <div class="project-buttons">
      <button type="button" class="project-btn primary-btn view-project-btn" data-project="${key}" aria-haspopup="dialog" aria-label="${label} for ${p.title}">${label}</button>
      ${githubBtn}
    </div>`;
}

// YouTube embed if a videoId is set, a screenshot if an image exists,
// otherwise an icon tile.
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
  if (project.image) {
    const fitClass = project.logoFit ? "logo-fit" : "";
    return `
      <div class="${mediaClass}">
        <img src="${project.image}" alt="${project.title} project preview" class="${fitClass}" loading="lazy" decoding="async" />
      </div>`;
  }
  return `
    <div class="${mediaClass} media-placeholder" role="img" aria-label="${project.title}">
      <span aria-hidden="true">${project.icon}</span>
    </div>`;
}

function gridCardMarkup(key, p) {
  return `
    <article class="project-card reveal" data-categories="${p.categories.join(" ")}">
      <span class="project-status ${p.statusClass}">${p.status}</span>
      ${mediaMarkup(p, "project-image")}
      <div class="project-content">
        <h3>${p.icon} ${p.title}</h3>
        <p>${p.cardBlurb}</p>
        <div class="project-tech">${techTagsMarkup(p.tech)}</div>
        ${projectButtonsMarkup(key, p, "View Project")}
      </div>
    </article>`;
}

function flagshipMarkup(key, p) {
  return `
    <article class="featured-card flagship-card reveal">
      ${mediaMarkup(p, "featured-media")}
      <div class="featured-content">
        <div class="flagship-meta">
          <span class="flagship-label">Flagship project</span>
          <span class="project-status ${p.statusClass}">${p.status}</span>
        </div>
        <h3>${p.icon} ${p.title}</h3>
        <p class="flagship-tagline">${p.tagline}</p>
        <p>${p.cardBlurb}</p>
        ${metricsMarkup(p.metrics)}
        <div class="project-tech">${techTagsMarkup(p.tech)}</div>
        ${projectButtonsMarkup(key, p, "View Case Study")}
      </div>
    </article>`;
}

// =====================================================
// RENDER — flagship + projects grid
// =====================================================

function renderFlagship() {
  const mount = document.getElementById("featuredFlagship");
  const p = projectData[FLAGSHIP_KEY];
  if (!mount || !p) return;
  mount.innerHTML = flagshipMarkup(FLAGSHIP_KEY, p);
}

function renderProjectGrid() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = PROJECT_ORDER.map((key) =>
    gridCardMarkup(key, projectData[key]),
  ).join("");
}

// One delegated listener handles every "View Project / Case Study" button,
// including ones rendered later.
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-project-btn");
  if (!btn) return;
  e.preventDefault();
  openProjectModal(btn.dataset.project, btn);
});

// =====================================================
// PROJECT FILTERS
// =====================================================

function initProjectFilters() {
  const bar = document.getElementById("projectFilters");
  const grid = document.getElementById("projectsGrid");
  const status = document.getElementById("filterStatus");
  if (!bar || !grid) return;

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const filter = btn.dataset.filter;

    bar.querySelectorAll(".filter-btn").forEach((b) => {
      b.setAttribute("aria-pressed", String(b === btn));
    });

    let visible = 0;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const show =
        filter === "all" || card.dataset.categories.split(" ").includes(filter);
      card.hidden = !show;
      if (show) visible++;
    });

    grid.scrollLeft = 0;
    if (status) {
      status.textContent = `Showing ${visible} project${visible === 1 ? "" : "s"}`;
    }
    renderScrollRow(scrollRows[1]);
  });
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
const modalMetrics = document.getElementById("modalMetrics");
const modalCases = document.getElementById("modalCases");
const modalProblemCard = document.getElementById("modalProblemCard");
const modalSolutionCard = document.getElementById("modalSolutionCard");
const modalProblem = document.getElementById("modalProblem");
const modalSolution = document.getElementById("modalSolution");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
const modalGallerySection = document.getElementById("modalGallerySection");
const modalGallery = document.getElementById("modalGallery");
const modalLinks = document.getElementById("modalLinks");
const modalVideoWrap = document.getElementById("modalVideoWrap");

const docArchitecture = document.getElementById("docArchitecture");
const docSetup = document.getElementById("docSetup");
const docUsage = document.getElementById("docUsage");
const docChallenges = document.getElementById("docChallenges");
const docLearnedSection = document.getElementById("docLearnedSection");
const docLearned = document.getElementById("docLearned");
const docFuture = document.getElementById("docFuture");

const MODAL_TAB_PANELS = {
  overview: "panelOverview",
  demo: "panelDemo",
  docs: "panelDocs",
};

let lastFocusedBeforeModal = null;

function fillList(el, items, asHTML) {
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    if (asHTML) li.innerHTML = item;
    else li.textContent = item;
    el.appendChild(li);
  });
}

function modalLinkMarkup(href, iconClass, label, primary) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className =
    "modal-link-btn " + (primary ? "modal-link-primary" : "modal-link-secondary");
  a.innerHTML = `<i class="${iconClass}" aria-hidden="true"></i> ${label}`;
  return a;
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

  // Metrics
  const metricsHTML = metricsMarkup(data.metrics);
  modalMetrics.innerHTML = metricsHTML;
  modalMetrics.hidden = !metricsHTML;

  // Problem / Solution
  modalProblem.textContent = data.problem || "";
  modalSolution.textContent = data.solution || "";
  modalProblemCard.hidden = !data.problem;
  modalSolutionCard.hidden = !data.solution;
  modalCases.hidden = !data.problem && !data.solution;

  fillList(modalFeatures, data.features, false);

  modalTech.innerHTML = "";
  data.tech.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    modalTech.appendChild(span);
  });

  // Screenshots (hidden until real images are added to projectData)
  modalGallery.innerHTML = "";
  const shots = data.screenshots || [];
  shots.forEach((shot) => {
    const fig = document.createElement("figure");
    fig.innerHTML = `
      <a href="${shot.src}" target="_blank" rel="noopener noreferrer">
        <img src="${shot.src}" alt="${data.title}: ${shot.caption}" loading="lazy" decoding="async" />
      </a>
      <figcaption>${shot.caption}</figcaption>`;
    modalGallery.appendChild(fig);
  });
  modalGallerySection.hidden = shots.length === 0;

  // Links
  modalLinks.innerHTML = "";
  if (data.github) {
    modalLinks.appendChild(
      modalLinkMarkup(data.github, "fa-brands fa-github", "View on GitHub", true),
    );
  }
  if (data.live) {
    modalLinks.appendChild(
      modalLinkMarkup(
        data.live,
        "fa-solid fa-arrow-up-right-from-square",
        "Visit live site",
        !data.github,
      ),
    );
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
         <i class="fa-solid fa-video" aria-hidden="true"></i>
         <p>No demo video available yet.</p>
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
  const learned = data.docs.learned || [];
  fillList(docLearned, learned, false);
  docLearnedSection.hidden = learned.length === 0;
  fillList(docFuture, data.docs.future, false);
}

function setActiveModalTab(tabName, moveFocus) {
  document.querySelectorAll(".modal-tab").forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && moveFocus) tab.focus();
  });
  document.querySelectorAll(".modal-panel").forEach((panel) => {
    panel.classList.remove("active");
  });
  document.getElementById(MODAL_TAB_PANELS[tabName]).classList.add("active");
}

function openProjectModal(key, trigger) {
  populateModal(key);
  setActiveModalTab("overview");
  projectModal.querySelector(".modal-content").scrollTop = 0;
  lastFocusedBeforeModal = trigger || document.activeElement;
  projectModal.classList.add("show");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeModalBtn.focus();
}

function closeProjectModal() {
  projectModal.classList.remove("show");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedBeforeModal && lastFocusedBeforeModal.focus) {
    lastFocusedBeforeModal.focus();
  }
}

closeModalBtn.addEventListener("click", closeProjectModal);

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProjectModal();
});

// Keep keyboard focus inside the open modal
projectModal.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const focusable = [
    ...projectModal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// Tabs: click + arrow-key navigation
const modalTabEls = [...document.querySelectorAll(".modal-tab")];
modalTabEls.forEach((tab) => {
  tab.addEventListener("click", () => setActiveModalTab(tab.dataset.tab));
  tab.addEventListener("keydown", (e) => {
    const i = modalTabEls.indexOf(tab);
    let next = null;
    if (e.key === "ArrowRight") next = modalTabEls[(i + 1) % modalTabEls.length];
    if (e.key === "ArrowLeft")
      next = modalTabEls[(i - 1 + modalTabEls.length) % modalTabEls.length];
    if (e.key === "Home") next = modalTabEls[0];
    if (e.key === "End") next = modalTabEls[modalTabEls.length - 1];
    if (next) {
      e.preventDefault();
      setActiveModalTab(next.dataset.tab, true);
    }
  });
});

// =====================================================
// RENDER PROJECTS + FLAGSHIP before anything below this
// point measures page height or observes ".reveal" cards.
// =====================================================

renderFlagship();
renderProjectGrid();
initProjectFilters();

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
  // section. Recalculated on resize and after images finish loading.
  let total = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const measure = () => {
    total = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  };

  let ticking = false;

  function applyParallax() {
    const y = window.scrollY;
    const p = Math.min(y / total, 1); // 0 = top, 1 = bottom

    // With reduced motion the layers still fade in, but nothing drifts or slides.
    const drift = (px) => (prefersReducedMotion ? "none" : `translateY(${px}px)`);

    if (skyLayer) skyLayer.style.transform = drift(y * -0.03);
    if (starsLayer) starsLayer.style.transform = drift(y * -0.06);
    if (auroraLayer) auroraLayer.style.transform = drift(y * -0.1);
    if (orbLayer) orbLayer.style.transform = drift(y * -0.12);

    if (mountainBack) {
      const prog = Math.max(0, (p - 0.12) / 0.45);
      mountainBack.style.opacity = Math.min(prog * 0.6, 0.6);
      mountainBack.style.transform = drift((1 - Math.min(prog, 1)) * 90);
    }

    if (mountainFront) {
      const prog = Math.max(0, (p - 0.22) / 0.38);
      mountainFront.style.opacity = Math.min(prog * 0.75, 0.75);
      mountainFront.style.transform = drift((1 - Math.min(prog, 1)) * 70);
    }

    if (terrainLayer) {
      const prog = Math.max(0, (p - 0.48) / 0.3);
      terrainLayer.style.opacity = Math.min(prog, 1);
    }

    if (gridLayer) {
      const prog = Math.max(0, (p - 0.62) / 0.35);
      const rise = prefersReducedMotion ? 0 : (1 - Math.min(prog, 1)) * 130;
      gridLayer.style.opacity = Math.min(prog * 0.85, 0.85);
      gridLayer.style.transform = `perspective(900px) rotateX(80deg) scaleY(2.2) translateY(${rise}px)`;
    }

    ticking = false;
  }

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      measure();
      applyParallax();
    }, 150);
  });

  // Page height changes once lazy images and fonts settle
  window.addEventListener("load", () => {
    measure();
    applyParallax();
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
// Highlights the section crossing the middle of the viewport (works for
// sections taller than the screen, which a 50% threshold cannot).
const sections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelector(".nav-links a.active")?.classList.remove("active");
      document
        .querySelector(`.nav-links a[href="#${entry.target.id}"]`)
        ?.classList.add("active");
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
);

sections.forEach((section) => navObserver.observe(section));

// Pause CSS animations in sections that are far off-screen (see
// `.is-offscreen` in style.css) so only visible effects cost CPU/GPU.
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
    });
  },
  { rootMargin: "120px 0px" },
);

document.querySelectorAll("section").forEach((s) => animObserver.observe(s));

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

function setMenu(open) {
  navLinks.classList.toggle("active", open);
  burger.classList.toggle("active", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

burger.addEventListener("click", () =>
  setMenu(!navLinks.classList.contains("active")),
);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

//================ SOFT SKILLS POPUP ================

const softSkillsBtn = document.getElementById("softSkillsBtn");
const softSkills = document.getElementById("softSkillsPanel");
const closeSoftSkillsBtn = document.getElementById("closeSoftSkills");
const skillsSection = document.querySelector(".skills");

function setSoftSkills(open) {
  softSkills.classList.toggle("show", open);
  skillsSection.classList.toggle("blur-background", open);
  softSkills.setAttribute("aria-hidden", String(!open));
  softSkillsBtn.setAttribute("aria-expanded", String(open));
  if (open) closeSoftSkillsBtn.focus();
  else softSkillsBtn.focus();
}

softSkillsBtn.addEventListener("click", () =>
  setSoftSkills(!softSkills.classList.contains("show")),
);
closeSoftSkillsBtn.addEventListener("click", () => setSoftSkills(false));

document.addEventListener("click", (e) => {
  if (
    softSkills.classList.contains("show") &&
    !softSkills.contains(e.target) &&
    !softSkillsBtn.contains(e.target)
  ) {
    setSoftSkills(false);
  }
});

// One Escape handler for every overlay
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (projectModal.classList.contains("show")) closeProjectModal();
  else if (softSkills.classList.contains("show")) setSoftSkills(false);
  else if (navLinks.classList.contains("active")) setMenu(false);
});

/*================ SCROLL REVEAL ================*/
// One-shot: each element is revealed once and then released from the
// observer, so there is no repeated re-hiding/re-animating while scrolling.
// Runs after the render calls above so dynamic cards are observed too.

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
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
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const formData = new FormData(contactForm);
  submitBtn.disabled = true;

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
  } finally {
    submitBtn.disabled = false;
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

function readSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (err) {
    return null;
  }
}

// First visit keeps the dark default set in index.html; only an explicit
// saved choice changes it.
const savedTheme = readSavedTheme();
if (savedTheme) {
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
}
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  try {
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light",
    );
  } catch (err) {
    /* storage unavailable (private mode) — theme still applies this visit */
  }
  updateThemeIcon();
});

// =====================================================
// MOBILE: scroll-dot indicators + swipe hints
// (skills and projects rows; rebuilt after every filter change)
// =====================================================

const mobileQuery = window.matchMedia("(max-width: 768px)");
const isMobile = () => mobileQuery.matches;

const scrollRows = [
  { row: "#skillsGrid", key: "skills", hint: "swipe to explore all skills" },
  { row: "#projectsGrid", key: "projects", hint: "swipe to browse all projects" },
];

function visibleItems(row) {
  return [...row.children].filter((el) => !el.hidden);
}

function updateRowDots(row, key) {
  if (!isMobile()) return;
  const wrap = row.parentElement.querySelector(`.${key}-dots-wrap`);
  const items = visibleItems(row);
  if (!wrap || !items.length) return;
  const gap = parseFloat(getComputedStyle(row).columnGap) || 10;
  const active = Math.round(row.scrollLeft / (items[0].offsetWidth + gap));
  wrap.querySelectorAll(".row-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === active);
  });
}

function renderScrollRow(cfg) {
  const row = document.querySelector(cfg.row);
  if (!row) return;

  row.parentElement
    .querySelectorAll(`.${cfg.key}-dots-wrap, .${cfg.key}-swipe-hint`)
    .forEach((node) => node.remove());

  if (!isMobile()) return;
  const items = visibleItems(row);
  if (items.length < 2) return;

  const wrap = document.createElement("div");
  wrap.className = `row-dots ${cfg.key}-dots-wrap`;
  wrap.setAttribute("aria-hidden", "true");
  items.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "row-dot" + (i === 0 ? " active" : "");
    wrap.appendChild(dot);
  });
  row.insertAdjacentElement("afterend", wrap);

  const hint = document.createElement("p");
  hint.className = `swipe-hint ${cfg.key}-swipe-hint`;
  hint.textContent = `⟵  ${cfg.hint}  ⟶`;
  wrap.insertAdjacentElement("afterend", hint);

  if (!row.dataset.dotsBound) {
    row.dataset.dotsBound = "true";
    let rowTicking = false;
    row.addEventListener(
      "scroll",
      () => {
        if (rowTicking) return;
        rowTicking = true;
        requestAnimationFrame(() => {
          updateRowDots(row, cfg.key);
          rowTicking = false;
        });
      },
      { passive: true },
    );
  }
}

function initMobileEnhancements() {
  scrollRows.forEach(renderScrollRow);
}

initMobileEnhancements();
mobileQuery.addEventListener("change", initMobileEnhancements);
