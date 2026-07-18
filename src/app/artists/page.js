import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtistGallery from "@/components/ArtistGallery";

export const metadata = {
  title: "Artists | Indie Artists Roster — Jatin Arya & More",
  description: "Discover the artists of Indiebox Productions. Book indie artists like Jatin Arya for live events, collaborations, brand campaigns, and music projects across India.",
  keywords: ["indie artists India", "Jatin Arya", "artist booking India", "Indiebox artists", "indie music artists", "Gumshuda", "Mahiya Ve"],
  openGraph: {
    title: "Artists | Indiebox Productions",
    description: "Meet the indie artists of Indiebox Productions. Book artists for live events, collaborations, and brand campaigns.",
  },
};

export const dynamic = "force-dynamic";

export default async function ArtistsPage() {
  let artists = [];
  try {
    artists = await prisma.artist.findMany({
      orderBy: { name: 'asc' }
    });
  } catch (error) {
    artists = [];
  }

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
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B] overflow-hidden">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-[#EF7D33] tracking-tighter mb-4 text-center">OUR ROSTER</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
          The visionaries shaping the sound of tomorrow. Explore our curated selection of groundbreaking artists.
        </p>

        <ArtistGallery artists={artists} />
      </div>

      <Footer />
    </main>
  );
}
