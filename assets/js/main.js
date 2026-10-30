// ------------------------------------------------------------------
// Data
// ------------------------------------------------------------------
const SKILLS = [
  { label: "Frontend Dev", icon: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>' },
  { label: "Responsive", icon: '<rect x="2" y="4" width="14" height="11" rx="1.5"/><path d="M6 19h6"/><rect x="17" y="9" width="5" height="11" rx="1"/>' },
  { label: "Figma to Code", icon: '<path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12V2zM12 9H8.5a3.5 3.5 0 0 0 0 7H12V9zM12 16H8.5a3.5 3.5 0 1 0 3.5 3.5V16zM12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z"/><circle cx="15.5" cy="12.5" r="3.5"/>' },
  { label: "Webflow", icon: '<path d="M3 7l3.5 10L10 9l3.5 8L21 5"/>' },
  { label: "Shopify", icon: '<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>' },
  { label: "WordPress", icon: '<circle cx="12" cy="12" r="9"/><path d="M4.5 8.5 9 20M9 5.5l5 13.5M13.5 5.5l4 11 2-6.5"/>' },
  { label: "Performance", icon: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>' },
  { label: "Accessibility", icon: '<circle cx="12" cy="4.5" r="1.8"/><path d="M5 8.5l7 1.5 7-1.5M12 10v5m0 0-3.5 6M12 15l3.5 6"/>' },
  { label: "SEO", icon: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>' },
];

const TOOLS = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap",
  "Webflow", "Shopify", "WordPress", "Figma", "Photoshop", "Git",
];

// Projects — add a new object here to add a slide to the Work slider.
const PROJECTS = [
  {
    title: "Pulse",
    category: "SaaS Dashboard",
    meta: "2026",
    description:
      "An analytics admin dashboard for subscription businesses — tracking MRR, churn, user growth and billing health. Interactive charts, user management with validated forms, plan switching, and authentication with protected routes, all fully responsive from phone to desktop.",
    highlights: ["56 unit tests", "Accessible (ARIA & focus management)", "Mock API ready for a real backend"],
    tools: ["React 19", "TypeScript", "React Router", "SCSS / BEM", "Recharts", "Jest"],
    live: "https://shakyaanup.github.io/pulse/",
    github: "https://github.com/shakyaanup/pulse",
    images: {
      main: "assets/images/projects/pulse/dashboard.png",
      alt: "assets/images/projects/pulse/analytics.png",
      mobile: "assets/images/projects/pulse/mobile-dashboard.png",
    },
  },
  {
    title: "Arth",
    category: "Shopify E-commerce",
    meta: "Client project",
    description:
      "An online store for Arth, a lifestyle brand selling cotton bathrobes, pyjamas and baby quilts made in small batches from natural fabrics. A warm, editorial storefront with a full-bleed hero, new-arrival collections, trust badges and newsletter sign-up — built to feel calm and premium on every screen.",
    highlights: ["Mobile-first, responsive storefront", "Product collections with badges & add to cart", "Newsletter sign-up & cookie consent"],
    tools: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript"],
    live: "https://arthfabric.com/",
    liveLabel: "Visit store",
    images: {
      main: "assets/images/projects/arth/home.jpg",
      alt: "assets/images/projects/arth/products.jpg",
      mobile: "assets/images/projects/arth/mobile.jpg",
    },
  },
];

// Work history, most recent first
const EXPERIENCE = [
  { year: "2026", period: "Aug 2025 — Now", role: "Frontend Developer", company: "Freelance · Portugal", tech: ["React", "Shopify", "Webflow", "Figma", "Tailwind CSS", "JavaScript"], current: true },
  { year: "2025", period: "Dec 2024 — Jul 2025", role: "Frontend / Shopify Engineer", company: "Zulu · Vermont, USA", tech: ["Shopify", "Webflow", "Liquid", "JavaScript", "SCSS"] },
  { year: "2024", period: "May — Nov 2024", role: "Frontend Engineer", company: "Leadzai · Portugal", tech: ["TypeScript", "React", "SCSS"] },
  { year: "2020", period: "Apr 2020 — Nov 2023", role: "Frontend Engineer", company: "Studio Graphene · Portugal", tech: ["React", "Next.js", "Webflow", "SCSS"] },
  { year: "2015", period: "Jan 2015 — Nov 2019", role: "Frontend Developer", company: "Codewing Solutions · Kathmandu", tech: ["WordPress", "HTML5", "SCSS", "JavaScript"] },
  { year: "2014", period: "Jun — Dec 2014", role: "Frontend Developer", company: "TQID · Kathmandu", tech: ["HTML", "CSS", "jQuery", "PHP CMS"] },
  { year: "2013", period: "Jun 2013 — Feb 2014", role: "UI Developer", company: "Rapid Web Solutions · Kathmandu", tech: ["HTML", "CSS", "Photoshop"] },
];

// Services shown in the accordion
const SERVICES = [
  {
    title: "Website Development",
    icon: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    description:
      "Hand-coded, responsive websites and landing pages built from your Figma or Adobe XD designs — pixel-accurate, semantic and fast on every device and browser.",
    deliverables: ["Figma / XD to code", "HTML5 · CSS3 · Tailwind", "Responsive on all devices", "Cross-browser tested"],
  },
  {
    title: "Webflow Development",
    icon: '<path d="M3 7l3.5 10L10 9l3.5 8L21 5"/>',
    description:
      "Marketing sites you can update yourself. I set up clean class systems, CMS collections and smooth interactions so your team can publish without touching code.",
    deliverables: ["CMS collections", "Interactions & animations", "Reusable components", "Client-friendly editing"],
  },
  {
    title: "Shopify Stores",
    icon: '<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',
    description:
      "Online stores that look on-brand and convert. From theme setup and customisation to custom sections, product pages and a smooth mobile checkout journey.",
    deliverables: ["Theme customisation", "Custom Liquid sections", "Product & collection pages", "Store setup"],
  },
  {
    title: "React & Frontend UI",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    description:
      "Component-based interfaces for web apps and dashboards. Reusable, accessible React components that plug neatly into your product and design system.",
    deliverables: ["React · Next.js", "TypeScript", "Component libraries", "Dashboards & admin UIs"],
  },
  {
    title: "WordPress Websites",
    icon: '<circle cx="12" cy="12" r="9"/><path d="M4.5 8.5 9 20M9 5.5l5 13.5M13.5 5.5l4 11 2-6.5"/>',
    description:
      "Custom WordPress themes built from scratch — lightweight, secure and easy to manage, without the bloat of heavy page builders.",
    deliverables: ["Custom themes", "Easy content editing", "Plugin integration", "Migrations & updates"],
  },
  {
    title: "Performance & SEO",
    icon: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
    description:
      "Already have a site? I'll make it faster, more accessible and easier to find — improving Lighthouse scores, Core Web Vitals and on-page SEO.",
    deliverables: ["Lighthouse audits", "Core Web Vitals", "Accessibility (WCAG)", "On-page SEO"],
  },
];

// Steps in the "How we'll work together" strip
const PROCESS = [
  { title: "Discover", text: "We talk through your goals, audience and timeline, and agree on a clear scope." },
  { title: "Design to code", text: "I turn your designs into a pixel-perfect, responsive build — or help shape the design first." },
  { title: "Test & refine", text: "Cross-browser, mobile, accessibility and speed checks, with your feedback along the way." },
  { title: "Launch & support", text: "I take it live, hand over everything you need, and stay around for updates." },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ------------------------------------------------------------------
// Header: hide on scroll down, show on scroll up
// ------------------------------------------------------------------
function initHeader() {
  const header = document.getElementById("site-header");
  let lastY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      const menuOpen = document.documentElement.classList.contains("menu-open");
      header.classList.toggle("is-scrolled", y > 20);
      header.classList.toggle("is-hidden", !menuOpen && y > 160 && y > lastY);
      lastY = y;
    },
    { passive: true },
  );
}

// ------------------------------------------------------------------
// Fullscreen menu
// ------------------------------------------------------------------
function initMenu() {
  const root = document.documentElement;
  const toggle = document.getElementById("menu-toggle");
  const panel = document.getElementById("site-menu");
  panel.inert = true;

  const setOpen = (open) => {
    root.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    panel.setAttribute("aria-hidden", String(!open));
    panel.inert = !open;
  };

  toggle.addEventListener("click", () => setOpen(!root.classList.contains("menu-open")));
  panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.classList.contains("menu-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

// ------------------------------------------------------------------
// Skills carousel (infinite, auto-advancing, focused centre cell)
// ------------------------------------------------------------------
function initSkills() {
  const track = document.getElementById("skills-track");
  const n = SKILLS.length;
  const copies = 3;

  track.innerHTML = Array.from({ length: copies }, (_, c) =>
    SKILLS.map(
      (s) => `
      <button type="button" class="skill ticks" ${c === 1 ? "" : 'tabindex="-1" aria-hidden="true"'}>
        <span class="skill-mark">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s.icon}</svg>
        </span>
        <span class="skill-label">${s.label}</span>
      </button>`,
    ).join(""),
  ).join("");

  const slides = [...track.children];
  let index = n; // first slide of the middle copy
  let timer;

  const render = () => {
    track.style.setProperty("--index", index);
    slides.forEach((el, i) => {
      const d = Math.abs(i - index);
      if (d <= 2) el.dataset.d = d;
      else delete el.dataset.d;
      el.setAttribute("aria-current", d === 0 ? "true" : "false");
    });
  };

  // Jump back into the middle copy without animation so the loop is seamless
  const normalise = () => {
    if (index >= n && index < 2 * n) return;
    index = ((index % n) + n) % n + n;
    track.classList.add("is-instant");
    render();
    track.offsetHeight; // force reflow
    track.classList.remove("is-instant");
  };
  track.addEventListener("transitionend", (e) => e.target === track && normalise());

  const go = (i) => {
    index = i;
    render();
  };

  const play = () => {
    if (reduceMotion) return;
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 2400);
  };
  const pause = () => clearInterval(timer);

  slides.forEach((el, i) => el.addEventListener("click", () => go(i)));
  track.addEventListener("mouseenter", pause);
  track.addEventListener("mouseleave", play);
  track.addEventListener("focusin", pause);
  track.addEventListener("focusout", play);
  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : play()));

  track.classList.add("is-instant");
  render();
  track.offsetHeight;
  track.classList.remove("is-instant");
  play();
}

