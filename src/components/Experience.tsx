import { experience } from '../data/mockData';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Experience</div>
        <h2 className="section-title">Professional Journey</h2>
        <div className="section-underline"></div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginTop: '-2rem' }}>My internships and professional roles.</p>
      </div>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-10">
        {experience.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[6px] top-10 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform"></div>
            
            {/* Experience Card */}
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              className="hover:border-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 text-sm font-mono text-cyan-500/80">
                <span className="text-gray-300 font-semibold">{exp.company}</span>
                <span className="hidden md:inline text-white/20">|</span>
                <span>{exp.duration}</span>
                {exp.location && (
                  <>
                    <span className="hidden md:inline text-white/20">|</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </>
                )}
              </div>
              <ul className="text-gray-400 leading-relaxed text-sm md:text-base list-disc list-outside ml-4 space-y-2">
                {Array.isArray(exp.description) 
                  ? exp.description.map((desc, i) => <li key={i}>{desc}</li>)
                  : <li>{exp.description}</li>}
              </ul>

              {/* Technologies Learnt */}
              {'technologies' in exp && Array.isArray((exp as any).technologies) && (
                <div className="mt-6 pt-5 border-t border-white/[0.07] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-1">
                    Technologies Learnt:
                  </span>
                  {(exp as any).technologies.map((tech: string, tIdx: number) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
