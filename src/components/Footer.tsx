import Container from "./ui/Container";
import TrackedLink from "./TrackedLink";
import { gta6Data } from "../data/gta";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
              GTA VI Countdown
            </p>

            <p className="mt-3 text-sm leading-6 text-white/62 sm:text-base">
              A fan-made countdown and content experience built around release
              visibility, official references, updates, and atmosphere.
            </p>

            <p className="mt-4 text-xs leading-5 text-white/35">
              {gta6Data.disclaimer}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/62">
            <TrackedLink
              href={gta6Data.officialUrl}
              eventName="official_click"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Official Rockstar page
            </TrackedLink>

            <a href="/gta-6-release-date" className="transition hover:text-white">
              GTA 6 Release Date
            </a>

            <a href="#news" className="transition hover:text-white">
              Latest updates
            </a>

            <a href="#notify" className="transition hover:text-white">
              Join notify list
            </a>
            <a href="/gta-6-release-date" className="transition hover:text-white">
              GTA 6 Release Date
            </a>
            <a href="/gta-6-characters" className="transition hover:text-white">
              GTA 6 Characters
            </a>
            <a href="/gta-6-map" className="transition hover:text-white">
              GTA 6 Map
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}