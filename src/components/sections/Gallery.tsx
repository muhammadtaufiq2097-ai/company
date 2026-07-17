"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Tim Developer" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Meeting Client" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Presentasi" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Coding Session" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Deployment Server" },
];

export function Gallery() {
  return (
    <section className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Galeri & Aktivitas</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Di Balik Layar S-TechX</h3>
          <p className="text-gray-400 text-lg">
            Momen kolaborasi, pengembangan inovasi, dan dedikasi tim kami dalam menciptakan solusi digital terbaik.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full aspect-video"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-full">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-semibold text-lg">{img.alt}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 aspect-video flex items-center justify-center group">
            {/* Fallback to generic video or placeholder since specific video is not provided */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none" />
            <div className="z-10 text-center pointer-events-none">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/50">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </div>
              <h4 className="text-white font-bold text-xl tracking-wide shadow-black drop-shadow-md">Company Profile Video</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
