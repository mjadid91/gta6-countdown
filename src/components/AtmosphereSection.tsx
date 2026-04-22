import { gta6Data } from "../data/gta";
import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";

export default function AtmosphereSection() {
  return (
    <section className="px-6 pb-20 pt-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10 p-8">
              <SectionBadge>Atmosphere</SectionBadge>

              <h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl">
                Neon nights, criminal ambition, and pure anticipation.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                This version focuses on emotion first: dark luxury, neon glow,
                cinematic spacing, and a strong premium landing page structure.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    World
                  </p>
                  <p className="mt-2 text-lg font-bold">{gta6Data.location}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Characters
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    {gta6Data.characters.join(" & ")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Energy
                  </p>
                  <p className="mt-2 text-lg font-bold">Vice City Vibes</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <SectionBadge>Roadmap</SectionBadge>

              <h3 className="mt-4 text-2xl font-black">Next premium upgrades</h3>

              <ul className="mt-6 space-y-4 text-white/65">
                <li>— custom cursor effect</li>
                <li>— day / night mode based on local time</li>
                <li>— animated city glow background</li>
                <li>— newsletter / notify me form</li>
                <li>— soundtrack toggle</li>
                <li>— interactive Vice City map</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}