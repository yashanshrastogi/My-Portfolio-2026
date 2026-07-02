"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, rotatingTitles } from "@/data/portfolio";
import { fadeUp, stagger } from "@/lib/variants";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () =>
          setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 45 : 90
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

function Sphere3D() {
  return (
    <div
      className="absolute top-8 right-0 pointer-events-none"
      style={{ perspective: 600 }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background:
              "conic-gradient(from 0deg, rgba(59,130,246,0.15), rgba(147,197,253,0.3), rgba(59,130,246,0.05), rgba(59,130,246,0.15))",
            boxShadow:
              "inset 0 0 40px rgba(59,130,246,0.15), 0 0 60px rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        />
      </motion.div>
      {}
      <motion.div
        className="absolute top-1/2 left-1/2"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        style={{ marginTop: -4, marginLeft: -4 }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.8)",
            boxShadow: "0 0 8px 4px rgba(59,130,246,0.3)",
            transformOrigin: "70px center",
          }}
        />
      </motion.div>
    </div>
  );
}

function TiltPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !glareRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    
    // Tilt
    ref.current.style.transform = `perspective(1000px) rotateX(${-dy * 12}deg) rotateY(${dx * 12}deg) scale(1.05)`;
    
    // Dynamic glare
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) - 90;
    const distance = Math.sqrt(Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2));
    const opacity = Math.min(distance / (rect.width / 2) * 0.4, 0.5);
    
    glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,0) 80%)`;
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    if (glareRef.current) {
      glareRef.current.style.background = "transparent";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-56 h-56 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.2)] group"
      style={{
        transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,197,253,0.05))",
      }}
    >
      <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl z-30 pointer-events-none" />
      <Image
        src={personalInfo.photo}
        alt="Yashansh Rastogi"
        fill
        sizes="224px"
        className="object-cover filter brightness-[1.06] contrast-[1.01] saturate-[1.03] scale-[1.1] translate-y-[-4px] group-hover:scale-[1.15] transition-transform duration-500 ease-out"
        priority
      />
      {/* Dynamic Glare Layer */}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay transition-background duration-100 ease-linear"
      />
      {/* Static gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const displayText = useTypewriter(rotatingTitles);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {}
      <div className="hidden md:block absolute top-0 right-8 z-0 opacity-60">
        <Sphere3D />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {}
          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {}
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 text-sm font-medium border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to SDE Roles
              </span>
            </motion.div>

            {}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 leading-tight mb-3 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Subtitle / Typewriter */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 min-h-[2.5rem] flex items-center gap-1"
            >
              {displayText}
              <span className="inline-block w-0.5 h-7 bg-blue-500 animate-pulse rounded-full" />
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-base text-slate-500 italic mb-8"
            >
              &ldquo;{personalInfo.tagline}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 min-w-[140px] overflow-hidden"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                View Projects
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="Yashansh_Rastogi_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm text-slate-700 text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-0.5 min-w-[140px]"
              >
                Download Resume
              </a>
            </motion.div>

            {}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <SocialIconLink
                href={personalInfo.social.github}
                label="GitHub"
                icon={<GitHubSVG />}
              />
              <SocialIconLink
                href={personalInfo.social.linkedin}
                label="LinkedIn"
                icon={<LinkedInSVG />}
              />
            </motion.div>
          </motion.div>

          {}
          <motion.div
            className="hidden md:flex flex-shrink-0 justify-center"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TiltPhoto />
          </motion.div>
        </div>

        {}
        <motion.div
          className="mt-14 flex items-center gap-2 text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
          See my work
        </motion.div>
      </div>
    </section>
  );
}

function SocialIconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm hover:border-blue-400 hover:shadow-md hover:shadow-blue-100 transition-all duration-200 text-slate-500 hover:text-blue-600"
    >
      {icon}
    </a>
  );
}

function GitHubSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
