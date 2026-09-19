/**
 * Single source of truth for all resume / portfolio content.
 * Every page and component reads from here — no content lives in JSX.
 */

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "email"
  | "twitter"
  | "leetcode"
  | "geeksforgeeks";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  handle: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Founder" | "Freelance" | "Project" | "Internship";
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export type ProjectCategory =
  | "Full-Stack"
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Open Source";

export type SkillLevel = "Expert" | "Advanced" | "Proficient" | "Familiar";

export interface Skill {
  name: string;
  level: SkillLevel;
  /** 0-100 — used for progress bars. */
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  email: string;
  location: string;
  resumeUrl: string;
  twitterHandle?: string;
}

export const site: SiteConfig = {
  name: "Mahesh Rathod",
  shortName: "Mahesh",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building scalable web experiences — from React frontends to Node.js backends.",
  description:
    "Mahesh Rathod is a full-stack software engineer specializing in React, Next.js, Node.js, and TypeScript. Explore his portfolio of shipped products, automation tools, and engineering experience.",
  url: "https://maheshrathod.dev",
  ogImage: "/og-image.png",
  keywords: [
    "Mahesh Rathod",
    "Mahesh Rathod portfolio",
    "Mahesh Rathod Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Engineer",
    "TypeScript",
    "Software Engineer India",
    "Redis",
    "PostgreSQL",
    "Prisma",
    "BullMQ",
  ],
  email: "rathodmaheshofficial21@gmail.com",
  location: "India",
  resumeUrl: "/resume.pdf",
};

export const hiringEmail = {
  subject: "Full-Stack Software Engineer opportunity — [Company]",
  body: `Hi Mahesh,

I'm reaching out from [Company] about a Full-Stack Software Engineer opening on our team.

Your work on production React and Node.js systems — including RFQ automation at Atomic Loops and the news platform you founded — stood out, and I'd like to explore whether this role could be a fit.

Would you be open to a brief conversation this week?

Best regards,
[Your Name]
[Your Title], [Company]`,
};

export function gmailComposeUrl() {
  const query = [
    "view=cm",
    "fs=1",
    "tf=1",
    `to=${encodeURIComponent(site.email)}`,
    `su=${encodeURIComponent(hiringEmail.subject)}`,
    `body=${encodeURIComponent(hiringEmail.body)}`,
  ].join("&");

  return `https://mail.google.com/mail/?${query}`;
}

export const socials: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/Mahi-Rathod",
    handle: "@Mahi-Rathod",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mahesh-rathod13/",
    handle: "in/mahesh-rathod13",
  },
  {
    platform: "leetcode",
    label: "LeetCode",
    url: "https://leetcode.com/u/Mahi-Rathod/",
    handle: "@Mahi-Rathod",
  },
  {
    platform: "geeksforgeeks",
    label: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/rathod_mahesh123",
    handle: "rathod_mahesh123",
  },
  {
    platform: "email",
    label: "Email",
    url: `mailto:${site.email}`,
    handle: site.email,
  },
];

export const stats: Stat[] = [
  { value: "1+", label: "Years experience" },
  { value: "8+", label: "Projects shipped" },
  { value: "1K+", label: "Daily active users" },
  { value: "95%", label: "Processing time saved" },
];

export const aboutSummary: string[] = [
  "I'm a full-stack engineer with a bias for shipping. I build performant web applications end-to-end — from accessible React UIs to type-safe Node.js APIs and cloud-deployed infrastructure.",
  "Currently engineering RFQ automation tooling at Atomic Loops, where I cut manual processing time by 95% with XYFlow-driven flowcharts and TanStack Table pipelines.",
  "I also founded Hindutva Digitals — a Next.js news platform with Redis caching, AI translation, and BullMQ background jobs. Organic daily users grew from ~500 to ~1000 with SSR SEO and AWS-backed infrastructure.",
];

