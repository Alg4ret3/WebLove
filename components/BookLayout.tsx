"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface BookLayoutProps {
  children: ReactNode;
}

const PageSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animación de rotación de página 3D
  const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [15, 0, 0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateY,
        opacity,
        scale,
        perspective: "1200px",
        transformOrigin: "left center",
      }}
      className="relative w-full bg-white paper-texture shadow-lg overflow-hidden border-l border-black/5"
    >
      {/* Sombra de lomo interna a la página */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default function BookLayout({ children }: BookLayoutProps) {
  const sections = Array.isArray(children) ? children : [children];

  return (
    <div className="min-h-screen bg-[#f0ede9] py-10 px-2 md:px-10 lg:px-20 overflow-x-hidden perspective-1000">
      <div className="max-w-[1400px] mx-auto relative flex flex-col gap-0 shadow-2xl">
        {/* Lomo del libro / Global spine shadow */}
        <div className="absolute inset-y-0 left-0 w-2 md:w-6 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-50 pointer-events-none" />
        
        {sections.map((section, idx) => (
          <PageSection key={idx}>
            {section}
          </PageSection>
        ))}
      </div>
    </div>
  );
}
