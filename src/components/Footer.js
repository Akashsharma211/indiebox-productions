import Link from "next/link";
import { Mail, Globe, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black text-[#EAE9DE] uppercase tracking-widest mb-6">Indiebox</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting the sound of tomorrow. A premier production house dedicated to visionary artists and global impact.
            </p>
          </div>
          
          <div>
            <h3 className="text-[#EF7D33] font-bold uppercase tracking-wider text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">Press</Link></li>
              <li><Link href="/book-now" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#EF7D33] font-bold uppercase tracking-wider text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/licensing" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">Licensing</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">Store Support</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-[#EAE9DE] transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#EF7D33] font-bold uppercase tracking-wider text-sm mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#EAE9DE] transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="/book-now" className="text-gray-400 hover:text-[#EAE9DE] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="mailto:hello@indiebox.com" className="text-gray-400 hover:text-[#EAE9DE] transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Indiebox Productions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