// ------------------------------------------------------------------
// Hero background: align grid with the carousel + cursor spotlight
// ------------------------------------------------------------------
function initHeroGrid() {
  const hero = document.querySelector(".hero");
  const windowEl = document.querySelector(".skills-window");

  const align = () => {
    const cell = parseFloat(getComputedStyle(document.documentElement).fontSize) * 7;
    const h = hero.getBoundingClientRect();
    const w = windowEl.getBoundingClientRect();
    hero.style.setProperty("--grid-x", `${w.left + w.width / 2 - cell / 2 - h.left}px`);
    hero.style.setProperty("--grid-y", `${w.top - h.top}px`);
  };
  align();
  window.addEventListener("resize", align);
  document.fonts?.ready.then(align);

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
    hero.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
}

// ------------------------------------------------------------------
// Tools marquee (list rendered twice for a seamless loop)
// ------------------------------------------------------------------
function initTools() {
  const track = document.getElementById("tools-track");
  const items = (hidden) =>
    TOOLS.map(
      (t) => `<li class="shrink-0 pr-12 transition hover:text-white" ${hidden ? 'aria-hidden="true"' : ""}>${t}</li>`,
    ).join("");
  track.innerHTML = items(false) + items(true);
}

// ------------------------------------------------------------------
// Work: project cards
// ------------------------------------------------------------------
const ARROW_ICON = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const GITHUB_ICON = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>';
const CHECK_ICON = '<svg class="mt-0.5 h-4 w-4 shrink-0 text-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg>';

