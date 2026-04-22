import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Container from "../components/ui/Container";
import GlassCard from "../components/ui/GlassCard";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#05010a] px-5 py-20 text-white sm:px-8 lg:px-12">
      <Seo
        title="Page Not Found — GTA VI Countdown"
        description="The page you are looking for does not exist."
      />

      <Container>
        <div className="mx-auto max-w-3xl">
          <GlassCard className="p-8 text-center sm:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Error 404
            </p>

            <h1 className="mt-6 text-4xl font-black sm:text-5xl">
              This page does not exist.
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-white/60">
              The route is missing, broken, or simply not part of the project.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.01]"
            >
              Back to home
            </Link>
          </GlassCard>
        </div>
      </Container>
    </main>
  );
}