import React from 'react';

/**
 * CinematicSunLogo
 * A bespoke cinematic sun logo featuring:
 * - Multi-layer animated solar rays with chromatic golden-amber flares
 * - Inner sun core with refractive glow & kinetic corona pulses
 * - Golden ratio geometric juice droplets fusing into the sun
 * - Premium metallic & glassmorphic depth
 */
export const CinematicSunLogo = ({ size = 48, className = '' }) => {
  return (
    <div
      className={`cinematic-sun-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        filter: 'drop-shadow(0 4px 16px rgba(255, 107, 0, 0.45)) drop-shadow(0 0 24px rgba(255, 184, 0, 0.3))',
        cursor: 'pointer'
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible'
        }}
      >
        <defs>
          {/* Radial Core Glow Gradient */}
          <radialGradient id="sunCore" cx="40%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="35%" stopColor="#FFC837" />
            <stop offset="70%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#E63900" />
          </radialGradient>

          {/* Corona Radiant Aura */}
          <radialGradient id="coronaAura" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#FF8800" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#FFAA00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
          </radialGradient>

          {/* Golden Ray Beams Gradient */}
          <linearGradient id="rayGolden" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="50%" stopColor="#FF9E00" />
            <stop offset="100%" stopColor="#FF4500" />
          </linearGradient>

          {/* Secondary Ray Amber Flare */}
          <linearGradient id="rayAmber" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4E00" />
            <stop offset="50%" stopColor="#FFA200" />
            <stop offset="100%" stopColor="#FFE066" />
          </linearGradient>

          {/* Juice Droplet Glaze */}
          <linearGradient id="dropletGlaze" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFD000" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF6200" stopOpacity="0.9" />
          </linearGradient>

          {/* Holographic Specular Highlight */}
          <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Filter for Sun Glow Diffusion */}
          <filter id="sunBloom" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Pulsing Corona Background Ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#coronaAura)"
          className="cinematic-sun-corona"
        />

        {/* Rotating Outer Geometric Cinematic Rays */}
        <g className="cinematic-sun-rays" style={{ transformOrigin: '50px 50px' }}>
          {/* 12 Sculpted Tapered Sun Blades */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => (
            <path
              key={`blade-${idx}`}
              d="M 50 4 Q 52.8 22 50 28 Q 47.2 22 50 4 Z"
              fill={idx % 2 === 0 ? 'url(#rayGolden)' : 'url(#rayAmber)'}
              transform={`rotate(${angle} 50 50)`}
              opacity={idx % 2 === 0 ? 0.95 : 0.8}
            />
          ))}

          {/* 12 Kinetic Diamond Spark Flares between blades */}
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, idx) => (
            <polygon
              key={`flare-${idx}`}
              points="50,15 51.5,23 50,25 48.5,23"
              fill="#FFEAA7"
              transform={`rotate(${angle} 50 50)`}
              opacity="0.85"
            />
          ))}
        </g>

        {/* Inner Counter-Rotating Orbiting Prismatic Ring */}
        <circle
          cx="50"
          cy="50"
          r="26.5"
          stroke="url(#rayGolden)"
          strokeWidth="1.2"
          strokeDasharray="3 3.5"
          fill="none"
          opacity="0.6"
          className="cinematic-sun-orbit"
          style={{ transformOrigin: '50px 50px' }}
        />

        {/* Main Volumetric Sun Sphere with Ambient Shadow */}
        <circle
          cx="50"
          cy="50"
          r="23"
          fill="url(#sunCore)"
          filter="url(#sunBloom)"
        />

        {/* Organic Cold-Pressed Vitality Droplet Crest fused in the sun core */}
        <path
          d="M 50 32 C 55 40 58 45 58 50 C 58 55.5 54.4 59 50 59 C 45.6 59 42 55.5 42 50 C 42 45 45 40 50 32 Z"
          fill="url(#dropletGlaze)"
          opacity="0.35"
        />

        {/* Cinematic Glint Lens Flare Arc (Gloss Specular Highlight) */}
        <path
          d="M 33 42 A 18 18 0 0 1 54 31"
          stroke="url(#specularGlint)"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* High-frequency Micro Gleam Dot */}
        <circle cx="39" cy="36" r="1.8" fill="#FFFFFF" opacity="0.95" />
        <circle cx="59" cy="58" r="1.2" fill="#FFF2A3" opacity="0.75" />
      </svg>
    </div>
  );
};

export default CinematicSunLogo;