function projectCard(p, i) {
  const num = String(i + 1).padStart(2, "0");
  const url = p.live ? new URL(p.live) : null;
  const host = url ? url.host + url.pathname.replace(/\/$/, "") : "";

  return `
  <article class="project-card group w-full shrink-0 snap-start overflow-hidden rounded-[2rem] border border-white/8 bg-surface lg:grid lg:grid-cols-[1.4fr_1fr]"
           role="group" aria-roledescription="slide" aria-label="${i + 1} of ${PROJECTS.length}: ${p.title}">
    <!-- Media -->
    <a href="${p.live || p.github}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"
       class="relative block aspect-square overflow-hidden bg-[#0d0b16] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[34rem]">
      <div class="grid-mesh opacity-70 [--cell:3.5rem]"></div>
      <div class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgb(116_59_255/0.45),transparent_68%)] transition duration-700 group-hover:scale-125"></div>

      <div class="browser-frame absolute top-[13%] left-[7%] w-[90%] overflow-hidden rounded-xl border border-white/10 bg-elevated shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]">
        <div class="flex items-center gap-3 border-b border-white/8 px-3.5 py-2.5">
          <span class="flex gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span><span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span><span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span></span>
          <span class="truncate rounded-md bg-white/5 px-3 py-0.5 text-[0.65rem] text-muted">${host}</span>
        </div>
        <div class="relative aspect-[16/10]">
          <img src="${p.images.main}" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-top" />
          ${p.images.alt ? `<img src="${p.images.alt}" alt="" loading="lazy" class="shot-alt absolute inset-0 h-full w-full object-cover object-top" />` : ""}
        </div>
      </div>

      ${p.images.mobile ? `
      <div class="phone-frame absolute right-[5%] bottom-[-6%] w-[21%] min-w-20 overflow-hidden rounded-[1.4rem] border-[5px] border-[#26262b] bg-black shadow-[0_25px_60px_-10px_rgb(0_0_0/0.9)]">
        <img src="${p.images.mobile}" alt="" loading="lazy" class="aspect-[390/844] w-full object-cover object-top" />
      </div>` : ""}
    </a>

    <!-- Content -->
    <div class="flex flex-col p-7 sm:p-10 lg:p-12">
      <div class="mb-6 flex items-center justify-between gap-4 text-xs tracking-[0.2em] text-muted uppercase">
        <span><span class="text-purple-light">${num}</span> — ${p.category}</span>
        <span>${p.meta}</span>
      </div>

      <h3 class="font-display text-4xl font-bold sm:text-5xl">${p.title}</h3>
      <p class="mt-4 leading-relaxed text-muted">${p.description}</p>

      ${p.highlights?.length ? `
      <ul class="mt-6 space-y-2 text-sm text-white/85">
        ${p.highlights.map((h) => `<li class="flex gap-2.5">${CHECK_ICON}${h}</li>`).join("")}
      </ul>` : ""}

      <ul class="mt-7 flex flex-wrap gap-2" aria-label="Tools used">
        ${p.tools.map((t) => `<li class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/75">${t}</li>`).join("")}
      </ul>

      <div class="mt-auto flex flex-wrap gap-3 pt-9">
        ${p.live ? `
        <a href="${p.live}" target="_blank" rel="noopener" class="group/btn inline-flex items-center gap-2 rounded-full bg-purple px-5 py-3 text-sm font-medium transition hover:bg-purple-hover hover:shadow-[0_10px_40px_-10px_rgb(116_59_255/0.9)]">
          ${p.liveLabel || "Live demo"} <span class="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">${ARROW_ICON}</span>
          <span class="sr-only">(${p.title}, opens in new tab)</span>
        </a>` : ""}
        ${p.github ? `
        <a href="${p.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-white/40 hover:bg-white/5">
          ${GITHUB_ICON} Source code
          <span class="sr-only">(${p.title} on GitHub, opens in new tab)</span>
        </a>` : ""}
      </div>
    </div>
  </article>`;
}

function initProjects() {
  const slider = document.getElementById("project-slider");
  const track = document.getElementById("project-track");
  const tabs = document.getElementById("project-tabs");
  const prev = document.getElementById("project-prev");
  const next = document.getElementById("project-next");
  const pad = (n) => String(n).padStart(2, "0");
  const total = PROJECTS.length;

  track.innerHTML = PROJECTS.map(projectCard).join("");
  tabs.innerHTML = PROJECTS.map(
    (p, i) => `
    <li class="flex-1">
      <button type="button" class="project-tab" data-index="${i}">
        <span class="font-display text-base font-semibold">${p.title}</span>
        <span class="text-xs">${p.category}</span>
      </button>
    </li>`,
  ).join("");
  document.getElementById("project-count").textContent = `(${pad(total)})`;
  document.getElementById("project-total").textContent = pad(total);

  const slides = [...track.children];
  const tabBtns = [...tabs.querySelectorAll(".project-tab")];
  let current = 0;

  const setActive = (i) => {
    current = i;
    document.getElementById("project-current").textContent = pad(i + 1);
    tabBtns.forEach((b, k) => b.setAttribute("aria-current", String(k === i)));
    slides.forEach((s, k) => (s.inert = k !== i));
    prev.disabled = total < 2;
    next.disabled = total < 2;
  };

  // Loops around at both ends
  const goTo = (i) => {
    const target = (i + total) % total;
    track.scrollTo({ left: slides[target].offsetLeft - track.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
    setActive(target);
  };

  prev.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));
  tabBtns.forEach((b) => b.addEventListener("click", () => goTo(+b.dataset.index)));
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });

  // Keep state in sync when the user swipes / scrolls the track
  let scrollTimer;
  track.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const i = Math.round(track.scrollLeft / (slides[0].offsetWidth || 1));
        if (i !== current) setActive(Math.min(Math.max(i, 0), total - 1));
      }, 120);
    },
    { passive: true },
  );

  // Autoplay: the active tab's progress bar drives it; paused on hover, focus or off-screen
  tabs.addEventListener("animationend", () => total > 1 && goTo(current + 1));
  let hovered = false;
  let visible = false;
  const updatePause = () => slider.classList.toggle("is-paused", hovered || !visible || document.hidden);
  slider.addEventListener("pointerenter", () => ((hovered = true), updatePause()));
  slider.addEventListener("pointerleave", () => ((hovered = false), updatePause()));
  slider.addEventListener("focusin", () => ((hovered = true), updatePause()));
  slider.addEventListener("focusout", () => ((hovered = false), updatePause()));
  document.addEventListener("visibilitychange", updatePause);
  new IntersectionObserver(([e]) => ((visible = e.isIntersecting), updatePause()), { threshold: 0.4 }).observe(slider);
  updatePause();

  // Cursor-following border glow
  slides.forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  setActive(0);
}

// ------------------------------------------------------------------
// Services accordion + process
// ------------------------------------------------------------------
function initServices() {
  const list = document.getElementById("services-list");
  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("service-count").textContent = `(${pad(SERVICES.length)})`;

  list.innerHTML = SERVICES.map(
    (s, i) => `
    <li class="service border-t border-white/10">
      <h3>
        <button type="button" class="service-toggle group flex w-full items-center gap-5 py-7 text-left sm:gap-8"
                aria-expanded="false" aria-controls="service-panel-${i}" id="service-btn-${i}">
          <span class="w-8 shrink-0 text-sm text-muted tabular-nums">${pad(i + 1)}</span>
          <span class="service-title flex-1 font-display text-2xl font-semibold sm:text-4xl">${s.title}</span>
          <span class="service-icon grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
          </span>
        </button>
      </h3>
      <div class="service-panel" id="service-panel-${i}" role="region" aria-labelledby="service-btn-${i}">
        <div class="overflow-hidden">
          <div class="flex gap-5 pb-9 sm:gap-8">
            <span class="hidden w-8 shrink-0 sm:block"></span>
            <div class="flex-1">
              <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br sm:h-14 sm:w-14 from-purple-light to-purple shadow-[0_10px_30px_-8px_rgb(116_59_255/0.7)]">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s.icon}</svg>
                </span>
                <p class="max-w-xl leading-relaxed text-muted">${s.description}</p>
              </div>
              <ul class="mt-6 flex flex-wrap gap-2 sm:pl-20" aria-label="What you get">
                ${s.deliverables.map((d) => `<li class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/75">${d}</li>`).join("")}
              </ul>
            </div>
            <span class="hidden w-12 shrink-0 sm:block"></span>
          </div>
        </div>
      </div>
    </li>`,
  ).join("");

  // One open at a time; the first starts open
  const items = [...list.querySelectorAll(".service")];
  const setOpen = (target) => {
    items.forEach((item) => {
      const open = item === target && !item.classList.contains("is-open");
      item.classList.toggle("is-open", open);
      item.querySelector(".service-toggle").setAttribute("aria-expanded", String(open));
    });
  };
  items.forEach((item) => item.querySelector(".service-toggle").addEventListener("click", () => setOpen(item)));
  setOpen(items[0]);

  document.getElementById("process-list").innerHTML = PROCESS.map(
    (p, i) => `
    <li class="process-step relative pt-10" data-reveal style="--reveal-delay: ${i * 0.1}s">
      <span class="absolute top-0 left-0 grid h-5 w-5 place-items-center rounded-full border border-purple-light bg-surface" aria-hidden="true">
        <span class="h-1.5 w-1.5 rounded-full bg-purple-light"></span>
      </span>
      <p class="text-xs tracking-[0.2em] text-purple-light uppercase">Step ${pad(i + 1)}</p>
      <p class="mt-2 font-display text-2xl font-semibold">${p.title}</p>
      <p class="mt-3 text-sm leading-relaxed text-muted">${p.text}</p>
    </li>`,
  ).join("");
}

// ------------------------------------------------------------------
// Experience timeline
// ------------------------------------------------------------------
function initTimeline() {
  const list = document.getElementById("timeline");
  list.innerHTML = EXPERIENCE.map(
    (e, i) => `
    <li class="timeline-item group snap-start" style="--i: ${i}">
      <span class="timeline-dot ${e.current ? "is-current" : ""}" aria-hidden="true"></span>
      <p class="mt-10 text-xs tracking-[0.2em] text-muted uppercase">${e.period}</p>
      <p class="mt-2 font-display text-6xl font-bold transition duration-500 group-hover:text-purple-light sm:text-7xl">${e.year}</p>
      <h3 class="mt-5 text-lg font-medium">${e.role}</h3>
      <p class="text-muted">${e.company}</p>
      <ul class="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
        ${e.tech.map((t) => `<li class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/75">${t}</li>`).join("")}
      </ul>
    </li>`,
  ).join("");

  // Animate the line + dots when the timeline scrolls into view
  new IntersectionObserver(
    ([e], io) => {
      if (!e.isIntersecting) return;
      list.classList.add("is-drawn");
      io.disconnect();
    },
    { threshold: 0.3 },
  ).observe(list);

  // Prev / next buttons
  const prev = document.getElementById("timeline-prev");
  const next = document.getElementById("timeline-next");
  const step = () => list.querySelector(".timeline-item").offsetWidth;
  const behavior = reduceMotion ? "auto" : "smooth";
  prev.addEventListener("click", () => list.scrollBy({ left: -step(), behavior }));
  next.addEventListener("click", () => list.scrollBy({ left: step(), behavior }));
  const updateButtons = () => {
    prev.disabled = list.scrollLeft <= 2;
    next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 2;
  };
  list.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();

  // Drag to scroll with a mouse (touch and trackpads scroll natively)
  let startX = 0;
  let startScroll = 0;
  let dragging = false;
  list.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    dragging = true;
    startX = e.clientX;
    startScroll = list.scrollLeft;
    list.style.scrollSnapType = "none";
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    list.scrollLeft = startScroll - (e.clientX - startX);
  });
  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    list.style.scrollSnapType = "";
  });
}

// ------------------------------------------------------------------
// Contact form: validation + submit to email via Web3Forms
// ------------------------------------------------------------------
const CONTACT_EMAIL = "anup.shakya60@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

const VALIDATORS = {
  name: (v) => {
    if (!v) return "Please enter your name.";
    if (v.length < 2) return "Your name should be at least 2 characters.";
    return "";
  },
  email: (v) => {
    if (!v) return "Please enter your email address.";
    if (!EMAIL_PATTERN.test(v)) return "Please enter a valid email address, e.g. name@example.com.";
    return "";
  },
  message: (v) => {
    if (!v) return "Please enter a message.";
    if (v.length < 10) return "Your message should be at least 10 characters.";
    return "";
  },
};

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submit = document.getElementById("cf-submit");
  const label = document.getElementById("cf-submit-label");
  const status = document.getElementById("cf-status");
  const success = document.getElementById("cf-success");

  const fields = Object.keys(VALIDATORS).map((name) => form.elements[name]);

  // Returns true when the field is valid; shows/clears its error message
  const validate = (input) => {
    const message = VALIDATORS[input.name](input.value.trim());
    document.getElementById(`${input.id}-error`).textContent = message;
    input.setAttribute("aria-invalid", String(Boolean(message)));
    return !message;
  };

  fields.forEach((input) => {
    input.addEventListener("blur", () => input.value.trim() && validate(input));
    input.addEventListener("input", () => input.getAttribute("aria-invalid") === "true" && validate(input));
  });

  const setLoading = (loading) => {
    submit.disabled = loading;
    label.textContent = loading ? "Sending…" : "Send message";
    submit.querySelector(".cf-icon-send").classList.toggle("hidden", loading);
    submit.querySelector(".cf-icon-spin").classList.toggle("hidden", !loading);
  };

  const showStatus = (message) => {
    status.textContent = message;
    status.classList.toggle("hidden", !message);
  };

  const showSuccess = (name) => {
    document.getElementById("cf-success-name").textContent = name.split(" ")[0];
    success.classList.replace("hidden", "flex");
    form.setAttribute("aria-hidden", "true");
    form.inert = true;
    success.focus();
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showStatus("");

    const invalid = fields.filter((input) => !validate(input));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    const data = new FormData(form);
    const name = data.get("name").trim();

    // Bots tick the hidden honeypot field — pretend it worked and send nothing
    if (data.get("botcheck")) return showSuccess(name);

    setLoading(true);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: data.get("access_key"),
          subject: `New portfolio message from ${name}`,
          from_name: data.get("from_name"),
          name,
          email: data.get("email").trim(),
          services: data.getAll("services").join(", ") || "—",
          message: data.get("message").trim(),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || `Request failed (${res.status})`);
      showSuccess(name);
      form.reset();
    } catch (err) {
      console.error(err);
      showStatus(`Sorry, your message couldn't be sent. Please try again, or email me directly at ${CONTACT_EMAIL}.`);
    } finally {
      setLoading(false);
    }
  });

  document.getElementById("cf-reset").addEventListener("click", () => {
    success.classList.replace("flex", "hidden");
    form.removeAttribute("aria-hidden");
    form.inert = false;
    fields.forEach((input) => input.removeAttribute("aria-invalid"));
    fields[0].focus();
  });

  // Copy email button
  const copyBtn = document.getElementById("copy-email");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyBtn.textContent = "Copied!";
    } catch {
      copyBtn.textContent = "Press Ctrl+C";
    }
    setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
  });
}

// ------------------------------------------------------------------
// Footer: live Portugal time, year, interactive wordmark
// ------------------------------------------------------------------
function initFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();

  const time = document.getElementById("local-time");
  const tz = document.getElementById("local-tz");
  const clock = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Lisbon", hour: "2-digit", minute: "2-digit" });
  const zone = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Lisbon", timeZoneName: "short" });
  const tick = () => {
    time.textContent = clock.format(new Date());
    tz.textContent = `(${zone.formatToParts(new Date()).find((p) => p.type === "timeZoneName").value})`;
  };
  tick();
  setInterval(tick, 15000);

  // Split the wordmark into letters so each one reacts on hover
  const mark = document.getElementById("footer-wordmark");
  mark.innerHTML = [...mark.textContent]
    .map((c) => (c === " " ? " " : `<span class="char">${c}</span>`))
    .join("");
}

// ------------------------------------------------------------------
// Reveal elements as they scroll into view
// ------------------------------------------------------------------
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }),
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMenu();
  initSkills();
  initHeroGrid();
  initTools();
  initProjects();
  initServices();
  initTimeline();
  initContactForm();
  initFooter();
  initReveal();
});
