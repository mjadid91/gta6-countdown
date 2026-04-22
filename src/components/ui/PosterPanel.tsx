import type { ReactNode } from "react";

type PosterPanelProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: "pink" | "cyan" | "orange";
  children?: ReactNode;
  className?: string;
};

const accentMap = {
  pink: "from-pink-500/20 via-pink-400/5 to-transparent",
  cyan: "from-cyan-400/20 via-cyan-300/5 to-transparent",
  orange: "from-orange-300/20 via-orange-200/5 to-transparent",
};

export default function PosterPanel({
  eyebrow,
  title,
  subtitle,
  accent = "pink",
  children,
  className = "",
}: PosterPanelProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[1.8rem] border border-white/10",
        "bg-black/25 backdrop-blur-xl",
        "shadow-[0_20px_70px_rgba(0,0,0,0.25)]",
        className,
      ].join(" ")}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accentMap[accent]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
            {eyebrow}
          </p>
        ) : null}

        <h3 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl lg:text-7xl">
          {title}
        </h3>

        {subtitle ? (
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
            {subtitle}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}