export interface FeaturedProject {
  id: string;
  title: string;
  tag: string;
  summary: string;
  points: string[];
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
}

export const PROFILE = {
  name: "Nafees Ahmed Bhatti",
  shortName: "Nafees",
  headline: "I build practical AI systems and fast web software.",
  subheadline:
    "AI Engineer at Drytis and Computer Science teacher at EMPHSS Bawli. I spend my days shipping LLM workflows, full-stack Next.js apps, and helping students actually understand how code works.",
  availability: "Open to AI & Full-Stack Collaborations",
  location: "Jammu & Kashmir, India",
  github: "https://github.com/NafeesAhmedBhatti",
  linkedin: "https://www.linkedin.com/in/nafees-ahmed-bhatti/",
  portrait: "/nafees.jpg",
};

export const IMPACT_STATS = [
  { value: "2+ Yrs", label: "Shipping Software & Teaching" },
  { value: "500+", label: "Students Trained in Full-Stack" },
  { value: "3 Live", label: "Production Apps on Vercel" },
  { value: "B.Tech", label: "Computer Science & Engg." },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "emphss-portal",
    title: "EMPHSS School Portal",
    tag: "Production System • Next.js + PostgreSQL",
    summary:
      "Built for English Medium Public Higher Secondary School, Bawli to replace paper registers with one digital portal for students, teachers, and school admins.",
    points: [
      "Student self-registration with instant Digital ID Card generation and 4-factor profile lookup",
      "Teacher workspace with pending approval queues, class directories, and Digital Award Roll",
      "Hardened with HttpOnly JWTs, PostgreSQL rate limiting, CSP headers, and RBAC",
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT"],
    image: "/projects/emphss-portal.png",
    liveUrl: "https://emphss.vercel.app",
    githubUrl: "https://github.com/NafeesAhmedBhatti/emphss-portal",
  },
  {
    id: "smartstudy-ai",
    title: "SmartStudy AI",
    tag: "AI Study Companion • React + Gemini",
    summary:
      "A study workspace where students upload PDFs, Word docs, or photos of handwritten notes and turn them into clear explanations, quizzes, flashcards, and mind maps.",
    points: [
      "Parses PDF, DOCX, TXT, and images with OCR plus YouTube lecture transcript summaries",
      "Generates interactive quizzes, spaced-repetition flashcards, and weekly study schedules",
      "Fast mobile-friendly layout with keyboard command search and light/dark themes",
    ],
    stack: ["React 19", "Vite", "Gemini AI", "Node.js", "Tesseract OCR", "Tailwind CSS"],
    image: "/projects/smartstudy-ai.png",
    liveUrl: "https://smartstudy-ai-mu.vercel.app",
    githubUrl: "https://github.com/NafeesAhmedBhatti/SmartStudy-AI",
  },
  {
    id: "ai-health-analyzer",
    title: "AI Health Analyzer",
    tag: "Clinical Intelligence • Next.js + LLMs",
    summary:
      "A personal health tool that reads blood and lab reports (CBC, Lipid, HbA1c, Thyroid), flags out-of-range values, and lets users ask follow-up questions in plain language.",
    points: [
      "Extracts structured markers from PDF/TXT lab reports with deterministic fallback checks",
      "Interactive vitals timeline charts for heart rate, blood pressure, BMI, and sleep",
      "Role-aware dashboard backed by NextAuth, Prisma ORM, and Recharts",
    ],
    stack: ["Next.js 16", "TypeScript", "Gemini / OpenAI", "Prisma", "Recharts", "NextAuth"],
    image: "/projects/ai-health-analyzer.png",
    liveUrl: "https://ai-health-analyzer-phi.vercel.app",
    githubUrl: "https://github.com/NafeesAhmedBhatti/AI-Health-Analyzer",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Drytis",
    period: "Mar 2026 – Present",
    location: "Remote / India",
    current: true,
    summary:
      "Working on production AI features, LLM integrations, and full-stack web workflows from initial architecture to deployment.",
    points: [
      "Integrating LLM APIs and structured prompt workflows into real customer-facing software.",
      "Designing reliable tool-calling pipelines and clean TypeScript/Python backend services.",
      "Handling debugging, refactoring, and performance tuning across full-stack releases.",
    ],
    stack: ["Python", "TypeScript", "Next.js", "LLMs", "PostgreSQL", "Prompt Engineering"],
  },
  {
    role: "Computer Science Teacher (Class 11 & 12)",
    company: "English Medium Public Higher Secondary School, Bawli",
    period: "Present",
    location: "Jammu & Kashmir",
    current: true,
    summary:
      "Teaching senior secondary Computer Science with a strong focus on writing real code rather than memorizing textbook definitions.",
    points: [
      "Running hands-on programming labs in Python and SQL so students debug and test their own logic.",
      "Mentoring Class 11 & 12 students through board theory, practical files, and one-on-one doubt sessions.",
      "Designed and launched the school's own live digital portal (EMPHSS Portal) used by staff and students.",
    ],
    stack: ["Python", "SQL", "Computer Science", "Lab Mentoring", "Board Exam Prep"],
  },
  {
    role: "Software Developer & Technical Trainer",
    company: "Desire Infotech",
    period: "Nov 2024 – Oct 2025",
    location: "India",
    summary:
      "Built MERN stack web applications for clients while training and mentoring over 500 students in practical software development.",
    points: [
      "Developed full-stack React, Node.js, Express, and MongoDB applications with REST APIs.",
      "Trained 500+ students through live coding, database modeling, and project code reviews.",
      "Kept training projects aligned with real production practices like Git workflows and clean debugging.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "AI & Machine Learning",
    items: [
      "LLM Integrations (OpenAI, Gemini)",
      "Tool-Calling Agents",
      "RAG & Document Parsing",
      "Prompt Engineering",
      "Python, Scikit-Learn, TensorFlow",
      "OpenCV, Pandas, NumPy",
    ],
  },
  {
    title: "Full-Stack Web",
    items: [
      "Next.js (App Router)",
      "React & TypeScript",
      "Node.js & Express",
      "Tailwind CSS",
      "Django & Laravel",
      "REST APIs & Validation",
    ],
  },
  {
    title: "Data, Security & Cloud",
    items: [
      "PostgreSQL & Neon",
      "MySQL & MongoDB",
      "Prisma ORM",
      "JWT, NextAuth & RBAC",
      "Rate Limiting & CSP Hardening",
      "Vercel, Git & GitHub",
    ],
  },
];

export const EDUCATION = [
  {
    year: "2024",
    degree: "B.Tech in Computer Science & Engineering",
    school: "Baba Ghulam Shah Badshah University",
    detail: "CGPA: 7.78 / 10",
  },
  {
    year: "2019",
    degree: "Class 12 (Science Stream)",
    school: "EMPHSS, Bawli",
    detail: "72.4%",
  },
  {
    year: "2017",
    degree: "Class 10 (Secondary)",
    school: "EMPHSS, Bawli",
    detail: "67%",
  },
];
