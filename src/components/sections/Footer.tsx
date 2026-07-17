import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-700">
                <Image src="/images/logo.jpg" alt="S-TechX Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="font-bold text-2xl text-white tracking-wider">S-TechX</span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Transforming Ideas Into Intelligent Solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <FaGithub size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077B5] transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E4405F] transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000] transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'services' ? 'solutions' : item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 S-TechX. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
