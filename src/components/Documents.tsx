import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

export function Documents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleRestrictedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setShowContact(false);
  };

  return (
    <section id="documents" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg)] relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.8)]">Investor Materials</span>
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,52px)] font-extrabold max-w-[700px] leading-[1.15] tracking-[-0.02em]">
            Access the full <span className="text-[var(--color-cyan)]">scientific</span> and <span className="text-[var(--color-cyan)]">commercial</span> package.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.a 
            href="/one-pager.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group block bg-white/[0.02] border border-white/10 p-8 md:p-10 transition-all hover:bg-[rgba(0,207,255,0.02)] hover:border-[rgba(0,207,255,0.3)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-cyan)] opacity-0 blur-[80px] group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="w-12 h-12 rounded-xl bg-[rgba(0,207,255,0.08)] border border-[rgba(0,207,255,0.2)] flex items-center justify-center mb-6 text-[var(--color-cyan)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.5)] mb-3">Executive Summary</div>
            <h3 className="font-display text-[24px] font-bold text-white mb-3 group-hover:text-[var(--color-cyan)] transition-colors">TraumaShield One-Pager</h3>
            <p className="text-[14px] text-white/40 leading-[1.6] mb-8">
              A concise overview of the problem, our field-deployed PTSD prevention device, the $3.0B market opportunity, and our clinical validation.
            </p>
            
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-white/60 group-hover:text-white transition-colors">
              View PDF <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </motion.a>

          <motion.a 
            href="/deck.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group block bg-white/[0.02] border border-white/10 p-8 md:p-10 transition-all hover:bg-[rgba(0,207,255,0.02)] hover:border-[rgba(0,207,255,0.3)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-cyan)] opacity-0 blur-[80px] group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="w-12 h-12 rounded-xl bg-[rgba(0,207,255,0.08)] border border-[rgba(0,207,255,0.2)] flex items-center justify-center mb-6 text-[var(--color-cyan)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.5)] mb-3">Investor Presentation</div>
            <h3 className="font-display text-[24px] font-bold text-white mb-3 group-hover:text-[var(--color-cyan)] transition-colors">Full Pitch Deck 2026</h3>
            <p className="text-[14px] text-white/40 leading-[1.6] mb-8">
              Comprehensive deep-dive into the neurobiology, regulatory pathway (505(b)(2)), IP strategy, and our Phase 2a clinical trial roadmap.
            </p>
            
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-white/60 group-hover:text-white transition-colors">
              View PDF <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Strategic Road Map", desc: "Detailed timeline of clinical, regulatory, and commercial milestones through 2028." },
            { title: "Business Plan", desc: "Comprehensive go-to-market strategy, competitive analysis, and operational scaling." },
            { title: "Economic Model", desc: "In-depth financial projections, pricing strategy, and ROI analysis for stakeholders." },
            { title: "Clinical Protocol - Phase-2a", desc: "Detailed methodology, endpoints, and statistical analysis plan for the upcoming Phase 2a trial." },
            { title: "IP Strategy & FTO", desc: "Comprehensive overview of patent portfolio, freedom to operate, and exclusivity timelines." },
            { title: "Regulation Strategy", desc: "505(b)(2) pathway documentation, FDA correspondence, and combination product strategy." }
          ].map((doc, i) => (
            <motion.a 
              key={i}
              href="#"
              onClick={handleRestrictedClick}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="group block bg-white/[0.02] border border-white/10 p-8 transition-all hover:bg-[rgba(255,51,68,0.02)] hover:border-[rgba(255,51,68,0.3)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3344] opacity-0 blur-[80px] group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="w-10 h-10 rounded-xl bg-[rgba(255,51,68,0.08)] border border-[rgba(255,51,68,0.2)] flex items-center justify-center mb-5 text-[#ff3344]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(255,51,68,0.5)] mb-2">Shareholders Only</div>
              <h3 className="font-display text-[20px] font-bold text-white mb-2 group-hover:text-[#ff3344] transition-colors">{doc.title}</h3>
              <p className="text-[13px] text-white/40 leading-[1.6] mb-6">
                {doc.desc}
              </p>
              
              <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] uppercase text-white/60 group-hover:text-white transition-colors">
                Request Access <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#050508] border border-white/10 p-8 max-w-md w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff3344] to-transparent"></div>
              
              <div className="w-12 h-12 rounded-full bg-[rgba(255,51,68,0.1)] border border-[rgba(255,51,68,0.2)] flex items-center justify-center mb-6 text-[#ff3344]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>

              <h3 className="font-display text-[22px] font-bold text-white mb-3">Restricted Access</h3>
              <p className="text-[14px] text-white/60 leading-[1.6] mb-8">
                These materials are restricted to company shareholders. To request access, please contact us directly.
              </p>

              {!showContact ? (
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setShowContact(true)}
                    className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/5 text-white border border-white/20 font-display text-[13px] font-bold tracking-[0.1em] uppercase transition-all hover:bg-white/10 hover:border-white/40 rounded-sm"
                  >
                    <img src="/logo.png" alt="TraumaShield" className="h-5 object-contain mix-blend-screen" onError={(e) => e.currentTarget.style.display = 'none'} />
                    Contact
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3.5 border border-white/10 text-white/50 font-display text-[13px] font-semibold tracking-[0.1em] uppercase transition-all hover:border-white/30 hover:text-white/80 rounded-sm"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex flex-col items-center gap-2 p-6 border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5 rounded-xl"
                >
                  <div className="font-display text-[18px] font-bold text-white">David Slobodiansky</div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-cyan)] mb-2">CEO</div>
                  <div className="font-mono text-[13px] text-white/80 mt-2">Personal information:</div>
                  <div className="font-mono text-[13px] text-white/80">+972-542003244</div>
                  <a href="mailto:daviddiner1@gmail.com" className="font-mono text-[13px] text-white/80 hover:text-[var(--color-cyan)] transition-colors">daviddiner1@gmail.com</a>
                  
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 w-full py-2.5 border border-white/20 text-white/60 font-display text-[11px] font-semibold tracking-[0.1em] uppercase transition-all hover:border-white/40 hover:text-white rounded-sm"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
