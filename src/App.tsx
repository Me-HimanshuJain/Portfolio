import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resumes from './components/Resumes';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Honours from './components/Honours';
import Terminal from './components/Terminal';
import { RoleProvider } from './context/RoleContext';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <RoleProvider>
      <div className="bg-[#0a0a0a] min-h-screen text-gray-200 relative font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Resumes />
          <Projects />
          <Skills />
          <Experience />
          <Honours />
          <Terminal />
        </main>
        <footer className="py-8 text-center border-t border-white/5 text-white/20 text-xs font-mono">
          Designed & built by Himanshu Jain © {new Date().getFullYear()}
        </footer>
      </div>
    </RoleProvider>
  );
}

export default App;
