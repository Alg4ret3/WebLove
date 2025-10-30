"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
      {/* Sutil brillo superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* ❤️ Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Heart className="w-5 h-5 text-blue-400 fill-blue-400" />
          <p className="text-lg text-gray-200 font-light tracking-wide">
            Hecho con amor para{" "}
            <span className="font-serif font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              Mi Negrita
            </span>
          </p>
          <Heart className="w-5 h-5 text-blue-400 fill-blue-400" />
        </motion.div>

        {/* ✍️ Frase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-sm italic max-w-lg mx-auto"
        >
          Inspirado en tus cosas favorita, en nuestros  recuerdos y todo lo que aún está por venir.
        </motion.p>

        {/* 🌙 Línea divisoria */}
        <div className="mt-8 mx-auto w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* 📆 Derechos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-gray-500 text-xs"
        >
          © {new Date().getFullYear()} Con Amor Sergio Muñoz
        </motion.div>
      </div>

      {/* Efecto de brillo tenue en el fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-blue-500/10 blur-3xl rounded-full" />
    </footer>
  );
}
