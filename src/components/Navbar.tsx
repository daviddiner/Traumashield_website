import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <img src="/logo.png" alt="TraumaShield Logo" className="h-6 md:h-8 object-contain mix-blend-screen" onError={(e) => {
            // Fallback if logo is missing
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }} />
          <div className="hidden font-display font-bold text-lg tracking-[0.08em] uppercase text-white">
            <div className="pulse-dot inline-block mr-2"></div>
            Trauma<span className="text-[var(--color-cyan)]">Shield</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-9 list-none">
          <li><a href="#problem" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">The Problem</a></li>
          <li><a href="#solution" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Solution</a></li>
          <li><a href="#scientific-validation" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Science</a></li>
          <li><a href="#market" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Traction</a></li>
          <li><a href="#documents" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Documents</a></li>
          <li><a href="#join" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Join Us</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <a href="/one-pager.pdf" target="_blank" rel="noopener noreferrer" className="hidden lg:block text-white/45 text-[13px] font-medium tracking-[0.05em] hover:text-white transition-colors">One Pager</a>
          <a href="mailto:daviddiner1@gmail.com?subject=TraumaShield%20Investor%20Access" className="hidden md:inline-flex font-mono text-[11px] font-medium tracking-[0.15em] uppercase no-underline text-[var(--color-cyan)] border border-[rgba(0,207,255,0.4)] px-5 py-2.5 transition-all relative overflow-hidden group hover:text-black">
            <span className="absolute inset-0 bg-[var(--color-cyan)] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Request Access</span>
          </a>
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-8 list-none mb-12">
            <li><a href="#problem" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">The Problem</a></li>
            <li><a href="#solution" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Solution</a></li>
            <li><a href="#scientific-validation" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Science</a></li>
            <li><a href="#market" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Traction</a></li>
            <li><a href="#documents" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Documents</a></li>
            <li><a href="#join" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Join Us</a></li>
          </ul>
          
          <div className="mt-auto flex flex-col gap-4">
            <a href="/one-pager.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="w-full text-center border border-white/20 text-white font-display text-[13px] font-semibold tracking-[0.1em] uppercase py-4 transition-all hover:bg-white/5">
              One Pager
            </a>
            <a href="mailto:daviddiner1@gmail.com?subject=TraumaShield%20Investor%20Access" onClick={closeMenu} className="w-full text-center bg-[var(--color-cyan)] text-black font-display text-[13px] font-bold tracking-[0.1em] uppercase py-4 transition-all hover:bg-white">
              Request Access
            </a>
          </div>
        </div>
      )}

      {/* Ticker */}
      <div className="fixed top-[70px] left-0 right-0 z-40 bg-white/5 border-b border-white/5 py-2 overflow-hidden backdrop-blur-sm">
        <div className="inline-block whitespace-nowrap animate-ticker font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
          <span className="mx-8">FDA-APPROVED AGENT</span><span>·</span>
          <span className="mx-8">NOVEL SECOND MEDICAL USE</span><span>·</span>
          <span className="mx-8">POST-TRAUMA INTERVENTION</span><span>·</span>
          <span className="mx-8">FEAR-MEMORY CONSOLIDATION BLOCKER</span><span>·</span>
          <span className="mx-8">CRITICAL WINDOW DEPLOYMENT</span><span>·</span>
          <span className="mx-8">PTSD PREVENTION</span><span>·</span>
          <span className="mx-8">MEDICAL DEVICE + PHARMA CONVERGENCE</span><span>·</span>
          <span className="mx-8">IP PROTECTED</span><span>·</span>
          <span className="mx-8">505(b)(2) PATHWAY</span><span>·</span>
          <span className="mx-8">FDA-APPROVED AGENT</span><span>·</span>
          <span className="mx-8">NOVEL SECOND MEDICAL USE</span><span>·</span>
          <span className="mx-8">POST-TRAUMA INTERVENTION</span><span>·</span>
          <span className="mx-8">FEAR-MEMORY CONSOLIDATION BLOCKER</span><span>·</span>
          <span className="mx-8">CRITICAL WINDOW DEPLOYMENT</span><span>·</span>
          <span className="mx-8">PTSD PREVENTION</span><span>·</span>
          <span className="mx-8">MEDICAL DEVICE + PHARMA CONVERGENCE</span><span>·</span>
          <span className="mx-8">IP PROTECTED</span><span>·</span>
          <span className="mx-8">505(b)(2) PATHWAY</span><span>·</span>
        </div>
      </div>
    </>
  );
}
