import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-start lg:justify-center px-6 md:px-12 pt-32 lg:pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#020202]">
        {/* Subtle grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)'
        }} />
      </div>
      <div className="noise"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-cyan)] to-transparent"></div>
            <span className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--color-cyan)]">Confidential · Phase 2a Clinical Stage</span>
          </div>
          
          <h1 className="font-display text-[clamp(48px,7vw,100px)] font-extrabold leading-[0.85] tracking-[-0.04em] mb-0">
            <span className="block text-white glitch" data-text="STOP PTSD">STOP PTSD</span>
            <span className="block text-white/30 font-light tracking-[-0.02em]">BEFORE IT</span>
            <span className="block text-[var(--color-cyan)] glitch" data-text="BEGINS.">BEGINS.</span>
          </h1>
          
          <div className="max-w-[600px] mt-10">
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-white/80 font-light mb-4">
              TraumaShield combines an innovative medical device with an FDA-approved agent — deployed through its novel second medical use — reaching patients within the critical post-trauma window (0–6 hours) to block fear-memory consolidation and restore healthy contextual memory before PTSD can form.
            </p>
            <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-white/50">
              Novel Second Medical Use · Regulatory Pathway Active
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mt-12">
            <a href="#join" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-display text-[14px] font-bold tracking-[0.15em] uppercase no-underline overflow-hidden transition-all hover:bg-[var(--color-cyan)] hover:text-white">
              <span className="relative z-10">Join Our Journey</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="/one-pager.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 bg-white/[0.02] backdrop-blur-sm text-white/80 font-display text-[14px] font-semibold tracking-[0.15em] uppercase no-underline transition-all hover:border-[var(--color-cyan)]/50 hover:bg-[var(--color-cyan)]/5 hover:text-white">
              One Pager
            </a>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>FDA-Approved
            </div>
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] shrink-0 shadow-[0_0_10px_var(--color-cyan-glow)]"></div>2nd Medical Use
            </div>
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>IP Protected
            </div>
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shrink-0 shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>505(b)(2)
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Premium Image Container */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group bg-[#050508]">
            {/* Subtle glow behind the image */}
            <div className="absolute inset-0 bg-[var(--color-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <img 
              src="/vision.png" 
              alt="Our Vision" 
              className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.05]" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
            
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
          </div>
          
          {/* Decorative elements around the image */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--color-cyan)]/20 blur-[50px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#60a5fa]/20 blur-[60px] rounded-full pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
