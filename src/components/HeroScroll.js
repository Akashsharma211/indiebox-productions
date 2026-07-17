"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroScroll() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 0 to 0.2: First text fades in and out
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [50, 0, -50]);

  // 0.35 to 0.6: Second text
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [50, 0, -50]);

  // 0.75 to 1: Third text
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.75, 0.9, 1], [50, 0, -50]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const frameCount = 210;

    const currentFrame = (index) =>
      `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        img.src = currentFrame(i);
      }
    };

    const img = new window.Image();
    img.src = currentFrame(1);
    
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      const nextImg = new window.Image();
      nextImg.src = currentFrame(index);
      nextImg.onload = function () {
        context.drawImage(nextImg, 0, 0);
      };
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

      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener("scroll", handleScroll);
    preloadImages();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#2B2B2B] w-full">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#2B2B2B] flex justify-center items-center">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        
        {/* Text Overlays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center px-4">
            <h1 className="text-6xl md:text-8xl font-black text-[#EF7D33] tracking-tighter drop-shadow-2xl">INDIEBOX</h1>
            <p className="text-xl md:text-3xl text-[#EAE9DE] mt-4 font-bold tracking-wide uppercase drop-shadow-md">Productions</p>
          </motion.div>

          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-[#EF7D33] tracking-tight drop-shadow-xl">Defining the Sound</h2>
            <p className="text-xl md:text-2xl text-[#EAE9DE] mt-4 font-medium drop-shadow-md">Where visionaries meet their true potential.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-[#EF7D33] tracking-tight drop-shadow-xl">Global Impact</h2>
            <p className="text-xl md:text-2xl text-[#EAE9DE] mt-4 font-medium drop-shadow-md">Echoing across the world.</p>
          </motion.div>
        </div>

        {/* Gradient overlay at bottom for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#2B2B2B] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
