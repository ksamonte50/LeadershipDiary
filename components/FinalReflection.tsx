"use client";

import { motion } from "framer-motion";
import { finalReflection } from "@/content/final";

type Section = {
  key: keyof typeof finalReflection;
  label: string;
  icon: string;
};

const sections: Section[] = [
  { key: "inspiration", label: "What and who inspires you as a design leader", icon: "&#10024;" },
  { key: "leadershipStyle", label: "Your leadership style", icon: "&#9733;" },
  { key: "influence", label: "What influence means to you", icon: "&#10038;" },
  { key: "leadingPeers", label: "Leading your peers", icon: "&#10042;" },
  { key: "facilitation", label: "How you facilitate groups", icon: "&#9733;" },
  { key: "equityAndEthics", label: "Counter-bias and equitable design", icon: "&#10023;" },
  { key: "cultureBuilding", label: "Culture building", icon: "&#10038;" },
  { key: "resonated", label: "What resonated most", icon: "&#128156;" },
  { key: "leaderType", label: "What type of leader you are", icon: "&#10042;" },
  { key: "leadingOthers", label: "How you lead others", icon: "&#9733;" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FinalReflection() {
  return (
    <section className="py-24 px-6" id="final">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-base tracking-[0.25em] uppercase text-mustard mb-2">
            The Capstone
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
            Final Reflection
          </h2>
          <div className="squiggle w-32 mx-auto mb-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {sections.map((s, i) => (
            <motion.div
              key={s.key}
              variants={itemVariants}
              className={`rounded-2xl p-8 border border-navy/10 ${
                i % 3 === 0
                  ? "bg-terracotta/8 tilt-card"
                  : i % 3 === 1
                  ? "bg-mustard/8 tilt-card-right"
                  : "bg-sage/8"
              }`}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-4 flex items-center gap-3">
                <span
                  className="text-2xl opacity-60"
                  dangerouslySetInnerHTML={{ __html: s.icon }}
                />
                {s.label}
              </h3>
              <p className="font-body text-lg text-navy/70 leading-relaxed whitespace-pre-line">
                {finalReflection[s.key]}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="squiggle w-48 mx-auto mb-6" />
          <p className="font-heading text-3xl text-navy/40 italic">
            End of diary.
          </p>
          <p className="font-body text-base text-navy/30 mt-2">
            &#10023; &#9733; &#10038; &#10042; &#9733; &#10023; &#10038;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
