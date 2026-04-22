import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { gta6Data } from "../data/gta";
import Container from "./ui/Container";
import TrackedLink from "./TrackedLink";

const navItems = [
  { label: "Info", href: "#info" },
  { label: "World", href: "#world" },
  { label: "Characters", href: "#characters" },
  { label: "Trailer", href: "#trailer" },
  { label: "Updates", href: "#updates" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Notify", href: "#notify" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <Container>
        <div className="rounded-full border border-white/10 bg-black/35 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <div className="flex items-center justify-between px-5 py-3 sm:px-6">
            <a
              href="#"
              className="font-display text-2xl uppercase tracking-[0.18em] text-white"
            >
              VI
            </a>

            <nav className="hidden items-center gap-5 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <TrackedLink
                href={gta6Data.officialUrl}
                eventName="official_click"
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12 sm:inline-flex"
              >
                Official
              </TrackedLink>

              <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/12 md:hidden"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? "max-h-[32rem] pb-4" : "max-h-0"
            }`}
          >
            <div className="mx-4 rounded-[1.35rem] border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="rounded-xl px-4 py-3 text-sm text-white/72 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <TrackedLink
                  href={gta6Data.officialUrl}
                  eventName="official_click"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/12 sm:hidden"
                >
                  Official Site
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}