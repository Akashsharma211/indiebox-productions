"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ArtistGallery({ artists }) {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 md:gap-14 max-w-6xl mx-auto">
        {artists.map((artist, index) => {
          // Generate a pseudo-random but stable delay and duration based on index
          const duration = 3 + (index % 3);
          const delay = (index % 5) * 0.4;

          return (
            <motion.div
              key={artist.id}
              className="relative cursor-pointer group"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              onClick={() => setSelectedArtist(artist)}
            >
              <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#EF7D33] transition-colors duration-300 shadow-2xl">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedArtist(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#EF7D33] text-white rounded-full transition-colors backdrop-blur-sm"
                onClick={() => setSelectedArtist(null)}
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedArtist.imageUrl}
                  alt={selectedArtist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] md:from-transparent md:bg-gradient-to-r via-transparent to-transparent"></div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[#EF7D33] font-bold tracking-widest uppercase mb-2">
                  {selectedArtist.genre}
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-[#EAE9DE] tracking-tighter mb-6">
                  {selectedArtist.name}
                </h2>
                <div className="h-px w-16 bg-white/10 mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedArtist.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
