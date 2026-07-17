"use client";

import { BrainCircuit, LineChart, ScanEye, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

const mlSolutions = [
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Analitik Prediktif",
    description: "Memprediksi penjualan, permintaan produk, dan tren pasar menggunakan data historis.",
  },
  {
    icon: <ScanEye className="w-8 h-8 text-secondary" />,
    title: "Visi Komputer",
    description: "Deteksi kendaraan, deteksi objek, dan face recognition menggunakan YOLO, OpenCV, dan TensorFlow.",
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-accent" />,
    title: "Pemrosesan Bahasa Alami",
    description: "Pengembangan Chatbot AI, Sentiment Analysis, dan Text Classification.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-pink-500" />,
    title: "Sistem Rekomendasi",
    description: "Meningkatkan konversi untuk Marketplace, E-Commerce, dan Media Streaming.",
  },
];

export function MachineLearning() {
  return (
    <section id="machine-learning" className="py-24 bg-gray-900/50 border-y border-gray-800 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Solusi Machine Learning</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Kecerdasan Buatan untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Bisnis yang Lebih Cerdas</span>
            </h3>
            <p className="text-gray-300 text-lg">
              S-TechX menyediakan layanan pengembangan Machine Learning untuk membantu bisnis mengambil keputusan yang lebih cerdas berdasarkan data.
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mlSolutions.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-background border border-gray-800 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 p-3 bg-gray-900 rounded-xl w-fit inline-block">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
