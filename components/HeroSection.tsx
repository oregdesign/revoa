"use client";
import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  useEffect(() => {
    // Load Kevin's WebGL gradient
    const script = document.createElement("script");
    script.src = "/Gradient.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).Gradient) {
        const gradient = new (window as any).Gradient();
        gradient.initGradient("#gradient-canvas");
        console.log("✅ WebGL gradient initialized");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className="hero">
          {/* Main title */}
      <div className="container">
        <div className="hero-title-container relative">
          <div className="hero-title-content flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="hero-title-text flex-1">
            <h1 className="hero-title">{t("hero_title")}</h1>
            <h1 className="hero-title" data-overlay>{t("hero_title")}</h1>
          </div>

              {/* RIGHT SIDE — Future graphic placeholder */}
          <div className="hero-graphic flex-1 flex justify-center items-center pr-42">
            <div className="w-[300px] h-[240px] md:w-[600px] md:h-[320px] bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
            <span className="opacity-60 text-sm">[ Graphic placeholder ]</span>
            </div>
          </div>
          </div>
        </div>
      <div className="canvas-container">
        <canvas
          id="gradient-canvas"
          className="w-full h-full"
          style={{
            ["--gradient-color-1" as any]: "#6ec3f4",
            ["--gradient-color-2" as any]: "#3a3aff",
            ["--gradient-color-3" as any]: "#ff61ab",
            ["--gradient-color-4" as any]: "#E63946",
          }}
        ></canvas>
     </div>
     <div className="flex-row gap-4 pl-34">       
        {/* Subtitle */}
        <h2 className="section-title-2 subtitle mt-8">{t("hero_subtitle")}</h2>        
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#chat"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition"
            >
              {t("button_chat")}
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              {t("button_demo")}
            </a>
          </div>
        </div>      
      </div>      
    </section>
  );
}
