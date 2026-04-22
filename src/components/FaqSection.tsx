import ScrollReveal from "./ScrollReveal";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import Container from "./ui/Container";
import { gta6Data } from "../data/gta";

export default function FaqSection() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 lg:px-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge>FAQ</SectionBadge>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                Quick answers, clearly presented.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
                A concise FAQ helps the project feel more complete and more useful
                to first-time visitors.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Keep the answers short, readable, and practical.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5">
          {gta6Data.faqs.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 0.05}>
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white">{item.question}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
                  {item.answer}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}