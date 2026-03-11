import { motion } from 'motion/react';

export function Stats() {
  return (
    <div id="stats" className="border-y border-white/5 bg-white/[0.018]">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto">
        <div className="p-4 md:p-12 text-center border-r border-b md:border-b-0 border-white/5">
          <div className="font-display text-[clamp(22px,5vw,58px)] font-extrabold leading-none text-[#ff3344] mb-3">
            70%
          </div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/30 leading-[1.6]">
            Experience<br/>trauma worldwide
          </div>
        </div>
        <div className="p-4 md:p-12 text-center border-r border-b md:border-b-0 border-white/5">
          <div className="font-display text-[clamp(22px,5vw,58px)] font-extrabold leading-none text-[#ff3344] mb-3">
            13M+
          </div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/30 leading-[1.6]">
            Annual PTSD<br/>cases (U.S.)
          </div>
        </div>
        <div className="p-4 md:p-12 text-center border-r border-white/5">
          <div className="font-display text-[clamp(22px,5vw,58px)] font-extrabold leading-none text-[#ff3344] mb-3">
            $232B
          </div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/30 leading-[1.6]">
            Annual burden<br/>(US)
          </div>
        </div>
        <div className="p-4 md:p-12 text-center">
          <div className="font-display text-[clamp(22px,5vw,58px)] font-extrabold leading-none text-[#ff3344] mb-3">
            $19,630
          </div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/30 leading-[1.6]">
            Annual cost per<br/>patient (US)
          </div>
        </div>
      </div>
    </div>
  );
}
