import { motion } from 'motion/react';

export function Traction() {
  return (
    <section id="traction" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg)] relative border-t border-white/5">
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
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.8)]">Traction & Roadmap</span>
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,52px)] font-extrabold max-w-[700px] leading-[1.15] tracking-[-0.02em]">
            "From concept to clinical. Every milestone de-risks your investment."
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { title: "Phase 2a Protocol Completed", desc: "PI + pilot centers secured and ready" },
            { title: "FDA Pre-IND Meeting Completed", desc: "Direct engagement with FDA regulatory pathway" },
            { title: "Israeli Ministry of Health Meeting", desc: "Regulatory relationship established at national level" },
            { title: "IP Strategy Finalized", desc: "Freedom to Operate confirmed across key markets" },
            { title: "Regulatory Strategy Confirmed", desc: "505(b)(2) + combination-product pathway locked" },
            { title: "World-Class Advisory Board Assembled", desc: "Psychiatry, neuroscience, and regulatory experts" },
            { title: "Independent Clinical Validation", desc: "47% PTSD reduction confirmed by external review" },
            { title: "Full Scientific Package Assembled", desc: "Complete regulatory and clinical documentation ready" },
            { title: "Economic & Commercial Roadmap", desc: "Detailed path to $3B SOM mapped and validated" },
            { title: "DDR&D Strategic Relationship", desc: "Defense development & research partnership secured" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3.5 p-5 px-6 bg-white/[0.02] border border-white/5 transition-colors hover:border-[rgba(0,207,255,0.2)]"
            >
              <div className="w-5 h-5 rounded-full bg-[rgba(74,222,128,0.15)] border border-[rgba(74,222,128,0.4)] flex items-center justify-center shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 text-[#4ade80]"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="text-[14px] text-white/65 leading-[1.5]">
                <strong className="text-white font-semibold block mb-0.5">{item.title}</strong>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[rgba(0,207,255,0.3)] bg-[rgba(0,207,255,0.04)] p-6 md:p-8 flex items-center gap-5"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--color-cyan)] shrink-0 animate-[pulse_2s_ease-in-out_infinite]"></div>
          <p className="text-[15px] text-white/75 leading-[1.6]">
            <strong className="text-[var(--color-cyan)]">Next milestone:</strong> Generate real-world evidence with DDR&D, hospitals, and EMS — toward FDA approval.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
