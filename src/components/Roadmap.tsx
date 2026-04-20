import { motion } from 'motion/react';

const roadmapData = [
  {
    year: "2026",
    title: "Validation",
    items: ["Phase 2 clinical trial", "Pre-seed"]
  },
  {
    year: "2027",
    title: "Expansion",
    items: ["Phase 2 primary endpoint", "Strategic partnerships", "Device developed", "Fund raise"]
  },
  {
    year: "2028",
    title: "Growth",
    items: ["Pivotal trial launch", "Defence contracts", "NDA preparation"]
  },
  {
    year: "2029",
    title: "Commercialization",
    items: ["Pivotal trials end goals", "FDA approval", "U.S. Market Entry", "Scale & marketing"]
  },
  {
    year: "2030",
    title: "Preventive Care",
    items: ["Standard of care established", "Development expansion"]
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-bg2)] relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3.5 mb-6">
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
            <span className="section-subtitle text-[var(--color-cyan)] mb-4 inline-block">Strategic Roadmap</span>
            <div className="w-7 h-px bg-[rgba(0,207,255,0.6)]"></div>
          </div>
          <h2 className="section-title text-white mb-5">
            Path to Commercialization
          </h2>
        </motion.div>

        {/* Desktop Horizontal Timeline / Mobile Vertical */}
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[var(--color-cyan)]/10 via-[var(--color-cyan)]/50 to-[var(--color-cyan)]/10 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {roadmapData.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col items-start lg:items-center text-left lg:text-center group pl-8 lg:pl-0"
              >
                {/* Mobile Vertical Line */}
                <div className="lg:hidden absolute left-0 top-2 bottom-[-2rem] w-[2px] bg-gradient-to-b from-[var(--color-cyan)]/50 to-transparent"></div>
                
                {/* Timeline Dot */}
                <div className="w-4 h-4 rounded-full bg-[var(--color-bg2)] border-2 border-[var(--color-cyan)] absolute left-[-7px] top-[14px] lg:static lg:mb-8 group-hover:scale-150 transition-transform duration-300 group-hover:bg-[var(--color-cyan)] shadow-[0_0_15px_rgba(0,207,255,0.5)] z-20"></div>
                
                {/* Content Card */}
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-lg hover:border-[var(--color-cyan)]/30 transition-all w-full relative overflow-hidden group/card mt-2 lg:mt-0">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-cyan)]/50 scale-x-0 group-hover/card:scale-x-100 transition-transform origin-left"></div>
                  
                  <div className="section-title !text-3xl text-[var(--color-cyan)] mb-2">{phase.year}</div>
                  <div className="section-subtitle block text-white/50 mb-5">{phase.title}</div>
                  
                  <ul className="space-y-4 text-left">
                    {phase.items.map((item, iIndex) => (
                      <li key={iIndex} className="section-desc flex items-start gap-3">
                        <span className="text-[var(--color-cyan)] text-xl mt-0.5 opacity-70">▹</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
