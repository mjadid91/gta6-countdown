import type { ReactNode, MouseEvent } from "react";
import { trackEvent } from "../services/statsService";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function TrackedLink({
  href,
  eventName,
  children,
  className,
  target,
  rel,
}: TrackedLinkProps) {
  async function handleClick(_event: MouseEvent<HTMLAnchorElement>) {
    await trackEvent(eventName);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  );
}