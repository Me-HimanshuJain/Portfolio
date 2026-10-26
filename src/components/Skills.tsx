export default function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Tech Stack</div>
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="section-underline"></div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginTop: '-2rem' }}>Tools, frameworks, and technologies I work with.</p>
      </div>

      {/* Tech Stack Marquee */}
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '0.5rem', padding: '3.25rem 0 1.5rem 0' }}>
        <div className="marquee-track" style={{ gap: '4rem' }}>
          {[1, 2].map((group) => (
            <div key={group} style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
              {[
                { icon: 'devicon-python-plain', name: 'Python' },
                { icon: 'devicon-cplusplus-plain', name: 'C++' },
                { icon: 'devicon-typescript-plain', name: 'TypeScript' },
                { icon: 'devicon-javascript-plain', name: 'JavaScript' },
                { icon: 'devicon-react-original', name: 'React.js' },
                { icon: 'devicon-nextjs-plain', name: 'Next.js' },
                { icon: 'devicon-nodejs-plain', name: 'Node.js' },
                { icon: 'devicon-express-original', name: 'Express.js' },
                { icon: 'devicon-fastapi-plain', name: 'FastAPI' },
                { icon: 'devicon-kotlin-plain', name: 'Kotlin' },
                { icon: 'devicon-android-plain', name: 'Android' },
                { icon: 'devicon-php-plain', name: 'PHP' },
                { icon: 'devicon-threejs-original', name: 'Three.js' },
                { icon: 'devicon-html5-plain', name: 'HTML5' },
                { icon: 'devicon-css3-plain', name: 'CSS3' },
                { icon: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
                { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },
                { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
                { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
                { icon: 'devicon-mysql-plain', name: 'MySQL' },
                { icon: 'devicon-sqlite-plain', name: 'SQLite' },
                { icon: 'devicon-redis-plain', name: 'Redis' },
                { icon: 'devicon-docker-plain', name: 'Docker' },
                { icon: 'devicon-git-plain', name: 'Git' },
                { icon: 'devicon-github-original', name: 'GitHub' },
                { icon: 'devicon-pytorch-original', name: 'PyTorch' },
                { icon: 'devicon-tensorflow-original', name: 'TensorFlow' },
                { icon: 'devicon-scikitlearn-plain', name: 'Scikit-learn' },
                { icon: 'devicon-pandas-plain', name: 'Pandas' },
                { icon: 'devicon-numpy-plain', name: 'NumPy' },
                { icon: 'devicon-opencv-plain', name: 'OpenCV' },
                { icon: 'devicon-vscode-plain', name: 'VS Code' },
                { icon: 'devicon-jupyter-plain', name: 'Jupyter' }
              ].map((tech, i) => (
                <div key={`${group}-${i}`} className="skill-icon-wrap" title={tech.name}>
                  <div className="skill-icon">
                    <i className={`${tech.icon} colored`}></i>
                  </div>
                  <div className="skill-tooltip">{tech.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
