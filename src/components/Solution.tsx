import { motion } from 'motion/react';

export function Solution() {
  return (
    <section id="solution" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg)] relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3.5 mb-6">
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
            <span className="font-mono text-[12px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.8)]">The Solution</span>
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold mb-5 tracking-[-0.02em]">
            "The Mental Tourniquet."
          </h2>
          <p className="max-w-[680px] mx-auto text-white/80 text-[18px] leading-[1.75] font-light">
            TraumaShield combines an innovative medical device with an FDA-approved agent — reaching patients within the critical 0–6 hour window to block fear-memory consolidation and restore healthy contextual memory before PTSD can form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-start">
              <div className="flex-1 relative w-full text-center md:text-left">
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.5)] mb-2.5">Step 01</div>
                <div className="w-16 h-16 mx-auto md:mx-0 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,207,255,0.1)]">
                  <span className="font-mono text-[18px] text-[var(--color-cyan)]">01</span>
                </div>
                <div className="font-display text-[18px] font-bold tracking-[0.05em] uppercase text-white mb-1.5">Inhale</div>
                <div className="text-[15px] text-white/70 leading-[1.6]">Patient inhales the agent via integrated mask immediately post-trauma.</div>
              </div>
              
              <div className="hidden md:flex items-center justify-center w-12 text-[var(--color-cyan)]/50 mt-[42px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
              
              <div className="flex-1 relative w-full text-center md:text-left">
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.5)] mb-2.5">Step 02</div>
                <div className="w-16 h-16 mx-auto md:mx-0 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,207,255,0.1)]">
                  <span className="font-mono text-[18px] text-[var(--color-cyan)]">02</span>
                </div>
                <div className="font-display text-[18px] font-bold tracking-[0.05em] uppercase text-white mb-1.5">Wait</div>
                <div className="text-[15px] text-white/70 leading-[1.6]">Agent modulates GABA + NMDA pathways during the memory consolidation window.</div>
              </div>
              
              <div className="hidden md:flex items-center justify-center w-12 text-[var(--color-cyan)]/50 mt-[42px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
              
              <div className="flex-1 relative w-full text-center md:text-left">
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.5)] mb-2.5">Step 03</div>
                <div className="w-16 h-16 mx-auto md:mx-0 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,207,255,0.1)]">
                  <span className="font-mono text-[18px] text-[var(--color-cyan)]">03</span>
                </div>
                <div className="font-display text-[18px] font-bold tracking-[0.05em] uppercase text-white mb-1.5">Protect</div>
                <div className="text-[15px] text-white/70 leading-[1.6]">Fear memory consolidation blocked. Event encoded as history, not nightmare.</div>
              </div>
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
              <img src="/solution-2.png" alt="TraumaShield Solution" className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/[0.02] border border-white/5 p-7 transition-all hover:border-[rgba(0,207,255,0.25)] hover:bg-[rgba(0,207,255,0.02)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-cyan)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.6)] mb-2">Patent Protected</div>
                <div className="font-display text-[18px] font-bold mb-2.5">20-Year Method-of-Use Patent</div>
                <div className="text-[15px] text-white/70 leading-[1.6]">Exclusive rights secured for the second medical use and combination device architecture.</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-7 transition-all hover:border-[rgba(0,207,255,0.25)] hover:bg-[rgba(0,207,255,0.02)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#60a5fa] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#60a5fa] mb-2">Regulatory Pathway</div>
                <div className="font-display text-[18px] font-bold mb-2.5">505(b)(2) Combination Product</div>
                <div className="text-[15px] text-white/70 leading-[1.6]">Streamlined FDA pathway confirmed, leveraging existing safety data to accelerate time-to-market.</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-7 transition-all hover:border-[rgba(0,207,255,0.25)] hover:bg-[rgba(0,207,255,0.02)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4ade80] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#4ade80] mb-2">Deployment</div>
                <div className="font-display text-[18px] font-bold mb-2.5">Field-Ready Munition Grade</div>
                <div className="text-[15px] text-white/70 leading-[1.6]">Fits standard IFAK kits. Zero training required. Instant activation for immediate post-trauma care.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/[0.025] border border-white/10 rounded-sm p-9 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent"></div>
              <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.6)] mb-6">TraumaShield MDI System — Device Architecture</div>
              
              <div className="flex items-start gap-3.5 py-3.5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan-glow)]"></div>
                <div>
                  <div className="font-display text-[15px] font-semibold mb-1">Pre-filled Gas Delivery Chamber</div>
                  <div className="text-[14px] text-white/70 leading-[1.5]">Medical-grade barrier-layered PET. 2-year shelf life. Single-use & disposable. No electricity required.</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5 py-3.5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-[#60a5fa] shadow-[0_0_8px_rgba(96,165,250,0.4)]"></div>
                <div>
                  <div className="font-display text-[15px] font-semibold mb-1">Precision Flow-Limiting Valve</div>
                  <div className="text-[14px] text-white/70 leading-[1.5]">Controls delivery rate to match respiratory rhythm. Demographically optimized dosing — Child / Adult / Elderly.</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5 py-3.5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.4)]"></div>
                <div>
                  <div className="font-display text-[15px] font-semibold mb-1">Integrated Mask</div>
                  <div className="text-[14px] text-white/70 leading-[1.5]">Ergonomic seal for rapid application. Instant activation — zero setup required.</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5 py-3.5">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.4)]"></div>
                <div>
                  <div className="font-display text-[15px] font-semibold mb-1">Payload</div>
                  <div className="text-[14px] text-white/70 leading-[1.5]">Repurposed FDA-approved agent — known safety profile — prevents fear memory consolidation via dual GABA/NMDA mechanism.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* High-End Mechanism of Action Diagram */}
        <motion.div
          id="scientific-validation"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="p-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-3xl">
            <div className="bg-[#050508] rounded-[23px] p-8 md:p-16 relative overflow-hidden">
              {/* Background glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-cyan)]/5 blur-[120px] pointer-events-none rounded-full"></div>
              
              <div className="text-center mb-12 relative z-10">
                <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(0,207,255,0.6)] mb-3">Scientific Validation</div>
                <h3 className="font-display text-[28px] md:text-[36px] font-bold text-white tracking-[-0.02em]">
                  Mechanism of Action
                </h3>
              </div>
              
              <div className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group bg-[#050508] mb-10">
                <div className="absolute inset-0 bg-[var(--color-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                <img src="/mechanism-of-action.png" alt="Mechanism of Action" className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
              </div>

              <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan-glow)]"></div>
                  <p className="text-[15px] text-white/80 leading-[1.6]">
                    <strong className="text-white">Suppress fear learning responses</strong> (by reducing the hyper activity in the Amygdala).
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan-glow)]"></div>
                  <p className="text-[15px] text-white/80 leading-[1.6]">
                    <strong className="text-white">Enhances healthy contextual memory</strong> (by enhancing hippocampal neuroplasticity).
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan-glow)]"></div>
                  <p className="text-[15px] text-white/80 leading-[1.6]">
                    <strong className="text-white">Enhance GABAergic</strong> inhibitory transmission.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan-glow)]"></div>
                  <p className="text-[15px] text-white/80 leading-[1.6]">
                    <strong className="text-white">Suppress excitatory NMDA</strong> receptor activity.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-5 rounded-lg md:col-span-2">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0 bg-[var(--color-cyan)] shadow-[0_0_8px_var(--color-cyan-glow)]"></div>
                  <p className="text-[15px] text-white/80 leading-[1.6]">
                    <strong className="text-white">Modulate neuroprotective pathways</strong> to prevent long-term damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
