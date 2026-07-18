import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S-TechX | Transforming Ideas Into Intelligent Solutions",
  description: "S-TechX adalah perusahaan teknologi terkemuka yang berfokus pada AI, Machine Learning, Web & Mobile Development. Solusi digital terbaik untuk bisnis Anda.",
  keywords: ["S-TechX", "AI", "Machine Learning", "Web Development", "Mobile Development", "Software House", "Jasa Pembuatan Website", "Jasa Aplikasi Mobile", "Konsultan IT", "Teknologi"],
  openGraph: {
    title: "S-TechX | Transforming Ideas Into Intelligent Solutions",
    description: "S-TechX adalah perusahaan teknologi terkemuka yang berfokus pada AI, Machine Learning, Web & Mobile Development.",
    url: "https://s-techx.com",
    siteName: "S-TechX",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "S-TechX Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S-TechX | Intelligent Solutions",
    description: "Solusi digital AI, Machine Learning, Web & Mobile Development terbaik untuk bisnis Anda.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
