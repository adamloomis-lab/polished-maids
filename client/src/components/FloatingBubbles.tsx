import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 30, // 30-80px
      left: Math.random() * 90 + 5, // 5-95% horizontal
      top: Math.random() * 90 + 5, // 5-95% vertical - spread throughout viewport
      duration: Math.random() * 12 + 18, // 18-30s gentle oscillation
      delay: -(Math.random() * 20), // negative delay = start mid-animation immediately
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
