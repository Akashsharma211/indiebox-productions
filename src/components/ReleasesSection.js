import { Disc3 } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ReleasesSection() {
  let releases = [];
  try {
    releases = await prisma.release.findMany({
      take: 4,
      orderBy: { releaseDate: 'desc' }
    });
  } catch (error) {
    // Fallback data if MongoDB is not connected
    releases = [
      { id: "1", title: "Midnight Sun", artistName: "ECLIPSE", coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80", type: "Album", releaseDate: new Date() },
      { id: "2", title: "Visions", artistName: "NOVA", coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", type: "EP", releaseDate: new Date() },
      { id: "3", title: "Live at the Roxy", artistName: "THE DRIFTERS", coverUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&w=800&q=80", type: "Live", releaseDate: new Date() },
      { id: "4", title: "Awakening", artistName: "ECLIPSE", coverUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80", type: "Single", releaseDate: new Date() }
    ];
  }

  return (
    <section className="bg-[#252525] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#EAE9DE] tracking-tight mb-12 text-center">Latest Releases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release) => (
            <div key={release.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border border-white/5 shadow-2xl">
                <img 
                  src={release.coverUrl} 
                  alt={release.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <Disc3 className="w-12 h-12 text-[#EF7D33] animate-spin-slow" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#EAE9DE] tracking-tight group-hover:text-[#EF7D33] transition-colors">{release.title}</h3>
              <p className="text-gray-400 font-medium text-sm mt-1">{release.artistName}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs font-black text-[#EF7D33] tracking-widest uppercase px-2 py-1 bg-[#EF7D33]/10 rounded-md">
                  {release.type}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {new Date(release.releaseDate).getFullYear()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/releases" className="inline-block border border-white/20 text-[#EAE9DE] hover:bg-white hover:text-black transition-colors px-8 py-3 rounded-full uppercase text-sm font-semibold tracking-wider">
            Explore Discography
          </Link>
        </div>
      </div>
    </section>
  );
}
