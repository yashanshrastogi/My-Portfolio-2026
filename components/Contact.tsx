"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { fadeUp } from "@/lib/variants";

function GitHubSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: personalInfo.social.github, icon: <GitHubSVG />, handle: "@yashanshrastogi" },
  { label: "LinkedIn", href: personalInfo.social.linkedin, icon: <LinkedInSVG />, handle: "/in/yashanshrastogi" },
  { label: "LeetCode", href: personalInfo.social.leetcode, imgSrc: "/images/LeetCode.webp", handle: "@yashansh_rastogi" },
  { label: "HackerRank", href: personalInfo.social.hackerrank, imgSrc: "/images/HackerRank.webp", handle: "@YASH_2003" },
  { label: "Credly", href: personalInfo.social.credly, imgSrc: "/images/credly.webp", handle: "Credly" },
];

function InlineContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return "Email is required.";
    if (!re.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const emailErr = validateEmail(email);
    if (emailErr) { setEmailError(emailErr); return; }
    setEmailError("");

    setStatus("loading");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) { setStatus("error"); setErrorMessage("Form key missing."); return; }
    formData.append("access_key", accessKey);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else { setStatus("error"); setErrorMessage(data.message || "Something went wrong."); }
    } catch { setStatus("error"); setErrorMessage("Network error."); }
  };
  if (status === "success") {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md mx-auto mb-10 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-lg shadow-green-100/50 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="font-bold text-lg text-green-800 mb-1">Message sent!</h3>
        <p className="text-sm text-green-600">Thank you for reaching out. I will get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-5 px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 hover:shadow-md transition-all">Send another</button>
      </motion.div>
    );
  }
  return (
    <div className="relative w-full max-w-md mx-auto mb-10">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="relative flex flex-col gap-5 p-6 sm:p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-blue-50/30">
        <input type="hidden" name="subject" value="New Submission from Portfolio" />

        <div className="group">
          <label htmlFor="cf-name" className="block text-sm font-medium text-slate-600 mb-1.5 group-focus-within:text-blue-600 transition-colors">Name</label>
          <input type="text" name="name" id="cf-name" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:shadow-md focus:shadow-blue-50 outline-none transition-all placeholder:text-slate-300" placeholder="John Doe" />
        </div>

        <div className="group">
          <label htmlFor="cf-email" className="block text-sm font-medium text-slate-600 mb-1.5 group-focus-within:text-blue-600 transition-colors">Email</label>
          <input
            type="email"
            name="email"
            id="cf-email"
            required
            onChange={(e) => { if (emailError) setEmailError(validateEmail(e.target.value)); }}
            className={`w-full px-4 py-2.5 rounded-xl border bg-white/80 backdrop-blur-sm focus:ring-4 focus:shadow-md outline-none transition-all placeholder:text-slate-300 ${emailError ? "border-red-300 focus:border-red-400 focus:ring-red-100 focus:shadow-red-50" : "border-slate-200 focus:border-blue-400 focus:ring-blue-100 focus:shadow-blue-50"}`}
            placeholder="john@example.com"
          />
          {emailError && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>&#9888;</span> {emailError}</p>}
        </div>

        <div className="group">
          <label htmlFor="cf-msg" className="block text-sm font-medium text-slate-600 mb-1.5 group-focus-within:text-blue-600 transition-colors">Message</label>
          <textarea name="message" id="cf-msg" required rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:shadow-md focus:shadow-blue-50 outline-none transition-all resize-none placeholder:text-slate-300" placeholder="Hi Yashansh, I would like to talk about..." />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            <span>&#9888;</span> {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Sending...
            </span>
          ) : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Section background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div className="text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.p
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4 border border-blue-100"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Let&apos;s Talk
          </h2>
          <p className="text-slate-500 text-sm mb-12 max-w-sm mx-auto">
            I reply within 24-48 hours. No fluff, just code talk.
          </p>
          <InlineContactForm />
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                className="flex flex-col items-center gap-1.5 group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-100/60 transition-all duration-300 text-slate-600 group-hover:text-blue-600">
                  {s.imgSrc ? <img src={s.imgSrc} alt={s.label} className="w-6 h-6 rounded object-contain" /> : s.icon}
                </div>
                <span className="text-xs text-slate-400 group-hover:text-blue-500 transition-colors font-medium">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
