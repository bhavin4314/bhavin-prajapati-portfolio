export const profile = {
  name: "Bhavin Prajapati",
  role: "Full Stack Developer",
  email: "bhavinprajapati8548@gmail.com",
  github: "https://github.com/bhavin4314",
  linkedin: "https://www.linkedin.com/in/bhavin-prajapati-2477b5213",
  resume:
    "https://drive.google.com/file/d/1uNFa5yYcS9foZM9cfeYWfmTI6A0g3lDl/view?usp=drive_link",
  location: "Ahmedabad, India",
  availability: "Open to full-stack roles",
}

export const experiences = [
  {
    title: "Software Engineer",
    company: "Zignuts Technolab",
    duration: "Oct 2022 – Present",
    location: "Gandhinagar, India",
    bullets: [
      "Built full-stack web apps with React, Next.js, Node.js, Express.js, PostgreSQL and MongoDB.",
      "Designed backend API endpoints and integrated REST APIs and third-party services (Stripe, Twilio, Google Maps).",
      "Led full-stack and frontend delivery on multiple projects from planning to release, working with backend developers, QA, designers and stakeholders.",
      "Reviewed pull requests, mentored developers, kept delivery on schedule.",
      "Gathered requirements and proposed technical solutions directly with clients.",
    ],
  },
  {
    title: "Intern",
    company: "Zignuts Technolab",
    duration: "Apr 2022 – Sep 2022",
    location: "Gandhinagar, India",
    bullets: ["Started on the frontend, building React.js interfaces."],
  },
]

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* Tier 1: full-stack case studies. Only (a) and (b) may describe       */
/* backend work. Tier 2: frontend / contributed work, no backend claims.*/
/* ------------------------------------------------------------------ */

export const scopeLayers = ["UI", "API", "Database", "Real-time", "Payments", "Auth"] as const
export type ScopeLayer = (typeof scopeLayers)[number]

export type FeaturedProject = {
  id: string
  title: string
  problem: string
  frontend: string[]
  backend: string[]
  stack: string[]
  scope: ScopeLayer[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "smart-queue",
    title: "Smart Queue & Appointment Management Solution",
    problem:
      "A cloud-based platform for managing queues and appointments. Customers use a web portal to book and follow their place in line, and agents use a separate portal to manage the queue and bookings in real time.",
    frontend: [
      "Customer Web Portal and Agent Web Portal in React.",
      "Queue and booking views that update live as events arrive over WebSockets.",
    ],
    backend: [
      "Node.js and Express.js REST APIs backed by PostgreSQL.",
      "Real-time updates pushed to both portals with Socket.io.",
      "Twilio integration for customer communication.",
      // TODO(Bhavin): list the main endpoints (bookings, queues, agents...).
      // TODO(Bhavin): describe the PostgreSQL data model (key tables and relations).
      // TODO(Bhavin): describe auth and roles (customer vs agent), if any.
      // TODO(Bhavin): name the Socket.io events and what triggers them.
      // TODO(Bhavin): say what Twilio is used for (confirmations, reminders, ...).
    ],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "WebSockets (Socket.io)", "Twilio", "REST APIs"],
    // Payments and Auth are not in the facts for this project, so they stay unmarked.
    scope: ["UI", "API", "Database", "Real-time"],
  },
  {
    id: "crave-now",
    title: "Crave-Now: Multi-Tenant Retail & Food Store Subscription Platform",
    problem:
      "A multi-tenant platform where businesses register and create Food or Retail stores on subscription plans. It has an Admin panel and a Customer panel.",
    frontend: [
      "Admin and Customer panels in Next.js and React.",
      "Styled with Tailwind CSS and MUI.",
    ],
    backend: [
      "Node.js and Express.js APIs backed by MongoDB.",
      "Multi-tenant model: businesses register and create stores under subscription plans.",
      "Role-based access control for two roles, Business User and Store User.",
      "Payments through Stripe, plus Twilio.",
      // TODO(Bhavin): list the main endpoints (business, store, plan, order...).
      // TODO(Bhavin): describe the MongoDB collections and how tenants are separated.
      // TODO(Bhavin): describe how auth and the two roles are enforced.
      // TODO(Bhavin): describe the subscription and payment flow (webhooks, plan changes...).
      // TODO(Bhavin): say what Twilio is used for.
    ],
    stack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Stripe", "Twilio", "Tailwind CSS", "MUI"],
    scope: ["UI", "API", "Database", "Payments", "Auth"],
  },
]

