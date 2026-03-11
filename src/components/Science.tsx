import { motion } from 'motion/react';

export function Science() {
  return (
    <section id="science" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg2)] relative">
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
            <span className="font-mono text-[12px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.8)]">Peer-Reviewed Evidence</span>
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,52px)] font-extrabold max-w-[700px] leading-[1.15] tracking-[-0.02em]">
            <span className="text-[var(--color-cyan)]">47% reduction</span> in PTSD incidence.<br/>Validated. Peer-reviewed. Reproducible.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/[0.025] border border-white/10 p-9 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-cyan)] to-transparent"></div>
              <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-white/50 mb-8">Human Data — Surgical Trauma Model · 1-Month Follow-Up</div>
              
              <div className="flex items-end gap-5 h-[160px]">
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full relative rounded-t-sm flex items-start justify-center pt-2.5 bg-[rgba(0,207,255,0.25)] border border-[rgba(0,207,255,0.5)] h-[80px]">
                    <span className="font-display text-[16px] font-bold text-[var(--color-cyan)]">12.2%</span>
                  </div>
                  <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-white/50 text-center">TraumaShield</div>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full relative rounded-t-sm flex items-start justify-center pt-2.5 bg-white/10 border border-white/15 h-[152px]">
                    <span className="font-display text-[16px] font-bold text-white/70">23.2%</span>
                  </div>
                  <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-white/50 text-center">Standard Care</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[rgba(0,207,255,0.06)] border border-[rgba(0,207,255,0.2)] flex items-center justify-between">
                <div className="font-display text-[42px] font-extrabold text-[var(--color-cyan)]">47%</div>
                <div className="font-mono text-[12px] tracking-[0.12em] uppercase text-white/60 text-right leading-[1.6]">
                  Reduction in<br/>PTSD Incidence<br/><span className="text-white/40">*p &lt; 0.05</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 md:p-5 bg-white/[0.02] border border-white/5">
              <div className="font-mono text-[12px] tracking-[0.15em] uppercase text-white/50 mb-2">Preclinical Validation · SEFL Models</div>
              <p className="text-[15px] text-white/70 leading-[1.6]">Stress-Enhanced Fear Learning (SEFL) significantly reduced in animal models. Freezing behavior (fear response) reduced from ~80% to ~20% in treated subjects. <em className="italic">*p &lt; 0.05</em></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-5">
              <div className="bg-white/[0.02] border border-white/5 border-l-[2px] border-l-[var(--color-cyan)] p-6 pl-7 transition-all hover:bg-[rgba(0,207,255,0.02)] hover:border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--color-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.6)] mb-2 relative z-10">01 · Mechanism</div>
                <div className="font-display text-[18px] font-bold mb-2 relative z-10">Fear-Memory Consolidation Window</div>
                <div className="text-[15px] text-white/70 leading-[1.6] relative z-10">The neuroscientific mechanism explaining why the 0–6 hour window is the only viable prevention point. Memories are consolidated — not formed — in this window, making pharmacological intervention uniquely effective.</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 border-l-[2px] border-l-[var(--color-cyan)] p-6 pl-7 transition-all hover:bg-[rgba(0,207,255,0.02)] hover:border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--color-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.6)] mb-2 relative z-10">02 · Safety</div>
                <div className="font-display text-[18px] font-bold mb-2 relative z-10">FDA-Approved Agent</div>
                <div className="text-[15px] text-white/70 leading-[1.6] relative z-10">Existing safety profile eliminates Phase 1 risk entirely. The repurposed agent has a well-characterized pharmacokinetic and safety profile from prior clinical use.</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 border-l-[2px] border-l-[var(--color-cyan)] p-6 pl-7 transition-all hover:bg-[rgba(0,207,255,0.02)] hover:border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--color-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.6)] mb-2 relative z-10">03 · Evidence</div>
                <div className="font-display text-[18px] font-bold mb-2 relative z-10">Second Medical Use — Clinically Validated</div>
                <div className="text-[15px] text-white/70 leading-[1.6] relative z-10">Backed by independent peer-reviewed studies. 47% reduction confirmed in human surgical trauma data. Reproducible across preclinical SEFL animal models.</div>
              </div>
            </div>
            
            <div className="mt-9 p-5 md:p-6 border border-white/5 bg-white/[0.015] text-[15px] text-white/70 leading-[1.7] italic">
              "Backed by independent clinical validation and a full scientific package assembled by world-leading experts in psychiatry and neuroscience."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
