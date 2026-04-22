import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import Container from "./ui/Container";
import PosterPanel from "./ui/PosterPanel";
import TrackedLink from "./TrackedLink";
import { gta6Data } from "../data/gta";

export default function OfficialUpdatesSection() {
  const [officialSite, trailerOne, trailerTwo, screenshots] =
    gta6Data.officialUpdates;

  return (
    <section id="updates" className="px-5 py-20 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>Official resources</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                The essential external references.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                A direct layer for the most relevant official materials tied to
                the project and its content structure.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Built to stay useful first, while still matching the stronger
              visual direction of the page.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <PosterPanel
              eyebrow={officialSite.tag}
              title="Official Site"
              subtitle={officialSite.description}
              accent="cyan"
              className="min-h-[320px]"
            >
              <TrackedLink
                href={officialSite.href}
                eventName="official_click"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Visit page
                <ArrowUpRight size={16} />
              </TrackedLink>
            </PosterPanel>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {[trailerOne, trailerTwo, screenshots].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.06 + 0.04}>
                <GlassCard className="h-full p-0">
                  <TrackedLink
                    href={item.href}
                    eventName="official_click"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full flex-col rounded-[1.75rem] p-6 transition hover:bg-white/[0.03]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/50">
                        {item.tag}
                      </span>

                      <div className="rounded-full border border-white/10 bg-black/20 p-3 text-white/65">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-white/60 sm:text-base">
                      {item.description}
                    </p>
                  </TrackedLink>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}