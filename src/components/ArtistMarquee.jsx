"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ArtistMarquee({ artists }) {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    
    const autoScroll = () => {
      if (scrollRef.current && !isHovered && !selectedArtist) {
        scrollRef.current.scrollLeft += 1;
        // If we've reached the end of the scrollable area, seamlessly loop back
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 5
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    
    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, selectedArtist]);

  // Duplicate artists array multiple times to ensure a seamless infinite scroll 
  // even on very wide screens.
  const duplicatedArtists = [...artists, ...artists, ...artists, ...artists];

  return (
    <>
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div 
        className="w-full relative my-8 group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-[#EF7D33] border border-white/10 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-[#EF7D33] border border-white/10 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>

        <div 
          ref={scrollRef}
          className="flex items-center gap-10 md:gap-16 w-full overflow-x-auto px-4 py-12 md:px-24 hide-scroll"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedArtists.map((artist, index) => {
            const duration = 3 + (index % 3);
            const delay = (index % 5) * 0.4;
            const uniqueKey = `${artist.id}-${index}`;

            return (
              <motion.div
                key={uniqueKey}
                className="relative cursor-pointer flex-shrink-0 group/item z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                onClick={() => setSelectedArtist(artist)}
              >
                <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-transparent group-hover/item:border-[#EF7D33] transition-colors duration-300 shadow-2xl">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
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
