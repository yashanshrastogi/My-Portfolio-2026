"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { fadeUp } from "@/lib/variants";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center md:text-left mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-indigo-100"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Driven by curiosity and a love for building software.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Text Card (Spans 2 columns) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 space-y-5 text-base text-slate-600 leading-relaxed">
              <p>
                I&apos;m Yashansh, a Computer Science student at KCC Institute
                of Technology &amp; Management. I spend most of my time coding,
                learning new technologies, and figuring out how to build better applications.
              </p>
              <p>
                My programming journey started with C++ and competitive programming,
                which gave me a solid grasp of data structures and algorithms. Since
                then, I&apos;ve expanded into full-stack web development and machine learning.
              </p>
              <p>
                Recently, I&apos;ve been working on projects ranging from a geolocation-based
                offer platform to an offline voice-controlled interface. I enjoy tinkering with
                local LLMs, optimizing backend logic, and creating clean, interactive user interfaces.
              </p>
            </div>
          </motion.div>

          {/* Photo Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-64 md:h-auto rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-200/40 group"
          >
            <Image
              src={personalInfo.photo}
              alt="Yashansh Rastogi"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover filter brightness-[1.06] contrast-[1.01] saturate-[1.03] scale-[1.05] group-hover:scale-[1.15] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Stat Cards */}
          {[
            { val: "3+", label: "Projects", color: "text-blue-600", bg: "bg-blue-50/50" },
            { val: "1+", label: "Years Exp", color: "text-indigo-600", bg: "bg-indigo-50/50" },
            { val: "2", label: "Awards", color: "text-violet-600", bg: "bg-violet-50/50" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-200/40 transition-all duration-300 ${stat.bg} hover:shadow-xl hover:border-slate-300/80`}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.val}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
