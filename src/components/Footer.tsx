import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-coral-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-2 mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="text-coral-400" size={24} fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Heart className="text-romantic-400" size={28} fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Star className="text-coral-400" size={24} fill="currentColor" />
            </motion.div>
          </div>

          <p className="font-montserrat text-xl md:text-2xl font-light text-white mb-4 leading-relaxed">
            "El amor no es solo mirar en la misma dirección, 
            <br className="hidden md:block" />
            es caminar juntos hacia el mismo sueño."
          </p>
          
          <p className="font-sans text-lg text-gray-300 mb-8">
            Gracias por ser parte de este comienzo.
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral-500/20 to-romantic-500/20 backdrop-blur-sm border border-coral-300/30 rounded-full text-coral-200">
            <Heart size={16} fill="currentColor" />
            <span className="font-medium">Con todo mi cariño, Sergio</span>
            <Heart size={16} fill="currentColor" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-700/50"
        >
          <p className="font-sans text-sm text-gray-400">
             Especialmente para ti • {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};