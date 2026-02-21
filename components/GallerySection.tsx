"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Scale, Briefcase, Award } from "lucide-react";

const achievements = [
  {
    id: 1,
    icon: Scale,
    title: "Pregrado en Derecho",
    description:
      "Has culminado exitosamente tu carrera en Derecho, consolidando una base sólida en justicia y legislación.",
    status: "obtenido",
    color: "from-blue-700 to-blue-900",
    angle: 220,
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Especialización en curso",
    description:
      "Estás en la etapa final de tu especialización, demostrando disciplina, enfoque y amor por el aprendizaje continuo.",
    status: "en proceso",
    color: "from-slate-500 to-slate-700",
    angle: 140,
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Trabajo Social",
    description:
      "Actualmente cursas una segunda carrera en Trabajo Social, ampliando tu perspectiva profesional hacia la comunidad y el bienestar humano.",
    status: "en progreso",
    color: "from-[#1e3a8a] to-blue-900",
    angle: 40,
  },
  {
    id: 4,
    icon: Award,
    title: "Doctorado en Derecho",
    description:
      "Tu próximo gran objetivo académico: el doctorado. Un paso ambicioso que refleja tu compromiso con la excelencia.",
    status: "no iniciado",
    color: "from-slate-400 to-slate-600",
    angle: 320,
  },
];


export default function ProfessionalOrbitSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [radius, setRadius] = useState(200);

  // 🔁 Ajusta el radio según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(120);
      else if (window.innerWidth < 1024) setRadius(180);
      else setRadius(230);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-20 sm:py-28 lg:py-36 bg-transparent overflow-hidden">
      {/* Divider / Page Split Shadow */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-black/5 blur-[2px] z-0" />
      {/* 🌟 Título principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 mb-12 md:mb-16"
      >
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Tu Universo Profesional
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Cada burbuja representa un logro que gira a tu alrededor porque tu
          esfuerzo ilumina cada paso de tu camino.
        </p>

        {/* 🩵 Nota interactiva */}
        <motion.p
          className="mt-6 text-blue-600 text-sm md:text-base italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Toca o haz clic en las burbujas para descubrir más.
        </motion.p>
      </motion.div>

      {/* ☀️ Imagen central con órbita */}
      <div className="relative flex items-center justify-center w-full max-w-[600px] aspect-square">
        {/* Imagen central más grande */}
        <motion.div
          className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-blue-950/20 z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="https://raw.githubusercontent.com/Alg4ret3/EstaticosWebLove/master/images/caricatura.webp"
            alt="Perfil"
            fill
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 176px, 240px"
            className="object-cover"
          />
        </motion.div>

        {/* Burbujas orbitando */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transformOrigin: "center" }}
        >
          {achievements.map((item, i) => {
            const Icon = item.icon;
            const x = Math.cos((item.angle * Math.PI) / 180) * radius;
            const y = Math.sin((item.angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={item.id}
                className={`absolute cursor-pointer bg-gradient-to-br ${item.color} text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg flex items-center justify-center pointer-events-auto`}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: x, 
                  y: y 
                }}
                transition={{ 
                  opacity: { delay: i * 0.2 },
                  x: { type: "spring", stiffness: 50, damping: 15 },
                  y: { type: "spring", stiffness: 50, damping: 15 }
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: "0 0 30px rgba(0,0,0,0.3)",
                  zIndex: 40,
                }}
                onClick={() => setSelected(item.id)}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🪩 Modal de logro */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl w-full max-w-sm text-center relative"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            {/* Contenido del logro */}
            {(() => {
              const selectedAchievement = achievements.find(
                (a) => a.id === selected
              );
              if (!selectedAchievement) return null;
              const Icon = selectedAchievement.icon;

              return (
                <>
                  <div
                    className={`mx-auto mb-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${selectedAchievement.color}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                    {selectedAchievement.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base px-2">
                    {selectedAchievement.description}
                  </p>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      selectedAchievement.status === "obtenido"
                        ? "bg-green-100 text-green-700"
                        : selectedAchievement.status === "en proceso"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {selectedAchievement.status === "obtenido"
                      ? "✅ Logro obtenido"
                      : selectedAchievement.status === "en proceso"
                      ? "⏳ En proceso"
                      : "🕓 Aún por alcanzar"}
                  </span>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}
    </section>
  );
}
