import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutLeadershipSection from "@/components/AboutLeadershipSection";
import Link from "next/link";
import { Info, Sparkles, Target, Compass, Disc } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EF7D33]/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <Info className="w-4 h-4 text-[#EF7D33]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#EF7D33]">
            About Indiebox Productions
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-[#EF7D33] tracking-tighter mb-8 uppercase">
          Crafting The Sound Of Tomorrow
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Indiebox Productions is a premier independent music label, audio production suite, and visual powerhouse. We are dedicated to discovering visionary talent and shaping the sonic landscape of tomorrow. By bridging underground innovation with global mainstream appeal, we empower artists to echo across the world.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/artists"
            className="bg-[#EF7D33] text-[#2B2B2B] hover:bg-[#EAE9DE] transition-colors px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transform duration-300"
          >
            Explore Artists
          </Link>
          <Link
            href="/book-now"
            className="bg-white/10 hover:bg-white/20 text-[#EAE9DE] border border-white/20 transition-colors px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest backdrop-blur-md"
          >
            Book Studio Session
          </Link>
        </div>
      </section>

      {/* Mission & Vision Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-[#EF7D33]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#EF7D33]/10 border border-[#EF7D33]/20 flex items-center justify-center text-[#EF7D33] mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-[#EAE9DE] mb-4">OUR MISSION</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              To nurture unfiltered artistic independence while providing top-tier studio infrastructure, creative video direction, and strategic label releases. We pave a smooth runway for independent musicians to achieve world-class production standards.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-[#EAE9DE] mb-4">OUR VISION</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              To be the leading global launchpad for original indie soundscapes—where song craftsmanship, cinematic storytelling, and authentic passion converge into culture-defining releases.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <AboutLeadershipSection showHeader={true} />

      <Footer />
    </main>
  );
}
