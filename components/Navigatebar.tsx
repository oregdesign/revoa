"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "How It Works", href: "#how" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/50 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          Revoa
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-gray-200">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#chat"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition"
          >
            Chat Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-200 hover:text-white transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-gray-200 flex flex-col items-center space-y-4 py-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#chat"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition"
          >
            Chat Now
          </a>
        </div>
      )}
    </nav>
  );
}
