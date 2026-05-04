import Seo from "../components/Seo";

export default function GtaMap() {
  return (
    <main className="min-h-screen bg-[#05010a] px-6 py-20 text-white sm:px-10 lg:px-16">
      <Seo
        title="GTA 6 Map – Vice City, Leonida (Leaked Map & Rumors)"
        description="Explore the GTA 6 map based on leaks and rumors, including Vice City, Leonida, and the possible full world layout."
        keywords="gta 6 map, gta vi map leak, vice city map gta 6, gta 6 world map, gta 6 leonida map"
      />

      <div className="mx-auto max-w-5xl text-white/70">
        <h1 className="mb-8 text-4xl font-black text-white sm:text-5xl">
          GTA 6 Map (Leaked & Rumored)
        </h1>

        <p className="mb-6">
          The GTA 6 map has not been officially revealed by Rockstar Games.
          However, multiple leaks and community investigations have led to a
          detailed reconstruction of the possible world of Grand Theft Auto VI.
        </p>

        {/* IMAGE */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/gta6-map.png" // 👉 tu mets ton image ici dans public/
            alt="GTA 6 map leak Vice City Leonida"
            className="w-full object-cover"
          />
        </div>

        {/* DISCLAIMER */}
        <div className="mb-10 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 text-sm">
          ⚠️ This map is based on leaks and community reconstructions. It is NOT
          an official Rockstar Games map.
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Vice City
        </h2>

        <p className="mb-4">
          Vice City is expected to be the main urban area of GTA 6, inspired by
          Miami. The leaked map suggests a dense city layout with beaches,
          highways, and a strong nightlife presence.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Leonida State
        </h2>

        <p className="mb-4">
          The game is rumored to take place in Leonida, a fictional version of
          Florida. This includes swamps, rural areas, highways, and smaller
          towns beyond the main city.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Map Size & Scale
        </h2>

        <p className="mb-4">
          Based on leaks, the GTA 6 map could be significantly larger than GTA
          V, with more explorable interiors and dynamic environments.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Is this the final map?
        </h2>

        <p className="mb-4">
          No. Rockstar has not confirmed this layout. The final version of the
          map may differ significantly when GTA VI officially releases.
        </p>

        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
          <p className="text-sm leading-7 text-white/65">
            Want to track the GTA VI release? Check the live countdown on the homepage.
          </p>

          <a
            href="/"
            className="mt-4 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold !text-black transition hover:scale-[1.01]"
          >
            Open live countdown
          </a>
        </div>
      </div>
    </main>
  );
}