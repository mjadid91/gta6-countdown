import Seo from "../components/Seo";

export default function GtaRelease() {
  return (
    <main className="min-h-screen bg-[#05010a] px-6 py-20 text-white sm:px-10 lg:px-16">
      <Seo
        title="GTA 6 Release Date – Countdown, Info & Updates"
        description="Find the GTA 6 release date, countdown timer, and latest information about Grand Theft Auto VI."
      />

      <div className="mx-auto max-w-4xl text-white/70">
        <h1 className="mb-8 text-4xl font-black text-white sm:text-5xl">
          GTA 6 Release Date & Countdown
        </h1>

        <p className="mb-4">
          Grand Theft Auto VI is one of the most anticipated video games ever.
          Developed by Rockstar Games, GTA 6 is set in Vice City and the wider
          fictional state of Leonida.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          When is GTA 6 releasing?
        </h2>

        <p className="mb-4">
          The release date currently used on this website is November 19, 2026.
          That date powers the live countdown shown on the homepage.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Live GTA 6 Countdown
        </h2>

        <p className="mb-4">
          This website lets you track the exact time remaining until the launch
          of Grand Theft Auto VI with a live countdown, updates, and email
          alerts.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Where is GTA 6 set?
        </h2>

        <p className="mb-4">
          GTA 6 takes place in Vice City, inspired by Miami, and across the
          wider region of Leonida. The setting combines nightlife, coastline,
          density, and a broader open-world atmosphere.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Who are the main characters?
        </h2>

        <p className="mb-4">
          The current presentation of the project highlights Jason and Lucia as
          the central leads of GTA VI, forming the core of the game’s tone and
          anticipation.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Why use this countdown website?
        </h2>

        <p className="mb-4">
          This site gives you a clean, fast, and visually polished way to follow
          the GTA 6 release countdown, read updates, and subscribe to reminders
          before launch.
        </p>

        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
          <p className="text-sm leading-7 text-white/65">
            Looking for the live timer? Go back to the homepage to see the main
            countdown and the latest project sections.
          </p>

          <a
            href="/"
            className="mt-4 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01]"
          >
            Open live countdown
          </a>
        </div>
      </div>
    </main>
  );
}