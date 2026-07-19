import Navbar from "@/components/Navbar";
import HeroScroll from "@/components/HeroScroll";
import ServicesSection from "@/components/ServicesSection";
import ArtistsSection from "@/components/ArtistsSection";
import ReleasesSection from "@/components/ReleasesSection";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />
      
      {/* 
        HeroScroll contains the 500vh scroll animation. 
        It will remain pinned while scrolling, and then the rest of the page will flow naturally.
      */}
      <HeroScroll />
      
      {/* Subsequent Sections */}
      <div className="relative z-20">
        <ServicesSection />
        <div className="bg-[#2B2B2B] relative z-20">
          <LogoMarquee />
          <ArtistsSection />
          <ReleasesSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
