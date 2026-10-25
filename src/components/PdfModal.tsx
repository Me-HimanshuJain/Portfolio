export default function PdfModal({ isOpen, onClose, pdfUrl, title }: { isOpen: boolean, onClose: () => void, pdfUrl: string, title: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111] border border-white/10 w-full max-w-4xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1a1a1a]">
          <h3 className="text-white font-bold tracking-tight">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex-1 bg-white/5 relative">
          <iframe 
            src={pdfUrl} 
            className="w-full h-full border-none"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
