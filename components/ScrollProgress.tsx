"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? scrolled / total : 0;
      setProgress(pct);
      spring.set(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [spring]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: spring,
          background:
            "linear-gradient(90deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
          boxShadow: "0 0 10px 2px rgba(99, 102, 241, 0.5)",
        }}
      />
    </div>
  );
}
