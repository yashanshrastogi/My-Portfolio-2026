import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const LeetCodeIcon = (props) => (
  <img src="/images/LeetCode.webp" alt="LeetCode" {...props} />
);

export const HackerRankIcon = (props) => (
  <img src="/images/HackerRank.webp" alt="HackerRank" {...props} />
);

const Hero = () => {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background - Highly Optimized for smooth zoom/scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hero-bg">
        {/* Subtle gradient overlay to fade into the next section */}
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 
                     border border-violet-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tighter"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 tracking-tight"
        >
          <span className="text-slate-400 dark:text-slate-300">Software</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
            Developer
          </span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="btn-glow px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500
                       hover:from-violet-600 hover:to-purple-600 text-white font-semibold
                       transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40
                       flex items-center gap-2"
          >
            View Projects
            <ChevronDown className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold
                       border border-white/10 hover:border-white/20 transition-all
                       flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Yashansh_Rastogi_Resume.pdf"
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold
                       border border-white/10 hover:border-violet-500/30 transition-all
                       flex items-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className={`p-3 rounded-xl text-slate-400 hover:text-violet-300 transition-all ${
                social.bgClass || 'bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/30'
              }`}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
