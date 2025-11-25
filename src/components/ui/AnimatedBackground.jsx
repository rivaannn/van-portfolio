import { useEffect, useRef } from "react";

// Particle class (moved outside component)
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
    this.y = Math.random() * canvas.height;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = -10;
    this.speed = Math.random() * 0.5 + 0.2;
    this.radius = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.y += this.speed;
    if (this.y > this.canvas.height + 10) {
      this.reset();
    }
  }

  draw(ctx, isDark) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${isDark ? "255, 255, 255" : "15, 23, 42"}, ${
      this.opacity
    })`;
    ctx.fill();
  }
}

/**
 * Animated Background Component
 * Creates interactive floating particles/orbs
 * Optimized for performance with requestAnimationFrame
 */
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    let animationFrameId;
    let particles = [];
    let resizeTimeout;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Debounced resize handler
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        createParticles();
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Create particles (reduce to 30 for better performance)
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(30, Math.floor(canvas.width / 25));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
      }
    };
    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx, isDark);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
