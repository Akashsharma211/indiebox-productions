"use client";

import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle } from "lucide-react";

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        message: formData.message,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("EmailJS Success:", result.status, result.text);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", inquiryType: "General", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error?.status, error?.text);
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#2B2B2B] min-h-screen text-[#EAE9DE] font-sans selection:bg-[#EF7D33] selection:text-[#2B2B2B] relative">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-[#EF7D33] tracking-tighter mb-4">BOOK NOW</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to shape the sound of tomorrow? Get in touch with our team for bookings, licensing, or brand partnerships.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white/5 backdrop-blur-xl border border-[#EF7D33]/30 rounded-3xl p-12 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
            <CheckCircle className="w-20 h-20 text-[#EF7D33] mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-4">Inquiry Sent!</h2>
            <p className="text-gray-400">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 bg-[#252525] hover:bg-[#333] transition-colors px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[#EAE9DE] focus:outline-none focus:border-[#EF7D33] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[#EAE9DE] focus:outline-none focus:border-[#EF7D33] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Row 2: Phone + Inquiry Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[#EAE9DE] focus:outline-none focus:border-[#EF7D33] transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Inquiry Type</label>
                <select 
                  value={formData.inquiryType}
                  onChange={e => setFormData({...formData, inquiryType: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[#EAE9DE] focus:outline-none focus:border-[#EF7D33] transition-colors appearance-none h-[50px]"
                >
                  <option value="Artist Booking">Artist Booking</option>
                  <option value="Music Production">Music Production</option>
                  <option value="Mixing & Mastering">Mixing & Mastering</option>
                  <option value="Video Services">Video Services</option>
                  <option value="Creative Direction">Creative Direction</option>
                  <option value="Sync & Licensing">Sync & Licensing</option>
                  <option value="Brand Partnership">Brand Partnership</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[#EAE9DE] focus:outline-none focus:border-[#EF7D33] transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full bg-[#EF7D33] text-[#2B2B2B] hover:bg-[#EAE9DE] transition-colors px-8 py-4 rounded-xl font-black tracking-widest uppercase shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-center mt-4 font-medium">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>

      <Footer />
    </main>
  );
}
