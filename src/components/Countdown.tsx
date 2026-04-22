import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.07] sm:rounded-[1.75rem] sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10 opacity-80 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
          {String(value).padStart(2, "0")}
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.34em] text-white/42">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const items = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <div className="grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {items.map((item) => (
        <CountdownCard
          key={item.label}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
}