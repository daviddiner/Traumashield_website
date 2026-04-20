import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-start lg:justify-center px-6 md:px-12 pt-32 lg:pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#020202]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)"
          }}
        ></div>
      </div>
      
      <div className="noise"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8 mt-12 md:mt-0">
            <div className="w-12 h-[1px] bg-gradient-to-r from-[var(--color-cyan)] to-transparent"></div>
            <span className="font-mono text-[12px] tracking-[0.3em] uppercase text-[var(--color-cyan)]">
              Confidential · Phase 2 Clinical Stage
            </span>
          </div>
          
          <h1 className="font-display text-[clamp(48px,7vw,100px)] font-extrabold leading-[0.85] tracking-[-0.04em] mb-12 uppercase flex flex-col">
            <div className="text-white">
              Stop <motion.span 
                animate={{ color: ['#ffffff', '#ff3344', '#ffffff'] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >PTSD</motion.span>
            </div>
            <div className="text-white/30 font-light tracking-[-0.02em]">
              Before It
            </div>
            <div className="text-[var(--color-cyan)] glitch" data-text="BEGINS.">
              Begins.
            </div>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 w-full mb-16">
          <motion.div 
            className="flex-1 w-full lg:max-w-[700px]"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-white/80 font-light">
              TraumaShield combines an innovative medical device with an FDA-approved agent, deployed through its novel second medical use, reaching patients within the critical post-trauma window to block fear-memory consolidation and restore healthy contextual memory before PTSD can form.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full relative max-w-[600px] lg:max-w-none mt-4 lg:-mt-28"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/vision.png" alt="Vision" className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_0_50px_rgba(0,207,255,0.15)] mix-blend-screen" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
          
        <motion.div 
          className="w-full pb-8"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <div className="font-display text-[var(--color-cyan)] text-xs uppercase tracking-[0.2em] font-bold mb-6">Our Vision</div>
            <div className="text-[15px] md:text-[17px] text-white/70 font-light leading-[1.7] space-y-4 max-w-none w-full">
              <p>
                Trauma strikes in an instant - and every day, first responders fight to pull people back from the edge. They save lives with extraordinary skill, yet the most devastating wound is the one no one can treat: the psychological injury that unfolds long after the physical danger has passed.
                For millions, PTSD becomes the real aftermath. It steals decades of wellbeing, productivity, and human potential. It is invisible, but it is catastrophic - for individuals, families, health systems, and entire economies.
                TraumaShield exists because this outcome is no longer acceptable.<br/>
                <strong className="text-white font-medium">Our vision is a world where trauma becomes a memory, not a lifelong disorder.</strong>
              </p>
              <p>
                We are building the first field-ready solution that empowers medics, trauma centers, and first responders to prevent PTSD at the moment it begins. When psychological injury can be interrupted at its source, PTSD shifts from an inevitable fate to a preventable condition, transforming emergency care and redefining mental health at global scale.
              </p>
              <p>
                <strong className="text-white font-medium block mt-2">This is the future we are creating:<br/>
                A world where trauma no longer dictates destiny, where people keep both their lives and their mental health, and where PTSD becomes a burden of the past.</strong>
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-3 gap-y-3 font-mono text-[11px] tracking-[0.1em] uppercase text-white/60">
              <span>In clinical validation</span>
              <span className="hidden md:inline text-[var(--color-cyan)]">|</span>
              <span>Regulatory speed</span>
              <span className="hidden md:inline text-[var(--color-cyan)]">|</span>
              <span>Early evidence</span>
              <span className="hidden md:inline text-[var(--color-cyan)]">|</span>
              <span>Dual civilian-defense focus</span>
              <span className="hidden md:inline text-[var(--color-cyan)]">|</span>
              <span>The right team for the mission</span>
            </div>
            <div className="mt-6 font-mono text-[14px] tracking-[0.15em] uppercase font-bold text-[var(--color-cyan)]">We need to act now!</div>
          </div>
          
          <div className="flex flex-wrap gap-5 mt-10">
            <a href="#join" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-display text-[14px] font-bold tracking-[0.15em] uppercase no-underline overflow-hidden transition-all hover:bg-[var(--color-cyan)] hover:text-white">
              <span className="relative z-10">Join Our Journey</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="/one-pager.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 bg-white/[0.02] backdrop-blur-sm text-white/80 font-display text-[14px] font-semibold tracking-[0.15em] uppercase no-underline transition-all hover:border-[var(--color-cyan)]/50 hover:bg-[var(--color-cyan)]/5 hover:text-white">
              One Pager
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
