import { Headphones, Video, Sliders, Palette } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Music Production",
      desc: "End-to-end sonic architecting. From initial beat making to full vocal tracking and arrangement.",
      icon: <Headphones className="w-10 h-10 text-[#EF7D33] mb-4" />
    },
    {
      title: "Mixing & Mastering",
      desc: "Industry-standard polishing that guarantees your tracks punch through streaming algorithms and radio alike.",
      icon: <Sliders className="w-10 h-10 text-[#EF7D33] mb-4" />
    },
    {
      title: "Video Services",
      desc: "Cinematic music videos, live sessions, and dynamic visualizers that bring your sonic vision to the screen.",
      icon: <Video className="w-10 h-10 text-[#EF7D33] mb-4" />
    },
    {
      title: "Creative Direction",
      desc: "Album artwork, branding, styling, and comprehensive rollout strategies tailored to your unique identity.",
      icon: <Palette className="w-10 h-10 text-[#EF7D33] mb-4" />
    }
  ];

  return (
    <section className="bg-[#2B2B2B] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EF7D33]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#EAE9DE] tracking-tight mb-4">PRODUCTION SUITE</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Indiebox is more than a label. We are a full-scale creative powerhouse equipping artists with the tools to dominate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:border-[#EF7D33]/30 transition-all duration-300 group">
              {service.icon}
              <h3 className="text-xl font-bold text-[#EAE9DE] mb-3">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-block bg-[#EF7D33] text-[#2B2B2B] hover:bg-[#EAE9DE] transition-colors px-10 py-4 rounded-full uppercase text-sm font-black tracking-widest shadow-xl hover:scale-105 transform duration-300">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
