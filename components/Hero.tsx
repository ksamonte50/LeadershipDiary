"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] text-6xl opacity-20 rotate-12 select-none">
          &#10023;
        </div>
        <div className="absolute top-[25%] right-[15%] text-4xl opacity-15 -rotate-6 select-none">
          &#9733;
        </div>
        <div className="absolute bottom-[20%] left-[20%] text-5xl opacity-10 rotate-[-15deg] select-none">
          &#10038;
        </div>
        <div className="absolute bottom-[30%] right-[10%] text-3xl opacity-20 rotate-8 select-none">
          &#10042;
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-base tracking-[0.3em] uppercase text-navy/60 mb-6"
        >
          A Personal Leadership Development Diary
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-navy leading-[1.1] mb-8"
        >
          Leadership
          <br />
          <span className="text-terracotta">Diary</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="squiggle w-48 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="font-body text-2xl text-navy/70 leading-relaxed max-w-xl mx-auto mb-6"
        >
          Kyle Samonte
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="font-body text-xl text-navy/50 leading-relaxed max-w-xl mx-auto"
        >
          MDes Summer 2026 &middot; Leadership by Design
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="font-body text-base text-navy/40 mt-12 italic"
        >
          Scroll to begin &#8595;
        </motion.p>
      </motion.div>
    </section>
  );
}
