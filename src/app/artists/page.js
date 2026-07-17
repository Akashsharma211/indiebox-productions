import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function ArtistsPage() {
  let artists = [];
  try {
    artists = await prisma.artist.findMany({
      orderBy: { name: 'asc' }
    });
  } catch (error) {
    artists = [
      { id: "1", name: "ECLIPSE", genre: "Electronic / Wave", bio: "A pioneer in the underground wave scene, ECLIPSE blends ethereal synths with heavy bass.", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" },
      { id: "2", name: "NOVA", genre: "Alt-R&B", bio: "Hailing from London, NOVA's soulful vocals over experimental trap beats have garnered millions of streams.", imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&w=800&q=80" },
      { id: "3", name: "THE DRIFTERS", genre: "Indie Rock", bio: "Raw, unfiltered energy. The Drifters are bringing guitar music back to the forefront of the underground.", imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
      { id: "4", name: "LUNA", genre: "Pop", bio: "Creating immersive dream-pop experiences.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" },
      { id: "5", name: "KAI", genre: "Hip-Hop", bio: "Lyricism that pushes boundaries.", imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80" }
    ];
  }

  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-[#EF7D33] tracking-tighter mb-4 text-center">OUR ROSTER</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          The visionaries shaping the sound of tomorrow. Explore our curated selection of groundbreaking artists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artists.map(artist => (
            <div key={artist.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={artist.imageUrl} 
                  alt={artist.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-3xl font-black text-[#EAE9DE] tracking-tight group-hover:text-[#EF7D33] transition-colors">{artist.name}</h3>
              <p className="text-[#EF7D33] font-bold text-sm tracking-widest uppercase mt-2 mb-4">{artist.genre}</p>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {artist.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
