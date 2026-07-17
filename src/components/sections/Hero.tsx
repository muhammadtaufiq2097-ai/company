"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Particles */}
      <div className="absolute inset-0 w-full h-full bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        {/* Particle Fallback using Framer Motion */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary rounded-full"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-20 relative text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-24 h-24 md:w-32 md:h-32 mb-8 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            <Image src="/images/logo.jpg" alt="S-TechX Logo" fill sizes="(max-width: 768px) 96px, 128px" priority className="object-cover" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Transformasi Bisnis Melalui{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Teknologi dan Kecerdasan Buatan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Membangun solusi digital modern berbasis Web Development, Machine Learning, dan Artificial Intelligence untuk membantu bisnis berkembang lebih cepat.
          </p>

          {/* Buttons removed based on request */}
        </motion.div>
      </div>
    </section>
  );
}
