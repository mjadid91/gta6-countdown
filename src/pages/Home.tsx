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
      <Footer />
      <BackToTop />
    </main>
  );
}