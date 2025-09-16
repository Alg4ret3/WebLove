import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";


interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cream-50 via-red-50 to-red-100 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-red-400 opacity-30"
        >
          <Sparkles size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-12 text-red-500 opacity-40"
        >
          <Heart size={20} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-8 text-red-300 opacity-25"
        >
          <Sparkles size={32} />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Hero image con animación de pulso */}
        <motion.div
          animate={{ opacity: [0.9, 1, 0.9], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="mb-8"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white/50">
            <img
              src="/perfil.jpg"
              alt="Alejandra"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        {/* Title fijo */}
        <h1 className="font-montserrat text-4xl md:text-6xl font-light text-gray-800 mb-4">
          Para <span className="font-semibold text-red-600">Alejandra</span>,
          <br />
          <span className="text-2xl md:text-4xl text-red-500">con cariño.</span>
        </h1>

        {/* Subtitle fijo */}
        <p className="font-sans text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
          Un pequeño rincón para lo que viene.
        </p>

        {/* CTA button con movimiento y hover */}
        <motion.button
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={onExploreClick}
          className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-montserrat font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Descubrir juntos
            <Heart size={18} className="group-hover:animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

      
        {/* Scroll indicator con dedo */}
        {/* Scroll indicator con dedo estilizado */}
<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-12 text-red-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C11.447 2 11 2.447 11 3V12.586L9.707 11.293C9.316 10.902 8.684 10.902 8.293 11.293C7.902 11.684 7.902 12.316 8.293 12.707L11.293 15.707C11.488 15.902 11.744 16 12 16C12.256 16 12.512 15.902 12.707 15.707L15.707 12.707C16.098 12.316 16.098 11.684 15.707 11.293C15.316 10.902 14.684 10.902 14.293 11.293L13 12.586V3C13 2.447 12.553 2 12 2Z" />
  </svg>
</motion.div>


      </div>
    </section>
  );
};
