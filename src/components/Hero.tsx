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
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>

        {/* Left: Text content */}
        <div style={{ flex: 1 }}>
          <h1 className="hero-h1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.25rem', color: 'white' }}>
            Hi! I'm<br />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic' }}>Himanshu</span>
          </h1>
          <p className="hero-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '440px' }}>
            Full Stack Developer & AI Engineer building scalable, intelligent applications that solve real-world problems.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-amber">Contact</a>
            <a href="#about" className="btn-outline">Who I'm</a>
          </div>

          {/* Stats row */}
          <div className="hero-stats" style={{ display: 'flex', gap: '3rem', marginTop: '3.5rem' }}>
            {[
              { number: stats.projects, label: 'Projects' },
              { number: stats.yearsLearning, label: 'Year Learning' },
              { number: stats.technologies, label: 'Technologies' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{number}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="hero-img" style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: '300px', height: '300px', borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.2)',
            boxShadow: '0 0 50px rgba(255,255,255,0.06), inset 0 0 40px rgba(255,255,255,0.03)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 'calc(100% - 6px)', height: 'calc(100% - 6px)', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/avatar.jpg" alt="Himanshu Jain" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>

          {/* Instagram floating badge */}
          <div style={{
            position: 'absolute', top: '8%', right: '-5rem',
            background: 'rgba(30,30,30,0.85)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: '2rem',
            padding: '0.55rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white" opacity="0.6">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'monospace' }}>@Me.Himanshu21</span>
          </div>

          {/* Projects floating badge */}
          <div style={{
            position: 'absolute', bottom: '15%', left: '-3.5rem',
            background: 'rgba(30,30,30,0.85)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.12)', borderRadius: '1rem',
            padding: '0.75rem 1.1rem',
          }}>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', marginBottom: '0.2rem', letterSpacing: '0.08em' }}>PROJECTS</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>{stats.projects}</div>
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
