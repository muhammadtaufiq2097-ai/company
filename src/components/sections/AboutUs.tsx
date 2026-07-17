"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="S-TechX Technology" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Tentang S-TechX</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Inovasi Digital Berbasis AI</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                S-TechX merupakan perusahaan teknologi yang berfokus pada pengembangan solusi digital berbasis Artificial Intelligence dan Machine Learning. Kami membantu perusahaan, UMKM, institusi pendidikan, dan organisasi dalam melakukan transformasi digital melalui teknologi modern yang inovatif dan efisien.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-3 text-secondary">Visi Kami</h4>
              <p className="text-gray-300">
                Menjadi perusahaan teknologi terpercaya yang mampu menghadirkan inovasi digital berbasis AI untuk berbagai sektor industri.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Misi Kami</h4>
              <ul className="space-y-3">
                {[
                  "Mengembangkan solusi digital berkualitas tinggi",
                  "Mengimplementasikan teknologi AI yang bermanfaat",
                  "Memberikan layanan terbaik kepada klien",
                  "Mendukung transformasi digital Indonesia"
                ].map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-gray-300">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
