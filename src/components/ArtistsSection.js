import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ArtistMarquee from "./ArtistMarquee";

export default async function ArtistsSection() {
  let artists = [];
  try {
    artists = await prisma.artist.findMany({
      orderBy: { name: 'asc' }
    });
  } catch (error) {
    artists = [];
  }

  // Fallback data if MongoDB is not connected or empty
  if (artists.length === 0) {
    artists = [
      { id: "1", name: "ECLIPSE", genre: "Electronic / Wave", bio: "A pioneer in the underground wave scene, ECLIPSE blends ethereal synths with heavy bass.", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" },
      { id: "2", name: "NOVA", genre: "Alt-R&B", bio: "Hailing from London, NOVA's soulful vocals over experimental trap beats have garnered millions of streams.", imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&w=800&q=80" },
      { id: "3", name: "THE DRIFTERS", genre: "Indie Rock", bio: "Raw, unfiltered energy. The Drifters are bringing guitar music back to the forefront of the underground.", imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
      { id: "4", name: "LUNA", genre: "Pop", bio: "Creating immersive dream-pop experiences.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" },
      { id: "5", name: "KAI", genre: "Hip-Hop", bio: "Lyricism that pushes boundaries.", imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80" },
      { id: "6", name: "AURA", genre: "Synthwave", bio: "Retro-futuristic beats that transport you to another dimension.", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" },
      { id: "7", name: "ZEPHYR", genre: "Lo-Fi", bio: "Chill beats for late night drives and deep thought.", imageUrl: "https://images.unsplash.com/photo-1499155286265-79a9dc9ce0f5?auto=format&fit=crop&w=800&q=80" },
      { id: "8", name: "CRIMSON", genre: "Metalcore", bio: "Heavy riffs and intense energy defining the modern metal scene.", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" },
      { id: "9", name: "MIRA", genre: "Acoustic", bio: "Soul-stirring melodies and raw, acoustic performances.", imageUrl: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80" },
      { id: "10", name: "VORTEX", genre: "Techno", bio: "Driving basslines and hypnotic rhythms for the club.", imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80" }
    ];
  }

  return (
    <section className="bg-[#2B2B2B] py-24 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#EAE9DE] tracking-tight">Featured Artists</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">Discover the visionaries reshaping the landscape of modern music under Indiebox Productions.</p>
        </div>
      </div>

      <div className="w-full">
        <ArtistMarquee artists={artists} />
      </div>
      
      <div className="mt-8 px-4 sm:px-6 lg:px-8 flex justify-center">
        <Link href="/artists" className="flex items-center text-[#EF7D33] hover:text-[#EAE9DE] transition-colors uppercase text-sm font-bold tracking-wider">
          View All Roster <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
