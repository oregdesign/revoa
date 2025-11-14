"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Flag SVGs (inline small optimized)
const flags = {
  id: (
    <svg width="20" viewBox="0 0 20 20">
      <rect width="20" height="20" fill="#ff0000" />
      <rect width="20" height="10" y="10" fill="#ffffff" />
    </svg>
  ),
  en: (
    <svg width="20" viewBox="0 0 60 30">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v-30 z h-30 v15 h-30 v15 z v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" clipPath="url(#s)" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#cf142b" strokeWidth="4" clipPath="url(#t)" />
      <path
        d="M30,0 v30 M0,15 h60"
        stroke="#fff"
        strokeWidth="10"
        clipPath="url(#s)"
      />
      <path
        d="M30,0 v30 M0,15 h60"
        stroke="#cf142b"
        strokeWidth="6"
        clipPath="url(#s)"
      />
    </svg>
  ),
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { code: "id", label: "Indonesia" },
    { code: "en", label: "English" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition"
      >
        <Globe size={18} className="text-white" />

        {/* Show flag + code */}
        <div className="flex items-center gap-1">
          
          <span className="text-white text-sm uppercase">{lang}</span>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-white" />
        </motion.div>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  setLang(item.code as "id" | "en");
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-white/10 transition ${
                  lang === item.code ? "text-white font-semibold" : "text-gray-300"
                }`}
              >
                {flags[item.code]}
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
