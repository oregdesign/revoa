// fallback-gradient.js
class FallbackGradient {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.step = 0;
    window.addEventListener("resize", () => this.resize());
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  animate() {
    this.step += 0.01;
    const grad = this.ctx.createLinearGradient(
      Math.sin(this.step) * 200,
      Math.cos(this.step) * 200,
      this.width,
      this.height
    );
    grad.addColorStop(0, "#6ec3f4");
    grad.addColorStop(0.5, "#3a3aff");
    grad.addColorStop(1, "#ff61ab");
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);
    requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gradient-canvas");
  if (canvas) new FallbackGradient(canvas);
});
