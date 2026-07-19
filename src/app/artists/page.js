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
      { id: "1", name: "Ankrish Sharma", genre: "Vocals / Composition", bio: "Bringing a fresh wave of emotive composition to the forefront.", imageUrl: "/images/artists/Ankrish sharma.jpeg" },
      { id: "2", name: "Anmol Sharma", genre: "Producer / Multi-instrumentalist", bio: "Fusing organic instrumentation with heavy synthscapes.", imageUrl: "/images/artists/Anmol Sharma.jpeg" },
      { id: "3", name: "Chaandsaa", genre: "Singer / Songwriter", bio: "Lyrical depth that resonates across borders.", imageUrl: "/images/artists/Chaandsaa.jpg" },
      { id: "4", name: "Kajal", genre: "Pop / R&B", bio: "Delivering powerful vocal performances and dynamic stage presence.", imageUrl: "/images/artists/Kajal.jpeg" },
      { id: "5", name: "Vashu Solanki", genre: "Electronic / Hip-Hop", bio: "Pushing the boundaries of rhythm and electronic sound design.", imageUrl: "/images/artists/Vashu solanki.jpeg" },
      { id: "6", name: "Nova", genre: "Alternative", bio: "Raw, unfiltered energy defining the modern alt scene.", imageUrl: "/images/artists/IMG_4555.JPEG" }
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
