import { ArrowUpRight, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import Container from "./ui/Container";
import { getPublishedUpdates, type SiteUpdate } from "../services/updatesService";
import { formatDate } from "../utils/formatDate";

export default function NewsSection() {
  const [updates, setUpdates] = useState<SiteUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadUpdates() {
      setLoading(true);
      const data = await getPublishedUpdates(6);

      if (mounted) {
        setUpdates(data);
        setLoading(false);
      }
    }

    loadUpdates();

    return () => {
      mounted = false;
    };
  }, []);

  const hasUpdates = updates.length > 0;

  return (
    <section id="news" className="px-5 py-20 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>Latest updates</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                Keep the project active.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                Updates give the site continuity. They turn it from a static page
                into something that feels maintained and alive.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Content is loaded from Supabase so the section can evolve without
              frontend edits every time.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <GlassCard key={index} className="p-6">
                  <div className="animate-pulse">
                    <div className="h-5 w-24 rounded bg-white/10" />
                    <div className="mt-5 h-7 w-3/4 rounded bg-white/10" />
                    <div className="mt-4 h-4 w-full rounded bg-white/10" />
                    <div className="mt-2 h-4 w-5/6 rounded bg-white/10" />
                    <div className="mt-6 h-4 w-28 rounded bg-white/10" />
                  </div>
                </GlassCard>
              ))
            : hasUpdates
            ? updates.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.06}>
                  <GlassCard className="h-full p-0">
                    <article className="flex h-full flex-col rounded-[2rem] p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/50">
                          {item.tag}
                        </span>

                        <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                          {formatDate(item.published_at)}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 flex-1 text-sm leading-6 text-white/60 sm:text-base">
                        {item.excerpt}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
                        >
                          Open link
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/35">
                          <Newspaper size={16} />
                          Project update
                        </div>
                      )}
                    </article>
                  </GlassCard>
                </ScrollReveal>
              ))
            : (
              <ScrollReveal>
                <div className="md:col-span-2 xl:col-span-3">
                  <GlassCard className="p-8 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                      No updates yet
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-white">
                      Add the first update in Supabase.
                    </h3>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                      New rows inserted into <span className="font-semibold text-white/70">site_updates</span>
                      will appear here after refresh.
                    </p>
                  </GlassCard>
                </div>
              </ScrollReveal>
            )}
        </div>
      </Container>
    </section>
  );
}