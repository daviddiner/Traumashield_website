import { motion } from 'motion/react';

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg)] relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[rgba(0,207,255,0.8)]">Executive Leadership</span>
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,52px)] font-extrabold max-w-[700px] leading-[1.15] tracking-[-0.02em]">
            "World-class expertise.<br/>Singular focus."
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.025] border border-white/10 p-9 flex gap-6 transition-colors hover:border-[rgba(0,207,255,0.3)]"
          >
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[rgba(0,207,255,0.1)] border-2 border-[rgba(0,207,255,0.2)] shrink-0 flex items-center justify-center">
              <div className="font-display text-[22px] font-bold text-[var(--color-cyan)]">DS</div>
            </div>
            <div>
              <div className="font-display text-[18px] font-bold mb-1">David Slobodiansky</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">CEO</div>
              <div className="text-[13px] text-white/45 leading-[1.6]">Business Strategy & Project Management. M.Sc. Neuroscience.</div>
              <div className="text-[13px] text-white/35 mt-1.5">Driving commercial strategy, regulatory operations, and investor relations for TraumaShield's clinical and market development.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.025] border border-white/10 p-9 flex gap-6 transition-colors hover:border-[rgba(0,207,255,0.3)]"
          >
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[rgba(0,207,255,0.1)] border-2 border-[rgba(0,207,255,0.2)] shrink-0 flex items-center justify-center">
              <div className="font-display text-[22px] font-bold text-[var(--color-cyan)]">JZ</div>
            </div>
            <div>
              <div className="font-display text-[18px] font-bold mb-1">Prof. Joseph Zohar</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">CMO</div>
              <div className="text-[13px] text-white/45 leading-[1.6]">M.D. International Authority in Psychiatry and Neuroscience.</div>
              <div className="text-[13px] text-white/35 mt-1.5">World-leading PTSD researcher. Architect of the clinical protocol. Decades of peer-reviewed work on trauma memory and pharmacological prevention.</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center p-6 border border-white/5 text-[15px] text-white/45 leading-[1.6]"
        >
          Backed by an on-site team of neuroscience experts, psychiatrists, clinical and regulatory professionals.
        </motion.div>
      </div>
    </section>
  );
}
