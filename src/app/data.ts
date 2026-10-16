export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Website" | "Poster" | "Logo" | "Brand Identity";
  discipline: "Design" | "Engineering";
  tools: string[];
  cover?: string;
  workCover?: string;
  gallery: string[];
  link?: string;
  caseStudy: string;
  year: string;
  role: string;
  overview: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    id: "p-cinetrack",
    title: "CineTrack",
    description: "A private, local-first film and television ledger for tracking what you watch, how you rate it, and how your collection evolves over time.",
    category: "Website",
    discipline: "Engineering",
    tools: ["React", "TypeScript", "SQLite", "TMDb"],
    workCover: "/cinetrack.webp",
    gallery: [],
    link: "https://github.com/weirdsmirk/CineTrack",
    caseStudy: "/project/p-cinetrack",
    year: "2026",
    role: "Full-Stack Engineer",
    overview: "Built as a local-first personal catalogue, CineTrack keeps film and television history on the user’s device while enriching titles with read-only TMDb metadata. The archive supports episode-by-episode tracking, ratings, rewatch history, collection statistics, themes, and portable JSON backups without accounts, analytics, or cloud storage.",
    features: [
      "Local-first library with portable SQLite-backed data and JSON import/export",
      "Season-by-season episode logs, rewatch history, ratings, favourites, and personal metadata",
      "TMDb-powered discovery and metadata with a privacy-focused same-origin proxy",
    ],
  },
  {
    id: "p-quiettab",
    title: "Quiet Tab",
    description: "A calm, minimal Chrome new tab page with a clock, quick-access shortcuts, a pannable pinboard for images, sticky notes and to-do lists, plus customizable themes — all stored locally, with nothing leaving the browser.",
    category: "Website",
    discipline: "Engineering",
    tools: ["JavaScript", "HTML", "CSS", "Chrome Extension"],
    workCover: "/quiet-tab.png",
    gallery: [],
    link: "https://github.com/bugtoast/Quiet-Tab",
    caseStudy: "/project/p-quiettab",
    year: "2026",
    role: "Front-End Engineer",
    overview: "Quiet Tab is a minimal New Tab page for Chrome built around a large clock, a small toolbar of shortcuts, and an optional pinboard with images, sticky notes, and to-do lists. Everything is configurable and switchable off, with light or dark mode, custom colors, background patterns or photos, panning, keyboard navigation, multi-tab sync, JSON backups, and a guided onboarding tour. Nothing leaves the computer: fonts are bundled and settings live in local browser storage.",
    features: [
      "Big, out-of-the-way clock with 12/24-hour, seconds, date and size options",
      "Quick shortcut toolbar with bottom, top, left or right placement and automatic overflow scrolling",
      "Pannable pinboard for images, sticky notes and to-do lists with drag, resize, rotate and pin",
      "Light or dark mode, custom colors, dotted, grid, plain or custom-photo backgrounds",
      "Multi-tab settings sync plus single-JSON export/import backups, with onboarding tour",
    ],
  },
  {
    id: "p-gametrack",
    title: "GameTrack",
    description: "A local-first gaming registry that combines collection management, Steam sync, IGDB discovery, and detailed playtime analytics.",
    category: "Website",
    discipline: "Engineering",
    tools: ["React", "TypeScript", "Node.js", "SQLite"],
    workCover: "/gametrack.webp",
    gallery: [],
    link: "https://github.com/weirdsmirk/GameTrack",
    caseStudy: "/project/p-gametrack",
    year: "2026",
    role: "Full-Stack Engineer",
    overview: "GameTrack is a single-user, desktop-style web application for treating a game library as a personal database. It stores the registry locally in SQLite, syncs owned titles from Steam, discovers games through IGDB, and turns playtime, status, and completion history into a focused telemetry dashboard.",
    features: [
      "Steam library sync and IGDB discovery through server-side, credential-safe integrations",
      "Local SQLite registry with import/export, custom ordering, and precise playtime tracking",
      "Lazy-loaded analytics for genre, status, completion, and most-played-game telemetry",
    ],
  },
  {
    id: "p-posters",
    title: "Poster Designs",
    description: "A curated series of 6 modernist and typographic poster explorations.",
    category: "Poster",
    discipline: "Design",
    tools: ["Typography", "Layout Design", "Print", "Art Direction"],
    cover: "/posters/Gazelle.webp",
    gallery: [
      "/posters/Hóng Yóu Jiǎozi.webp",
      "/posters/Gazelle.webp",
      "/posters/Nothing Headphone (a).webp",
      "/posters/Mazesoba.webp",
      "/posters/Makizushi.webp",
      "/posters/Shox Ride 2.webp",
    ],
    caseStudy: "/project/p-posters",
    year: "2025 — 2026",
    role: "Graphic & Editorial Designer",
    overview: "A focused series of 6 large-format graphic posters exploring International Typographic Style, tactile textures, commercial product identity, and culinary ephemera. Each piece emphasizes grid tension, asymmetrical typography, and high-contrast composition.",
  },
  {
    id: "p-logos",
    title: "Logo Archive",
    description: "A collection of typographic wordmarks, geometric monograms, and brand symbols.",
    category: "Logo",
    discipline: "Design",
    tools: ["Vector Art", "Grid Systems", "Monograms", "Symbol Design"],
    gallery: [],
    caseStudy: "/project/p-logos",
    year: "2025 — 2026",
    role: "Brand & Identity Designer",
    overview: "A curated archive of vector identity marks, modern monograms, and brutalist geometric symbols. Crafted with mathematical proportions, optical kerning, and negative space to ensure distinct legibility from micro-favicons to architectural signage.",
  },
  {
    id: "p-brand",
    title: "Brand Identity",
    description: "Comprehensive visual identity and packaging system spanning typography, editorial layout, and collateral.",
    category: "Brand Identity",
    discipline: "Design",
    tools: ["Identity Systems", "Packaging", "Art Direction", "Editorial Design"],
    gallery: [],
    caseStudy: "/project/p-brand",
    year: "2026",
    role: "Lead Visual Designer",
    overview: "An extensive visual identity design developed from the ground up, covering primary logomark construction, custom display typography pairings, tactile paper stocks, editorial stationery guidelines, and high-impact sustainable packaging systems.",
  },
];

