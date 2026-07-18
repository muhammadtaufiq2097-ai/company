"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-700">
                <Image src="/images/logo.jpg" alt="S-TechX Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="font-bold text-2xl text-white tracking-wider">S-TechX</span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Mengubah Ide Menjadi Solusi Cerdas.
            </p>
            <div className="flex gap-4">
              <button onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <FaGithub size={20} />
              </button>
              <button onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077B5] transition-colors">
                <FaLinkedin size={20} />
              </button>
              <button onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E4405F] transition-colors">
                <FaInstagram size={20} />
              </button>
              <button onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] transition-colors">
                <FaFacebook size={20} />
              </button>
              <button onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000] transition-colors">
                <FaYoutube size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'FAQ'].map((item) => {
                const targetId = `#${item === 'Beranda' ? 'home' : item === 'Tentang Kami' ? 'about' : item === 'Layanan' ? 'solutions' : item === 'Portofolio' ? 'portfolio' : 'faq'}`;
                return (
                  <li key={item}>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Lokasi Kami</h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-gray-800 shadow-lg relative group">
              <iframe 
                src="https://maps.google.com/maps?q=Ezrat%20on-line%20sembako,%20Wanasari,%20Cibitung,%20Bekasi&t=&z=17&ie=UTF8&iwloc=B&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
              ></iframe>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Jl. Regensi 1 No.46 Blok J5, RT.02/RW.06, Wanasari, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex items-center justify-center">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} S-TechX. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
