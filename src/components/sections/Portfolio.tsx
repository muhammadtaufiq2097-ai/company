"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Web S-TechX",
    description: "Desain antarmuka portfolio personal modern, interaktif, dan responsif. Menggunakan teknologi terkini untuk pengalaman pengguna yang maksimal.",
    image: "https://image.thum.io/get/width/1920/crop/1080/https://salahudinkholikprasetyono.netlify.app",
    features: ["Web Development", "UI/UX Design", "Interactive", "Responsive"],
    link: "https://salahudinkholikprasetyono.netlify.app",
    featured: false,
  },
  {
    title: "PetScan AI Web",
    description: "Aplikasi cerdas berbasis web untuk deteksi dan klasifikasi kesehatan hewan peliharaan memanfaatkan teknologi Machine Learning.",
    image: "https://image.thum.io/get/width/1920/crop/1080/https://muhammad-taufiq-petscan-ai-web.hf.space",
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
