"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Headset, X, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const isEmailValid = name.trim() !== "" && email.trim() !== "" && purpose.trim() !== "" && message.trim() !== "";
  const isWaValid = name.trim() !== "" && whatsapp.trim() !== "" && purpose.trim() !== "" && message.trim() !== "";

  // Data Kontak Pemilik
  const ownerWhatsApp = "62895359530117"; // Format 62 tanpa + atau 0 di depan
  const ownerEmail = "salahudinkoliq10@gmail.com";

  const getMessageText = () => {
    let text = `Halo tim S-TechX,\n`;
    text += `Perkenalkan saya : ${name}\n`;
    text += `Alamat Email : ${email || "-"}\n`;
    text += `No. WhatsApp : ${whatsapp || "-"}\n`;
    text += `Dari perusahaan atau bisnis : ${company || "-"}\n`;
    text += `Tujuan / Keperluan : ${purpose}\n\n`;
    text += `Detail pesan :\n${message}\n\n`;
    text += `Untuk detail selengkapnya, mungkin kita bisa bertemu untuk berdiskusi lebih lanjut.\nTerima kasih.`;
    return encodeURIComponent(text);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isWaValid) {
      alert("Mohon isi Nama, No. WhatsApp, Tujuan, dan Pesan terlebih dahulu.");
      return;
    }
    window.open(`https://wa.me/${ownerWhatsApp}?text=${getMessageText()}`, "_blank");
    
    // Tampilkan status sukses dan tutup form
    setSubmitStatus("success");
    setTimeout(() => {
      setSubmitStatus("idle");
      setIsOpen(false);
      setName("");
      setEmail("");
      setWhatsapp("");
      setCompany("");
      setPurpose("");
      setMessage("");
    }, 3000);
  };

  const handleEmailSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!isEmailValid) {
      alert("Mohon isi Nama, Alamat Email, Tujuan, dan Pesan terlebih dahulu.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: "a9258701-7783-4e3a-bc83-ad7ceddc327e",
            subject: `Pesan baru dari ${name} di Website S-TechX`,
            from_name: "S-TechX Notifikasi",
            Nama: name,
            Email: email || "-",
            "No WhatsApp": whatsapp || "-",
            Perusahaan: company || "-",
            Tujuan: purpose || "-",
            Pesan: message,
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setSubmitStatus("idle");
          setIsOpen(false);
          setName("");
          setEmail("");
          setWhatsapp("");
          setCompany("");
          setPurpose("");
          setMessage("");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[49]"
              onClick={() => setIsOpen(false)}
            />
            
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
                Silakan isi form berikut dan pesan Anda akan langsung masuk ke sistem kami.
              </p>
            </div>
            
            <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar relative">
              
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-400 text-sm">Terima kasih, kami akan segera merespons pesan Anda ke email Anda.</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Nama Lengkap <span className="text-red-500">*</span></label>
                      <Input 
                        placeholder="Masukkan nama Anda" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Metode Balasan <span className="text-red-500">*</span></label>
                      <select 
                        value={contactMethod}
                        onChange={(e) => setContactMethod(e.target.value as "email" | "whatsapp")}
                        className="w-full bg-gray-900 border border-gray-800 text-white focus:ring-primary focus:border-primary h-11 rounded-md px-3 text-sm appearance-none outline-none transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>

                    {contactMethod === "email" ? (
                      <div className="space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                        <label className="text-xs font-medium text-gray-400 ml-1">Alamat Email <span className="text-red-500">*</span></label>
                        <Input 
                          type="email"
                          placeholder="email@anda.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                          disabled={isSubmitting}
                        />
                      </div>
                    ) : (
                      <div className="space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                        <label className="text-xs font-medium text-gray-400 ml-1">No. WhatsApp <span className="text-red-500">*</span></label>
                        <Input 
                          type="tel"
                          placeholder="Contoh: 0812..." 
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                          disabled={isSubmitting}
                        />
                      </div>
                    )}
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Perusahaan <span className="text-gray-600 font-normal italic">(Opsional)</span></label>
                      <Input 
                        placeholder="Nama perusahaan Anda" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Tujuan / Keperluan <span className="text-red-500">*</span></label>
                      <Input 
                        placeholder="Contoh: Pengajuan Kerja Sama" 
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary h-11"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-400 ml-1">Detail Kebutuhan (Pesan) <span className="text-red-500">*</span></label>
                      <Textarea 
                        placeholder="Ceritakan gambaran besar proyek Anda..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus-visible:ring-primary min-h-[90px] resize-none"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {submitStatus === "error" && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs text-center">
                      Maaf, terjadi kesalahan. Silakan coba kirim via WhatsApp.
                    </div>
                  )}

                  <div className="flex flex-col gap-3 mt-6">
                    {contactMethod === "email" ? (
                      <Button 
                        onClick={handleEmailSubmit}
                        disabled={isSubmitting || !isEmailValid}
                        className={`w-full bg-primary text-white rounded-xl h-12 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-primary/20 ${isSubmitting || !isEmailValid ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98]"}`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-[18px] h-[18px] animate-spin" />
                            Mengirim Pesan...
                          </>
                        ) : (
                          <>
                            <Send className="w-[18px] h-[18px]" />
                            Kirim Pesan (Otomatis)
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleWhatsApp}
                        disabled={isSubmitting || !isWaValid}
                        className={`w-full bg-[#25D366] text-white rounded-xl h-12 text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#25D366]/10 ${isSubmitting || !isWaValid ? "opacity-50 cursor-not-allowed" : "hover:bg-[#20b858] hover:scale-[1.02] active:scale-[0.98]"}`}
                      >
                        <FaWhatsapp className="w-[18px] h-[18px]" />
                        Kirim via WhatsApp
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
