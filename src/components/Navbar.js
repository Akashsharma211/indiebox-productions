"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the transition when scrolled down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Glassmorphic Navbar (Visible at top) */}
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between h-[64px] rounded-2xl px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logoofindiepng.png" alt="Indiebox Logo" className="h-10 w-auto object-contain hover:opacity-80 transition-opacity" />
          </Link>

          {/* Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Artist", href: "/artists" },
              { name: "Releases", href: "/releases" },
              { name: "Services", href: "/services" },
              { name: "Licensing", href: "/licensing" },
              { name: "Brand Partnership", href: "/brand-partnership" }
            ].map((item) => (
              <Link key={item.name} href={item.href} className="text-[#EAE9DE] hover:text-[#EF7D33] transition-colors text-[10px] xl:text-[11px] font-black tracking-widest uppercase whitespace-nowrap">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Top Navbar Book Now Button */}
          <Link 
            href="/book-now" 
            className="flex-shrink-0 bg-[#EF7D33] text-[#2B2B2B] hover:bg-[#EAE9DE] transition-colors px-6 py-2.5 rounded-full font-bold text-sm shadow-lg whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Floating "Book Now" Button (Visible when scrolled, right side downward) */}
      <div 
        className={`fixed bottom-8 right-8 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <Link 
          href="/book-now" 
          className="bg-[#EF7D33] text-[#2B2B2B] hover:bg-[#EAE9DE] transition-colors px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase shadow-2xl border border-[#EF7D33]/20 whitespace-nowrap flex items-center justify-center hover:scale-105 transform duration-300"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
