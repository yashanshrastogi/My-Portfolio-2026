"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeUp } from "@/lib/variants";

const skillGroups = [
  { label: "Languages", tags: skills.languages },
  { label: "Frontend", tags: skills.frontend },
  { label: "Backend", tags: skills.backend },
  { label: "AI / ML", tags: skills.aiMl },
  { label: "Cloud & Tools", tags: skills.cloudTools },
];

function SkillTag({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="px-4 py-2 rounded-xl text-sm font-semibold cursor-default bg-white/50 backdrop-blur-md text-slate-700 hover:bg-white hover:text-blue-700 transition-all border border-slate-200/60 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center md:text-left mb-12"
        >
          <motion.p
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-cyan-100"
            whileHover={{ scale: 1.05 }}
          >
            Skills
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-500 text-sm">
            What I actually use, not just what I&apos;ve heard of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-200/30 hover:shadow-2xl hover:border-cyan-200/80 transition-all duration-500 ${
                idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-1" : ""
              } ${idx === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Spotlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:via-cyan-400/5 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500 pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shadow-inner">
                  {/* Generic Icon based on index for variety */}
                  {idx === 0 && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>}
                  {idx === 1 && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                  {idx === 2 && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>}
                  {idx === 3 && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                  {idx === 4 && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>}
                </span>
                {group.label}
              </h3>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {group.tags.map((tag) => (
                  <SkillTag key={tag} name={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
