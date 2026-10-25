import { useRole, type Role } from '../context/RoleContext';

export default function RoleLens() {
  const { currentRole, setCurrentRole } = useRole();
  const roles: { id: Role, label: string }[] = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'genai', label: 'Generative AI & LLMs' },
    { id: 'data-science', label: 'Data Science & Analytics' },
    { id: 'sde-webd', label: 'SDE & Web Development' }
  ];

  return (
    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: 'none' }}>
        <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="12 8 8 12 12 16 16 12 12 8"></polygon>
          </svg>
          <span className="font-mono tracking-wider text-xs">ROLE LENS:</span>
        </div>
        <div className="flex items-center gap-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setCurrentRole(role.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                currentRole === role.id 
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                  : 'bg-white/5 text-gray-500 border border-white/5 hover:bg-white/10 hover:text-gray-300'
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
