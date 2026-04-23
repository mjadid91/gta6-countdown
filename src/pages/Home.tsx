import BackToTop from "../components/BackToTop";
import CharactersSection from "../components/CharactersSection";
import CursorGlow from "../components/CursorGlow";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import LiveStatsBar from "../components/LiveStatsBar";
import Navbar from "../components/Navbar";
import NewsSection from "../components/NewsSection";
import NotifySection from "../components/NotifySection";
import OfficialUpdatesSection from "../components/OfficialUpdatesSection";
import ReleaseInfoSection from "../components/ReleaseInfoSection";
import ScrollProgress from "../components/ScrollProgress";
import Seo from "../components/Seo";
import TrailerSection from "../components/TrailerSection";
import WorldSection from "../components/WorldSection";

function SeoContentSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl text-white/70">
        <h2 className="mb-6 text-3xl font-bold text-white">
          GTA 6 Countdown – Release Date & Information
        </h2>

        <p className="mb-4">
          Grand Theft Auto VI is one of the most anticipated video games ever
          developed by Rockstar Games. Set in Vice City and the fictional state
          of Leonida, GTA 6 promises a massive open-world experience with
          next-generation graphics, immersive storytelling, and dynamic
          gameplay.
        </p>

        <p className="mb-4">
          This website provides a live countdown to the official GTA 6 release
          date. Track the remaining days, hours, and minutes until launch, and
          stay updated with the latest information and news surrounding the
          game.
        </p>

        <p className="mb-4">
          Fans can also subscribe to receive countdown alerts and updates
          directly by email. As the release approaches, more details about
          characters, gameplay, and features will be revealed.
        </p>

        <p>
          Bookmark this page and come back regularly to follow the countdown to
          GTA VI. Vice City is waiting.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05010a] text-white">
      <Seo
        title="GTA VI Countdown — Fan-Made Launch Experience"
        description="A fan-made GTA VI countdown and content experience featuring release info, updates, live stats, and a polished cinematic presentation."
      />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <LiveStatsBar />
      <InfoSection />
      <ReleaseInfoSection />
      <WorldSection />
      <CharactersSection />
      <TrailerSection />
      <OfficialUpdatesSection />
      <NewsSection />
      <GallerySection />
      <FaqSection />
      <NotifySection />
      <SeoContentSection />
      <Footer />
      <BackToTop />
    </main>
  );
}