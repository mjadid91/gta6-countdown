import Seo from "../components/Seo";

export default function GtaMap() {
  return (
    <main className="min-h-screen bg-[#05010a] px-6 py-20 text-white sm:px-10 lg:px-16">
      <Seo
        title="GTA 6 Map – Vice City & Leonida"
        description="Explore the GTA 6 map, including Vice City and the state of Leonida. Discover the locations of Grand Theft Auto VI."
      />

      <div className="mx-auto max-w-4xl text-white/70">
        <h1 className="mb-8 text-4xl font-black text-white">
          GTA 6 Map – Vice City & Locations
        </h1>

        <p className="mb-4">
          The GTA 6 map is expected to be one of the largest ever created by Rockstar Games.
          It features Vice City and the surrounding state of Leonida.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-white">
          Vice City
        </h2>

        <p className="mb-4">
          Vice City returns as the main location in GTA VI. Inspired by Miami,
          it includes beaches, nightlife, and dense urban areas.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-white">
          Leonida State
        </h2>

        <p className="mb-4">
          The map expands beyond the city into the fictional state of Leonida,
          adding new environments such as countryside, highways, and hidden areas.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-white">
          Open World Evolution
        </h2>

        <p>
          GTA 6 is expected to push open-world design further with dynamic
          events, improved AI, and a more immersive environment.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-semibold text-black"
        >
          Back to countdown
        </a>
      </div>
    </main>
  );
}