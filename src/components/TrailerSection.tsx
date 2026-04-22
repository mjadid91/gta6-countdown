import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import { gta6Data } from "../data/gta";

export default function TrailerSection() {
  return (
    <section id="trailer" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionBadge>Trailer</SectionBadge>
        </ScrollReveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Give visitors a reason to stay.
              </h2>
              <p className="mt-4 max-w-xl text-white/65">
                The countdown grabs attention. The trailer keeps the emotion high.
                This is what starts turning the page into an actual experience.
              </p>

              <div className="mt-8 space-y-4 text-white/65">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Cinematic anchor for new visitors.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Stronger page depth than a simple timer site.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Adds instant energy and credibility.
                </div>
              </div>

              <a
                href={gta6Data.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Open official Rockstar page
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <GlassCard className="p-3 shadow-[0_20px_80px_rgba(236,72,153,0.08)]">
              <div className="aspect-video overflow-hidden rounded-[1.5rem]">
                <iframe
                  className="h-full w-full"
                  src={gta6Data.trailerEmbedUrl}
                  title="GTA VI Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}