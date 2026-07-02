"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { awards, certifications } from "@/data/portfolio";
import { fadeUp, stagger } from "@/lib/variants";

export default function Awards() {
  return (
    <section id="awards" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
            Awards &amp; Certifications
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Recognition
          </h2>
          <p className="text-slate-500 text-sm">
            Won a Google Cloud hackathon. Ranked Top 15/300 at Microsoft.
          </p>
        </motion.div>

        {}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm p-5 flex flex-col gap-4 hover:border-blue-200/50 transition-colors"
            >
              {}
              {award.image && (
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 flex-shrink-0">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>
              )}

              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-0.5">
                  {award.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {award.organization} · {award.year}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {award.description}
                </p>
                {award.verificationLink && (
                  <a
                    href={award.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Verify Badge →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm p-5 hover:border-blue-200/50 transition-colors"
            >
              <h4 className="text-sm font-semibold text-slate-900 mb-1 leading-snug">
                {cert.title}
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                {cert.organization} · {cert.year}
              </p>
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {cert.verifyLabel}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
