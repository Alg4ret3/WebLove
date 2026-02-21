import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import BookLayout from "@/components/BookLayout";
import { Suspense } from "react";

// Dynamically import heavy components to reduce initial bundle size
const BackgroundParticles = dynamic(() => import("@/components/ui/BackgroundParticles"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const TimelineSection = dynamic(() => import("@/components/TimelineSection"), { ssr: false });
const GallerySection = dynamic(() => import("@/components/GallerySection"), { ssr: false });
const LoveSection = dynamic(() => import("@/components/LoveSection"), { ssr: false });
const LetterSection = dynamic(() => import("@/components/LetterSection"), { ssr: false });
const MusicSection = dynamic(() => import("@/components/MusicSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#f0ede9] text-gray-900 font-sans">
      <Suspense fallback={<div className="fixed inset-0 bg-[#f0ede9] z-50 flex items-center justify-center">Cargando...</div>}>
        <BackgroundParticles />
        <BookLayout>
          <ScrollProgress />
          <HeroSection />
          <TimelineSection />
          <GallerySection />
          <LoveSection />
          <LetterSection />
          <MusicSection />
          <Footer />
        </BookLayout>
      </Suspense>
    </main>
  );
}
