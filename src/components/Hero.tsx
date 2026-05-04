import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import Countdown from "./Countdown";
import AnimatedBackground from "./AnimatedBackground";
import GlassCard from "./ui/GlassCard";
import Container from "./ui/Container";
import TrackedLink from "./TrackedLink";
import { gta6Data } from "../data/gta";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-8 sm:px-8 lg:px-12">
      <AnimatedBackground />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur sm:text-sm"
            >
              <Sparkles size={16} className="text-pink-400" />
              <span>Unofficial fan-made experience</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mb-4 text-[11px] uppercase tracking-[0.38em] text-pink-300/70 sm:text-xs"
            >
              Vice City is waiting
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="max-w-4xl font-display text-5xl uppercase leading-[0.94] tracking-tight sm:text-7xl lg:text-[6.4rem]"
            >
              <span className="bg-gradient-to-r from-pink-400 via-orange-200 to-cyan-300 bg-clip-text text-transparent">
                GTA 6 Countdown
              </span>
              <span className="sr-only">
                live timer to Grand Theft Auto VI release date
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 max-w-2xl text-sm leading-6 text-white/74 sm:text-base sm:leading-7 lg:text-lg"
            >
              A fan-made countdown experience built around anticipation, atmosphere,
              and the launch of Grand Theft Auto VI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-9"
            >
              <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/45 sm:text-xs">
                {gta6Data.subtitle}
              </p>
              <Countdown targetDate={gta6Data.releaseDate} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <TrackedLink
                href="#trailer"
                eventName="trailer_click"
                className="inline-flex min-h-[52px] min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold !text-black shadow-[0_12px_30px_rgba(255,255,255,0.08)] transition hover:scale-[1.01] hover:shadow-[0_16px_40px_rgba(255,255,255,0.12)]"
              >
                <Play size={18} className="shrink-0" />
                <span>{gta6Data.trailerLabel}</span>
              </TrackedLink>

              <a
                href="#updates"
                className="inline-flex min-h-[52px] min-w-[190px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View latest updates
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#info"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Scroll to explore
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22 }}
            className="grid gap-4"
          >
            <GlassCard className="p-5 sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
              Release date
            </p>
            <p className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
              19 Nov
            </p>
            <p className="mt-2 text-sm text-white/58">
              Current launch date displayed on the project.
            </p>
          </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <GlassCard className="p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Setting
                </p>
                <p className="mt-3 text-2xl font-bold">Vice City</p>
                <p className="mt-2 text-sm text-white/58">
                  Neon heat, coastline, nightlife.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Characters
                </p>
                <p className="mt-3 text-2xl font-bold">Jason & Lucia</p>
                <p className="mt-2 text-sm text-white/58">Dual lead dynamic.</p>
              </GlassCard>
            </div>

            <GlassCard className="overflow-hidden p-0">
              <div className="bg-gradient-to-r from-pink-500/15 via-orange-200/5 to-cyan-400/15 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Project note
                </p>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/68">
                  Designed as a premium fan-made showcase focused on countdown,
                  atmosphere, updates, and product presentation.
                </p>
                <a
                  href="/gta-6-release-date"
                  className="text-white/70 hover:text-white"
                >
                  GTA 6 Release Date
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}