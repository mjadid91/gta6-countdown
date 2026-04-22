import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export default function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/8 blur-3xl transition-transform duration-150"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}