export type SkillItem = {
  label: string;
  href: string;
  level: number;
};

export const skillGroups: { title: string; items: SkillItem[] }[] = [
  {
    title: "Technical",
    items: [
      { label: "Python", href: "https://www.python.org/", level: 8 },
      { label: "Java", href: "https://www.java.com/", level: 7 },
      { label: "C++", href: "https://cplusplus.com/", level: 8 },
      { label: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", level: 9 },
      { label: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", level: 9 },
      { label: "MySQL", href: "https://www.mysql.com/", level: 7 },
      { label: "Firebase", href: "https://firebase.google.com/", level: 6 },
      { label: "Supabase", href: "https://supabase.com/", level: 5 },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html", level: 10 },
      { label: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html", level: 7 },
      { label: "Affinity", href: "https://affinity.serif.com/en-us/", level: 7 },
      { label: "Figma", href: "https://www.figma.com/", level: 9 },
      { label: "Framer", href: "https://www.framer.com/", level: 8 },
    ],
  },
  {
    title: "Productivity",
    items: [
      { label: "VS Code", href: "https://code.visualstudio.com/", level: 8 },
      { label: "Zed", href: "https://zed.dev/", level: 8 },
      { label: "Warp", href: "https://warp.dev/", level: 7 },
      { label: "Notion", href: "https://www.notion.so/", level: 7 },
      { label: "Claude Code", href: "https://docs.anthropic.com/en/docs/claude-code/overview", level: 7 },
      { label: "Opencode", href: "https://opencode.ai/", level: 8 },
      { label: "Antigravity", href: "https://antigravity.app/", level: 9 },
    ],
  },
];

export const resumeUrl = "/resume.pdf";

export const contactLinks: { label: string; value: string; href: string }[] = [
  { label: "Email", value: "worksarmaan@gmail.com", href: "mailto:worksarmaan@gmail.com" },
  { label: "GitHub", value: "@bugtoast", href: "https://github.com/bugtoast" },
  { label: "LinkedIn", value: "in/armaantxs", href: "https://www.linkedin.com/in/armaantxs" },
  { label: "Instagram", value: "@armaantxs", href: "https://www.instagram.com/armaantxs" },
  { label: "X", value: "@armaantxs", href: "https://x.com/armaantxs" },
];
