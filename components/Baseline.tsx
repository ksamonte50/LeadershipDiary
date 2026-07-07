"use client";

import { motion } from "framer-motion";
import { baseline } from "@/content/baseline";

const maxRank = baseline.strengths.length;

export default function Baseline() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto" id="baseline">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xs tracking-[0.25em] uppercase text-sage mb-2">
          Chapter 1
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
          Where I Started
        </h2>
        <p className="font-body text-navy/60 max-w-2xl mb-16">
          My baseline assessment — Clifton Strengths and Superpowers results that map the raw material I&apos;m working with.
        </p>
      </motion.div>

      {/* Strengths Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="font-heading text-xl font-semibold text-navy mb-6 flex items-center gap-2">
          <span className="text-mustard">&#9733;</span>
          Clifton Strengths — Top 5
        </h3>
        <div className="space-y-4">
          {baseline.strengths.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-body text-sm font-medium text-navy">
                  <span className="text-terracotta/60 font-mono text-xs mr-2">
                    #{s.rank}
                  </span>
                  {s.name}
                </span>
              </div>
              <div className="w-full bg-navy/[0.06] rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${((maxRank - i) / maxRank) * 100}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      i === 0
                        ? "var(--color-terracotta)"
                        : i === 1
                        ? "var(--color-mustard)"
                        : i === 2
                        ? "var(--color-sage)"
                        : i === 3
                        ? "var(--color-navy-light)"
                        : "var(--color-rose)",
                  }}
                />
              </div>
              <p className="font-body text-xs text-navy/40 mt-1 max-w-md">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Superpowers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="font-heading text-xl font-semibold text-navy mb-6 flex items-center gap-2">
          <span className="text-terracotta">&#10038;</span>
          Superpowers Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {baseline.superpowers.map((sp, i) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-6 border border-navy/10 ${
                i === 0
                  ? "bg-mustard/10 tilt-card"
                  : "bg-terracotta/10 tilt-card-right"
              }`}
            >
              <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                {sp.name}
              </h4>
              <p className="font-body text-sm text-navy/60 leading-relaxed">
                {sp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Reflection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-heading text-xl font-semibold text-navy mb-4 flex items-center gap-2">
          <span className="text-sage">&#10042;</span>
          What I Noticed
        </h3>
        <div className="bg-navy/[0.04] rounded-2xl p-8 border border-navy/10">
          <p className="font-body text-navy/70 leading-relaxed italic">
            &ldquo;{baseline.reflection}&rdquo;
          </p>
        </div>
      </motion.div>
    </section>
  );
}
