"use client";

import { motion } from "framer-motion";

const resources = [
  {
    category: "Assessments",
    items: [
      { name: "VIA Character Strengths", href: "/resources/via.pdf" },
      { name: "Daring Leadership Assessment", href: "/resources/daring.pdf" },
    ],
  },
  {
    category: "Previous Materials",
    items: [
      { name: "Personal User Manual", href: "/resources/usermanual.pdf" },
      { name: "Clifton Strengths", href: "/resources/clifton.pdf" },
      { name: "Work Style Preferences", href: "/resources/prefs.pdf" },
    ],
  }
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
        <p className="font-body text-xl text-navy/60 mb-12">
          My collection of resources, assessments, and materials that have informed my leadership journey and personal growth.
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
          I’m Kyle, a UX engineer and graduate student who thrives in lively, highly collaborative team environments. Grounded in deep empathy, open-mindedness, and an enthusiasm for uplifting others, I focus on creating a supportive atmosphere where every teammate’s ideas are valued and respected. I leverage my core strengths in relationship building and clear communication to resolve group friction, bridge diverse perspectives, and steer teams toward practical, consensus-driven solutions. As a hands-on, visual learner, I value a workplace culture built on structured communication, mutual accountability, true camaraderie, and a healthy dose of laughter. Outside of design, I love basketball, video games, sneaker collecting, and spending time with my cat, Kohga.
        </p>
      </motion.div>
    </section>
  );
}
