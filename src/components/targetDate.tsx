import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componente principal de React.
export const YellowFlowersCountdown = () => {
  const targetDate = new Date("2025-09-21T15:30:00");
  const [timeLeft, setTimeLeft] = useState(null);
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // 👈 Nuevo estado para ocultar

  // Función para calcular el tiempo restante.
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +targetDate - +now;
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setIsCountdownFinished(true);
      return null;
    }
    return time;
  };

  // Efecto para actualizar el temporizador cada segundo.
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isCountdownFinished) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 15000);
      return () => clearTimeout(timeout);
    }
  }, [isCountdownFinished]);

  // Variantes de animación
  const stemVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const leafVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const petalVariants = {
    hidden: { opacity: 0, scale: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      pathLength: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  const centerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "backOut" } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 4.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.5 },
    },
  };

  // Flor SVG
  const FlowerSVG = () => (
    <div className="flex flex-col items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 250"
        className="w-full max-w-sm"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Tallo */}
        <motion.path d="M100 240 L100 120" stroke="#4CAF50" strokeWidth="6" fill="none" strokeLinecap="round" variants={stemVariants} />
        {/* Hojas */}
        <motion.path d="M100 160 C80 150 70 170 75 185 S90 170 100 160" stroke="#4CAF50" strokeWidth="3" fill="#8BC34A" variants={leafVariants} transition={{ ...leafVariants.visible.transition, delay: 1.5 }} />
        <motion.path d="M100 145 C120 135 130 155 125 170 S110 155 100 145" stroke="#4CAF50" strokeWidth="3" fill="#8BC34A" variants={leafVariants} transition={{ ...leafVariants.visible.transition, delay: 1.5 }} />
        {/* Pétalos */}
        <motion.g initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.3, delay: 2.5 } } }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M100 100 C${100 + 40 * Math.sin((i * Math.PI) / 4)} ${100 - 40 * Math.cos((i * Math.PI) / 4)},
                  ${100 + 60 * Math.sin((i * Math.PI) / 4 + Math.PI / 8)} ${100 - 60 * Math.cos((i * Math.PI) / 4 + Math.PI / 8)},
                  ${100 + 40 * Math.sin((i * Math.PI) / 4 + Math.PI / 4)} ${100 - 40 * Math.cos((i * Math.PI) / 4 + Math.PI / 4)}
                  Z`}
              fill="#FFEB3B"
              stroke="#FFEB3B"
              strokeWidth="2"
              className="origin-center"
              variants={petalVariants}
            />
          ))}
        </motion.g>
        {/* Centro */}
        <motion.circle cx="100" cy="100" r="10" fill="#FF9800" variants={centerVariants} transition={{ ...centerVariants.visible.transition, delay: 3.5 }} />
      </motion.svg>
      <AnimatePresence>
        <motion.p
          className="relative text-center text-4xl sm:text-6xl font-bold tracking-wide font-serif bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"
          initial="hidden"
          animate="visible"
          variants={messageVariants}
        >
          ¡Feliz Día de las Flores Amarillas!
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shine_2s_infinite] bg-[length:200%_100%]" />
        </motion.p>
      </AnimatePresence>
    </div>
  );

  // Cuenta regresiva
  const CountdownDisplay = () => (
    <div className="flex flex-col items-center p-8 bg-white/50 rounded-2xl shadow-xl backdrop-blur-sm">
      <h1 className="text-xl sm:text-3xl font-light text-gray-700 tracking-wider mb-4">
        Cuenta regresiva para el Día de las Flores Amarillas
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-inner">
            <span className="text-3xl sm:text-5xl font-bold text-coral-600">{timeLeft?.[unit] ?? "00"}</span>
            <span className="text-sm sm:text-lg text-gray-500 mt-1">
              {unit === "days" && (timeLeft?.[unit] === 1 ? "Día" : "Días")}
              {unit === "hours" && (timeLeft?.[unit] === 1 ? "Hora" : "Horas")}
              {unit === "minutes" && (timeLeft?.[unit] === 1 ? "Minuto" : "Minutos")}
              {unit === "seconds" && (timeLeft?.[unit] === 1 ? "Segundo" : "Segundos")}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm sm:text-base text-gray-400">21 de septiembre de 2025, 15:30 (hora local)</p>
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex items-center justify-center min-h-screen bg-gradient-to-br from-romantic-50 to-coral-50 p-4 font-sans text-gray-800"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
        >
          {isCountdownFinished ? <FlowerSVG /> : <CountdownDisplay />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
