"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: -200, y: -200 });
  const outerPos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const animate = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 18}px, ${outerPos.current.y - 18}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a,button,[data-hover]")) setIsHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a,button,[data-hover]")) setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ mixBlendMode: "difference" }}
      >
        <div
          className="transition-all duration-300 ease-out"
          style={{
            width: isHovering ? 60 : 36,
            height: isHovering ? 60 : 36,
            borderRadius: "50%",
            border: `1.5px solid rgba(255, 255, 255, ${isHovering ? 0.8 : 0.5})`,
            boxShadow: isHovering
              ? "0 0 20px 5px rgba(255,255,255,0.15)"
              : "none",
            backgroundColor: isHovering
              ? "rgba(255, 255, 255, 0.1)"
              : "transparent",
            transform: isHovering ? "translate(-12px, -12px)" : "translate(0, 0)", // Adjust for width change
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ mixBlendMode: "difference" }}
      >
        <div
          className="rounded-full transition-transform duration-200"
          style={{
            width: 8,
            height: 8,
            backgroundColor: "rgba(255, 255, 255, 1)",
            transform: isHovering ? "scale(0)" : "scale(1)",
          }}
        />
      </div>
    </>
  );
}