export const experiences: ExperienceItem[] = [
  {
    id: "atomic-loops",
    company: "Atomic Loops Pvt. Ltd.",
    role: "Software Engineer",
    type: "Full-time",
    location: "India",
    startDate: "May 2025",
    endDate: "Present",
    current: true,
    summary:
      "Engineering the IAC RFQ Automation Tool — replacing Excel-based RFQ workflows with a visual, RBAC-aware React platform.",
    highlights: [
      "Built the frontend architecture in React.js and TypeScript, improving RFQ accuracy by 90% and cutting processing time by 95%.",
      "Architected document-level RBAC with three access tiers (View / View-Edit / View-Edit-Status Change) across Admin, Employee, and Vendor roles.",
      "Shipped role-specific layouts, including a fully isolated supplier-facing experience for Vendors.",
      "Developed RFQ assignment workflows so Sales can allocate employees while restricting document visibility to assigned teammates.",
      "Visualized complex RFQ and collaboration processes with XYFlow and Excel-like TanStack Table editors.",
    ],
    stack: [
      "React",
      "TypeScript",
      "XYFlow",
      "TanStack Table",
      "Tailwind CSS",
      "RBAC",
    ],
  },
  {
    id: "hindutva-digitals",
    company: "Hindutva Digitals",
    role: "Founder & Full-Stack Engineer",
    type: "Founder",
    location: "Remote",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    current: false,
    summary:
      "Founded and shipped a four-language digital news platform — owning product, APIs, caching, AI pipelines, and cloud infrastructure.",
    highlights: [
      "Designed the full stack in Next.js, React, Node.js, PostgreSQL, and Prisma, publishing in English, Hindi, Marathi, and French.",
      "Implemented Redis caching that cut average API response time from ~400ms to 40–50ms (~90% faster).",
      "Built an AI translation pipeline so one article auto-publishes across all four languages, plus an LLM cron pipeline generating scheduled content from Excel/CSV title lists.",
      "Ran background jobs with BullMQ and Redis for translation, scheduled publishing, and content generation.",
      "Dockerized services, deployed the API on AWS EC2 with media on S3, hosted the frontend on Vercel, and grew organic DAU from ~500 to ~1000 with SSR SEO.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "AWS",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "hindutva-digitals",
    name: "Hindutva Digitals",
    tagline: "Four-language news platform I founded",
    description:
      "A full-stack news platform I founded and built in Next.js, Node.js, PostgreSQL, and Prisma. Redis caching, AI translation, and BullMQ background jobs power publishing across English, Hindi, Marathi, and French — organic DAU grew from ~500 to ~1000 with SSR SEO.",
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "AWS",
    ],
    category: "Full-Stack",
    githubUrl: "https://github.com/maheshrathod/hindutva-digitals",
    highlights: [
      "Redis cache: ~400ms → 40–50ms (~90% faster)",
      "AI translation across four languages",
      "BullMQ + Redis background jobs",
      "Organic DAU ~500 → ~1000 with SSR SEO",
    ],
  },
  {
    id: "swastik-events",
    name: "Swastik Events",
    tagline: "Event-booking platform",
    description:
      "Full-stack event-booking platform (Node.js, Express, React, Postgres) where suppliers independently list and manage packages while customers browse and book online. JWT + middleware RBAC, bcrypt hashing, and Zod-validated APIs.",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "JWT", "Zod"],
    category: "Full-Stack",
    githubUrl: "https://github.com/maheshrathod/swastik-events",
    highlights: [
      "JWT auth with middleware RBAC",
      "bcrypt hashing + Zod API validation",
      "Query and API response optimization",
    ],
  },
  {
    id: "iac-rfq-automation",
    name: "IAC RFQ Automation Tool",
    tagline: "Visual RFQ pipeline for ops teams",
    description:
      "React + TypeScript automation of Excel-based RFQ workflows. Document-level RBAC, role-specific Admin / Employee / Vendor layouts, XYFlow visualization, and TanStack Table editors — 90% accuracy and 95% faster processing.",
    stack: ["React", "TypeScript", "XYFlow", "TanStack Table", "Tailwind CSS"],
    category: "Frontend",
    highlights: [
      "90% accuracy, 95% faster RFQ processing",
      "Three-tier document RBAC (View / Edit / Status)",
      "XYFlow workflows + TanStack Table",
    ],
  },
  {
    id: "go-foodie-backend",
    name: "Go-Foodie Backend",
    tagline: "Food-delivery REST API",
    description:
      "REST API for a food delivery platform — password and OTP auth, server-side sessions, and the core data model for users, addresses, restaurants, and delivery roles. Built with Node.js, Express 5, TypeScript, Prisma, and PostgreSQL.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Twilio",
      "Zod",
    ],
    category: "Backend",
    highlights: [
      "Password + Twilio OTP login with JWT access/refresh sessions",
      "RBAC roles: USER, ADMIN, DELIVERY, RESTAURANT",
      "Helmet, CORS, XSS protection, and rate limiting",
      "Dockerized Node 20 API with Prisma migrations",
    ],
  },
  {
    id: "date-fns-mr",
    name: "date-fns Marathi Locale",
    tagline: "Marathi locale for date-fns",
    description:
      "Complete Marathi (मराठी) locale for date-fns with native Devanagari digits (०-९). Formatting, relative time, distance, parsing, and full TypeScript types — published as date-fns-mr.",
    stack: ["TypeScript", "date-fns", "i18n"],
    category: "Open Source",
    liveUrl: "https://www.npmjs.com/package/date-fns-mr",
    highlights: [
      "Native Devanagari digits and full month/day translations",
      "Distance, relative time, and ordinal formatting",
      "Zero runtime deps besides the date-fns peer",
    ],
  },
  {
    id: "memorise",
    name: "MemoRise",
    tagline: "Client-side notes app",
    description:
      "Fully client-side notes app with pending, completed, and archived states. Add, update, delete, set a time-to-complete, and fire alarms — all persisted in LocalStorage.",
    stack: ["React", "LocalStorage", "React Hook Form", "Zod", "shadcn/ui"],
    category: "Frontend",
    highlights: [
      "Three statuses: pending, completed, archived",
      "CRUD with due times and alarms",
      "React Hook Form + Zod, no backend required",
    ],
  },
  {
    id: "todo-list",
    name: "To-Do List",
    tagline: "Date-grouped task manager",
    description:
      "Web task manager that stores title, description, due date, and time in LocalStorage. Tasks stay grouped by due date and persist across refreshes.",
    stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    category: "Frontend",
    githubUrl: "https://github.com/Mahi-Rathod/To-Do-List",
    highlights: [
      "Add, edit, and delete tasks with date and time",
      "Grouped view by due date",
      "Persistent LocalStorage, responsive layout",
    ],
  },
  {
    id: "library-management-system",
    name: "Library Management System",
    tagline: "Java + MySQL CLI",
    description:
      "CLI library system for books and members — add/remove books, register users, borrow and return, and list inventory. Built with Java, JDBC, and MySQL.",
    stack: ["Java", "JDBC", "MySQL"],
    category: "Backend",
    githubUrl: "https://github.com/Mahi-Rathod/Library-Management-System-CLI",
    highlights: [
      "Book and member CRUD over JDBC",
      "Borrow/return with a borrowed_books join table",
      "DAO + service + CLI layered structure",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Day-to-day programming languages I reach for.",
    skills: [
      { name: "TypeScript", level: "Advanced", proficiency: 90 },
      { name: "JavaScript", level: "Advanced", proficiency: 92 },
      { name: "Python", level: "Proficient", proficiency: 75 },
      { name: "Java", level: "Proficient", proficiency: 70 },
      { name: "C", level: "Familiar", proficiency: 58 },
      { name: "C++", level: "Familiar", proficiency: 60 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Frameworks and design systems for shipping UIs.",
    skills: [
      { name: "React.js", level: "Expert", proficiency: 95 },
      { name: "Next.js", level: "Advanced", proficiency: 90 },
      { name: "Redux", level: "Advanced", proficiency: 85 },
      { name: "Redux Toolkit", level: "Advanced", proficiency: 84 },
      { name: "React Router", level: "Advanced", proficiency: 86 },
      { name: "Tailwind CSS", level: "Advanced", proficiency: 92 },
      { name: "shadcn/ui", level: "Advanced", proficiency: 88 },
      { name: "MUI", level: "Proficient", proficiency: 78 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Security",
    description: "APIs, realtime, auth, and request validation.",
    skills: [
      { name: "Node.js", level: "Advanced", proficiency: 90 },
      { name: "Express.js", level: "Advanced", proficiency: 88 },
      { name: "REST APIs", level: "Advanced", proficiency: 90 },
      { name: "GraphQL", level: "Familiar", proficiency: 62 },
      { name: "WebSocket", level: "Proficient", proficiency: 72 },
      { name: "WebRTC", level: "Familiar", proficiency: 58 },
      { name: "JWT", level: "Advanced", proficiency: 88 },
      { name: "RBAC", level: "Advanced", proficiency: 86 },
      { name: "Argon2", level: "Proficient", proficiency: 78 },
      { name: "Zod", level: "Advanced", proficiency: 86 },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data",
    description: "Schema design, ORMs, caching, and query optimization.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", proficiency: 86 },
      { name: "MySQL", level: "Proficient", proficiency: 75 },
      { name: "MongoDB", level: "Proficient", proficiency: 78 },
      { name: "Redis", level: "Advanced", proficiency: 84 },
      { name: "Prisma", level: "Advanced", proficiency: 85 },
      { name: "Sequelize", level: "Proficient", proficiency: 74 },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description: "Cloud, containers, CI/CD, and developer tooling.",
    skills: [
      { name: "AWS EC2", level: "Proficient", proficiency: 78 },
      { name: "AWS S3", level: "Proficient", proficiency: 80 },
      { name: "Docker", level: "Proficient", proficiency: 80 },
      { name: "CI/CD", level: "Proficient", proficiency: 72 },
      { name: "Git", level: "Advanced", proficiency: 92 },
      { name: "GitHub", level: "Advanced", proficiency: 90 },
      { name: "Postman", level: "Advanced", proficiency: 85 },
      { name: "Thunder Client", level: "Proficient", proficiency: 76 },
      { name: "Vercel", level: "Advanced", proficiency: 88 },
    ],
  },
  {
    id: "testing",
    title: "Testing & Design",
    description: "Verification, architecture, and computer-science fundamentals.",
    skills: [
      { name: "Jest", level: "Proficient", proficiency: 74 },
      { name: "Mocha", level: "Familiar", proficiency: 62 },
      { name: "System Design", level: "Proficient", proficiency: 70 },
      { name: "DSA", level: "Proficient", proficiency: 76 },
      { name: "OOP", level: "Advanced", proficiency: 82 },
    ],
  },
  {
    id: "ai",
    title: "AI / Automation",
    description: "LLM pipelines, translation, and background job systems.",
    skills: [
      { name: "LLM content generation", level: "Proficient", proficiency: 78 },
      { name: "AI translation pipelines", level: "Proficient", proficiency: 80 },
      { name: "BullMQ", level: "Proficient", proficiency: 76 },
      { name: "Cron automation", level: "Proficient", proficiency: 75 },
    ],
  },
];

export const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
