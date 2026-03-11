import { motion } from 'motion/react';

export function Market() {
  return (
    <section id="market" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg2)] relative">
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
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.8)]">The Business Model</span>
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,52px)] font-extrabold max-w-[700px] leading-[1.15] tracking-[-0.02em]">
            A Multi-Billion Dollar Opportunity Driven by Recurring Revenue
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/[0.025] border border-white/10 p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-cyan)] to-transparent"></div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-7">Serviceable Obtainable Market</div>
              
              <div className="flex items-baseline gap-3 py-3 border-b border-white/5 font-display">
                <div className="text-[22px] text-white/20 w-5 shrink-0">&nbsp;</div>
                <div className="text-[20px] font-bold text-white">50 Million</div>
                <div className="text-[12px] text-white/35 ml-1">Trauma Events (US alone)</div>
              </div>
              <div className="flex items-baseline gap-3 py-3 border-b border-white/5 font-display">
                <div className="text-[22px] text-white/20 w-5 shrink-0">×</div>
                <div className="text-[20px] font-bold text-white">20%</div>
                <div className="text-[12px] text-white/35 ml-1">Penetration</div>
              </div>
              <div className="flex items-baseline gap-3 py-3 border-b border-white/5 font-display">
                <div className="text-[22px] text-white/20 w-5 shrink-0">×</div>
                <div className="text-[20px] font-bold text-white">$300</div>
                <div className="text-[12px] text-white/35 ml-1">/ unit</div>
              </div>
              
              <div className="mt-4 pt-4 border-t-2 border-[rgba(0,207,255,0.3)] flex items-center gap-4">
                <div className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-[var(--color-cyan)]">
                  $3.0B
                </div>
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/30">
                  Serviceable<br/>Obtainable Market
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-3 p-4 px-5 bg-white/[0.02] border border-white/5 font-mono text-[11px] tracking-[0.08em] text-white/35">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] shrink-0"></div>
              Recurring Engine: 24-Month Expiry Cycle | ~88.6% Gross Margin
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-4">
              <div className="bg-white/[0.02] border border-white/5 p-6 md:p-7 flex items-start gap-5 transition-colors hover:border-[rgba(0,207,255,0.25)]">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] bg-[rgba(0,207,255,0.08)] border border-[rgba(0,207,255,0.2)] px-2.5 py-1 shrink-0 whitespace-nowrap mt-0.5">B2P</div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1">Insurers</div>
                  <div className="text-[13px] text-white/40">Value-Based Care</div>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-cyan)] mt-1.5">1:65 ROI</div>
                </div>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 p-6 md:p-7 flex items-start gap-5 transition-colors hover:border-[rgba(0,207,255,0.25)]">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] bg-[rgba(0,207,255,0.08)] border border-[rgba(0,207,255,0.2)] px-2.5 py-1 shrink-0 whitespace-nowrap mt-0.5">B2B</div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1">Hospitals</div>
                  <div className="text-[13px] text-white/40">Standard of Care</div>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-cyan)] mt-1.5">Trauma Protocol Integration</div>
                </div>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 p-6 md:p-7 flex items-start gap-5 transition-colors hover:border-[rgba(0,207,255,0.25)]">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] bg-[rgba(0,207,255,0.08)] border border-[rgba(0,207,255,0.2)] px-2.5 py-1 shrink-0 whitespace-nowrap mt-0.5">B2G</div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1">Defense</div>
                  <div className="text-[13px] text-white/40">Stockpile Essential</div>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-cyan)] mt-1.5">Munition-Grade Pharma</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-5 md:p-6 bg-[rgba(0,207,255,0.04)] border border-[rgba(0,207,255,0.15)]">
              <div className="flex items-baseline gap-3 mb-2">
                <div className="font-display text-[28px] font-extrabold text-[var(--color-cyan)]">1:65</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/35">ROI for insurers</div>
              </div>
              <div className="text-[13px] text-white/40">$19,600/yr chronic PTSD care cost vs. $300 one-time TraumaShield intervention</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
