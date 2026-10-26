import React from 'react';
import { personalInfo, stats } from '../data/mockData';

const About: React.FC = () => {

  return (
    <section id="about" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Get to know me</div>
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-center mb-0">

        {/* Left: Image */}
        <div className="relative max-w-[320px] sm:max-w-[360px] mx-auto md:mx-0 w-full">
          <div style={{
            width: '100%',
            borderRadius: '1rem', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <img src={`${import.meta.env.BASE_URL}portfolio_img.png`} alt="Himanshu Jain" style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>
          {/* Corner accent — white */}
          <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '5rem', height: '5rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.5rem', zIndex: -1 }}></div>
        </div>

        {/* Right: Bio */}
        <div>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: '2rem' }}>
            {personalInfo.fullBio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            {[
              { number: stats.projects, label: 'Projects Built' },
              { number: stats.technologies, label: 'Technologies Used' },
              { number: stats.yearsLearning, label: 'Years of Learning' },
              { number: stats.domains, label: 'Domains Explored' },
            ].map(({ number, label }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{number}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="btn-amber">GitHub Profile</a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
