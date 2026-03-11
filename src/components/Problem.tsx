import { motion } from 'motion/react';

export function Problem() {
  return (
    <section id="problem" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg2)] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-7 h-px bg-[rgba(255,51,68,0.6)]"></div>
            <span className="font-mono text-[12px] tracking-[0.25em] uppercase text-[rgba(255,51,68,0.8)]">The Problem</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.2] mb-7">
            Post-traumatic stress disorder (PTSD) is a devastating mental health crisis — yet no approved solution prevents it.
          </h2>
          <div className="text-white/70 text-[18px] leading-[1.8] font-light space-y-4">
            <p><span className="text-white font-medium">The Gap:</span> Current treatments manage symptoms long after the damage is done. There is no FDA-approved prevention for critical "golden hours" post-trauma.</p>
          </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group bg-[#050508]">
              <div className="absolute inset-0 bg-[var(--color-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <img src="/the-problem.png" alt="The Problem" className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
