import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import Container from "./ui/Container";
import PosterPanel from "./ui/PosterPanel";
import GlassCard from "./ui/GlassCard";
import { gta6Data } from "../data/gta";

export default function WorldSection() {
  const [viceCity, leonida, atmosphere] = gta6Data.worldCards;

  return (
    <section id="world" className="px-5 py-24 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>World & tone</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                Not just a setting. A complete atmosphere.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                This part should feel broader and more cinematic, giving the
                site a stronger sense of place, scale, and mood.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              A cleaner, more editorial structure that fits the stronger
              character direction.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <PosterPanel
              eyebrow="World focus"
              title="Vice City"
              subtitle="Neon glamour, coastline heat, nightlife, pressure, spectacle. The world should feel seductive and unstable at the same time."
              accent="orange"
              className="min-h-[420px] sm:min-h-[480px]"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    City
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {viceCity.text}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    State
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {leonida.text}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    Tone
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {atmosphere.text}
                  </p>
                </div>
              </div>
            </PosterPanel>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.06}>
              <GlassCard className="relative overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/12 via-transparent to-transparent" />
                <div className="relative p-8 sm:p-10">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                    Regional scope
                  </p>

                  <h3 className="mt-5 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                    Leonida
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                    A broader state means more contrast, more movement, and more
                    room for different kinds of spaces to coexist.
                  </p>

                  <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/55">
                    Scale matters here. The fantasy works better when the world
                    feels open enough to carry tension, freedom, and excess all
                    at once.
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <PosterPanel
                eyebrow="Atmosphere"
                title="After Hours"
                subtitle="Luxury mixed with threat. Sunlight fading into pressure, noise, and criminal momentum."
                accent="cyan"
                className="min-h-[240px]"
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}