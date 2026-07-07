"use client";

import { motion } from "framer-motion";

const resources = [
  {
    category: "Frameworks",
    items: [
      { name: "Clifton Strengths", desc: "Identify your top talent themes" },
      { name: "Superpowers Assessment", desc: "Discover your unique leadership gifts" },
      { name: "Situational Leadership", desc: "Adapt style to context and readiness" },
    ],
  },
  {
    category: "Readings",
    items: [
      { name: "Leadership on the Line", desc: "Heifetz & Linsky — adaptive leadership" },
      { name: "Dare to Lead", desc: "Brené Brown — vulnerability and courage" },
      { name: "The Culture Map", desc: "Meyer — cross-cultural communication" },
    ],
  },
  {
    category: "Models",
    items: [
      { name: "Power & Influence Map", desc: "Positional vs relational power strategies" },
      { name: "Facilitation Toolkit", desc: "Techniques for group decision-making" },
      { name: "Equity-Centered Design", desc: "Integrating justice into design process" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Resources() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="resources">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xs tracking-[0.25em] uppercase text-terracotta mb-2">
          Reference Material
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
          The Toolkit
        </h2>
        <p className="font-body text-navy/60 max-w-2xl mb-12">
          Key frameworks, readings, and models from the course. Dip in as needed — these are the lenses I&apos;ve been working through.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {resources.map((group, gi) => (
          <motion.div
            key={group.category}
            variants={itemVariants}
            className={`bg-navy/[0.04] rounded-2xl p-6 border border-navy/10 ${
              gi % 2 === 0 ? "tilt-card" : "tilt-card-right"
            }`}
          >
            <h3 className="font-heading text-lg font-semibold text-navy mb-4 flex items-center gap-2">
              <span className="text-mustard text-xl">&#10023;</span>
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name} className="group">
                  <span className="font-body text-sm font-medium text-navy/80 group-hover:text-terracotta transition-colors">
                    {item.name}
                  </span>
                  <span className="block font-body text-xs text-navy/40 mt-0.5">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
