"use client";

import { motion } from "framer-motion";

const resources = [
  {
    category: "Frameworks",
    items: [
      { name: "Clifton Strengths", href: "/resources/clifton-strengths.pdf" },
      { name: "Superpowers Assessment", href: "/resources/superpowers-assessment.pdf" },
      { name: "Situational Leadership", href: "/resources/situational-leadership.pdf" },
    ],
  },
  {
    category: "Readings",
    items: [
      { name: "Leadership on the Line", href: "/resources/leadership-on-the-line.pdf" },
      { name: "Dare to Lead", href: "/resources/dare-to-lead.pdf" },
      { name: "The Culture Map", href: "/resources/the-culture-map.pdf" },
    ],
  },
  {
    category: "Models",
    items: [
      { name: "Power & Influence Map", href: "/resources/power-influence-map.pdf" },
      { name: "Facilitation Toolkit", href: "/resources/facilitation-toolkit.pdf" },
      { name: "Equity-Centered Design", href: "/resources/equity-centered-design.pdf" },
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
    <section className="py-24 px-6 max-w-5xl mx-auto" id="toolkit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-base tracking-[0.25em] uppercase text-terracotta mb-2">
          Reference Material
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
          The Toolkit
        </h2>
        <p className="font-body text-xl text-navy/60 max-w-2xl mb-12">
          Key frameworks, readings, and models from the course. Dip in as needed — these are the lenses I&apos;ve been working through.
        </p>
      </motion.div>

      {/* Resources */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-16"
      >
        <h3 className="font-heading text-2xl font-semibold text-navy mb-6 flex items-center gap-2">
          <span className="text-mustard">&#10023;</span>
          Resources
        </h3>
        {resources.map((group) => (
          <motion.div key={group.category} variants={itemVariants} className="mb-6">
            <h4 className="font-body text-sm font-medium tracking-[0.15em] uppercase text-navy/40 mb-3">
              {group.category}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-body text-base text-navy/70 hover:text-terracotta transition-colors inline-flex items-center gap-2 group"
                  >
                    {item.name}
                    <span className="text-navy/20 group-hover:text-terracotta/60 transition-colors">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-heading text-2xl font-semibold text-navy mb-4 flex items-center gap-2">
          <span className="text-sage">&#10042;</span>
          About Me
        </h3>
        <p className="font-body text-base text-navy/40 italic">
          Your story here.
        </p>
      </motion.div>
    </section>
  );
}
