import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ArtistsSection() {
  let artists = [];
  try {
    artists = await prisma.artist.findMany({
      take: 3,
      orderBy: { name: 'asc' }
    });
  } catch (error) {
    // Fallback data if MongoDB is not connected
    artists = [
      { id: "1", name: "ECLIPSE", genre: "Electronic / Wave", bio: "A pioneer in the underground wave scene, ECLIPSE blends ethereal synths with heavy bass.", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" },
      { id: "2", name: "NOVA", genre: "Alt-R&B", bio: "Hailing from London, NOVA's soulful vocals over experimental trap beats have garnered millions of streams.", imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&w=800&q=80" },
      { id: "3", name: "THE DRIFTERS", genre: "Indie Rock", bio: "Raw, unfiltered energy. The Drifters are bringing guitar music back to the forefront of the underground.", imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" }
    ];
  }

  return (
    <section className="bg-[#2B2B2B] py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#EAE9DE] tracking-tight">Featured Artists</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl">Discover the visionaries reshaping the landscape of modern music under Indiebox Productions.</p>
          </div>
          <Link href="/artists" className="hidden md:flex items-center text-[#EF7D33] hover:text-[#EAE9DE] transition-colors uppercase text-sm font-bold tracking-wider">
            View All Roster <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={artist.imageUrl} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[#EF7D33] font-bold text-xs tracking-widest uppercase mb-2">{artist.genre}</p>
                  <h3 className="text-2xl font-bold text-[#EAE9DE] tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">{artist.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/artists" className="flex items-center text-white uppercase text-sm font-semibold tracking-wider">
            View All Roster <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
