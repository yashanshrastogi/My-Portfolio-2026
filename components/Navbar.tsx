"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Extracts the section ID from a nav href like "/#about" or "#about"
 */
function getSectionId(href: string): string {
  return href.replace("/#", "").replace("#", "");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // ── Scroll detection ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Section tracking via IntersectionObserver ──────────────────────
  useEffect(() => {
    // Only track sections on the homepage
    if (pathname !== "/") return;

    // Small delay to let DOM settle after navigation
    const timer = setTimeout(() => {
      observerRef.current?.disconnect();

      const observer = new IntersectionObserver(
        (entries) => {
          // Among all intersecting entries, pick the one closest to viewport center
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            // Use the entry with the largest intersection ratio
            const best = visible.reduce((a, b) =>
              a.intersectionRatio > b.intersectionRatio ? a : b
            );
            setActiveSection(best.target.id);
          }
        },
        {
          root: null,
          // A thin horizontal band at the center of the viewport
          rootMargin: "-35% 0px -35% 0px",
          threshold: [0, 0.1, 0.25, 0.5],
        }
      );

      navLinks.forEach((link) => {
        const id = getSectionId(link.href);
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      observerRef.current = observer;
    }, 150);

    // Clear active when scrolled to very top (hero zone)
    const onScrollTop = () => {
      if (window.scrollY < 100) setActiveSection("");
    };
    window.addEventListener("scroll", onScrollTop, { passive: true });

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", onScrollTop);
    };
  }, [pathname]);

  // ── Body scroll lock when mobile menu is open ──────────────────────
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ── Close mobile menu on Escape key ────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // ── Close mobile menu on resize past breakpoint ────────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // ── Smart navigation handler ───────────────────────────────────────
  // Handles both same-page smooth scrolling and cross-page navigation
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const sectionId = getSectionId(href);

      // If we're on the homepage, do smooth scroll directly
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update URL hash without triggering navigation
          window.history.pushState(null, "", `/#${sectionId}`);
        }
      }
      // If on another page, let Next.js handle routing to /#section

      // Close mobile menu
      setOpen(false);
    },
    [pathname]
  );

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "top-3 mx-auto w-[92%] max-w-4xl bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-lg shadow-slate-900/5 py-2 px-5"
            : "top-4 mx-auto w-[95%] max-w-4xl bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-2xl shadow-sm py-3.5 px-6"
        }`}
      >
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
          {/* ── Logo ───────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-1.5 font-bold text-slate-900 tracking-tight hover:text-blue-600 transition-colors shrink-0"
          >
            <span className={`transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
              Yashansh Rastogi
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </Link>

          {/* ── Desktop Links ──────────────────────────────────── */}
          <ul
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {navLinks.map((link, idx) => {
              const sectionId = getSectionId(link.href);
              const isActive = activeSection === sectionId;

              return (
                <motion.li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative z-10 px-3.5 py-1.5 text-[13px] font-semibold rounded-full block transition-colors duration-300 whitespace-nowrap ${
                      isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}

                    {/* Active pill with spring animation */}
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-full shadow-[inset_0_0_12px_rgba(59,130,246,0.08)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover pill */}
                    {hoveredIdx === idx && !isActive && (
                      <motion.span
                        layoutId="hover-pill"
                        className="absolute inset-0 bg-slate-100/60 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* ── Mobile Hamburger ───────────────────────────────── */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100/60 transition-colors"
          >
            <span
              className={`block h-0.5 w-4 bg-slate-700 rounded-full transition-all duration-300 ease-out ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-slate-700 rounded-full mt-1 transition-all duration-300 ease-out ${
                open ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-slate-700 rounded-full mt-1 transition-all duration-300 ease-out ${
                open ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay (outside header to avoid pill clipping) ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Dropdown panel */}
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-900/10 p-3 max-h-[70vh] overflow-y-auto"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link, idx) => {
                  const sectionId = getSectionId(link.href);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] ${
                          isActive
                            ? "bg-blue-50 text-blue-600 border border-blue-100"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 active:bg-slate-100"
                        }`}
                      >
                        {/* Active indicator dot */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                            isActive ? "bg-blue-500" : "bg-slate-300"
                          }`}
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed header */}
      <div className="h-[72px] lg:h-[88px]" />
    </>
  );
}
