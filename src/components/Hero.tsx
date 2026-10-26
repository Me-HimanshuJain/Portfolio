import React from 'react';
import { stats } from '../data/mockData';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '5rem' }}>

      {/* Big background ghost text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(5rem, 16vw, 13rem)',
        fontWeight: 900, letterSpacing: '-0.04em',
        color: 'rgba(255,255,255,0.05)',
        userSelect: 'none', whiteSpace: 'nowrap',
        pointerEvents: 'none', zIndex: 0,
        fontFamily: 'Inter, sans-serif',
      }}>Hi! I'm Himanshu</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-[1200px] w-full px-6 lg:px-8">

        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="hero-h1 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-5 text-white">
            Hi! I'm<br />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic' }}>Himanshu</span>
          </h1>
          <p className="hero-sub text-base text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Full Stack Developer &amp; AI Engineer building scalable, intelligent applications that solve real-world problems.
          </p>

          <div className="hero-btns flex gap-4 flex-wrap justify-center lg:justify-start">
            <a href="#contact" className="btn-amber">Contact Me</a>
            <a href="#about" className="btn-outline">About Me</a>
          </div>

          {/* Stats row */}
          <div className="hero-stats flex gap-8 sm:gap-12 justify-center lg:justify-start mt-12 pt-4 border-t border-white/5">
            {[
              { number: stats.projects, label: 'Projects' },
              { number: stats.yearsLearning, label: 'Years of Learning' },
              { number: stats.technologies, label: 'Technologies' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{number}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', letterSpacing: '0.05em', marginTop: '0.35rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="hero-img relative flex-shrink-0 my-4 lg:my-0">
          <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.08)] flex items-center justify-center p-1 bg-white/[0.02]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="/portfolio_img.png" alt="Himanshu Jain" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>

          {/* Instagram floating badge */}
          <div className="absolute top-[6%] -right-2 sm:-right-6 lg:-right-12 bg-[#1a1a1e]/90 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-2 flex items-center gap-2 shadow-xl">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white" opacity="0.75">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', fontFamily: 'monospace' }}>@Me.Himanshu21</span>
          </div>

          {/* Projects floating badge */}
          <div className="absolute bottom-[10%] -left-2 sm:-left-6 lg:-left-10 bg-[#1a1a1e]/90 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-2.5 shadow-xl">
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginBottom: '0.15rem', letterSpacing: '0.08em' }}>PROJECTS</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>{stats.projects}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — static neon glow on characters */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <div className="scroll-line"></div>
        <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#00fff7', letterSpacing: '0.15em', textShadow: '0 0 6px #00fff7, 0 0 14px #00fff7' }}>SCROLL</div>
      </div>
    </section>
  );
};

export default Hero;
