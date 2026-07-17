"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const frontendTech = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

const backendTech = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

const MarqueeRow = ({ items, reverse = false, title }: { items: any[], reverse?: boolean, title: string }) => {
  // Duplicate array multiple times for a seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="mb-12">
      <h4 className="text-xl font-semibold text-gray-400 mb-6 text-center">{title}</h4>
      <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedItems.map((tech, idx) => (
            <div 
              key={`${tech.name}-${idx}`} 
              className="flex flex-col items-center gap-3 w-32"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 hover:border-primary hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300">
                <div className="relative w-10 h-10 md:w-12 md:h-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Image src={tech.icon} alt={tech.name} fill sizes="48px" className="object-contain" />
                </div>
              </div>
              <span className="text-sm text-gray-400 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Teknologi</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Teknologi yang Kami Gunakan</h3>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <MarqueeRow items={frontendTech} title="Frontend & UI/UX" />
          <MarqueeRow items={backendTech} title="Backend, Data & AI" reverse={true} />
        </div>
      </div>
    </section>
  );
}
