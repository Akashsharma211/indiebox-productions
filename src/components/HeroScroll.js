"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function HeroScroll() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.35) {
      setStep(0);
    } else if (latest >= 0.35 && latest < 0.75) {
      setStep(1);
    } else {
      setStep(2);
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const frameCount = 210;
    const loadedImages = [];
    let currentIndex = 1;

    const currentFrame = (index) =>
      `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

    // Preload first frame immediately to show it on load
    const firstImg = new window.Image();
    firstImg.src = currentFrame(1);
    firstImg.onload = () => {
      canvas.width = firstImg.width;
      canvas.height = firstImg.height;
      context.drawImage(firstImg, 0, 0);
    };
    loadedImages[0] = firstImg;

    // Asynchronously preload the rest of the frames to prevent massive network/memory lag
    const preloadRest = async () => {
      for (let i = 2; i <= frameCount; i++) {
        const img = new window.Image();
        img.src = currentFrame(i);
        loadedImages[i - 1] = img;
        // Pause briefly every 5 frames to let the browser breathe
        if (i % 5 === 0) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      }
    };
    preloadRest();

    const updateImage = (index) => {
      const img = loadedImages[index - 1];
      if (img && img.complete) {
        context.drawImage(img, 0, 0);
      }
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const maxScroll = height - window.innerHeight;

      let scrollFraction = scrollY / maxScroll;
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;

      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.ceil(scrollFraction * frameCount))
      );

      if (frameIndex !== currentIndex) {
        currentIndex = frameIndex;
        requestAnimationFrame(() => updateImage(frameIndex));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#111] w-full">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#111] flex justify-center items-center">
        {/* Canvas Background - No opacity reduction so images are crystal clear */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Cinematic dark overlays to make text readable without muddying the images */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>

        {/* Text Overlays - Using AnimatePresence ensures they can NEVER overlap */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="text1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute text-center px-4"
              >
                <h1 className="text-6xl md:text-8xl font-black text-[#EF7D33] tracking-tighter drop-shadow-2xl">INDIEBOX</h1>
                <p className="text-xl md:text-3xl text-[#EAE9DE] mt-4 font-bold tracking-wide uppercase drop-shadow-md">Productions</p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div 
                key="text2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute text-center px-4"
              >
                <h2 className="text-5xl md:text-7xl font-bold text-[#EF7D33] tracking-tight drop-shadow-xl">Defining the Sound</h2>
                <p className="text-xl md:text-2xl text-[#EAE9DE] mt-4 font-medium drop-shadow-md">Where visionaries meet their true potential.</p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="text3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute text-center px-4"
              >
                <h2 className="text-5xl md:text-7xl font-bold text-[#EF7D33] tracking-tight drop-shadow-xl">Global Impact</h2>
                <p className="text-xl md:text-2xl text-[#EAE9DE] mt-4 font-medium drop-shadow-md">Echoing across the world.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Gradient overlay at bottom for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#2B2B2B] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
