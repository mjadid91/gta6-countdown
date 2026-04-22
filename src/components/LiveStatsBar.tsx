import { useEffect, useState } from "react";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import {
  getPublicSiteStats,
  type PublicSiteStats,
} from "../services/statsService";

export default function LiveStatsBar() {
  const [stats, setStats] = useState<PublicSiteStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadStats() {
      setLoading(true);
      const data = await getPublicSiteStats();

      if (mounted) {
        setStats(data);
        setLoading(false);
      }
    }

    void loadStats();

    return () => {
      mounted = false;
    };
  }, []);

  const items = [
    {
      label: "Subscribers",
      value: loading ? "..." : (stats?.subscriber_count ?? 0).toString(),
    },
    {
      label: "Trailer Clicks",
      value: loading ? "..." : (stats?.trailer_clicks ?? 0).toString(),
    },
    {
      label: "Official Clicks",
      value: loading ? "..." : (stats?.official_clicks ?? 0).toString(),
    },
  ];

  return (
    <section className="px-5 py-6 sm:px-8 lg:px-12">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <GlassCard key={item.label} className="p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                {item.label}
              </p>
              <p className="mt-3 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                {item.value}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}