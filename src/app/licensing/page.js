import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music, Video, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sync Licensing | Music Licensing for Film, TV & Ads India",
  description: "License music from Indiebox Productions for films, TV shows, advertisements, and digital content in India. Get world-class indie music for your visual projects with full sync rights.",
  keywords: ["music sync licensing India", "music for film India", "music for TV ads", "sync rights India", "indie music licensing", "music supervision India", "background score licensing"],
  openGraph: {
    title: "Sync Licensing | Indiebox Productions",
    description: "License premium indie music for films, TV, and ads. World-class sync licensing from Indiebox Productions.",
  },
};

export default function LicensingPage() {
  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#EF7D33]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#EAE9DE] tracking-tighter mb-6">SYNC & <span className="text-[#EF7D33]">LICENSING</span></h1>
          <p className="text-xl text-gray-400 font-medium">
            Elevate your visual media with our premium, curated catalog. From blockbuster trailers to global ad campaigns, we provide the sonic edge you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#EF7D33]/50 transition-colors duration-500">
            <Video className="w-12 h-12 text-[#EF7D33] mb-6" />
            <h3 className="text-2xl font-bold mb-4">Film & TV</h3>
            <p className="text-gray-400 leading-relaxed">
              Our catalog is meticulously tagged and organized for music supervisors. We offer quick turnarounds on stems, instrumentals, and custom edits to fit your exact scene requirements.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#EF7D33]/50 transition-colors duration-500">
            <Zap className="w-12 h-12 text-[#EF7D33] mb-6" />
            <h3 className="text-2xl font-bold mb-4">Commercial Advertising</h3>
            <p className="text-gray-400 leading-relaxed">
              Brands trust Indiebox to deliver high-impact tracks that cut through the noise. We streamline the clearance process for global, all-media campaigns.
            </p>
          </div>
        </div>

        <div className="bg-[#EF7D33] text-[#2B2B2B] rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tight mb-4">Need the perfect track?</h2>
            <p className="text-xl font-medium mb-8 max-w-2xl mx-auto">Our creative pitching team is ready to pull custom playlists for your brief within 24 hours.</p>
            <Link href="/book-now" className="inline-block bg-[#2B2B2B] text-[#EAE9DE] hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full font-black tracking-widest uppercase shadow-xl">
              Submit a Brief
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
