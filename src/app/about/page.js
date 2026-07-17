import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <Info className="w-20 h-20 text-[#EF7D33] mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl font-black text-[#EF7D33] tracking-tighter mb-8">ABOUT US</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Indiebox Productions is a premier independent music label and production house. 
          We are dedicated to discovering visionary talent and shaping the sonic landscape of tomorrow. 
          By bridging the gap between underground innovation and global mainstream appeal, 
          we give our artists the platform they need to echo across the world.
        </p>
      </div>

      <Footer />
    </main>
  );
}
