import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

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
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }} />
          <div className="hidden font-display font-bold text-lg tracking-[0.08em] uppercase text-white">
            <div className="pulse-dot inline-block mr-2"></div>
            Trauma<span className="text-[var(--color-cyan)]">Shield</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-9 list-none">
          <li><a href="#problem" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">The Problem</a></li>
          <li><a href="#solution" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Solution</a></li>
          <li><a href="#science" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Science</a></li>
          <li><a href="#traction" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Traction</a></li>
          <li><a href="#team" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Team</a></li>
          <li><a href="#documents" className="text-white/45 text-[13px] font-medium tracking-[0.05em] no-underline hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-cyan)] hover:after:w-full after:transition-all">Documents</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsInvestorModalOpen(true)} className="hidden lg:block text-white/80 text-[13px] font-bold tracking-[0.05em] hover:text-[var(--color-cyan)] transition-colors uppercase">For Investors</button>
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
        <div className="fixed inset-0 z-[45] bg-black/98 backdrop-blur-xl flex flex-col pt-32 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-6 list-none mb-12">
            <li><a href="#problem" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">The Problem</a></li>
            <li><a href="#solution" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Solution</a></li>
            <li><a href="#science" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Science</a></li>
            <li><a href="#traction" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Traction</a></li>
            <li><a href="#team" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Team</a></li>
            <li><a href="#documents" onClick={closeMenu} className="text-white text-2xl font-display font-bold tracking-tight no-underline">Documents</a></li>
          </ul>
          
          <div className="mt-auto flex flex-col gap-4">
            <button onClick={() => { closeMenu(); setIsInvestorModalOpen(true); }} className="w-full text-center border border-[var(--color-cyan)]/30 text-[var(--color-cyan)] font-display text-[13px] font-bold tracking-[0.1em] uppercase py-4 transition-all hover:bg-[var(--color-cyan)] hover:text-black">
              For Investors
            </button>
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

      {/* Investor Modal */}
      <AnimatePresence>
        {isInvestorModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#050508] border border-white/10 p-8 md:p-12 max-w-3xl w-full rounded-2xl shadow-[0_20px_100px_rgba(0,207,255,0.15)] relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsInvestorModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-cyan)] to-transparent"></div>
              
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,207,255,0.1)] border border-[rgba(0,207,255,0.2)] flex items-center justify-center mb-6 text-[var(--color-cyan)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>

              <h3 className="font-display text-[26px] md:text-[32px] font-bold text-white mb-6">For Investors</h3>
              
              <div className="space-y-6 text-[15px] text-white/70 leading-[1.7] mb-10">
                <p>
                  TraumaShield is transforming the way the world responds to trauma by targeting PTSD at its source - before it forms. While 13M Americans develop PTSD each year and insurers spend nearly $20,000 per patient (+$230B in the USA annually), every existing treatment waits until the damage is done.
                </p>
                <p>
                  Our field-ready first-response device delivers a repurposed FDA-approved compound during the critical "golden hours," disrupting traumatic memory formation and preventing lifelong psychological injury. With our Phase-2 clinical trial approaching and a massive unmet market need, TraumaShield represents a rare opportunity to back a category-defining solution that can reshape mental health at global scale.
                </p>
                <div className="p-5 border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5 rounded-lg text-white font-medium">
                  We're now opening our pre-seed round to partners who recognize the scale of this opportunity and want to help build the future of preventive mental health. <br/><span className="text-[var(--color-cyan)] font-bold mt-2 inline-block">Minimum entry ticket: ~$150K.</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="font-display text-[18px] font-bold text-white mb-1">David Slobodiansky</div>
                  <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-cyan)] mb-3">Co-founder & CEO, TraumaShield</div>
                  <div className="font-mono text-[13px] text-white/80">+972-542003244</div>
                  <div className="font-mono text-[13px] text-white/80 mt-1">
                    <span className="text-white/50">PE:</span> <a href="mailto:daviddiner1@gmail.com" className="hover:text-[var(--color-cyan)] transition-colors">daviddiner1@gmail.com</a>
                  </div>
                </div>
                
                <a 
                  href="mailto:daviddiner1@gmail.com?subject=TraumaShield%20Pre-Seed%20Investment"
                  className="bg-[var(--color-cyan)] text-black px-8 py-3.5 font-display text-[14px] font-bold tracking-[0.1em] uppercase transition-all hover:bg-white shrink-0"
                >
                  Contact Directly
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
