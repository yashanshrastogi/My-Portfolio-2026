// Personal Information
export const personalInfo = {
  name: "Yashansh Rastogi",
  title: "Software Engineer",
  tagline: "I build things that actually work.",
  email: "yashanshrastogi@gmail.com",
  footerTagline: "I build things that actually work.",
  resumeUrl: "/resume/Yashansh_Rastogi_Resume.pdf",
  social: {
    github: "https://github.com/yashanshrastogi",
    linkedin: "https://www.linkedin.com/in/yashanshrastogi/",
    credly: "https://www.credly.com/users/yashanshrastogi/badges#credly",
    leetcode: "https://leetcode.com/u/yashansh_rastogi/",
    hackerrank: "https://www.hackerrank.com/profile/YASH_2003",
  }
};

// Skills organized by category
export const skills = {
  languages: [
    { name: "C++", level: "Advanced", icon: "code" },
    { name: "Python", level: "Advanced", icon: "terminal" },
    { name: "JavaScript", level: "Advanced", icon: "code-2" },
    { name: "TypeScript", level: "Advanced", icon: "file-code-2" },
  ],
  frontend: [
    { name: "React.js", level: "Advanced", icon: "layout" },
    { name: "Next.js", level: "Advanced", icon: "layers" },
    { name: "HTML/CSS", level: "Advanced", icon: "file-code" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "palette" },
  ],
  backend: [
    { name: "FastAPI", level: "Advanced", icon: "zap" },
    { name: "Django", level: "Intermediate", icon: "server" },
    { name: "REST APIs", level: "Advanced", icon: "route" },
  ],
  ai_ml: [
    { name: "TensorFlow", level: "Intermediate", icon: "network" },
    { name: "PyTorch", level: "Intermediate", icon: "flame" },
    { name: "scikit-learn", level: "Intermediate", icon: "bar-chart" },
    { name: "LangChain", level: "Intermediate", icon: "link" },
    { name: "Ollama", level: "Intermediate", icon: "bot" },
  ],
  cloud_tools: [
    { name: "Google Cloud Platform", level: "Intermediate", icon: "cloud" },
    { name: "Git & GitHub", level: "Advanced", icon: "git-branch" },
    { name: "Prisma", level: "Intermediate", icon: "database" },
    { name: "Redis", level: "Intermediate", icon: "hard-drive" },
  ]
};

// Projects data
export const projects = [
  {
    id: 1,
    title: "CityWallet",
    subtitle: "AI-Powered Geolocation-Based Offer Delivery Platform",
    description: "Built a hyper-personalized discount delivery platform integrating Groq LLM for intelligent offer matching based on user location, weather, and calendar context. Features real-time event streaming via Google Cloud Pub/Sub and Redis.",
    tech: ["Next.js 14", "Django", "FastAPI", "TypeScript", "Groq LLM", "Google Cloud Pub/Sub", "Redis", "NextAuth 5", "Tailwind CSS"],
    github: "https://github.com/yashanshrastogi/City-Wallet",
    live: null,
    image: null,
    category: "AI / Full Stack",
  },
  {
    id: 2,
    title: "Nexora",
    subtitle: "Offline Voice-Controlled OS Interface with Local LLM Integration",
    description: "Voice-controlled OS interface enabling real-time automation of 40+ system commands via speech and text. Integrated offline STT & TTS pipelines with multi-threaded architecture for low-latency, privacy-first performance.",
    tech: ["Python", "Ollama", "STT/TTS Pipelines", "Multi-threading"],
    github: "https://github.com/yashanshrastogi/Nexora-1.1",
    live: null,
    image: null,
    category: "AI / Systems",
  },
  {
    id: 3,
    title: "EduPath",
    subtitle: "AI-Powered Career Acceleration Platform for Developers",
    description: "Full-stack developer career platform featuring AI mentoring, personalized learning roadmaps, and in-browser coding skill verification via Monaco Editor. Deployed on Vercel with resume export functionality.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Groq/OpenRouter APIs", "Monaco Editor", "Recharts", "Vercel"],
    github: "https://github.com/yashanshrastogi/edupath",
    live: "https://edupath-self.vercel.app/",
    image: null,
    category: "AI/ML",
  },
];

// Experience data
export const experience = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "ByteEdu",
    link: "https://byteedu.co.in/",
    type: "Internship",
    duration: "2024 – 2025",
    location: "Remote",
    description: [
      "Engineered reusable React.js components, optimizing rendering performance and enhancing UI/UX across critical user flows.",
      "Integrated RESTful APIs for real-time dynamic data rendering, enabling seamless frontend-backend communication and improving application responsiveness.",
    ],
    tech: ["React.js", "RESTful APIs", "JavaScript", "TypeScript"],
  }
];

// Education data
export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & IT",
    institution: "Dr. APJ Abdul Kalam Technical University",
    location: "Greater Noida",
    duration: "October 2023 – Present",
    description: "Pursuing Bachelor of Technology with focus on AI, ML, and Software Development",
  },
  {
    id: 2,
    degree: "Senior Secondary (12th Grade)",
    institution: "Ramjas Sr. Sec School (CBSE)",
    location: "New Delhi",
    duration: "2020 – 2022",
    description: "Completed 12th grade with PCM",
  },
  {
    id: 3,
    degree: "Secondary (10th Grade)",
    institution: "Ramjas Sr. Sec School (CBSE)",
    location: "New Delhi",
    duration: "2019 – 2020",
    description: "Completed 10th grade with distinction",
  }
];

// Awards and achievements
export const awards = [
  {
    id: 1,
    title: "Agentic Premier League – Champion",
    organization: "Google Cloud",
    year: "2026",
    description: "Built and deployed real-time applications (Live IPL scoreboard & finance assistant) on Google Cloud under time constraints.",
    icon: "trophy",
    color: "yellow",
    image: "/images/apl-champion-badge.png",
  },
  {
    id: 2,
    title: "AI Rocket Badge",
    organization: "Microsoft Learn",
    year: "2024",
    description: "Top 15/300 in a Microsoft-led AI program for developing ML solutions.",
    icon: "rocket",
    color: "blue",
    verificationLink: "https://badges.parchment.com/public/assertions/NCm6e7taQPWjWTHEpQ89fQ",
    image: "/images/ai-rocket-badge.png",
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: "Google Cloud Generative AI Learning Path",
    organization: "Google Cloud",
    year: "2024",
    type: "Learning Path",
    skills: ["Generative AI", "Google Cloud", "Machine Learning"],
    verificationLink: "https://www.skills.google/public_profiles/76df18dd-9b75-43fc-8d4a-29f1d000b004",
  },
  {
    id: 2,
    title: "Microsoft Learn Generative AI Specialization",
    organization: "Microsoft",
    year: "2024",
    type: "Specialization",
    skills: ["Generative AI", "Azure", "AI Development"],
    verificationLink: "https://learn.microsoft.com/en-in/users/yashanshrastogi99/",
  },
  {
    id: 3,
    title: "Introduction to Cloud Computing",
    organization: "IBM (Coursera)",
    year: "2024",
    type: "Professional Certificate",
    skills: ["Cloud Computing", "IBM Cloud", "Infrastructure"],
    verificationLink: "https://www.coursera.org/account/accomplishments/verify/KXVKDF2PFLKQ",
    image: "/images/ibm-cloud-badge.png",
  },
];

// Navigation links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];
