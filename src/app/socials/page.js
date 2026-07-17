import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

export default function SocialsPage() {
  const socials = [
    { name: "Instagram", icon: <FaInstagram className="w-8 h-8" />, url: "#", bg: "hover:bg-pink-600" },
    { name: "Twitter / X", icon: <FaTwitter className="w-8 h-8" />, url: "#", bg: "hover:bg-blue-400" },
    { name: "YouTube", icon: <FaYoutube className="w-8 h-8" />, url: "#", bg: "hover:bg-red-600" },
    { name: "Facebook", icon: <FaFacebook className="w-8 h-8" />, url: "#", bg: "hover:bg-blue-600" },
    { name: "TikTok", icon: <FaTiktok className="w-8 h-8" />, url: "#", bg: "hover:bg-zinc-800" },
  ];

  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-[#EAE9DE] tracking-tighter mb-4">CONNECT WITH <span className="text-[#EF7D33]">US</span></h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          Join the community. Follow Indiebox Productions across all platforms to stay updated on our latest releases and artist news.
        </p>

        <div className="flex flex-col space-y-4 max-w-xl mx-auto">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              className={`flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 group ${social.bg}`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#EF7D33] group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
                <span className="text-xl font-bold tracking-widest uppercase">{social.name}</span>
              </div>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Follow ➔
              </span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
