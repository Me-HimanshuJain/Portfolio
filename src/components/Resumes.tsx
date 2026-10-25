import { useState } from 'react';
import PdfModal from './PdfModal';
import { FileText, Eye, Download } from 'lucide-react';

export default function Resumes() {
  const [modalOpen, setModalOpen] = useState(false);
  const pdfUrl = '/Resumee_Himanshu.pdf';
  const title = "Himanshu Jain - Resume";

  return (
    <section id="resume" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Qualifications</div>
        <h2 className="section-title">Resume</h2>
        <div className="section-underline"></div>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '1rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }} className="md:flex-row md:items-center md:justify-between project-card">
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexDirection: 'column', textAlign: 'center' }} className="md:flex-row md:text-left w-full md:w-auto">
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.75rem',
            padding: '1rem',
            color: 'rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>Full Stack Developer & AI Engineer</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }} className="md:justify-end w-full md:w-auto">
          <button 
            onClick={() => setModalOpen(true)}
            className="btn-outline"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Eye size={18} />
            <span>View</span>
          </button>
          <a 
            href={pdfUrl} 
            download 
            className="btn-amber"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Download size={18} />
            <span>Download</span>
          </a>
        </div>
      </div>
      
      <PdfModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        pdfUrl={pdfUrl} 
        title={title} 
      />
    </section>
  );
}
