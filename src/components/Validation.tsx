import { motion } from 'motion/react';

export function Validation() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="font-display text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Clinical Validation & <br/>
            <span className="text-white/40">Proof of Concept</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Human Data */}
          <div className="glass-panel p-10 md:p-16 rounded-[2rem]">
            <div className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-16">Human Data (Surgical Trauma Model)</div>
            
            <div className="flex items-end gap-8 h-64 mb-12 border-b border-white/10 pb-4 relative">
              {/* 47% Reduction Line */}
              <div className="absolute top-12 left-1/4 right-1/4 border-t border-dashed border-white/30 flex justify-center">
                <span className="bg-[#050505] px-4 -mt-3 font-mono text-xs text-white/70">* 47% reduction</span>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4">
                <div className="font-display text-3xl text-blue-400">12.2%</div>
                <div className="w-full max-w-[120px] bg-blue-500/20 border border-blue-500/50 h-[80px] rounded-t-sm" />
                <div className="font-mono text-xs text-white/50 uppercase">Treated</div>
              </div>
              
              <div className="flex-1 flex flex-col items-center gap-4">
                <div className="font-display text-3xl text-white/80">23.2%</div>
                <div className="w-full max-w-[120px] bg-white/10 border border-white/20 h-[160px] rounded-t-sm" />
                <div className="font-mono text-xs text-white/50 uppercase">Standard Care</div>
              </div>
            </div>
            
            <p className="font-sans text-white/60 font-light">Significant reduction in PTSD incidence at 1-month follow-up. (*p &lt;0.05)</p>
          </div>

          {/* Preclinical Data */}
          <div className="glass-panel p-10 md:p-16 rounded-[2rem]">
            <div className="font-mono text-xs text-white/50 uppercase tracking-[0.2em] mb-16">Preclinical Data (SEFL Models)</div>
            
            <div className="flex items-end gap-8 h-64 mb-12 border-b border-white/10 pb-4">
              <div className="flex-1 flex flex-col items-center gap-4">
                <div className="font-mono text-lg text-blue-400">*</div>
                <div className="w-full max-w-[120px] bg-blue-500/20 border border-blue-500/50 h-[40px] rounded-t-sm" />
                <div className="font-mono text-xs text-white/50 uppercase">Treated</div>
              </div>
              
              <div className="flex-1 flex flex-col items-center gap-4">
                <div className="w-full max-w-[120px] bg-white/10 border border-white/20 h-[140px] rounded-t-sm" />
                <div className="font-mono text-xs text-white/50 uppercase">Control</div>
              </div>
            </div>
            
            <p className="font-sans text-white/60 font-light">Stress-Enhanced Fear Learning (SEFL) significantly reduced in animal models.</p>
          </div>
        </div>

        {/* Strategic Moats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {[
            { title: "IP Protection", desc: "20-Year Method-of-Use patent (Second medical use & Combination device)." },
            { title: "Regulatory Speed", desc: "Streamlined 505(b)(2) Combination Product pathway." },
            { title: "Munition-Grade Design", desc: "Fits IFAK kits. Zero training required." }
          ].map((item, i) => (
            <div key={i} className="bg-[#050505] p-10">
              <h4 className="font-display text-xl text-white mb-4">{item.title}</h4>
              <p className="font-sans text-white/50 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
