import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

const stats = [
  { label: "Anticipation", value: "Extreme" },
  { label: "Night Energy", value: "High" },
  { label: "Vice Mood", value: "Locked" },
  { label: "Tension", value: "Rising" },
];

export default function HypeSection() {
  return (
    <section id="hype" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <GlassCard className="overflow-hidden p-8 md:p-10">
            <SectionBadge>Hype status</SectionBadge>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-black sm:text-4xl">
                  A little drama makes the page memorable.
                </h2>
                <p className="mt-4 max-w-2xl text-white/65">
                  This section gives the project personality. Not everything needs
                  to be serious data. Some parts are just there to reinforce the
                  mood and the brand feel.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm text-white/50">
                Designed to feel cinematic, premium, and slightly dangerous.
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.08}>
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 transition hover:-translate-y-1 hover:bg-white/[0.04]">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                      {stat.label}
                    </p>
                    <p className="mt-4 font-display text-5xl uppercase text-white">
                      {stat.value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}