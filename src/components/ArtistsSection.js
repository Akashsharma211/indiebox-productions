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
      { id: "1", name: "Ankrish Sharma", genre: "Vocals / Composition", bio: "Bringing a fresh wave of emotive composition to the forefront.", imageUrl: "/images/artists/Ankrish sharma.jpeg" },
      { id: "2", name: "Anmol Sharma", genre: "Producer / Multi-instrumentalist", bio: "Fusing organic instrumentation with heavy synthscapes.", imageUrl: "/images/artists/Anmol Sharma.jpeg" },
      { id: "3", name: "Chaandsaa", genre: "Singer / Songwriter", bio: "Lyrical depth that resonates across borders.", imageUrl: "/images/artists/Chaandsaa.jpg" },
      { id: "4", name: "Kajal", genre: "Pop / R&B", bio: "Delivering powerful vocal performances and dynamic stage presence.", imageUrl: "/images/artists/Kajal.jpeg" },
      { id: "5", name: "Vashu Solanki", genre: "Electronic / Hip-Hop", bio: "Pushing the boundaries of rhythm and electronic sound design.", imageUrl: "/images/artists/Vashu solanki.jpeg" },
      { id: "6", name: "Nova", genre: "Alternative", bio: "Raw, unfiltered energy defining the modern alt scene.", imageUrl: "/images/artists/IMG_4555.JPEG" }
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
