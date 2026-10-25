import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Track command history for up/down arrows
    setCommandHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const parts = trimmed.split(/\s+/);
    const mainCmd = parts[0].toLowerCase();

    let output: React.ReactNode = '';

    if (mainCmd === 'help') {
      output = (
        <div className="space-y-1.5 text-sm">
          <div className="text-gray-300 font-semibold mb-2">Available Directives:</div>
          <div>
            <span className="text-cyan-400 font-semibold">resume</span>
            <span className="text-gray-400"> - Open PDF résumé</span>
          </div>
          <div>
            <span className="text-cyan-400 font-semibold">projects</span>
            <span className="text-gray-400"> - List top engineered systems</span>
          </div>
          <div>
            <span className="text-cyan-400 font-semibold">skills</span>
            <span className="text-gray-400"> - Show core technical arsenal</span>
          </div>
          <div>
            <span className="text-cyan-400 font-semibold">contact</span>
            <span className="text-gray-400"> - Display verified contact channels</span>
          </div>
          <div>
            <span className="text-cyan-400 font-semibold">clean</span>
            <span className="text-gray-400"> - Clean terminal window</span>
          </div>
        </div>
      );
    } else if (mainCmd === 'resume') {
      output = (
        <div className="text-sm">
          <a
            href="/Resumee_Himanshu.pdf"
            download="Resumee_Himanshu.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 underline decoration-cyan-400/40 hover:decoration-cyan-400 font-medium transition-colors"
          >
            Resumee_Himanshu.pdf
          </a>
        </div>
      );
    } else if (mainCmd === 'skills') {
      output = (
        <div className="text-sm leading-relaxed">
          <span className="text-gray-300 font-semibold">Core Arsenal: </span>
          <span className="text-gray-400">
            Python, TypeScript, React.js, Next.js, FastAPI, Node.js, Express.js, PyTorch, TensorFlow, YOLOv8, OpenCV, MediaPipe, PostgreSQL, PostGIS, MongoDB, MySQL, Redis, Docker, Git.
          </span>
        </div>
      );
    } else if (mainCmd === 'projects') {
      const projectList = [
        {
          num: '01',
          title: 'HJAI Assistant Platform',
          metrics: 'Local LLMs via Ollama · Whisper Audio Transcription · PyQt6 Copilot'
        },
        {
          num: '02',
          title: 'Face Attendance System',
          metrics: 'DeepFace Recognition · ONNX Anti-Spoofing Model · 99.86% Accuracy'
        },
        {
          num: '03',
          title: 'HireBlind – Blind Recruitment Platform',
          metrics: 'EU AI Act Compliant · Automated PII Scrubbing · Explainability Tags'
        },
        {
          num: '04',
          title: 'Specs_Blind – Assistive Wearable Goggles',
          metrics: 'YOLOv8 Edge Vision · 7-State Kalman Tracking · 4-Tier Audio Feedback'
        },
        {
          num: '05',
          title: 'SafeNet AI – Campus Threat Perception',
          metrics: 'MediaPipe Pose Analysis · Acoustic Spike Tracking · Sub-Second Dispatch'
        },
        {
          num: '06',
          title: 'Shramik-Setu (Shram_App)',
          metrics: 'Verifiable QR Digital ID · Fair 5%-8% Commission · Multilingual Voice AI'
        },
        {
          num: '07',
          title: 'BackRoute Bharat – Impact Backhaul Network',
          metrics: 'ImpactMatch™ Corridor Vectoring · <=20km Detour · CO2 Avoidance'
        },
        {
          num: '08',
          title: 'Digital Heroes – Golf & Charity Draw',
          metrics: 'Next.js 14 · Three.js 3D WebGL · Stripe Automated Subscriptions · Supabase'
        },
        {
          num: '09',
          title: 'AmazonHelp Intent System (Hiver)',
          metrics: 'NVIDIA NIM Nemotron-3 Super · FAISS 8k Threads · 4.41/5.0 LLM Judge'
        },
        {
          num: '10',
          title: 'AI Resume Analyzer & ATS Checker',
          metrics: 'Dual TF-IDF & SentenceTransformers · pgvector Embeddings · 0-100 Score'
        },
        {
          num: '11',
          title: 'AI Healthcare Platform & Telehealth',
          metrics: 'Logistic Regression Risk Prediction · Jitsi Teleconsultation · Clinician Alerts'
        },
        {
          num: '12',
          title: 'WanderLust – Travel & Tourism Portal',
          metrics: 'Bootstrap 5 Responsive UI · Relational Booking Engine · PHP & MySQL'
        },
        {
          num: '13',
          title: 'BlindAssistApp – Smart Goggle Android App',
          metrics: 'Camera2 USB-OTG · Edge TFLite Inference · Android TextToSpeech'
        }
      ];

      output = (
        <div className="space-y-3 text-sm">
          <div className="text-gray-300 font-semibold">Top Projects ({projectList.length} Total):</div>
          <div className="space-y-2">
            {projectList.map((p) => (
              <div key={p.num} className="leading-relaxed">
                <span className="text-gray-400 font-mono">[{p.num}] </span>
                <span className="text-white font-medium">{p.title} </span>
                <span className="text-gray-400">({p.metrics})</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (mainCmd === 'contact') {
      output = (
        <div className="space-y-2 text-sm leading-relaxed">
          <div className="text-gray-300 font-semibold mb-1">Verified Contact Channels:</div>
          <div className="space-y-1">
            <div>
              <span className="text-gray-400">Email: </span>
              <a href="mailto:himanshu440alw@gmail.com" className="text-cyan-400 hover:underline">himanshu440alw@gmail.com</a>
            </div>
            <div>
              <span className="text-gray-400">Phone: </span>
              <a href="tel:+917240760741" className="text-cyan-400 hover:underline">+91 7240760741</a>
            </div>
            <div>
              <span className="text-gray-400">LinkedIn: </span>
              <a href="https://linkedin.com/in/himanshu-jain-0b1334346" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                linkedin.com/in/himanshu-jain-0b1334346
              </a>
            </div>
            <div>
              <span className="text-gray-400">GitHub: </span>
              <a href="https://github.com/Me-HimanshuJain" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                github.com/Me-HimanshuJain
              </a>
            </div>
          </div>
        </div>
      );
    } else if (mainCmd === 'clean' || mainCmd === 'clear') {
      setHistory([]);
      return;
    } else {
      output = (
        <span className="text-sm text-red-400">
          Command not recognized: <span className="text-white">"{trimmed}"</span>. Type <span className="text-cyan-400 font-semibold">help</span> for available directives.
        </span>
      );
    }

    setHistory(prev => [...prev, { command: trimmed, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIndex = historyIndex - 1;
        setHistoryIndex(prevIndex);
        setInput(commandHistory[prevIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="contact" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        
        {/* Left Column: Contact details */}
        <div>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Get In Touch
            </div>
            <h2 className="section-title">Let's Build Something</h2>
            <div className="section-underline" style={{ marginBottom: '1.75rem' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.7 }}>
              Open to AI engineering roles, data science positions, SDE opportunities, and collaborative tech projects. Reach out directly through any channel below.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Contact Links */}
            {[
              { label: 'EMAIL', value: 'himanshu440alw@gmail.com', href: 'mailto:himanshu440alw@gmail.com' },
              { label: 'PHONE', value: '+91 7240760741', href: 'tel:+917240760741' },
              { label: 'CONNECT', value: 'linkedin.com/in/himanshu-jain-0b1334346', href: 'https://linkedin.com/in/himanshu-jain-0b1334346' },
              { label: 'CODE', value: 'github.com/Me-HimanshuJain', href: 'https://github.com/Me-HimanshuJain' }
            ].map((item, i) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={i} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.25rem 0', 
                borderBottom: '1px solid rgba(255,255,255,0.06)', 
                textDecoration: 'none',
                transition: 'border-color 0.3s ease'
              }} className="hover:border-cyan-500/30 group">
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500 }} className="group-hover:text-white transition-colors">{item.value}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 600, letterSpacing: '0.1em' }} className="group-hover:text-cyan-400 transition-colors">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Terminal */}
        <div className="bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/5">
            <div className="text-gray-400 text-xs font-semibold tracking-wider font-mono">himanshu@terminal:~$</div>
            <div className="text-gray-500 text-xs font-mono">Interactive Shell</div>
          </div>
          
          {/* Terminal Body */}
          <div 
            ref={terminalBodyRef}
            onClick={() => inputRef.current?.focus()}
            className="p-6 min-h-[420px] max-h-[520px] overflow-y-auto cursor-text terminal-scrollbar" 
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: '#22d3ee transparent' 
            }}
          >
            <div className="text-cyan-400 font-bold mb-2">Himanshu Interactive Shell [v2.9]</div>
            <div className="text-[#888] mb-6">Type <span className="text-cyan-400 font-semibold">help</span> to explore available commands.</div>
            
            {history.map((item, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex items-center gap-2.5 text-white mb-2">
                  <span className="text-cyan-400 font-bold">{'>'}</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                {item.output && (
                  <div className="ml-5">
                    {item.output}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center gap-2.5 text-white mt-3">
              <span className="text-cyan-400 font-bold">{'>'}</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'resume', 'skills', 'projects'..."
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0 placeholder-gray-600 text-sm font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
