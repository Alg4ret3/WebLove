"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, BookOpen, Scissors, UtensilsCrossed, Sparkles } from "lucide-react";

const interests = [
  {
    title: "Pintar",
    description: "Tu creatividad plasmada en cada trazo",
    icon: Palette,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Leer",
    description: "Perdiéndote en mundos de historias",
    icon: BookOpen,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Bufandas",
    description: "Tu estilo único y elegante",
    icon: Scissors,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Comer",
    description: "Disfrutando cada sabor juntos",
    icon: UtensilsCrossed,
    gradient: "from-blue-700 to-blue-900",
  },
  {
    title: "Collares y Aretes",
    description: "Detalles que realzan tu belleza",
    icon: Sparkles,
    gradient: "from-blue-500 to-blue-700",
  },
];

function InterestCard({ interest, index }: { interest: typeof interests[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = interest.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 paper-texture">
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center mb-6 shadow-md`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{interest.title}</h3>
        <p className="text-gray-600 leading-relaxed">{interest.description}</p>
      </div>
    </motion.div>
  );
}

export default function InterestsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tus Pasiones
          </h2>
          <p className="text-xl text-gray-600">Las cosas que hacen brillar tu corazón</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
