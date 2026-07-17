"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PetScan AI Web",
    description: "Aplikasi cerdas berbasis web untuk deteksi dan klasifikasi kesehatan hewan peliharaan memanfaatkan teknologi Machine Learning.",
    image: "https://image.thum.io/get/width/1920/crop/1080/https://muhammad-taufiq-petscan-ai-web.hf.space",
    features: ["Artificial Intelligence", "Machine Learning", "Health Tech", "Computer Vision"],
    link: "https://muhammad-taufiq-petscan-ai-web.hf.space",
    featured: false,
  },
  {
    title: "NusantaraGO",
    description: "Platform penjelajah wisata dan budaya Nusantara dengan antarmuka yang modern, interaktif, dan mudah digunakan.",
    image: "https://image.thum.io/get/width/1920/crop/1080/https://nusantarago.netlify.app/",
    features: ["Web Development", "UI/UX Design", "Travel Tech"],
    link: "https://nusantarago.netlify.app/",
    featured: false,
  },
  {
    title: "Absensiku",
    description: "Sistem absensi digital dan manajemen kehadiran berbasis web yang efisien untuk institusi pendidikan maupun perusahaan.",
    image: "https://api.microlink.io/?url=https://absensiku.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    features: ["Management System", "Web Application", "HR Tech"],
    link: "https://absensiku.vercel.app/",
    featured: false,
  },
  {
    title: "EcoScanner AI",
    description: "Aplikasi berbasis kecerdasan buatan untuk deteksi dan analisis lingkungan secara cerdas melalui teknologi Computer Vision.",
    image: "https://api.microlink.io/?url=https://muhammad-taufiq-ecoscanner-baru.hf.space&screenshot=true&meta=false&embed=screenshot.url",
    features: ["Artificial Intelligence", "Computer Vision", "Green Tech"],
    link: "https://muhammad-taufiq-ecoscanner-baru.hf.space",
    featured: false,
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portofolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Proyek Unggulan Kami</h3>
          <p className="text-gray-400 text-lg">
            Beberapa hasil karya terbaik kami dalam membantu klien mencapai tujuan transformasi digital mereka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Card className={`bg-gray-900 border-gray-800 overflow-hidden group h-full`}>
                <div className={`flex flex-col h-full`}>
                  <div className={`relative w-full aspect-video overflow-hidden`}>
                    <motion.div
                      initial={{ scale: 1.2, filter: "blur(10px)", opacity: 0 }}
                      whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 + 0.2 }}
                      className="absolute inset-0"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, -1, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:-rotate-2 group-hover:brightness-110"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <CardContent className={`flex flex-col p-8 w-full`}>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button 
                        variant="outline" 
                        onClick={() => window.open(project.link, "_blank")}
                        className="border-primary text-primary hover:bg-primary hover:text-white rounded-full group/btn w-fit"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Kunjungi Website
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
