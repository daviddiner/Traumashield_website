import { motion } from 'motion/react';
import { useState } from 'react';

export function Join() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="join" className="relative min-h-screen flex items-center px-6 md:px-12 bg-[var(--color-bg)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,207,255,0.06)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,207,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 70%)'
      }}></div>
      <div className="noise"></div>
      
      <div className="relative z-10 w-full max-w-[760px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 mb-8 font-mono text-[11px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.7)]">
            <div className="pulse-dot"></div>
            Qualified Investors Only · Stealth Stage
          </div>
          
          <h2 className="font-display text-[clamp(40px,7vw,88px)] font-extrabold leading-[1.0] tracking-[-0.03em] mb-5 glitch" data-text="This window won't stay open.">
            This window<br/>won't stay open.
          </h2>
          
          <p className="text-[17px] text-white/50 leading-[1.75] max-w-[580px] mx-auto mb-12 font-light">
            TraumaShield is raising <strong className="text-[var(--color-cyan)] font-medium">$3M</strong> to execute its Phase 2a clinical trial and complete device engineering. Join us in making trauma a memory, not a disorder.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <button 
              onClick={() => {
                setRevealed(true);
                window.location.href = "mailto:daviddiner1@gmail.com?subject=TraumaShield%20Investor%20Access";
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black font-display text-[13px] font-bold tracking-[0.1em] uppercase no-underline transition-all hover:bg-[var(--color-cyan)] hover:text-white cursor-pointer"
            >
              Contact Us
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            <a href="/one-pager.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white/60 font-display text-[13px] font-semibold tracking-[0.1em] uppercase no-underline transition-all hover:border-[var(--color-cyan)] hover:text-white">
              One Pager
            </a>
          </div>
          
          {revealed && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex flex-col items-center gap-2 mb-10 p-6 border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5 inline-block mx-auto rounded-xl shadow-[0_0_30px_rgba(0,207,255,0.1)]"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-2">Direct Contact</div>
              <div className="font-display text-[18px] font-bold text-white">David Slobodiansky</div>
              <div className="font-mono text-[13px] text-white/80">+972-542003244</div>
              <a href="mailto:daviddiner1@gmail.com" className="font-mono text-[13px] text-white/80 hover:text-[var(--color-cyan)] transition-colors">daviddiner1@gmail.com</a>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-white/40 max-w-[300px] leading-[1.6]">
                This is a direct line. We trust you have been authorized to access this information.
              </div>
            </motion.div>
          )}
          
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
            Pre-Disclosure · Limited Access · Qualified Investors Only
          </p>
        </motion.div>
      </div>
    </section>
  );
}
