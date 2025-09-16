import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Nuestro primer café juntos"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Atardecer en el parque"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Risas y conversaciones"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/8334771/pexels-photo-8334771.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Momentos espontáneos"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Tu sonrisa favorita"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/19378548/pexels-photo-19378548.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Recuerdos que atesoramos"
  }
];

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedPhoto(photos[newIndex].id);
  };

  const selectedPhotoData = selectedPhoto ? photos.find(photo => photo.id === selectedPhoto) : null;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Nuestros Recuerdos
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Los momentos que compartiremos y que me llenarán de alegría cada día
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(photo.id)}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-coral-200 to-romantic-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="font-sans text-sm font-medium">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && selectedPhotoData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhotoData.src}
                alt={selectedPhotoData.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-coral-100 transition-colors duration-200"
              >
                <X size={20} />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto('prev');
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto('next');
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Photo caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-sans text-lg font-medium bg-black/50 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                  {selectedPhotoData.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};