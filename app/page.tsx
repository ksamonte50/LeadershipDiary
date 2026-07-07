import Hero from "@/components/Hero";
import Resources from "@/components/Resources";
import Baseline from "@/components/Baseline";
import WeeklyEntry from "@/components/WeeklyEntry";
import FinalReflection from "@/components/FinalReflection";
import ProgressTrail from "@/components/ProgressTrail";
import { entries } from "@/content/entries";

export default function Home() {
  return (
    <>
      <ProgressTrail />
      <main className="relative">
        <div id="hero">
          <Hero />
        </div>

        <div className="squiggle w-full max-w-xs mx-auto my-16" />

        <div id="toolkit">
          <Resources />
        </div>

        <div className="squiggle w-full max-w-xs mx-auto my-16" />

        <div id="baseline">
          <Baseline />
        </div>

        <div className="squiggle w-full max-w-xs mx-auto my-16" />

        <section id="weekly">
          <div className="max-w-4xl mx-auto px-6 pt-16">
            <p className="font-body text-base tracking-[0.25em] uppercase text-navy/40 mb-2">
              The Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
              Weekly Entries
            </h2>
            <p className="font-body text-base text-navy/50 mb-8">
              Five weeks of learning, reflecting, and growing as a leader.
            </p>
          </div>
          {entries.map((entry, index) => (
            <div key={entry.week} id={`week-${entry.week}`}>
              <WeeklyEntry entry={entry} total={6} />
              {index < entries.length - 1 && (
                <div className="squiggle w-full max-w-xs mx-auto my-8" />
              )}
            </div>
          ))}
        </section>

        <div className="squiggle w-full max-w-xs mx-auto my-16" />

        <div id="final">
          <FinalReflection />
        </div>
      </main>
    </>
  );
}
