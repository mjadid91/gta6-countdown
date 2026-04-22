import { BellRing, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import { subscribeToNewsletter } from "../services/newsletterService";
import Container from "./ui/Container";

type Status = "idle" | "success" | "error";

const cadenceOptions = [
  { label: "Every 3 days", value: 3 },
  { label: "Every 7 days", value: 7 },
  { label: "Every 14 days", value: 14 },
  { label: "Every 30 days", value: 30 },
];

export default function NotifySection() {
  const [email, setEmail] = useState("");
  const [cadenceDays, setCadenceDays] = useState(7);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    const result = await subscribeToNewsletter(email, cadenceDays);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
      setEmail("");
      setCadenceDays(7);
    } else {
      setStatus("error");
      setMessage(result.message);
    }

    setIsSubmitting(false);
  }

  return (
    <section id="notify" className="px-5 py-20 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <GlassCard className="overflow-hidden p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <SectionBadge>Countdown alerts</SectionBadge>

                <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                  Receive countdown reminders with extra hype.
                </h2>

                <p className="mt-4 max-w-2xl text-white/65">
                  Choose how often you want reminders and get countdown emails
                  with a short hype line and a curated GTA VI detail.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
                    Countdown updates
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
                    Flexible frequency
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
                    Hype-driven reminders
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 backdrop-blur"
              >
                <label className="mb-3 block text-sm font-medium text-white/70">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-pink-400/50 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <label className="mb-3 mt-5 block text-sm font-medium text-white/70">
                  Reminder frequency
                </label>

                <select
                  value={cadenceDays}
                  onChange={(event) => setCadenceDays(Number(event.target.value))}
                  disabled={isSubmitting}
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <BellRing size={18} />
                      Activate alerts
                    </>
                  )}
                </button>

                {message ? (
                  <div
                    className={`mt-4 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                      status === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                        : "border-red-400/20 bg-red-400/10 text-red-200"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    )}
                    <span>{message}</span>
                  </div>
                ) : null}

                <p className="mt-3 text-xs text-white/40">
                  Unofficial fan-made project mailing list.
                </p>
              </form>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}