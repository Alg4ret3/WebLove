"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function HeroSection() {


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-x-hidden overflow-y-hidden bg-white text-gray-900">
      {/* 🌌 Fondo de partículas */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 35, density: { enable: true, area: 800 } },
            color: { value: "#3b82f6" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 4 } },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              outModes: { default: "out" },
            },
            shape: { type: "circle" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 70, duration: 0.3 } },
          },
          detectRetina: true,
        }}
      />

      {/* 💌 Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Con amor para
          <br />
          <span className="text-blue-600">María Fernanda</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Un libro digital lleno de momentos, recuerdos y todo lo que hace especial nuestra historia.
        </motion.p>

        {/* 💙 Imagen circular */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />

          <motion.img
            src="/images/perfil.webp"
            alt="María Fernanda"
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-200"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 👇 Icono animado para seguir bajando */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10 text-blue-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
