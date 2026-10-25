import { competitions, certifications } from '../data/mockData';

export default function Honours() {
  return (
    <section id="honours" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Honours &amp; Certifications
        </div>
        <h2 className="section-title">Competitions &amp; Credentials</h2>
        <div className="section-underline"></div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginTop: '-2rem' }}>
          Recognitions, hackathons, and verified technical certifications.
        </p>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Competitive Honors */}
        <div className="bg-white/[0.015] border border-white/[0.07] rounded-2xl p-4 sm:p-6 backdrop-blur-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5 font-mono text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              Competitive Honors
            </div>

            <div className="space-y-3">
              {competitions.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3.5 md:p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-200 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                >
                  {/* Award Badge (Left) */}
                  <div className="w-full sm:w-44 shrink-0 flex items-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 tracking-wide group-hover:border-cyan-500/50 group-hover:bg-cyan-500/15 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                      {item.award}
                    </span>
                  </div>

                  {/* Competition Title (Right) */}
                  <div className="flex-1 min-w-0">
                    {item.title.includes('·') ? (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.title.split('·').map((part, pIdx) => (
                          <span 
                            key={pIdx} 
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-gray-200 group-hover:text-white group-hover:border-white/20 transition-all"
                          >
                            {part.trim()}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-sm md:text-[0.95rem] font-semibold text-gray-200 group-hover:text-white transition-colors leading-relaxed">
                        {item.title}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Verified Certifications */}
        <div className="bg-white/[0.015] border border-white/[0.07] rounded-2xl p-4 sm:p-6 backdrop-blur-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5 font-mono text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              Verified Certifications
            </div>

            <div className="flex flex-wrap gap-2.5 items-center">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 hover:-translate-y-0.5"
                  title={`View verified certificate: ${cert.issuer} - ${cert.name}`}
                >
                  <span className="font-mono text-[11px] md:text-xs uppercase tracking-wider text-gray-200 group-hover:text-cyan-300 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-white/20 font-mono text-xs">·</span>
                  <span className="font-mono text-[11px] md:text-xs uppercase tracking-wider text-gray-400 group-hover:text-gray-100 font-medium">
                    {cert.name}
                  </span>
                  <svg
                    className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* GitHub Repo Link Badge */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>Repository</span>
            <a
              href="https://github.com/Me-HimanshuJain/Certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors group"
            >
              <span>Me-HimanshuJain/Certificates</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
