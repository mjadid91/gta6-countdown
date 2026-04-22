import { useEffect, useMemo, useState } from "react";
import {
  createUpdate,
  getAllUpdates,
  togglePublished,
  type AdminSiteUpdate,
} from "../services/adminUpdatesService";
import GlassCard from "../components/ui/GlassCard";
import SectionBadge from "../components/ui/SectionBadge";
import Seo from "../components/Seo";

type Status = {
  type: "success" | "error";
  message: string;
} | null;

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [href, setHref] = useState("");
  const [tag, setTag] = useState("Update");

  const [updates, setUpdates] = useState<AdminSiteUpdate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function loadUpdates() {
    setIsLoading(true);
    const data = await getAllUpdates();
    setUpdates(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (isUnlocked) {
      void loadUpdates();
    }
  }, [isUnlocked]);

  function handleUnlock(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setStatus(null);
      return;
    }

    setStatus({
      type: "error",
      message: "Wrong password.",
    });
  }

  async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    const result = await createUpdate({
      title,
      excerpt,
      href,
      tag,
    });

    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      setTitle("");
      setExcerpt("");
      setHref("");
      setTag("Update");
      await loadUpdates();
    }

    setIsSubmitting(false);
  }

  async function handleToggle(item: AdminSiteUpdate) {
    const result = await togglePublished(item.id, !item.is_published);

    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      await loadUpdates();
    }
  }

  const publishedCount = useMemo(
    () => updates.filter((item) => item.is_published).length,
    [updates]
  );

  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-[#05010a] px-6 py-20 text-white sm:px-10 lg:px-16">
        <Seo
          title="Admin — GTA VI Countdown"
          description="Admin panel for managing site updates."
        />

        <div className="mx-auto max-w-2xl">
          <GlassCard className="p-8">
            <SectionBadge>Admin access</SectionBadge>

            <h1 className="mt-6 text-4xl font-black">Unlock admin panel</h1>
            <p className="mt-4 text-white/65">
              Lightweight front-only access for your project demo.
            </p>

            <form onSubmit={handleUnlock} className="mt-8">
              <label className="mb-3 block text-sm text-white/70">
                Admin password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-white/35 focus:border-pink-400/50"
                placeholder="Enter password"
              />

              <button
                type="submit"
                className="mt-4 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01]"
              >
                Unlock
              </button>

              {status ? (
                <p
                  className={`mt-4 text-sm ${
                    status.type === "success"
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </GlassCard>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#05010a] px-6 py-12 text-white sm:px-10 lg:px-16">
      <Seo
        title="Admin Panel — GTA VI Countdown"
        description="Manage site updates and publication state."
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionBadge>Admin panel</SectionBadge>

            <h1 className="mt-6 text-4xl font-black sm:text-5xl">
              Manage site updates
            </h1>

            <p className="mt-4 max-w-2xl text-white/65">
              Create updates, publish or unpublish them, and keep the site alive
              without editing the code every time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <GlassCard className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Total updates
              </p>
              <p className="mt-3 font-display text-5xl uppercase">
                {updates.length}
              </p>
            </GlassCard>

            <GlassCard className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Published
              </p>
              <p className="mt-3 font-display text-5xl uppercase">
                {publishedCount}
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-bold">Create update</h2>

            <form onSubmit={handleCreate} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-pink-400/50"
                  placeholder="New update title"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Excerpt
                </label>
                <textarea
                  value={excerpt}
                  onChange={(event) => setExcerpt(event.target.value)}
                  className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-pink-400/50"
                  placeholder="Short update text"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Link (optional)
                </label>
                <input
                  type="text"
                  value={href}
                  onChange={(event) => setHref(event.target.value)}
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-pink-400/50"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Tag</label>
                <input
                  type="text"
                  value={tag}
                  onChange={(event) => setTag(event.target.value)}
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-pink-400/50"
                  placeholder="Update"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Creating..." : "Create update"}
              </button>

              {status ? (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">Existing updates</h2>

              <button
                type="button"
                onClick={() => void loadUpdates()}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Refresh
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {isLoading ? (
                <p className="text-white/50">Loading updates...</p>
              ) : updates.length === 0 ? (
                <p className="text-white/50">No updates found.</p>
              ) : (
                updates.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/50">
                            {item.tag}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.25em] ${
                              item.is_published
                                ? "bg-emerald-400/15 text-emerald-200"
                                : "bg-zinc-400/15 text-zinc-300"
                            }`}
                          >
                            {item.is_published ? "Published" : "Hidden"}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                        <p className="mt-3 text-sm leading-6 text-white/60">
                          {item.excerpt}
                        </p>

                        {item.href ? (
                          <p className="mt-3 text-xs text-white/40">
                            {item.href}
                          </p>
                        ) : null}
                      </div>

                      <button
                        type="button"
                        onClick={() => void handleToggle(item)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                      >
                        {item.is_published ? "Unpublish" : "Publish"}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}