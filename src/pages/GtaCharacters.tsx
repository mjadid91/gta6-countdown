import Seo from "../components/Seo";

export default function GtaCharacters() {
  return (
    <main className="min-h-screen bg-[#05010a] px-6 py-20 text-white sm:px-10 lg:px-16">
      <Seo
        title="GTA 6 Characters – Jason, Lucia & Full Analysis"
        description="Discover all GTA 6 characters including Jason and Lucia, with detailed analysis, story context, and expectations for Grand Theft Auto VI."
      />

      <div className="mx-auto max-w-4xl text-white/70">
        <h1 className="mb-8 text-4xl font-black text-white sm:text-5xl">
          GTA 6 Characters
        </h1>

        <p className="mb-4">
          Grand Theft Auto VI introduces a new generation of characters, centered around a duo that defines the tone of the game. Rockstar Games is building a more narrative-driven experience, with a focus on relationships, realism, and immersion.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Jason – The Male Protagonist
        </h2>

        <p className="mb-4">
          Jason appears to be one of the main playable characters in GTA 6. Based on early footage and leaks, he is involved in criminal activities across Vice City and the state of Leonida.
        </p>

        <p className="mb-4">
          His personality seems grounded, strategic, and more realistic compared to previous protagonists. Rockstar may be aiming for a deeper psychological profile than in GTA V.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Lucia – The Female Protagonist
        </h2>

        <p className="mb-4">
          Lucia is the first female protagonist in a modern GTA mainline game. She is portrayed as strong, decisive, and deeply involved in the criminal world.
        </p>

        <p className="mb-4">
          Her dynamic with Jason appears central to the story, potentially inspired by a Bonnie-and-Clyde style narrative.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          A Dual-Protagonist System
        </h2>

        <p className="mb-4">
          GTA 6 is expected to feature a dual-character system similar to GTA V, but with more emotional depth and tighter storytelling. The relationship between Jason and Lucia could drive major decisions and events throughout the game.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-white">
          Side Characters & World Population
        </h2>

        <p className="mb-4">
          Rockstar is known for building rich ecosystems filled with memorable side characters. GTA 6 will likely expand this further, with more dynamic NPCs, social media integration, and realistic interactions.
        </p>

        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
          <p className="text-sm leading-7 text-white/65">
            Want to follow the countdown to GTA VI launch? Head back to the homepage to see the live timer and get notified.
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