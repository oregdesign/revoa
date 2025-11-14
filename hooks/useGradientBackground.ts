"use client";
import { useEffect, useRef } from "react";

// 🧠 This hook will control and initialize your gradient animation
export default function useGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) return console.warn("WebGL not supported for gradient");

    // --- Initialize your gradient logic here ---
    // Simplified from MiniGl — replace with your gradient math or shaders

    let animationFrameId: number;

    function renderGradient(time: number) {
      const r = Math.sin(time * 0.001) * 0.5 + 0.5;
      const g = Math.sin(time * 0.001 + 2) * 0.5 + 0.5;
      const b = Math.sin(time * 0.001 + 4) * 0.5 + 0.5;
      gl.clearColor(r, g, b, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      animationFrameId = requestAnimationFrame(renderGradient);
    }

    renderGradient(0);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return canvasRef;
}
