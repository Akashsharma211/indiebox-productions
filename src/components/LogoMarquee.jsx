"use client";

import React from 'react';

export default function LogoMarquee() {
  // Array to repeat the logo multiple times for infinite scroll
  // We use a large number to ensure it fills even wide screens twice over.
  const items = Array(16).fill(0);

  return (
    <section className="bg-[#2B2B2B] py-8 overflow-hidden relative border-y border-white/5">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee-left 10s linear infinite;
        }
      `}</style>

      {/* Top Row: Right to Left */}
      <div className="w-full flex">
        <div className="flex w-max animate-marquee-left items-center gap-16 md:gap-24 px-6">
          {items.map((_, i) => (
            <React.Fragment key={`top-${i}`}>
              <img 
                src="/logoofindiepng.png" 
                alt="Indiebox Productions" 
                className="h-12 md:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
