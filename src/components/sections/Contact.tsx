"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Headset, X, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("Pengajuan Kerja Sama");
  const [message, setMessage] = useState("");

  // Data Kontak Pemilik
  const ownerWhatsApp = "62895359530117"; // Format 62 tanpa + atau 0 di depan
  const ownerEmail = "salahudinkoliq10@gmail.com";

  const getMessageText = () => {
    let text = `Halo tim S-TechX,\n`;
    text += `Perkenalkan saya : ${name || "-"}\n`;
    text += `Dari perusahaan atau bisnis : ${company || "-"}\n`;
    text += `Tujuan / Keperluan : ${purpose}\n\n`;
    
    if (message) {
      text += `Detail pesan :\n${message}\n\n`;
    }
    
    text += `Untuk detail selengkapnya, mungkin kita bisa bertemu untuk berdiskusi lebih lanjut.\nTerima kasih.`;
    
    return encodeURIComponent(text);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${ownerWhatsApp}?text=${getMessageText()}`, "_blank");
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${purpose}] Pesan dari ${name || "Seseorang"} ${company ? `(${company})` : ""}`);
    window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${getMessageText()}`;
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
            className="fixed bottom-24 right-4 w-[calc(100vw-32px)] max-w-[360px] sm:bottom-28 sm:right-6 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[85vh]"
          >
            <div className="bg-gradient-to-r from-primary to-blue-600 p-5 sm:p-6 text-white relative flex-shrink-0">
              <div className="absolute inset-0 bg-white/5" />
              <h3 className="font-bold text-xl sm:text-2xl mb-1.5 relative z-10 tracking-tight">Mari Terhubung 👋</h3>
              <p className="text-white/90 text-xs sm:text-sm relative z-10 leading-relaxed font-light">
                Silakan isi data berikut agar kami dapat membantu Anda dengan lebih baik.
              </p>
            </div>
            
            <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Nama Lengkap</label>
                  <Input 
                    placeholder="Masukkan nama Anda" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Perusahaan <span className="text-gray-600 font-normal italic">(Opsional)</span></label>
                  <Input 
                    placeholder="Nama perusahaan Anda" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Tujuan / Keperluan</label>
                  <select 
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="flex h-11 w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="Pengajuan Kerja Sama">Pengajuan Kerja Sama</option>
                    <option value="Pembuatan Website / Aplikasi">Pembuatan Website / Aplikasi</option>
                    <option value="Tanya Layanan AI">Tanya Layanan AI</option>
                    <option value="Konsultasi Proyek IT">Konsultasi Proyek IT</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Detail Kebutuhan (Pesan)</label>
                  <Textarea 
                    placeholder="Ceritakan gambaran besar kebutuhan proyek Anda..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary min-h-[90px] resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20b858] hover:scale-[1.02] active:scale-[0.98] text-white rounded-xl h-12 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#25D366]/10"
                >
                  <FaWhatsapp className="w-[18px] h-[18px]" />
                  Kirim via WhatsApp
                </Button>
                <Button 
                  onClick={handleEmail}
                  className="w-full bg-[#EA4335] hover:bg-[#d93025] hover:scale-[1.02] active:scale-[0.98] text-white rounded-xl h-12 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#EA4335]/10"
                >
                  <Mail className="w-[18px] h-[18px]" />
                  Kirim via Email
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
