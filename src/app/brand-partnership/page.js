import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Handshake, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BrandPartnershipPage() {
  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#EF7D33]/10 rounded-full blur-[150px]"></div>
      </div>

      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-black text-[#EAE9DE] tracking-tighter mb-6">BRAND <br/><span className="text-[#EF7D33]">PARTNERSHIPS</span></h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed mb-8">
              We connect global brands with cutting-edge musical talent to create authentic, culturally resonant campaigns. 
            </p>
            <Link href="/book-now" className="inline-block bg-[#EF7D33] text-[#2B2B2B] hover:bg-[#EAE9DE] transition-colors px-8 py-4 rounded-full font-black tracking-widest uppercase shadow-2xl">
              Partner With Us
            </Link>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
              <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80" alt="Brand Activation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#252525] border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <Target className="w-10 h-10 text-[#EF7D33] mb-6" />
            <h3 className="text-xl font-bold mb-3">Targeted Reach</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Align your brand with artists who share your demographic, ensuring your message lands with authenticity and impact.</p>
          </div>
          <div className="bg-[#252525] border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <Handshake className="w-10 h-10 text-[#EF7D33] mb-6" />
            <h3 className="text-xl font-bold mb-3">Custom Activations</h3>
            <p className="text-gray-400 text-sm leading-relaxed">From live event sponsorships to custom content creation, we build bespoke campaigns tailored to your KPIs.</p>
          </div>
          <div className="bg-[#252525] border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <TrendingUp className="w-10 h-10 text-[#EF7D33] mb-6" />
            <h3 className="text-xl font-bold mb-3">Measurable Impact</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We provide detailed analytics and reporting to demonstrate the true ROI of your cultural investment.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
