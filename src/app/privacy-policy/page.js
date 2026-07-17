import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B]">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <FileText className="w-20 h-20 text-[#EF7D33] mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl font-black text-[#EF7D33] tracking-tighter mb-8">PRIVACY POLICY</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto text-left">
          At Indiebox Productions, we respect your privacy and are committed to protecting your personal data.
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights.
          <br /><br />
          Last updated: Today
        </p>
      </div>

      <Footer />
    </main>
  );
}
