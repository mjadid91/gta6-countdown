import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import PosterPanel from "./ui/PosterPanel";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./ui/GlassCard";
import { gta6Data } from "../data/gta";

export default function GallerySection() {
  const [mainFrame, secondFrame, thirdFrame] = gta6Data.gallery;

  return (
    <section id="gallery" className="px-5 py-24 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>Gallery mood</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                Visual blocks with a stronger point of view.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                The goal is not to simulate a literal image gallery, but to
                create visual rhythm and memorable atmosphere across the page.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Cleaner than placeholder photography, more aligned with the rest
              of the site, and easier to control visually.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <PosterPanel
              eyebrow="Featured frame"
              title={mainFrame.title}
              subtitle={mainFrame.subtitle}
              accent="pink"
              className="min-h-[420px] sm:min-h-[500px]"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    Visual tone
                  </p>
                  <p className="mt-3 text-base font-semibold text-white/85">
                    Neon / heat / gloss
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    Energy
                  </p>
                  <p className="mt-3 text-base font-semibold text-white/85">
                    Elegant but unstable
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    Purpose
                  </p>
                  <p className="mt-3 text-base font-semibold text-white/85">
                    Atmosphere first
                  </p>
                </div>
              </div>
            </PosterPanel>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.06}>
              <GlassCard className="relative overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/12 via-transparent to-transparent" />
                <div className="relative p-8 sm:p-10">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                    Frame two
                  </p>

                  <h3 className="mt-5 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                    {secondFrame.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                    {secondFrame.subtitle}
                  </p>

                  <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm text-white/55">
                    Built to create variation without breaking the visual
                    language of the page.
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <PosterPanel
                eyebrow="Frame three"
                title={thirdFrame.title}
                subtitle={thirdFrame.subtitle}
                accent="orange"
                className="min-h-[240px]"
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}