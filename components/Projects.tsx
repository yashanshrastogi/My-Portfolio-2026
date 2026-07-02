"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, personalInfo } from "@/data/portfolio";
import { fadeUp, staggerFast } from "@/lib/variants";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !glareRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    ref.current.style.transform = `perspective(1000px) rotateX(${-dy * 4}deg) rotateY(${dx * 5}deg) scale(1.02)`;

    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) - 90;
    const distance = Math.sqrt(Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2));
    const opacity = Math.min(distance / (rect.width / 2) * 0.3, 0.4);
    glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,0) 80%)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (glareRef.current) glareRef.current.style.background = "transparent";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative bg-white/40 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-lg shadow-slate-200/40 p-8 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 overflow-hidden"
      style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease-out, border 0.3s ease-out" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div ref={glareRef} className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay transition-background duration-100 ease-linear" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center md:text-left mb-16"
        >
          <motion.p
            className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-rose-100"
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Featured Projects
          </h2>
          <p className="text-slate-500 text-sm">
            3 projects. Real stacks. One is live right now.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <TiltCard>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider border border-rose-100/50">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-base text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tag) => (
                         <span
                         key={tag}
                         className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/60 text-slate-600 text-xs font-semibold hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all cursor-default shadow-sm"
                       >
                         {tag}
                       </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row sm:flex-col gap-3 flex-shrink-0 mt-4 sm:mt-0 w-full sm:w-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-100/80 text-blue-700 text-sm font-semibold hover:bg-blue-200 hover:shadow-md hover:shadow-blue-100 transition-all min-h-[44px]"
                    >
                      Case Study
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm text-slate-700 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md min-h-[44px]"
                    >
                      <GitHubMini /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 transition-all min-h-[44px]"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* View More Button */}
          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/60 backdrop-blur-md border border-slate-200/80 text-slate-800 font-bold hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-12 bg-blue-500/10" />
              </div>
              <span className="relative z-10 flex items-center gap-2">
                View More Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GitHubMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
