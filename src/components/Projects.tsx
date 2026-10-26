import React from 'react';
import { projects } from '../data/mockData';
import { useRole, type Role } from '../context/RoleContext';

const Projects: React.FC = () => {
  const { currentRole, setCurrentRole } = useRole();

  const roles: { id: Role; label: string }[] = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'genai', label: 'Generative AI & LLMs' },
    { id: 'data-science', label: 'Data Science & Analytics' },
    { id: 'sde-webd', label: 'SDE & Web Dev' }
  ];

  const filteredProjects = currentRole === 'all' 
    ? projects 
    : projects.filter(p => p.roles.includes(currentRole));

  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            What I've built
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <div className="section-underline"></div>
            </div>
            {/* Badge — desktop only (right side of header row) */}
            <div className="hidden sm:flex font-mono text-xs text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-3.5 py-1.5 rounded-full mb-6 self-auto items-center">
              Showing {filteredProjects.length} of {projects.length} systems
            </div>
          </div>
          {/* Badge — mobile only (below heading, above paragraph) */}
          <div className="sm:hidden inline-block font-mono text-xs text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-3.5 py-1.5 rounded-full mt-2 mb-3">
            Showing {filteredProjects.length} of {projects.length} systems
          </div>
          <p className="sm:-mt-6" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginBottom: '2rem' }}>
            Engineered systems, autonomous AI applications, and full-stack platforms built from the ground up.
          </p>

          {/* Interactive Role Filtering Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setCurrentRole(role.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  currentRole === role.id 
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                    : 'bg-white/[0.03] text-gray-400 border border-white/10 hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Single Column Stack of Cards matching reference */}
        <div className="flex flex-col gap-10 md:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#08080a] border border-white/10 rounded-2xl p-6 sm:p-10 md:p-12 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.09)] relative group"
            >
              {/* Top Meta Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="font-mono text-xs text-gray-500 tracking-widest uppercase">
                  {project.affiliation}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase mb-4 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Metric Badge */}
              {project.metric && (
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold mb-6 shadow-sm">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{project.metric}</span>
                </div>
              )}

              {/* Summary Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed md:leading-8 mb-7 font-normal">
                {project.summary}
              </p>

              {/* Bullets with enhanced line spacing */}
              <ul className="space-y-4 mb-8 text-sm md:text-[0.95rem] text-gray-300/90 font-normal">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3.5 leading-relaxed md:leading-7">
                    <span className="text-cyan-400/70 text-lg leading-none mt-1 select-none flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Row: Tech Tags */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-cyan-950/20 border border-cyan-500/25 text-cyan-400 rounded-md text-[0.72rem] font-mono uppercase tracking-wider transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-950/35 hover:text-cyan-300 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-500 font-mono text-sm">
              No projects found for the selected role lens. Switch to "All Disciplines" to view all systems.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

