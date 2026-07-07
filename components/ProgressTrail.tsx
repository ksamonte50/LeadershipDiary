"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const TOTAL_WEEKS = 7;
const TOTAL_SECTIONS = TOTAL_WEEKS + 3; // hero + toolkit + baseline + weeks + final

const sectionIds = [
  "hero",
  "toolkit",
  "baseline",
  ...Array.from({ length: TOTAL_WEEKS }, (_, i) => `week-${i + 1}`),
  "final",
];

const labels = [
  "Start",
  "Toolkit",
  "Baseline",
  ...Array.from({ length: TOTAL_WEEKS }, (_, i) => `Wk ${i + 1}`),
  "Final",
];

// Horizontal offset for each dot (px from center) — creates the winding path
const offsets = [
  0, -8, 6, -10, 4, -6, 8, -4, 10, -8, 6, // alternating left/right wiggle
];

export default function ProgressTrail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<Map<string, IntersectionObserver>>(new Map());

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find the topmost visible section
      let topmostIndex = -1;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = sectionIds.indexOf(entry.target.id);
          if (idx !== -1) {
            const rect = entry.boundingClientRect;
            // Prefer the section whose top is closest to (but above) the viewport center
            if (rect.top <= window.innerHeight * 0.5 && rect.top > -rect.height * 0.5) {
              if (idx < topmostIndex || topmostIndex === -1) {
                topmostIndex = idx;
              }
            }
          }
        }
      });

      if (topmostIndex !== -1) {
        setActiveIndex(topmostIndex);
      }
    },
    []
  );

  useEffect(() => {
    // Create observers for each section
    const observers = observerRef.current;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.25, 0.5],
      });
      observer.observe(el);
      observers.set(id, observer);
    });

    // Fallback: handle scroll to bottom (fixes final segment)
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && scrollTop >= docHeight - 5) {
        setActiveIndex(TOTAL_SECTIONS - 1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      observers.clear();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleIntersect]);

  // Dot-to-dot wavy SVG connector
  const WavyConnector = ({ filled }: { filled: boolean }) => (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="shrink-0">
      <path
        d="M10 0 Q16 6 10 12 Q4 18 10 24"
        stroke={filled ? "var(--color-terracotta)" : "var(--color-navy)"}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={filled ? 0.5 : 0.15}
      />
    </svg>
  );

  return (
    <nav
      className="fixed left-7 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-0"
      aria-label="Scroll progress"
    >
      {labels.map((label, i) => {
        const filled = i <= activeIndex;
        const isCurrent = i === activeIndex;
        const xOffset = offsets[i % offsets.length];

        return (
          <div key={label} className="flex flex-col items-center">
            <div
              className="flex items-center gap-2 transition-transform duration-300"
              style={{ transform: `translateX(${xOffset}px)` }}
            >
              <div
                className={`trail-dot ${filled ? "filled" : ""} ${isCurrent ? "scale-125" : ""}`}
                title={label}
              />
              <span
                className={`font-body text-sm tracking-wider transition-opacity duration-300 ${
                  isCurrent
                    ? "opacity-100 text-navy font-medium"
                    : "opacity-0"
                }`}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <WavyConnector filled={filled} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
