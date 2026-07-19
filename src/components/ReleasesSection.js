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
      { id: "2", title: "Visions", artistName: "NOVA", coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", type: "EP", releaseDate: new Date() }
    ];
  }

  return (
    <section className="bg-[#0B0F19] py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#EAE9DE] tracking-tight mb-12 text-center uppercase">Latest Releases</h2>
        
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* SET 1 */}
          {releases[0] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Large Tile (Details) */}
              <div className="group relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[700px] md:col-span-2 overflow-hidden bg-black flex items-center justify-center cursor-pointer">
                <img 
                  src="/spotify-artwork-mahiya-ve-3000x3000.jpg" 
                  alt="Mahiya Ve" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

                <div className="absolute top-6 left-6 flex items-center gap-1">
                  <span className="text-white font-black text-xs tracking-widest uppercase">INDIEBOX</span>
                  <span className="text-gray-300 text-xs tracking-widest uppercase">RELEASE</span>
                </div>

                <div className="absolute bottom-10 left-0 right-0 px-6 flex flex-col items-center text-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Jatin Arya</span>
                    <span className="text-white italic font-serif text-sm md:text-base">Single</span>
                  </div>
                  <div className="relative inline-block">
                    <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
                      {['MAHIYA', 'VE'].map((word, wIdx) => (
                        <span key={wIdx} className={wIdx % 2 !== 0 ? 'italic font-serif font-medium mr-3' : 'mr-3'}>
                          {word}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Small Tile (Video) */}
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[700px] md:col-span-1 overflow-hidden bg-black">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500">
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {/* SET 2 */}
          {releases[1] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Small Tile (Video) - Reversed visually on Desktop */}
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[700px] md:col-span-1 overflow-hidden bg-black order-2 md:order-1">
                <video 
                  src="/gumshuda-video.webm" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Large Tile (Details) */}
              <div className="group relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[700px] md:col-span-2 overflow-hidden bg-black flex items-center justify-center cursor-pointer order-1 md:order-2">
                <img 
                  src="/spotify-artwork-gumshuda-3000x3000.jpg" 
                  alt="Gumshuda" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

                <div className="absolute top-6 right-6 flex items-center gap-1">
                  <span className="text-white font-black text-xs tracking-widest uppercase">INDIEBOX</span>
                  <span className="text-gray-300 text-xs tracking-widest uppercase">RELEASE</span>
                </div>

                <div className="absolute bottom-10 left-0 right-0 px-6 flex flex-col items-center text-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Jatin Arya</span>
                    <span className="text-white italic font-serif text-sm md:text-base">Single</span>
                  </div>
                  <div className="relative inline-block">
                    <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
                      {['GUMSHUDA'].map((word, wIdx) => (
                        <span key={wIdx} className={wIdx % 2 !== 0 ? 'italic font-serif font-medium mr-3' : 'mr-3'}>
                          {word}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="mt-16 text-center">
          <Link href="/releases" className="inline-block border-2 border-white/20 text-[#EAE9DE] hover:bg-white hover:text-black hover:border-white transition-all px-10 py-4 rounded-full uppercase text-sm font-black tracking-widest">
            Explore Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
