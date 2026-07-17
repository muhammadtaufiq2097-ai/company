"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "PT Digital Nusantara",
    text: "S-TechX berhasil membantu digitalisasi perusahaan kami dengan hasil yang sangat memuaskan. Proses kerja terstruktur dan komunikasi sangat responsif.",
    rating: 5,
  },
  {
    name: "CV Smart Solution",
    text: "Implementasi Machine Learning yang diberikan meningkatkan efisiensi bisnis kami secara signifikan. Sangat direkomendasikan untuk solusi AI.",
    rating: 5,
  },
  {
    name: "Tech Indo Makmur",
    text: "Pengembangan website e-commerce kami selesai tepat waktu dan memiliki UI/UX yang luar biasa. Sangat puas dengan hasil kerjanya!",
    rating: 5,
  },
  {
    name: "Global Data Analytics",
    text: "Sistem dashboard analitik yang dibangun oleh tim S-TechX sangat membantu kami dalam mengambil keputusan strategis bisnis.",
    rating: 5,
  },
  {
    name: "Koperasi Sejahtera",
    text: "Aplikasi mobile yang dibuat sangat user-friendly. Anggota koperasi kami kini lebih mudah bertransaksi dari mana saja.",
    rating: 5,
  },
];

export function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Testimonial</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Apa Kata Klien Kami</h3>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] pb-8">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedTestimonials.map((testi, idx) => (
            <div key={idx} className="w-[350px] md:w-[450px] shrink-0">
              <Card className="bg-gray-900 border-gray-800 relative group hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-800 group-hover:text-primary/20 transition-colors" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 italic flex-grow">
                    &quot;{testi.text}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-xl shrink-0">
                      {testi.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">— {testi.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
