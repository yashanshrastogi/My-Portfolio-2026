"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { fadeUp } from "@/lib/variants";

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

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <motion.p
            className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-violet-100"
            whileHover={{ scale: 1.05 }}
          >
            Education
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Academic Background
          </h2>
          <p className="text-slate-500 text-sm">My graduation details.</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200/60 ml-4 md:ml-6 space-y-12">
          {/* Animated active line overlay */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-violet-500 via-purple-500 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute top-6 left-[-21px] flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-violet-100 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
              </div>

              <TiltCard>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-violet-600 transition-colors mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-violet-600 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold border border-violet-100 uppercase tracking-wider mb-1">
                      {edu.duration}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {edu.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
