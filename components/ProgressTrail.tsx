"use client";

import { useEffect, useState } from "react";

const TOTAL_WEEKS = 7;
const TOTAL_SECTIONS = TOTAL_WEEKS + 3; // hero + resources + baseline + weeks + final

export default function ProgressTrail() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const index = Math.min(
        Math.floor(progress * TOTAL_SECTIONS),
        TOTAL_SECTIONS - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = [
    "Start",
    "Toolkit",
    "Baseline",
    ...Array.from({ length: TOTAL_WEEKS }, (_, i) => `Wk ${i + 1}`),
    "Final",
  ];

  return (
    <nav
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-0"
      aria-label="Scroll progress"
    >
      {labels.map((label, i) => (
        <div key={label} className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div
              className={`trail-dot ${i <= activeIndex ? "filled" : ""}`}
              title={label}
            />
            <span
              className={`font-body text-[10px] tracking-wider transition-opacity duration-300 ${
                i === activeIndex
                  ? "opacity-100 text-navy"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
          </div>
          {i < labels.length - 1 && (
            <div
              className={`trail-line h-6 transition-colors duration-300 ${
                i < activeIndex ? "bg-terracotta/40" : "bg-navy/10"
              }`}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
