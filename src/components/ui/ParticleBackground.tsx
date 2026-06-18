import { useState, useEffect } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  isHeart: boolean;
  size: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const list: Particle[] = [];
    for (let i = 0; i < 28; i++) {
      list.push({
        id: i,
        left: Math.random() * 95,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        isHeart: Math.random() > 0.45,
        size: 10 + Math.random() * 15,
      });
    }
    setParticles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle flex items-center justify-center opacity-0"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.isHeart ? (
            <span className="text-primary-container filter drop-shadow-sm select-none">🌸</span>
          ) : (
            <span className="text-secondary-fixed filter drop-shadow-sm select-none opacity-80">💛</span>
          )}
        </div>
      ))}
    </div>
  );
}
