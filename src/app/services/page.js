import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Headphones, Video, Sliders, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "music",
      title: "Music Production",
      desc: "Our state-of-the-art studios and platinum-tier producers are equipped to take your demos from rough voice memos to chart-topping anthems. We offer full songwriting camps, vocal tracking, beat production, and arrangement services.",
      icon: <Headphones className="w-16 h-16 text-[#EF7D33]" />,
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "mixing",
      title: "Mixing & Mastering",
      desc: "The difference between a good song and a hit lies in the mix. Our engineers utilize top-tier analog outboard gear paired with the latest digital precision tools to ensure your track punches through club speakers, car stereos, and AirPods alike.",
      icon: <Sliders className="w-16 h-16 text-[#EF7D33]" />,
      img: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "video",
      title: "Video Services",
      desc: "Visuals dictate the era. From high-budget cinematic music videos to run-and-gun tour recaps and dynamic Spotify Canvas visualizers, our in-house directorial team brings your sonic identity to the screen.",
      icon: <Video className="w-16 h-16 text-[#EF7D33]" />,
      img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "creative",
      title: "Creative Direction",
      desc: "We build worlds around your music. Our design and strategy team will conceptualize your album artwork, curate your branding, style your shoots, and architect a rollout strategy designed for maximum cultural impact.",
      icon: <Palette className="w-16 h-16 text-[#EF7D33]" />,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B] relative overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black text-[#EAE9DE] tracking-tighter mb-6 uppercase">
          Full-Scale <br /><span className="text-[#EF7D33]">Production</span>
        </h1>
        <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
          We don't just distribute music; we architect it. Indiebox is a 360-degree creative agency offering world-class services for artists, labels, and brands.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                {service.icon}
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">{service.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
                <div className="pt-4">
                  <Link href="/book-now" className="inline-flex items-center text-[#EF7D33] hover:text-[#EAE9DE] font-bold uppercase tracking-widest text-sm transition-colors group">
                    Request a Quote <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EF7D33] text-[#2B2B2B] py-24 text-center px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Ready to create?</h2>
        <Link href="/book-now" className="inline-block bg-[#2B2B2B] text-[#EAE9DE] hover:bg-white hover:text-black transition-colors px-12 py-5 rounded-full font-black tracking-widest uppercase shadow-2xl text-lg hover:scale-105 transform duration-300">
          Book Studio Time
        </Link>
      </div>

      <Footer />
    </main>
  );
}
