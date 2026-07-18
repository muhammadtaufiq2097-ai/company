"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { AboutUs } from "@/components/sections/AboutUs";
import { Solutions } from "@/components/sections/Solutions";
import { Technologies } from "@/components/sections/Technologies";
import { MachineLearning } from "@/components/sections/MachineLearning";
import { Portfolio } from "@/components/sections/Portfolio";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clients } from "@/components/sections/Clients";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname.substring(1);
    if (['home', 'about', 'solutions', 'technologies', 'machine-learning', 'portfolio', 'faq'].includes(path)) {
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Statistics />
      <AboutUs />
      <Solutions />
      <Technologies />
      <MachineLearning />
      <Portfolio />
      <Gallery />
      <Testimonials />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
