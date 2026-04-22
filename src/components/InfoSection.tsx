import { CalendarDays, Gamepad2, MapPin, ShieldAlert } from "lucide-react";
import { gta6Data } from "../data/gta";
import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";

const cards = [
  {
    icon: CalendarDays,
    title: "Release date",
    value: gta6Data.releaseDateLabel,
  },
  {
    icon: Gamepad2,
    title: "Platforms",
    value: "PS5 / Xbox Series X|S",
  },
  {
    icon: MapPin,
    title: "Setting",
    value: gta6Data.location,
  },
  {
    icon: ShieldAlert,
    title: "Project type",
    value: "Unofficial fan-made experience",
  },
];

export default function InfoSection() {
  return (
    <section id="info" className="px-5 py-20 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-2xl">
              <SectionBadge>Overview</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                A clear entry point into the project.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                This section gives first-time visitors the essentials without
                killing the cinematic tone established above.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">
                Project note
              </p>
              <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base">
                Built as a polished fan-made countdown and content experience,
                focused on release visibility, atmosphere, and presentation.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <ScrollReveal key={card.title} delay={index * 0.06}>
                <GlassCard className="relative h-full overflow-hidden p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-black/20 p-3 text-white/75">
                      <Icon size={20} />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {card.title}
                    </p>

                    <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                      {card.value}
                    </h3>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.12}>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-6 text-white/50 backdrop-blur-xl">
            {gta6Data.disclaimer}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}