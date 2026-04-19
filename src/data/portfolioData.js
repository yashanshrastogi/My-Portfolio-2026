// Personal Information
export const personalInfo = {
  name: "Yashansh Rastogi",
  title: "Software Developer",
  tagline: "B.Tech (CS/IT) student and software developer building AI-driven, scalable systems with experience in machine learning, backend development, and cloud technologies.",
  email: "yashanshrastogi@gmail.com",
  location: "Delhi NCR (Noida, Gurgaon), India",
  footerTagline: "Software Developer & AI Enthusiast building the future with passion and precision.",
  passionateLine: "Crafting digital excellence with focus and curiosity.",
  resumeUrl: "/resume/Yashansh_Rastogi_Resume.pdf",
  social: {
    github: "https://github.com/lets-code404",
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
  ],
  frontend: [
    { name: "React.js", level: "Advanced", icon: "layout" },
    { name: "HTML/CSS", level: "Advanced", icon: "file-code" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "palette" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "server" },
    { name: "Express.js", level: "Advanced", icon: "route" },
    { name: "REST APIs", level: "Advanced", icon: "api" },
  ],
  database: [
    { name: "MongoDB", level: "Intermediate", icon: "database" },
  ],
  ai_ml: [
    { name: "Machine Learning", level: "Intermediate", icon: "brain" },
    { name: "TensorFlow", level: "Intermediate", icon: "network" },
    { name: "PyTorch", level: "Intermediate", icon: "flame" },
    { name: "scikit-learn", level: "Intermediate", icon: "bar-chart" },
  ],
  cloud_tools: [
    { name: "Google Cloud Platform", level: "Intermediate", icon: "cloud" },
    { name: "Git & GitHub", level: "Advanced", icon: "git-branch" },
    { name: "Streamlit", level: "Intermediate", icon: "app-window" },
    { name: "Ollama", level: "Intermediate", icon: "bot" },
  ]
};

// Projects data
export const projects = [
  {
    id: 1,
    title: "Nexora",
    subtitle: "Offline Voice-Controlled OS Interface with Local LLM Integration",
    description: "Built a voice-controlled OS interface enabling real-time automation of 40+ system commands via speech and text inputs. Integrated offline STT & TTS pipelines and local LLM (Ollama) using multi-threaded architecture for low-latency, privacy-first performance.",
    tech: ["Python", "Ollama", "Speech Recognition", "Multi-threading", "Local LLM"],
    github: "https://github.com/lets-code404/Nexora-1.1",
    live: null,
    image: null,
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Career Compass",
    subtitle: "GenAI Career Guidance Application",
    description: "Built and deployed a generative AI application using Streamlit and prompt-based workflows for personalized career guidance. Features AI-powered career recommendations and skill gap analysis.",
    tech: ["Python", "Streamlit", "OpenAI API", "Prompt Engineering"],
    github: "https://github.com/teamprojects404/hacknerds/",
    live: "https://careercompass-hacknerds.streamlit.app",
    image: null,
    category: "GenAI",
  },
  {
    id: 3,
    title: "Gemini Decode",
    subtitle: "AI Text Analysis Application",
    description: "Developed an AI-powered text analysis tool using Google's Gemini API. Enables intelligent text processing, summarization, and content generation through an intuitive Streamlit interface.",
    tech: ["Python", "Streamlit", "Google Gemini API", "NLP"],
    github: "https://github.com/lets-code404/Gemini-Decode",
    live: "https://gemini-decode.streamlit.app/",
    image: null,
    category: "GenAI",
  },
  {
    id: 4,
    title: "ML Projects Collection",
    subtitle: "Computer Vision & NLP Models",
    description: "Developed machine learning and deep learning models including handwritten digit recognition (MNIST), image classification (CIFAR-10 using CNN), and sentiment analysis on IMDb reviews using LSTM. Applied supervised learning and neural network architectures using TensorFlow, PyTorch, and scikit-learn.",
    tech: ["TensorFlow", "PyTorch", "CNN", "LSTM", "GAN", "scikit-learn"],
    github: "https://github.com/lets-code404/MLSC_Projects",
    live: null,
    image: null,
    category: "ML",
  },
  {
    id: 5,
    title: "IPL Live Scoreboard",
    subtitle: "Real-time Cricket Dashboard",
    description: "Built and deployed a real-time IPL scoreboard application on Google Cloud. Features live match updates, player statistics, and interactive visualizations. Deployed under time constraints during the Agentic Premier League competition.",
    tech: ["Python", "Google Cloud", "Streamlit", "REST APIs", "Data Visualization"],
    github: "https://github.com/lets-code404/IPL-score-card",
    live: "https://ipl-dashboard-254156202000.us-central1.run.app/",
    image: null,
    category: "Cloud",
  },
  {
    id: 6,
    title: "Financial Assistant",
    subtitle: "Expense Tracking & Finance Manager",
    description: "Developed an intelligent expense tracking application with Google Cloud deployment. Features automated expense categorization, budget tracking, and financial insights dashboard.",
    tech: ["Python", "Google Cloud", "Streamlit", "Data Analysis"],
    github: "https://github.com/lets-code404/Expense-Tracker",
    live: "https://dulcet-clock-492815-f7.uc.r.appspot.com/",
    image: null,
    category: "Cloud",
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
    duration: "November 2024 – January 2025",
    location: "Remote",
    description: [
      "Developed and optimized React-based UI components, improving performance and user experience",
      "Integrated REST APIs to enable dynamic data rendering and seamless frontend-backend interaction",
      "Collaborated with senior developers to implement responsive design patterns",
    ],
    tech: ["React.js", "REST APIs", "JavaScript", "CSS"],
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
    duration: "2021 – 2022",
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
