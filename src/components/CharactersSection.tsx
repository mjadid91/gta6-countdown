import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import { gta6Data } from "../data/gta";

type Accent = "pink" | "cyan";

function CharacterPoster({
  name,
  role,
  description,
  mood,
  accent,
}: {
  name: string;
  role: string;
  description: string;
  mood: string;
  accent: Accent;
}) {
  const accentClasses =
    accent === "pink"
      ? {
          glow: "bg-pink-500/20",
          border: "border-pink-400/20",
          text: "text-pink-300/80",
          gradient:
            "bg-gradient-to-br from-pink-500/20 via-pink-400/5 to-transparent",
          radial:
            "bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.22),transparent_38%)]",
        }
      : {
          glow: "bg-cyan-400/20",
          border: "border-cyan-300/20",
          text: "text-cyan-200/80",
          gradient:
            "bg-gradient-to-br from-cyan-400/20 via-cyan-300/5 to-transparent",
          radial:
            "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.20),transparent_38%)]",
        };

  return (
    <GlassCard className="group relative overflow-hidden p-0">
      <article className="relative min-h-[520px] overflow-hidden">
        <div className={`absolute inset-0 ${accentClasses.gradient}`} />
        <div className={`absolute inset-0 ${accentClasses.radial}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_30%,rgba(0,0,0,0.08)_100%)]" />

        <div
          className={`absolute -left-10 top-12 h-40 w-40 rounded-full blur-3xl ${accentClasses.glow}`}
        />
        <div
          className={`absolute -right-12 bottom-10 h-48 w-48 rounded-full blur-3xl ${accentClasses.glow}`}
        />

        <div className="absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-white/12 to-transparent sm:block" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative flex min-h-[520px] flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <span
              className={`inline-flex rounded-full border bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.35em] backdrop-blur ${accentClasses.border} ${accentClasses.text}`}
            >
              Lead character
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              GTA VI
            </span>
          </div>

          <div>
            <p className={`text-[11px] uppercase tracking-[0.32em] ${accentClasses.text}`}>
              {mood}
            </p>

            <h3 className="mt-5 font-display text-[4.5rem] uppercase leading-[0.9] text-white sm:text-[5.5rem] lg:text-[6.5rem]">
              {name}
            </h3>

            <p className="mt-5 max-w-md text-lg font-semibold text-white/86">
              {role}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-6 text-white/66 sm:text-base">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/55">
                Cinematic presence
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/55">
                High tension
              </div>
            </div>
          </div>
        </div>
      </article>
    </GlassCard>
  );
}

export default function CharactersSection() {
  const [lucia, jason] = gta6Data.characterCards;

  return (
    <section id="characters" className="px-5 py-24 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>Characters</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                Two leads. One shared momentum.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                Built as stylized digital posters instead of fake promotional
                portraits. Stronger identity, better consistency, cleaner mood.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              This version leans into typography, color, contrast, and presence
              rather than mismatched placeholder photography.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1fr_220px_1fr]">
          <ScrollReveal>
            <CharacterPoster
              name={lucia.name}
              role={lucia.role}
              description={lucia.description}
              mood={lucia.mood}
              accent={lucia.accent as Accent}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.05} className="hidden xl:block">
            <div className="flex h-full items-center justify-center">
              <div className="relative flex h-full min-h-[520px] w-full flex-col items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] px-6 text-center backdrop-blur-xl">
                <div className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-pink-500/15 blur-2xl" />
                <div className="absolute bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-2xl" />

                <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                  Dual lead
                </p>

                <p className="mt-6 font-display text-6xl uppercase leading-none text-white">
                  VI
                </p>

                <div className="my-8 h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                <p className="max-w-[160px] text-sm leading-6 text-white/55">
                  Opposite energies. Shared momentum. One atmosphere.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <CharacterPoster
              name={jason.name}
              role={jason.role}
              description={jason.description}
              mood={jason.mood}
              accent={jason.accent as Accent}
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}