export type MoreProject = {
  id: string
  title: string
  badge: string
  summary: string
  stack: string[]
}

// Order matters: (c) and (d) first because real-time work is relevant to full-stack roles.
// None of these may claim backend work.
export const moreProjects: MoreProject[] = [
  {
    id: "procurement",
    title: "Procurement & Bidding Platform",
    badge: "Contributed · UI + real-time",
    summary:
      "A cloud procurement platform for Auction, RFI, RFP and RFQ processes that streamlines buyer-supplier communication. I contributed the UI, real-time bidding over WebSockets for live updates during bidding sessions, and REST API integration.",
    stack: ["React", "WebSockets", "Material UI", "JavaScript", "REST APIs"],
  },
  {
    id: "recruitment",
    title: "Job Vacancy Search & Recruitment Platform",
    badge: "UI + real-time + integrations",
    summary:
      "Companies create vacancies, match candidates and chat in real time; job seekers search, apply and get personalised recommendations. I built the UI, the real-time chat client, role-based access and the Google Maps and Mixpanel integrations.",
    stack: ["Next.js", "React", "WebSockets", "Google Maps API", "Mixpanel", "Tailwind CSS"],
  },
  {
    id: "marketplace",
    title: "Geolocation-Based Service Marketplace",
    badge: "UI + maps + push notifications",
    summary:
      "A two-sided marketplace connecting individuals and businesses with skilled service professionals by location, with provider registration and promotion tools. I built the UI, the Google Maps features and Firebase push notifications.",
    stack: ["React", "Redux", "Google Maps API", "Firebase Push Notifications", "JavaScript"],
  },
  {
    id: "resource-planning",
    title: "Resource Planning & Analytics Platform",
    badge: "Frontend",
    summary:
      "I built the frontend of an AI-driven multi-tenant SaaS for project and resource planning, with 23+ interactive reports, smart workload forecasting and project insights.",
    stack: ["React", "TypeScript", "Redux", "TanStack Query", "REST APIs"],
  },
  {
    id: "digital-manual",
    title: "Interactive Digital Manual & Portfolio Platform for Furniture Manufacturers",
    badge: "Frontend",
    summary:
      "A SaaS for furniture suppliers and manufacturers to create live digital assembly manuals with customizable templates and interactive features. I built the frontend.",
    stack: ["React.js", "React Context", "Reactstrap", "JavaScript"],
  },
]

/* "How I build": each point cites a project only where its scope supports it. */
export const howIBuild = [
  {
    title: "Real-time with Socket.io",
    text: "Queue and booking changes reach customers and agents as they happen, over WebSockets.",
    project: "Smart Queue & Appointment Management",
  },
  {
    title: "Payments and subscriptions",
    text: "Stores run on subscription plans, with payments through Stripe.",
    project: "Crave-Now",
  },
  {
    title: "Multi-tenant and role-based access",
    text: "Businesses register and create their own stores, and two roles (Business User and Store User) control what each person can do.",
    project: "Crave-Now",
  },
  {
    title: "Third-party integrations",
    text: "Twilio and Stripe on the backend; Google Maps and Mixpanel on the client.",
    project: "Smart Queue, Crave-Now, Job Vacancy Search",
  },
]

export const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Shadcn/UI",
      "Reactstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API design", "WebSockets (Socket.io)"],
  },
  { title: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { title: "State & data fetching", items: ["Redux", "Context API", "TanStack Query"] },
  {
    title: "Integrations",
    items: ["Stripe", "Twilio", "Google Maps API", "Mixpanel", "Firebase Push Notifications"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "ESLint", "Prettier", "npm/pnpm/yarn", "GitHub Copilot", "Cursor", "Claude Code"],
  },
]

export const education = {
  degree: "B.E. in Computer Engineering",
  school: "Government Engineering College, Gandhinagar",
  duration: "2018 – 2022",
  result: "CGPA 8.91",
}

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Work", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
]
