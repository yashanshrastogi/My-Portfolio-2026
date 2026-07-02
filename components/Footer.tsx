"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { fadeUp } from "@/lib/variants";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-10 overflow-hidden border-t border-slate-200/60 bg-white/40 backdrop-blur-3xl mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-slate-900 mb-2">Let&apos;s build something</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 pb-2">
              incredible together.
            </span>
          </h2>
          
          <a
            href="mailto:yashanshrastogi@gmail.com"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-12 bg-white/20" />
            </div>
            Say Hello <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200/80 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-slate-500 font-medium text-sm">
            <span>&copy; {new Date().getFullYear()} {personalInfo.name}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              Designed & Built with
              <span className="text-slate-700 font-semibold">Next.js</span>
              &amp;
              <span className="text-slate-700 font-semibold">Tailwind</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <SocialIcon href={personalInfo.social.github} label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            </SocialIcon>
            <SocialIcon href={personalInfo.social.linkedin} label="LinkedIn">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
