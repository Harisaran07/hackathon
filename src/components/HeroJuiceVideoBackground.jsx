import React, { useEffect, useRef } from 'react';

/**
 * HeroJuiceVideoBackground
 * 
 * Cinematic juice-inspired animated video background exclusively for the Home hero section.
 * Features:
 * - Floating citrus pulp particles & vesicles
 * - Glowing volumetric golden sunlight rays
 * - Rising sparkling juice micro-bubbles
 * - Gentle citrus liquid caustics and splash droplets
 * - Automatic pause when scrolled out of view (IntersectionObserver)
 * - Full cleanup on unmount
 * - Respects prefers-reduced-motion
 * - Non-blocking pointer-events: none
 */
export const HeroJuiceVideoBackground = ({ containerRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId = null;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Pause animation when scrolled away from Home Hero
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );

    const targetElement = containerRef?.current || canvas.parentElement;
    if (targetElement) {
      observer.observe(targetElement);
    }

    // --- Particle Systems ---

    // 1. Rising Juice Micro-Bubbles
    const bubbleCount = width < 768 ? 24 : 45;
    const bubbles = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * width,
      y: height + Math.random() * 200,
      radius: Math.random() * 3.5 + 1.2,
      speedY: Math.random() * 0.9 + 0.4,
      wobbleSpeed: Math.random() * 0.03 + 0.015,
      wobbleAmp: Math.random() * 25 + 10,
      wobbleOffset: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.45 + 0.2,
      goldTint: Math.random() > 0.4
    }));

    // 2. Suspended Citrus Pulp Vesicles / Floating Orange Particles
    const pulpCount = width < 768 ? 16 : 28;
    const pulps = Array.from({ length: pulpCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      rx: Math.random() * 4.5 + 2.5,
      ry: Math.random() * 2.2 + 1.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.4 - 0.15,
      alpha: Math.random() * 0.35 + 0.15,
      hue: Math.random() > 0.5 ? '#FF8C00' : '#FFA500'
    }));

    // 3. Volumetric Sunlight Rays / Beams
    const rays = [
      { angle: 0.32, width: 0.22, alpha: 0.14, speed: 0.0006 },
      { angle: 0.48, width: 0.30, alpha: 0.18, speed: -0.0008 },
      { angle: 0.65, width: 0.24, alpha: 0.12, speed: 0.0005 },
      { angle: 0.82, width: 0.35, alpha: 0.16, speed: -0.0006 }
    ];

    // 4. Subtle Ambient Splash Droplets
    const droplets = Array.from({ length: 12 }, () => ({
      x: width * 0.6 + (Math.random() - 0.5) * (width * 0.35),
      y: height * 0.45 + (Math.random() - 0.5) * (height * 0.3),
      radius: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.4) * 0.8,
      vy: (Math.random() - 0.7) * 1.2,
      life: Math.random() * 100,
      maxLife: 90 + Math.random() * 60,
      alpha: Math.random() * 0.5 + 0.2
    }));

    let time = 0;

    const render = () => {
      if (!isVisible || prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // --- A. Base Warm Golden Liquid Ambient Gradient ---
      const bgGrad = ctx.createRadialGradient(
        width * 0.75, height * 0.2, 50,
        width * 0.6, height * 0.5, Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, 'rgba(255, 215, 0, 0.25)'); // Bright golden core
      bgGrad.addColorStop(0.35, 'rgba(255, 140, 0, 0.14)'); // Sweet citrus orange
      bgGrad.addColorStop(0.7, 'rgba(255, 184, 0, 0.06)'); // Warm amber
      bgGrad.addColorStop(1, 'rgba(250, 247, 242, 0)'); // Seamless blend to page background
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // --- B. Volumetric Sun Rays (Golden Light Beams) ---
      const sunOriginX = width * 0.78;
      const sunOriginY = -40;

      ctx.save();
      rays.forEach((ray, i) => {
        const curAngle = ray.angle + Math.sin(time * 0.8 + i) * 0.04;
        const beamLength = Math.max(width, height) * 1.5;

        const p1x = sunOriginX + Math.cos(curAngle - ray.width) * beamLength;
        const p1y = sunOriginY + Math.sin(curAngle - ray.width) * beamLength;
        const p2x = sunOriginX + Math.cos(curAngle + ray.width) * beamLength;
        const p2y = sunOriginY + Math.sin(curAngle + ray.width) * beamLength;

        const rayGrad = ctx.createRadialGradient(
          sunOriginX, sunOriginY, 30,
          (p1x + p2x) / 2, (p1y + p2y) / 2, beamLength * 0.8
        );
        const dynamicAlpha = ray.alpha * (0.8 + Math.sin(time * 1.2 + i * 1.5) * 0.25);
        rayGrad.addColorStop(0, `rgba(255, 235, 160, ${dynamicAlpha})`);
        rayGrad.addColorStop(0.5, `rgba(255, 180, 50, ${dynamicAlpha * 0.6})`);
        rayGrad.addColorStop(1, 'rgba(255, 160, 20, 0)');

        ctx.beginPath();
        ctx.moveTo(sunOriginX, sunOriginY);
        ctx.lineTo(p1x, p1y);
        ctx.lineTo(p2x, p2y);
        ctx.closePath();
        ctx.fillStyle = rayGrad;
        ctx.fill();
      });
      ctx.restore();

      // --- C. Liquid Caustic Waves Shimmer ---
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let c = 0; c < 3; c++) {
        const waveY = height * (0.25 + c * 0.28);
        ctx.beginPath();
        ctx.moveTo(0, waveY);
        for (let x = 0; x <= width; x += 40) {
          const dy = Math.sin(x * 0.005 + time * 1.2 + c * 2) * 18 +
                     Math.cos(x * 0.009 - time * 0.8) * 12;
          ctx.lineTo(x, waveY + dy);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 200, 70, ${0.03 + Math.sin(time + c) * 0.015})`;
        ctx.fill();
      }
      ctx.restore();

      // --- D. Floating Citrus Pulp Particles ---
      ctx.save();
      pulps.forEach((p) => {
        p.x += p.speedX + Math.sin(time * 0.5 + p.y * 0.01) * 0.2;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        // Wrap edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Pulp oval with soft glow
        ctx.beginPath();
        ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.globalAlpha = p.alpha * (0.85 + Math.sin(time * 1.5 + p.x) * 0.15);
        ctx.shadowColor = 'rgba(255, 140, 0, 0.4)';
        ctx.shadowBlur = 6;
        ctx.fill();

        // Delicate inner core
        ctx.beginPath();
        ctx.ellipse(0, 0, p.rx * 0.5, p.ry * 0.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE57F';
        ctx.globalAlpha = p.alpha * 0.8;
        ctx.fill();

        ctx.restore();
      });
      ctx.restore();

      // --- E. Rising Sparkling Juice Micro-Bubbles ---
      ctx.save();
      bubbles.forEach((b) => {
        b.y -= b.speedY;
        const currentX = b.x + Math.sin(time * 1.5 + b.wobbleOffset) * b.wobbleAmp;

        if (b.y < -30) {
          b.y = height + Math.random() * 60;
          b.x = Math.random() * width;
        }

        // Draw translucent bubble
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.goldTint
          ? `rgba(255, 215, 64, ${b.alpha * 0.6})`
          : `rgba(255, 255, 255, ${b.alpha * 0.5})`;
        ctx.fill();

        // Bubble perimeter ring
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 240, 180, ${b.alpha * 0.8})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();

        // Specular highlight gleam on top-right of bubble
        ctx.beginPath();
        ctx.arc(currentX + b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.28, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.95})`;
        ctx.fill();
      });
      ctx.restore();

      // --- F. Subtle Citrus Splash Droplets ---
      ctx.save();
      droplets.forEach((d) => {
        d.life += 1;
        d.x += d.vx;
        d.y += d.vy;
        d.vy += 0.02; // soft gravity

        if (d.life > d.maxLife) {
          d.life = 0;
          d.x = width * 0.62 + (Math.random() - 0.5) * (width * 0.3);
          d.y = height * 0.42 + (Math.random() - 0.5) * (height * 0.25);
          d.vx = (Math.random() - 0.5) * 0.7;
          d.vy = -Math.random() * 1.1 - 0.4;
        }

        const lifeRatio = 1 - d.life / d.maxLife;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius * lifeRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 50, ${d.alpha * lifeRatio})`;
        ctx.shadowColor = 'rgba(255, 140, 0, 0.5)';
        ctx.shadowBlur = 4;
        ctx.fill();
      });
      ctx.restore();

      // --- G. Sunlight Ray Flare Star in Top Right ---
      ctx.save();
      const flareX = sunOriginX;
      const flareY = 30;
      const flareGrad = ctx.createRadialGradient(flareX, flareY, 0, flareX, flareY, 180);
      flareGrad.addColorStop(0, 'rgba(255, 255, 240, 0.45)');
      flareGrad.addColorStop(0.3, 'rgba(255, 215, 64, 0.22)');
      flareGrad.addColorStop(0.7, 'rgba(255, 140, 0, 0.08)');
      flareGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = flareGrad;
      ctx.beginPath();
      ctx.arc(flareX, flareY, 180, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup resources on unmount
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [containerRef]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1, // Behind existing hero content (z-index: 10)
        borderRadius: 'inherit'
      }}
      aria-hidden="true"
    >
      {/* Real Cinematic Juice Extraction & Splash Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.28,
          filter: 'saturate(1.3) brightness(1.05) contrast(1.05)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none'
        }}
      >
        <source src="/videos/hero-juice-video.webm" type="video/webm" />
        <source src="/videos/juice-splash-video.webm" type="video/webm" />
      </video>

      {/* Interactive Micro-Bubbles & Sunbeam Particle Canvas Overlay */}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Readability & Warm Ambient Golden Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(250, 247, 242, 0.72) 0%, rgba(250, 247, 242, 0.45) 50%, rgba(255, 184, 0, 0.15) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};
