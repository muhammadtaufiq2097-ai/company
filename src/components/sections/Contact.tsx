"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Headset, X, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  // Data Kontak Pemilik
  const ownerWhatsApp = "62895359530117"; // Format 62 tanpa + atau 0 di depan
  const ownerEmail = "salahudinkoliq10@gmail.com";

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${ownerWhatsApp}`, "_blank");
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    // Menggunakan protokol mailto agar terbuka di aplikasi email bawaan HP (seperti Gmail App)
    window.location.href = `mailto:${ownerEmail}`;
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-primary hover:bg-blue-600 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {isOpen ? <X size={28} /> : <Headset size={28} className="animate-pulse" />}
        </Button>
      </div>

      {/* Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-4 w-[calc(100vw-32px)] max-w-[340px] sm:bottom-28 sm:right-6 bg-gray-950/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-blue-600 p-5 sm:p-6 text-white relative overflow-hidden">
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-white/5" />
              <h3 className="font-bold text-xl sm:text-2xl mb-1.5 relative z-10 tracking-tight">Mari Terhubung 👋</h3>
              <p className="text-white/90 text-xs sm:text-sm relative z-10 leading-relaxed font-light">
                Punya pertanyaan atau butuh bantuan? Sapa tim kami melalui opsi di bawah ini.
              </p>
            </div>
            
            <div className="p-5 sm:p-6 bg-transparent">
              <div className="flex flex-col gap-3.5">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20b858] hover:scale-[1.02] active:scale-[0.98] text-white rounded-xl h-12 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#25D366]/20"
                >
                  <FaWhatsapp className="w-[18px] h-[18px]" />
                  Hubungi via WhatsApp
                </Button>
                <Button 
                  onClick={handleEmail}
                  className="w-full bg-[#EA4335] hover:bg-[#d93025] hover:scale-[1.02] active:scale-[0.98] text-white rounded-xl h-12 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#EA4335]/20"
                >
                  <Mail className="w-[18px] h-[18px]" />
                  Kirim Email ke Kami
                </Button>
                

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
