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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center', marginBottom: '0' }}>

        {/* Left: Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%', maxWidth: '360px',
            borderRadius: '1rem', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <img src="/avatar.jpg" alt="Himanshu Jain" style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { number: stats.projects, label: 'Projects Built' },
              { number: stats.technologies, label: 'Technologies Used' },
              { number: stats.yearsLearning, label: 'Year of Learning' },
              { number: stats.domains, label: 'Domains Explored' },
            ].map(({ number, label }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{number}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="btn-amber">GitHub Profile</a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
