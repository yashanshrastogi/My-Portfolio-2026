# Yashansh Rastogi - Portfolio Website

A modern, aesthetic portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Dark Modern Theme** with purple/violet gradient accents
- **Glassmorphism Design** with subtle animations
- **8 Sections**: Hero, About, Skills, Projects, Experience, Education, Awards, Contact
- **Fully Responsive** - Mobile-first design
- **Smooth Animations** powered by Framer Motion
- **3D Background Effects** with gradient orbs
- **Floating Navigation** with scroll tracking

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Project Structure

```
src/
├── components/
│   ├── sections/        # All page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Awards.jsx
│   │   └── Contact.jsx
│   └── ui/              # Reusable UI components
│       ├── FloatingNav.jsx
│       ├── GlassCard.jsx
│       ├── ProjectCard.jsx
│       ├── SectionTitle.jsx
│       └── SkillBadge.jsx
├── data/
│   └── portfolioData.js  # All content data
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

## Content Included

- **Hero**: Name, title, tagline, CTAs, social links
- **About**: Bio, interests, quick stats
- **Skills**: 5 categories with 15+ technologies
- **Projects**: 6 projects with GitHub + live demo links
- **Experience**: ByteEdu internship details
- **Education**: B.Tech CS/IT, 10th & 12th
- **Awards**: APL Champion, AI Rocket Badge, IBM Cloud cert
- **Contact**: Contact info, social links, contact form

## Customization

Edit `src/data/portfolioData.js` to update:
- Personal information
- Skills
- Projects
- Experience
- Education
- Awards & certifications
- Social links

## Color Theme

- Background: `#0a0a0f` (dark)
- Card Background: `#16161f` (glassmorphism)
- Primary Accent: `#8b5cf6` (violet)
- Secondary Accent: `#a855f7` (purple)
- Gradient: `violet-500 → purple-500 → fuchsia-500`

## Credits

Built by Yashansh Rastogi
