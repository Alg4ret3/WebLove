"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-tr from-slate-900 via-[#1e3a8a] to-slate-900 text-slate-100 rounded-b-lg shadow-2xl mt-10">
      {/* Texture de tapa / Back cover texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* ❤️ Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-blue-400 fill-blue-400 animate-pulse" />
            <p className="text-xl md:text-3xl text-white font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Hecho con todo mi amor para
            </p>
            <Heart className="w-6 h-6 text-blue-400 fill-blue-400 animate-pulse" />
          </div>
          <span className="font-serif font-bold text-4xl md:text-6xl text-blue-200 drop-shadow-[0_0_15px_rgba(191,219,254,0.4)] transition-all hover:scale-105 duration-500">
            Mi Negrita
          </span>
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
