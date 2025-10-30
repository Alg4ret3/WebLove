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
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 18 + 8,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 18 + 10,
      isBook: Math.random() < 0.5, // mitad corazones, mitad libros
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${
            p.isBook ? "text-blue-400" : "text-pink-500"
          } opacity-80`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
          }}
          initial={{ y: p.isBook ? "100vh" : "-10vh", opacity: 0 }}
          animate={{
            y: p.isBook ? ["100vh", "-10vh"] : ["-10vh", "100vh"],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          {p.isBook ? "📘" : "💖"}
        </motion.div>
      ))}
    </div>
  );
}
