"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Apa itu S-TechX?",
    answer: "S-TechX adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital berbasis Artificial Intelligence (AI) dan Machine Learning untuk membantu transformasi digital berbagai skala bisnis.",
  },
  {
    question: "Layanan apa saja yang ditawarkan S-TechX?",
    answer: "Kami menawarkan berbagai layanan termasuk Web Development, Mobile App Development, solusi Cloud & Infrastruktur, UI/UX Design, Data Analytics, dan implementasi Artificial Intelligence khusus untuk kebutuhan bisnis Anda.",
  },
  {
    question: "Berapa lama waktu pengerjaan sebuah project?",
    answer: "Waktu pengerjaan sangat bergantung pada kompleksitas dan skala project. Sebuah landing page bisa memakan waktu 1-2 minggu, sementara aplikasi kompleks dengan integrasi AI bisa memakan waktu 2-4 bulan atau lebih.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-900/30 border-y border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Pertanyaan yang Sering Diajukan</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 hover:border-gray-700 transition-colors"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-medium text-white text-base md:text-lg">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300",
                    openIndex === idx ? "rotate-180 text-primary" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === idx ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
