"use client";
import React, { useEffect } from "react";

export default function HeroSection() {
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
  className="
    relative isolate w-full min-h-screen overflow-hidden text-white bg-black
    px-8 sm:px-12 md:px-20 lg:px-28
  "
>
  {/* Skewed gradient */}
  <div
    className="absolute inset-0 transform origin-[var(--transform-origin-x)_100%] z-0"
    style={{
      transform: "translateY(40%) skewY(var(--section-skew-Y)) scale(1.4)",
    }}
  >
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

  {/* Main content aligned with navbar */}
  <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between py-46 px-8 sm:px-12 md:px-12 lg:px-4 xl:px-35">
    {/* Left text */}
    <div className="relative z-10 text-left max-w-xl flex flex-col justify-center pl-2 sm:pl-4">
      <div className="relative gradient-title-area">
        <h1 className="text text-above section-title-1">
          See your new website
          <br />
          before you even pay.
        </h1>
        <div className="text text-under text-under-blended section-title-1">
          See your new website
          <br />
          before you even pay.
        </div>
        <div className="text text-under text-under-overlay section-title-1">
          See your new website
          <br />
          before you even pay.
        </div>
      </div>

      <h2 className="section-title-2 subtitle mt-8">
        Chat with us and get your personalized live demo website + free quote in hours.
      </h2>

      <div className="flex gap-4 mt-10">
        <a
          href="#chat"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition"
        >
          💬 Chat Now
        </a>
        <a
          href="#portfolio"
          className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition"
        >
          👀 View Demo
        </a>
      </div>
    </div>

    {/* Right placeholder */}
<div className="relative z-10 hidden md:flex justify-center items-center w-1/2">
  <div className="w-[350px] h-[260px] md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[360px] bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
    <span className="opacity-60 text-sm">[ Graphic placeholder ]</span>
  </div>
</div>
  </div>
</section>

  );
}
