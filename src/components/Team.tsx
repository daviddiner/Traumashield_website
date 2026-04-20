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
            <span className="section-subtitle text-[var(--color-cyan)] mb-4 inline-block">The Leadership</span>
          </div>
          <h2 className="section-title text-white mb-5">
            Executive Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* David */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.025] border border-white/10 p-9 flex flex-col sm:flex-row gap-6 transition-colors hover:border-[rgba(0,207,255,0.3)]"
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-[rgba(0,207,255,0.4)] shrink-0 shadow-[0_0_20px_rgba(0,207,255,0.15)]">
              <img src="/david.png" alt="David Slobodiansky" loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-display text-[18px] font-bold mb-1">David Slobodiansky</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Co-founder, CEO</div>
              <div className="text-[13px] text-white/45 leading-[1.6]">Senior business strategist; former Sales & Marketing Director; M.Sc. in Neuroscience.</div>
            </div>
          </motion.div>

          {/* Daniel */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.025] border border-white/10 p-9 flex flex-col sm:flex-row gap-6 transition-colors hover:border-[rgba(0,207,255,0.3)]"
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-[rgba(0,207,255,0.4)] shrink-0 shadow-[0_0_20px_rgba(0,207,255,0.15)]">
              <img src="/daniel.png" alt="Daniel Kolsky M.D." loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-display text-[18px] font-bold mb-1">Daniel Kolsky M.D.</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Co-founder, Clinical Lead</div>
              <div className="text-[13px] text-white/45 leading-[1.6]">Psychiatry resident with hands-on clinical experience, M.Sc. in Neuroscience from Oxford.</div>
            </div>
          </motion.div>

          {/* Joseph */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.025] border border-white/10 p-9 flex flex-col sm:flex-row gap-6 transition-colors hover:border-[rgba(0,207,255,0.3)]"
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-[rgba(0,207,255,0.4)] shrink-0 shadow-[0_0_20px_rgba(0,207,255,0.15)]">
              <img src="/joseph.png" alt="Joseph Zohar M.D." loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-display text-[18px] font-bold mb-1">Joseph Zohar M.D.</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">CMO</div>
              <div className="text-[13px] text-white/45 leading-[1.6]">World expert on PTSD and has uncovered the potential of secondary prevention in PTSD (Ex- Sheba director of Psychiatry, Ex-chair director of European Neuropsychopharmacology association, former president, and chairman of the Expert Platform on Mental Health).</div>
            </div>
          </motion.div>

          {/* Eyal */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.025] border border-white/10 p-9 flex flex-col sm:flex-row gap-6 transition-colors hover:border-[rgba(0,207,255,0.3)]"
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-[rgba(0,207,255,0.4)] shrink-0 shadow-[0_0_20px_rgba(0,207,255,0.15)]">
              <img src="/eyal.png" alt="Eyal Fruchter M.D." loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-display text-[18px] font-bold mb-1">Eyal Fruchter M.D.</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">VP Clinical Operations & Clinical Advisory</div>
              <div className="text-[13px] text-white/45 leading-[1.6]">Professor of Psychiatry (Ex-head of Rambam hospital Psychiatry), Co-Founder and Head of Medical and Scientific Affairs at ICAR Collective, Former Head of Mental Health of the IDF.</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="flex items-center gap-3.5 mb-8">
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
            <span className="section-subtitle text-[var(--color-cyan)] inline-block">Advisory Team</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="border-l border-[rgba(0,207,255,0.3)] pl-6 relative">
              <div className="absolute top-0 -left-[1px] w-[2px] h-4 bg-[var(--color-cyan)]"></div>
              <div className="font-display text-[16px] font-bold mb-1 text-white">Amos Ofer, PhD, MBA</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Business Advisory</div>
              <div className="text-[13px] text-white/50 leading-[1.6]">Over 25 years of experience in the biotech industry, including executive roles (CEO/COO/CDO) in small‑ to medium‑size private and publicly traded startups.</div>
            </div>
            
            <div className="border-l border-[rgba(0,207,255,0.3)] pl-6 relative">
              <div className="absolute top-0 -left-[1px] w-[2px] h-4 bg-[var(--color-cyan)]"></div>
              <div className="font-display text-[16px] font-bold mb-1 text-white">Abraham Peled M.D. PhD</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Psychiatry Advisory</div>
              <div className="text-[13px] text-white/50 leading-[1.6]">20 years of clinical experience in psychiatry and in managing psychiatric departments.</div>
            </div>
            
            <div className="border-l border-[rgba(0,207,255,0.3)] pl-6 relative">
              <div className="absolute top-0 -left-[1px] w-[2px] h-4 bg-[var(--color-cyan)]"></div>
              <div className="font-display text-[16px] font-bold mb-1 text-white">Mihael Bazhmin MD, MHA</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Psychiatric Administration Advisory</div>
              <div className="text-[13px] text-white/50 leading-[1.6]">Former Chief of Psychiatry, Mental Health Center Sha’ar Menashe; Head of Psychiatry Department, MedTrix.</div>
            </div>
            
            <div className="border-l border-[rgba(0,207,255,0.3)] pl-6 relative">
              <div className="absolute top-0 -left-[1px] w-[2px] h-4 bg-[var(--color-cyan)]"></div>
              <div className="font-display text-[16px] font-bold mb-1 text-white">Danny J. Lee, M.D.</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Clinical & Regulatory Advisory</div>
              <div className="text-[13px] text-white/50 leading-[1.6]">Psychiatrist, Clinical Development Team Lead, former U.S. Army officer, past FDA medical officer.</div>
            </div>
            
            <div className="border-l border-[rgba(0,207,255,0.3)] pl-6 relative">
              <div className="absolute top-0 -left-[1px] w-[2px] h-4 bg-[var(--color-cyan)]"></div>
              <div className="font-display text-[16px] font-bold mb-1 text-white">Tali Gorfine M.D. PhD</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--color-cyan)] mb-3">Clinical Development Advisory</div>
              <div className="text-[13px] text-white/50 leading-[1.6]">Years of experience in Executive Clinical Development.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
