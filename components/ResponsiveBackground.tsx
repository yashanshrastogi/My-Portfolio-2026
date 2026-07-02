"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ResponsiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-slate-50">
      {/* Dynamic Mouse Gradient Glow */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* Subtle Dot Pattern overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Animated Floating Gradients (Aurora Effect) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-300/30 blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-300/30 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-violet-300/30 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]" />
    </div>
  );
}
