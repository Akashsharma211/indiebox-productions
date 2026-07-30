"use client";

import { Sparkles, ShieldCheck, Music, Award } from "lucide-react";

export default function AboutLeadershipSection({ showHeader = true }) {
  const leaders = [
    {
      name: "Jatin Arya",
      role: "Founder",
      badgeColor: "bg-[#EF7D33] text-[#2B2B2B]",
      image: "/images/team/jatin-arya.jpg"
    },
    {
      name: "Akash Kumar Sharma",
      role: "Co-Founder & Manager",
      badgeColor: "bg-amber-400 text-[#2B2B2B]",
      image: "/images/team/akash-sharma.png"
    },
    {
      name: "Krish",
      role: "Director",
      badgeColor: "bg-orange-500 text-white",
      image: "/images/team/krish.jpeg"
    }
  ];

  return (
    <section className="relative z-20 bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#EF7D33]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#EF7D33]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#EF7D33]">
                Leadership & Vision
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#EAE9DE] tracking-tight uppercase mb-6">
              BEHIND THE VISION
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Meet the leadership driving Indiebox Productions forward.
            </p>
          </div>
        )}

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#EF7D33]/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-stone-900 border border-white/10">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-transparent to-transparent opacity-60" />

                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-lg ${leader.badgeColor}`}>
                      {leader.role}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-black text-[#EAE9DE] group-hover:text-[#EF7D33] transition-colors mb-1 text-center">
                  {leader.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#EF7D33] text-center mb-2">
                  {leader.role}
                </p>
              </div>

              {/* Minimal Card Footer */}
              <div className="pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
                  Indiebox Team
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Company Highlights Section below cards */}
        <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#EF7D33]/10 border border-[#EF7D33]/20 flex items-center justify-center text-[#EF7D33] mb-4">
              <Music className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#EAE9DE] mb-2">Creative House</h4>
            <p className="text-xs text-gray-400 max-w-xs">
              Building a world-class platform for independent creative talent.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#EAE9DE] mb-2">Artist First</h4>
            <p className="text-xs text-gray-400 max-w-xs">
              Empowering artists with strategic direction and dedicated management.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#EAE9DE] mb-2">Global Vision</h4>
            <p className="text-xs text-gray-400 max-w-xs">
              Bringing indie talent and creative projects to audiences worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
