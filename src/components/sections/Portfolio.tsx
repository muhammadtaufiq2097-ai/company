"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const projects = [
  {
    title: "Portfolio Web S-TechX",
    description: "Desain antarmuka portfolio personal modern, interaktif, dan responsif. Menggunakan teknologi terkini untuk pengalaman pengguna yang maksimal.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Web Development", "UI/UX Design", "Interactive", "Responsive"],
    link: "https://salahudinkholikprasetyono.netlify.app",
    featured: false,
  },
  {
    title: "PetScan AI Web",
    description: "Aplikasi cerdas berbasis web untuk deteksi dan klasifikasi kesehatan hewan peliharaan memanfaatkan teknologi Machine Learning.",
    images: [
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Artificial Intelligence", "Machine Learning", "Health Tech", "Computer Vision"],
    link: "https://muhammad-taufiq-petscan-ai-web.hf.space",
    featured: false,
  },
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
                <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''} h-full`}>
                  <div className={`relative ${project.featured ? 'lg:w-1/2' : 'w-full'} aspect-video overflow-hidden`}>
                    <Swiper
                      modules={[Autoplay, EffectFade, Pagination]}
                      effect="fade"
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3500 + (idx * 500), disableOnInteraction: false }}
                      className="w-full h-full absolute inset-0 z-0"
                    >
                      {project.images.map((imgSrc, imgIdx) => (
                        <SwiperSlide key={imgIdx}>
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
                                src={imgSrc} 
                                alt={`${project.title} - Preview ${imgIdx + 1}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-2 group-hover:brightness-110"
                              />
                            </motion.div>
                          </motion.div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none z-10" />
                  </div>
                  
                  <CardContent className={`flex flex-col p-8 ${project.featured ? 'lg:w-1/2 justify-center' : ''}`}>
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
