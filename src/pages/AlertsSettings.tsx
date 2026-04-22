import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import GlassCard from "../components/ui/GlassCard";
import SectionBadge from "../components/ui/SectionBadge";
import {
  deleteSubscriberByToken,
  getSubscriberByToken,
  updateSubscriberSettings,
  type SubscriberSettings,
} from "../services/alertsService";

type Status =
  | { type: "success" | "error"; message: string }
  | null;

const cadenceOptions = [
  { label: "Every 3 days", value: 3 },
  { label: "Every 7 days", value: 7 },
  { label: "Every 14 days", value: 14 },
  { label: "Every 30 days", value: 30 },
];

export default function AlertsSettings() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [subscriber, setSubscriber] = useState<SubscriberSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const [cadenceDays, setCadenceDays] = useState(7);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setStatus(null);

      if (!token) {
        if (mounted) {
          setSubscriber(null);
          setLoading(false);
          setStatus({
            type: "error",
            message: "Missing subscription token.",
          });
        }
        return;
      }

      const data = await getSubscriberByToken(token);

      if (!mounted) return;

      setSubscriber(data);
      setLoading(false);

      if (!data) {
        setStatus({
          type: "error",
          message: "Subscription not found or link is invalid.",
        });
        return;
      }

      setCadenceDays(data.cadence_days);
      setIsEnabled(data.is_enabled);
    }

    void load();

    return () => {
      mounted = false;
    };
  }, [token]);

  const nextLabel = useMemo(() => {
    if (!subscriber?.next_notification_at || !isEnabled) return "Paused";

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(subscriber.next_notification_at));
  }, [subscriber?.next_notification_at, isEnabled]);

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token || saving) return;

    setSaving(true);
    setStatus(null);

    const result = await updateSubscriberSettings(token, {
      cadence_days: cadenceDays,
      is_enabled: isEnabled,
    });

    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      const refreshed = await getSubscriberByToken(token);
      setSubscriber(refreshed);

      if (refreshed) {
        setCadenceDays(refreshed.cadence_days);
        setIsEnabled(refreshed.is_enabled);
      }
    }

    setSaving(false);
  }

  async function handleDelete() {
    if (!token || deleting) return;

    const confirmed = window.confirm(
      "Are you sure you want to unsubscribe from all countdown alerts?"
    );

    if (!confirmed) return;

    setDeleting(true);
    setStatus(null);

    const result = await deleteSubscriberByToken(token);

    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      setSubscriber(null);
    }

    setDeleting(false);
  }

  return (
    <main className="min-h-screen bg-[#05010a] px-5 py-16 text-white sm:px-8 lg:px-12">
      <Seo
        title="Manage Alerts — GTA VI Countdown"
        description="Manage your GTA VI countdown alert settings."
      />

      <Container>
        <div className="mx-auto max-w-3xl">
          <GlassCard className="p-8 sm:p-10">
            <SectionBadge>Alert settings</SectionBadge>

            <h1 className="mt-6 text-4xl font-black sm:text-5xl">
              Manage your countdown alerts
            </h1>

            <p className="mt-4 text-white/65">
              Update your reminder frequency, pause alerts, or unsubscribe at
              any time.
            </p>

            {loading ? (
              <div className="mt-8 text-white/50">Loading your settings...</div>
            ) : !subscriber ? (
              <div className="mt-8">
                {status ? (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                        : "border-red-400/20 bg-red-400/10 text-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}

                <Link
                  to="/"
                  className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01]"
                >
                  Back to home
                </Link>
              </div>
            ) : (
              <>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Email
                    </p>
                    <p className="mt-3 text-sm text-white/80 break-all">
                      {subscriber.email}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Status
                    </p>
                    <p className="mt-3 text-sm text-white/80">
                      {isEnabled ? "Active" : "Paused"}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Next alert
                    </p>
                    <p className="mt-3 text-sm text-white/80">{nextLabel}</p>
                  </div>
                </div>

                <form onSubmit={handleSave} className="mt-8 space-y-5">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-white/70">
                      Reminder frequency
                    </label>

                    <select
                      value={cadenceDays}
                      onChange={(event) => setCadenceDays(Number(event.target.value))}
                      disabled={saving || deleting}
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition focus:border-pink-400/50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {cadenceOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-[#0a0313] text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                    <input
                      type="checkbox"
                      checked={isEnabled}
                      onChange={(event) => setIsEnabled(event.target.checked)}
                      disabled={saving || deleting}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-white/75">
                      Keep countdown alerts enabled
                    </span>
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={saving || deleting}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {saving ? "Saving..." : "Save settings"}
                    </button>

                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={saving || deleting}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-3 font-semibold text-red-200 transition hover:bg-red-400/15 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {deleting ? "Removing..." : "Unsubscribe"}
                    </button>
                  </div>

                  {status ? (
                    <div
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                          : "border-red-400/20 bg-red-400/10 text-red-200"
                      }`}
                    >
                      {status.message}
                    </div>
                  ) : null}
                </form>
              </>
            )}
          </GlassCard>
        </div>
      </Container>
    </main>
  );
}