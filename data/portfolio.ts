export const personalInfo = {
  name: "Yashansh Rastogi",
  title: "Software Engineer",
  tagline: "I build things that actually work.",
  email: "yashanshrastogi@gmail.com",
  resumeUrl: "/resume/Yashansh_Rastogi_Resume.pdf",
  photo: "/images/yashansh.jpg",
  social: {
    github: "https://github.com/yashanshrastogi",
    linkedin: "https://www.linkedin.com/in/yashanshrastogi/",
    credly: "https://www.credly.com/users/yashanshrastogi/badges#credly",
    leetcode: "https://leetcode.com/u/yashansh_rastogi/",
    hackerrank: "https://www.hackerrank.com/profile/YASH_2003",
  },
};

export const rotatingTitles = ["Software Engineer", "Builder", "Problem Solver"];

export const skills = {
  languages: ["C++", "Python", "JavaScript", "TypeScript"],
  frontend: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["FastAPI", "Django", "REST APIs", "Prisma", "Redis"],
  aiMl: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "Ollama"],
  cloudTools: ["Google Cloud Platform", "Git & GitHub", "Vercel"],
};

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "citywallet",
    title: "CityWallet",
    subtitle: "AI-Powered Geolocation-Based Offer Delivery Platform",
    description:
      "Built a hyper-personalized discount delivery platform integrating Groq LLM for intelligent offer matching based on user location, weather, and calendar context. Features real-time event streaming via Google Cloud Pub/Sub and Redis.",
    tech: ["Next.js 14", "Django", "FastAPI", "TypeScript", "Groq LLM", "Google Cloud Pub/Sub", "Redis", "NextAuth 5", "Tailwind CSS"],
    github: "https://github.com/yashanshrastogi/City-Wallet",
    live: null,
    category: "AI / FULL STACK",
  },
  {
    id: 2,
    slug: "nexora",
    title: "Nexora",
    subtitle: "Offline Voice-Controlled OS Interface with Local LLM Integration",
    description:
      "Voice-controlled OS interface enabling real-time automation of 40+ system commands via speech and text. Integrated offline STT & TTS pipelines with multi-threaded architecture for low-latency, privacy-first performance.",
    tech: ["Python", "Ollama", "STT/TTS Pipelines", "Multi-threading"],
    github: "https://github.com/yashanshrastogi/Nexora-1.1",
    live: null,
    category: "AI / SYSTEMS",
  },
  {
    id: 3,
    slug: "edupath",
    title: "EduPath",
    subtitle: "AI-Powered Career Acceleration Platform for Developers",
    description:
      "Full-stack developer career platform featuring AI mentoring, personalized learning roadmaps, and in-browser coding skill verification via Monaco Editor. Deployed on Vercel with resume export functionality.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Groq/OpenRouter APIs", "Monaco Editor", "Recharts", "Vercel"],
    github: "https://github.com/yashanshrastogi/edupath",
    live: "https://edupath-self.vercel.app/",
    category: "AI / ML",
  },
];

export interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
  verificationLink?: string;
  image?: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "Agentic Premier League – Champion",
    organization: "Google Cloud",
    year: "2026",
    description:
      "Won Google Cloud's competitive AI hackathon by building and deploying real-time applications under time constraints.",
    image: "/images/apl-champion-badge.png",
  },
  {
    id: 2,
    title: "AI Rocket Badge",
    organization: "Microsoft Learn",
    year: "2024",
    description: "Ranked Top 15/300 in a Microsoft-led AI program for developing ML solutions.",
    verificationLink: "https://badges.parchment.com/public/assertions/NCm6e7taQPWjWTHEpQ89fQ",
    image: "/images/ai-rocket-badge.png",
  },
];

export interface Certification {
  id: number;
  title: string;
  organization: string;
  year: string;
  verificationLink: string;
  verifyLabel: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Cloud Generative AI Learning Path",
    organization: "Google Cloud",
    year: "2024",
    verificationLink: "https://www.skills.google/public_profiles/76df18dd-9b75-43fc-8d4a-29f1d000b004",
    verifyLabel: "View →",
  },
  {
    id: 2,
    title: "Microsoft Generative AI Specialization",
    organization: "Microsoft Learn",
    year: "2024",
    verificationLink: "https://learn.microsoft.com/en-in/users/yashanshrastogi99/",
    verifyLabel: "View →",
  },
  {
    id: 3,
    title: "Introduction to Cloud Computing",
    organization: "IBM (Coursera)",
    year: "2024",
    verificationLink: "https://www.coursera.org/account/accomplishments/verify/KXVKDF2PFLKQ",
    verifyLabel: "Verify →",
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & IT",
    institution: "KCC Institute of Technology & Management",
    duration: "October 2023 – Present",
    location: "Greater Noida",
    description: "Pursuing Bachelor of Technology with focus on AI, ML, and Software Development",
  },
];

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Awards", href: "/#awards" },
  { name: "Contact", href: "/#contact" },
];
