import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Latest Releases | New Indie Music — Gumshuda, Mahiya Ve",
  description: "Listen to the latest music releases from Indiebox Productions. Stream Gumshuda and Mahiya Ve by Jatin Arya. Discover fresh indie music from India's top independent music label.",
  keywords: ["Gumshuda song", "Mahiya Ve song", "Jatin Arya new song", "indie music releases India", "new indie songs 2024", "Indiebox releases", "indie music streaming"],
  openGraph: {
    title: "Latest Releases | Indiebox Productions",
    description: "New music from Indiebox Productions. Stream Gumshuda and Mahiya Ve by Jatin Arya and more fresh indie music.",
  },
};

// ISR: revalidate every 60 seconds instead of force-dynamic
// This caches the page at the CDN edge and only re-fetches from DB periodically
export const revalidate = 60;

export default async function ReleasesPage() {
  let releases = [];
  try {
    releases = await prisma.release.findMany({
      orderBy: { releaseDate: 'desc' }
    });
  } catch (error) {
    releases = [
      { id: "1", title: "Mahiya Ve", artistName: "Jatin Arya", coverUrl: "/spotify-artwork-mahiya-ve-3000x3000.jpg", type: "Single", releaseDate: new Date() },
      { id: "2", title: "Gumshuda", artistName: "Jatin Arya", coverUrl: "/spotify-artwork-gumshuda-3000x3000.jpg", type: "Single", releaseDate: new Date() }
    ];
  }

  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-[#EF7D33] tracking-tighter mb-4 text-center">LATEST RELEASES</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          The freshest cuts from our roster. Immerse yourself in the new wave.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map(release => (
            <div key={release.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border border-white/5 shadow-2xl">
                <Image
                  src={release.coverUrl}
                  alt={release.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={false}
                />
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
      </div>

      <Footer />
    </main>
  );
}
