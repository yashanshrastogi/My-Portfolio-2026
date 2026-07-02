"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/variants";

const techTags = ["React.js", "RESTful APIs", "JavaScript", "TypeScript"];

const bullets = [
  "Engineered and maintained a library of reusable React.js components, optimizing rendering performance through efficient state management and component architecture — directly enhancing UI/UX consistency across critical user flows.",
  "Integrated RESTful APIs to power real-time dynamic data rendering, architecting seamless frontend-backend communication pipelines that reduced data latency and improved overall application responsiveness.",
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    ref.current.style.transform = `perspective(800px) rotateX(${-dy * 3}deg) rotateY(${dx * 4}deg) scale(1.01)`;
  };

  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tilt-card bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm p-6 hover:border-blue-200 transition-colors"
      style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
    >
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <motion.p
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-blue-100"
            whileHover={{ scale: 1.05 }}
          >
            Experience
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Work Experience
          </h2>
          <p className="text-slate-500 text-sm">Where I&apos;ve shipped real code.</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200/60 ml-4 md:ml-6 space-y-12">
          {/* Animated active line overlay */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-8 md:pl-10"
          >
            {/* Glowing Timeline Node */}
            <div className="absolute top-6 left-[-21px] flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            </div>

            <TiltCard>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <a
                      href="https://byteedu.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      ByteEdu
                    </a>
                    <span className="text-slate-300 hidden sm:inline">·</span>
                    <span className="font-semibold text-blue-600">
                      Frontend Developer Intern
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    2024–2025 · Remote
                  </p>
                </div>
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 uppercase tracking-wider">
                  Internship
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-600 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
