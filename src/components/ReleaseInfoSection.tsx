import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import Container from "./ui/Container";
import PosterPanel from "./ui/PosterPanel";
import { gta6Data } from "../data/gta";

export default function ReleaseInfoSection() {
  const [releaseDate, platforms, setting, leads] = gta6Data.facts;

  return (
    <section id="release" className="px-5 py-20 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>Release facts</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                The key information, framed with more intent.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                Fast to scan, easy to understand, and visually aligned with the
                stronger sections of the page.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              This should read like a premium fact layer, not a generic product
              dashboard.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <PosterPanel
              eyebrow="Launch summary"
              title="19 Nov"
              subtitle="The current release date used across the project, paired with the main launch context below."
              accent="pink"
              className="min-h-[340px]"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    {releaseDate.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {releaseDate.value}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    {platforms.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {platforms.value}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    {setting.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {setting.value}
                  </p>
                </div>
              </div>
            </PosterPanel>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.06}>
              <GlassCard className="relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />

                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">
                    Main characters
                  </p>

                  <h3 className="mt-5 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                    {leads.value}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-6 text-white/62 sm:text-base">
                    The dual-lead structure is one of the defining anchors of
                    the current project presentation and overall tone.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard className="p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">
                  Context
                </p>

                <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base">
                  The section exists to condense the most useful facts without
                  flattening the visual identity of the page.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}