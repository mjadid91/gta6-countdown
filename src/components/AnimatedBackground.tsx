export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-[-10%] h-[28rem] w-[28rem] animate-pulse rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-[8%] h-[32rem] w-[32rem] animate-pulse rounded-full bg-cyan-400/20 blur-3xl [animation-delay:1200ms]" />
      <div className="absolute bottom-[-15%] left-[15%] h-[30rem] w-[30rem] animate-pulse rounded-full bg-violet-500/20 blur-3xl [animation-delay:2500ms]" />
      <div className="absolute bottom-[10%] right-[18%] h-[16rem] w-[16rem] animate-pulse rounded-full bg-orange-300/10 blur-3xl [animation-delay:1800ms]" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,1,10,0.15)_0%,rgba(5,1,10,0.55)_55%,rgba(5,1,10,0.95)_100%)]" />
    </div>
  );
}