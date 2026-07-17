"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Cloud, Palette, BarChart3, Bot } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Pengembangan Web",
    description: "Pembuatan website modern dan responsif.",
    techs: ["Next.js", "React.js", "Node.js"],
  },
  {
    icon: <Smartphone className="w-10 h-10 text-secondary" />,
    title: "Pengembangan Mobile",
    description: "Pengembangan aplikasi Android dan iOS.",
    techs: ["Flutter", "React Native"],
  },
  {
    icon: <Cloud className="w-10 h-10 text-accent" />,
    title: "Solusi Cloud",
    description: "Layanan cloud dan server management.",
    techs: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    title: "Desain UI/UX",
    description: "Desain aplikasi modern dan user friendly.",
    techs: ["Figma", "Framer", "Adobe XD"],
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-emerald-500" />,
    title: "Analitik Data",
    description: "Analisis data bisnis dan visualisasi data.",
    techs: ["Python", "Tableau", "PowerBI"],
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    title: "Kecerdasan Buatan",
    description: "Penerapan teknologi AI untuk bisnis.",
    techs: ["TensorFlow", "PyTorch", "OpenCV"],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-900/30 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Solusi & Layanan</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Layanan Digital Terpadu</h3>
          <p className="text-gray-400 text-lg">
            Kami menyediakan berbagai layanan teknologi modern untuk mendukung pertumbuhan dan transformasi bisnis Anda di era digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-background border-gray-800 hover:border-primary/50 transition-colors group h-full">
                <CardHeader>
                  <div className="mb-4 p-3 bg-gray-900 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.techs.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 bg-gray-800 text-gray-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
