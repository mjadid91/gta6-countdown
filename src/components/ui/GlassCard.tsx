import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-[1.75rem] border border-white/10",
        "bg-white/[0.045] backdrop-blur-xl",
        "shadow-[0_10px_40px_rgba(0,0,0,0.24)]",
        "transition duration-300",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}