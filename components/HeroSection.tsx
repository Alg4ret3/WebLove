"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import Particles from "react-tsparticles";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-[#1e3a8a] to-slate-900 text-white font-sans rounded-t-lg shadow-2xl">
      {/* Texture de tapa de libro / Book cover texture effect */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />

      {/* 🌌 Partículas sutiles tipo estrellas */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 25, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#94a3b8"] },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 2 } },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outModes: { default: "out" },
            },
            shape: { type: "circle" },
          },
          detectRetina: true,
        }}
      />

      {/* 💌 Contenido principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 max-w-5xl mx-auto"
      >
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full mb-10 border border-white/10"
        >
           <Heart className="w-4 h-4 text-blue-300 fill-blue-300" />
           <span className="text-blue-100 text-sm font-medium tracking-[0.3em] uppercase opacity-80">Edición Especial</span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.1] tracking-tight drop-shadow-2xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Con amor para
          <br />
          <span className="text-blue-200/90 drop-shadow-[0_0_15px_rgba(191,219,254,0.3)]">
            María Fernanda
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Un viaje a través de los latidos de nuestra historia.
        </motion.p>

        {/* 💙 Imagen circular con más estilo */}
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-white/20 scale-110 animate-[pulse_4s_easeInOut_infinite]" />

          <motion.div 
            className="w-full h-full relative p-4"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-[10px] border-white/90 shadow-2xl relative">
               <Image
                src="/images/perfil.webp"
                alt="María Fernanda"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 👇 Icono animado */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-white/30 text-xs uppercase tracking-[0.4em] font-medium">Abrir Nuestro Mundo</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-blue-300/60" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Título en vertical tipo lomo / Vertical book spine title */}
      <div className="absolute left-6 top-1/2 -rotate-90 origin-left text-white/10 font-serif tracking-[0.6em] text-[10px] hidden lg:block uppercase select-none">
        María Fernanda & Sergio • 2026
      </div>
    </section>
  );
}
