import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
};

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.32em] text-white/55 backdrop-blur">
      {children}
    </span>
  );
}