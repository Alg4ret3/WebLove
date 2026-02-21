"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  isBook: boolean;
};

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
      isBook: Math.random() < 0.4, // 40% libros, 60% corazones
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none select-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${
            p.isBook ? "text-blue-200/40" : "text-blue-300/40"
          } drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
          }}
          initial={{ y: "110vh", opacity: 0, rotate: 0 }}
          animate={{
            y: ["110vh", "-10vh"],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 45, -45, 0],
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`]
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.isBook ? "✎" : "✨"}
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[#f0ede9]/20" />
    </div>
  );
}
