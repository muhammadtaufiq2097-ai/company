"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "home" },
  { name: "Tentang Kami", href: "about" },
  { name: "Solusi", href: "solutions" },
  { name: "Teknologi", href: "technologies" },
  { name: "Machine Learning", href: "machine-learning" },
  { name: "Portofolio", href: "portfolio" },
  { name: "FAQ", href: "faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Track active section using Intersection Observer
    const observers: IntersectionObserver[] = [];
    navLinks.forEach((link) => {
      const targetId = link.href;
      const element = document.getElementById(targetId);
      
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(targetId);
              }
            });
          },
          // Trigger when section top crosses 20% from the top of the viewport
          { rootMargin: "-20% 0px -80% 0px" } 
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth spring-like ease
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "bg-[#0F172A]/85 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800/50 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="home"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("home");
            if (el) {
              window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
            <Image src="/images/logo.jpg" alt="S-TechX Logo" fill sizes="40px" className="object-cover" />
          </div>
          <span className="font-bold text-xl text-white tracking-wider">S-TechX</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href;
                  const el = document.getElementById(targetId);
                  if (el) {
                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
                  }
                }}
                className={cn(
                  "text-sm font-medium transition-colors relative group cursor-pointer",
                  isActive ? "text-primary" : "text-gray-300 hover:text-primary"
                )}
              >
                {link.name}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} 
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-white ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-t border-gray-800 shadow-lg overflow-hidden"
          >
            <div className="py-4 px-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-base font-medium transition-colors relative group w-fit pb-1 text-left cursor-pointer",
                      isActive ? "text-primary" : "text-gray-300 hover:text-primary"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        const targetId = link.href;
                        const el = document.getElementById(targetId);
                        if (el) {
                          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    {link.name}
                    <span 
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )} 
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
