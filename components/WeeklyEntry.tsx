"use client";

import { motion } from "framer-motion";
import type { DiaryEntry } from "@/content/entries";

const accentColors = [
  { bg: "bg-terracotta/10", border: "border-terracotta/20", icon: "terracotta" },
  { bg: "bg-mustard/10", border: "border-mustard/20", icon: "mustard" },
  { bg: "bg-sage/10", border: "border-sage/20", icon: "sage" },
  { bg: "bg-navy/5", border: "border-navy/15", icon: "navy" },
  { bg: "bg-rose/10", border: "border-rose/20", icon: "rose" },
  { bg: "bg-terracotta/8", border: "border-terracotta/15", icon: "terracotta" },
  { bg: "bg-mustard/8", border: "border-mustard/15", icon: "mustard" },
];

const weekIcons = ["&#10023;", "&#9733;", "&#10038;", "&#10042;", "&#9733;", "&#10023;", "&#10038;"];

type Props = {
  entry: DiaryEntry;
  total: number;
};

export default function WeeklyEntry({ entry, total }: Props) {
  const accent = accentColors[(entry.week - 1) % accentColors.length];
  const icon = weekIcons[(entry.week - 1) % weekIcons.length];

  return (
    <section
      className="py-16 md:py-24 px-6"
      id={`week-${entry.week}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Week Header */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center ${accent.bg} border ${accent.border} ${
                entry.week % 2 === 0 ? "tilt-card" : "tilt-card-right"
              }`}
            >
              <span
                className="font-heading text-2xl font-bold text-navy"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            </div>
            <div>
              <p className="font-body text-base tracking-[0.2em] uppercase text-navy/40">
                Week {entry.week} of {total}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
                {entry.title || `Week ${entry.week}`}
              </h2>
              <p className="font-body text-base text-navy/40">{entry.date}</p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Insight */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`rounded-2xl p-6 border ${accent.border} ${accent.bg}`}
            >
              <h3 className="font-heading text-base font-semibold text-navy/50 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="text-xl" dangerouslySetInnerHTML={{ __html: "&#10024;" }} />
                Resources
              </h3>
              <p className="font-body text-lg text-navy/80 leading-relaxed">
                {entry.insight}
              </p>
              <a
                href={`/resources/week-${entry.week}-resource.pdf`}
                className="inline-block font-body text-sm text-navy/40 hover:text-terracotta transition-colors mt-3 group"
              >
                View resource <span className="group-hover:translate-x-0.5 inline-block transition-transform">&#8599;</span>
              </a>
            </motion.div>

            {/* Goal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl p-6 border border-navy/10 bg-navy/[0.03]"
            >
              <h3 className="font-heading text-base font-semibold text-navy/50 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="text-xl" dangerouslySetInnerHTML={{ __html: "&#127919;" }} />
                Goal
              </h3>
              <p className="font-body text-lg text-navy/80 leading-relaxed">
                {entry.goal}
              </p>
            </motion.div>

            {/* Action */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-2xl p-6 border border-navy/10 bg-navy/[0.03]"
            >
              <h3 className="font-heading text-base font-semibold text-navy/50 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="text-xl" dangerouslySetInnerHTML={{ __html: "&#9889;" }} />
                Action
              </h3>
              <p className="font-body text-lg text-navy/80 leading-relaxed">
                {entry.action}
              </p>
            </motion.div>

            {/* Resonance (optional) */}
            {entry.resonance && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="rounded-2xl p-6 border border-mustard/20 bg-mustard/8"
              >
              <h3 className="font-heading text-base font-semibold text-navy/50 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: "&#128156;" }} />
                  What Resonated
                </h3>
                <p className="font-body text-lg text-navy/80 leading-relaxed italic">
                  {entry.resonance}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
