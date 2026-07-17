"use client";

import { Building2, Landmark, Store, GraduationCap, Briefcase, Hospital } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  { icon: <Building2 className="w-6 h-6" />, name: "Perusahaan Korporat" },
  { icon: <Store className="w-6 h-6" />, name: "Startup Teknologi" },
  { icon: <Landmark className="w-6 h-6" />, name: "UMKM & Retail" },
  { icon: <GraduationCap className="w-6 h-6" />, name: "Institusi Pendidikan" },
  { icon: <Briefcase className="w-6 h-6" />, name: "Agensi Kreatif" },
  { icon: <Hospital className="w-6 h-6" />, name: "Fasilitas Kesehatan" },
];

export function Clients() {
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-background border-t border-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-gray-400 text-sm font-semibold tracking-wider uppercase">
            Trusted by Various Organizations and Businesses
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex gap-6 md:gap-12 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedClients.map((client, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-colors shrink-0"
            >
              <div className="text-gray-400 group-hover:text-primary transition-colors">
                {client.icon}
              </div>
              <span className="text-gray-300 font-medium">{client.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
