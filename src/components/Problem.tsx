import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const costData = [
  { patients: 0, reactive: 0, prevention: 0 },
  { patients: 10000, reactive: 196300000, prevention: 15000000 },
  { patients: 20000, reactive: 392600000, prevention: 30000000 },
  { patients: 30000, reactive: 588900000, prevention: 45000000 },
  { patients: 40000, reactive: 785200000, prevention: 60000000 },
  { patients: 50000, reactive: 981500000, prevention: 75000000 },
];

export function Problem() {
  const [time, setTime] = useState(6 * 60 * 60); // 6 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="problem" className="py-24 px-8 lg:px-24 bg-[var(--color-bg2)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid Above The Problem */}
        <motion.div 
          className="relative group pt-4 pb-20 mb-16 border-b border-white/10 w-full cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Default Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-10 lg:gap-y-0 divide-x-0 lg:divide-x divide-white/5 w-full transition-opacity duration-500 group-hover:opacity-0 relative z-10">
            <div className="flex flex-col items-center justify-center text-center px-1 md:px-4">
              <div className="text-[var(--color-red)] text-4xl sm:text-5xl lg:text-7xl font-black font-sans tracking-tighter mb-2 md:mb-4">70%</div>
              <div className="text-white/40 font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase leading-relaxed">Experience<br className="hidden md:block"/> Trauma Worldwide</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-1 md:px-4">
              <div className="text-[var(--color-red)] text-4xl sm:text-5xl lg:text-7xl font-black font-sans tracking-tighter mb-2 md:mb-4">13M+</div>
              <div className="text-white/40 font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase leading-relaxed">Annual PTSD<br className="hidden md:block"/> Cases (U.S.)</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-1 md:px-4">
              <div className="text-[var(--color-red)] text-4xl sm:text-5xl lg:text-7xl font-black font-sans tracking-tighter mb-2 md:mb-4">$232B</div>
              <div className="text-white/40 font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase leading-relaxed">Annual Burden<br className="hidden md:block"/> (US)</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-1 md:px-4">
              <div className="text-[var(--color-red)] text-4xl sm:text-5xl lg:text-7xl font-black font-sans tracking-tighter mb-2 md:mb-4">$19,630</div>
              <div className="text-white/40 font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase leading-relaxed">Annual Cost Per<br className="hidden md:block"/> Patient (US)</div>
            </div>
          </div>
          
          {/* Hover Illustration Reveal */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 pointer-events-none">
            <img src="/problem-stats.png" alt="PTSD Statistics Hover Reveal Diagram" loading="lazy" className="w-[100%] h-[100%] object-contain" referrerPolicy="no-referrer" />
          </div>
        </motion.div>

        {/* Row 1: The Problem Text (Left) + The Problem Image (Right) */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="section-title text-white mb-4">The problem:</h2>
            <p className="section-desc mb-4">
              Post-traumatic stress disorder (PTSD) is a devastating mental health crisis - yet no approved solution prevents it.
            </p>
            <p className="section-desc">
              <strong className="text-[var(--color-red)] font-bold">The Gap:</strong> Current treatments manage symptoms long after the damage is done. There is no FDA-approved prevention for critical "golden hours" post-trauma.
            </p>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/5">
            <img src="/the-problem.png" alt="The Treatment Gap" loading="lazy" className="w-full h-auto object-contain relative z-10" referrerPolicy="no-referrer" />
          </div>
        </motion.div>

        {/* Row 2: The Crisis/Golden Hour (Left) + Clock (Right) */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="vital-trace w-12 !bg-[var(--color-red)]"></span>
              <span className="section-subtitle text-[var(--color-red)]">The Crisis</span>
            </div>
            <h2 className="section-title text-white mb-6">
              Before the Golden Hour
            </h2>
            <p className="section-desc">
              Every trauma creates a "Golden Hour." In these 360 minutes, the brain is plastic. It is deciding whether to heal or to scar. Current medicine waits years to treat the scar. TraumaShield treats the wound.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[280px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-red)]/10 to-transparent blur-2xl group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-full aspect-square glass-panel rounded-full flex flex-col items-center justify-center border border-[var(--color-red)]/20 shadow-[0_0_50px_rgba(255,51,68,0.1)]">
                <div className="absolute inset-2 rounded-full border border-dashed border-[var(--color-red)]/30 animate-[spin_60s_linear_infinite]"></div>
                <div className="text-center z-10">
                  <div className="font-sans text-[var(--color-red)] text-xs tracking-[0.2em] uppercase mb-2">Window of<br/>Opportunity</div>
                  <div className="font-sans text-4xl lg:text-5xl font-light text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,51,68,0.5)]">
                    {formatTime(time)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Row 3: Management Panels (Left) + Chart (Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-white/10 pt-16">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel p-6 rounded-lg border-l-4 border-[var(--color-red)]">
              <h3 className="section-subtitle text-[var(--color-red)] block mb-4">Reactive Symptom Management</h3>
              <ul className="text-white/70 space-y-4">
                <li className="section-desc flex items-start gap-3"><span className="text-[var(--color-red)] font-bold text-xl mt-0.5">✗</span> <span className="flex-1"><strong>High Cost:</strong> Years of therapy, SSRIs, and lost productivity.</span></li>
                <li className="section-desc flex items-start gap-3"><span className="text-[var(--color-red)] font-bold text-xl mt-0.5">✗</span> <span className="flex-1"><strong>Low Recovery:</strong> Treating the "smoke" after the fire has settled.</span></li>
                <li className="section-desc flex items-start gap-3"><span className="text-[var(--color-red)] font-bold text-xl mt-0.5">✗</span> <span className="flex-1"><strong>Chronic:</strong> Lifelong struggle with PTSD symptoms.</span></li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-lg border-l-4 border-[var(--color-cyan)]">
              <h3 className="section-subtitle text-[var(--color-cyan)] block mb-4">Proactive Prevention (TraumaShield)</h3>
              <ul className="text-white/70 space-y-4">
                <li className="section-desc flex items-start gap-3"><span className="text-[var(--color-cyan)] font-bold text-xl mt-0.5">✓</span> <span className="flex-1"><strong>Low Cost:</strong> Single-use, immediate intervention.</span></li>
                <li className="section-desc flex items-start gap-3"><span className="text-[var(--color-cyan)] font-bold text-xl mt-0.5">✓</span> <span className="flex-1"><strong>High Resilience:</strong> Treating the "fire" during the Golden Hour.</span></li>
                <li className="section-desc flex items-start gap-3"><span className="text-[var(--color-cyan)] font-bold text-xl mt-0.5">✓</span> <span className="flex-1"><strong>Preventative:</strong> Blocks fear memory consolidation entirely.</span></li>
              </ul>
            </div>
            <div className="pt-4">
              <p className="section-desc italic text-[var(--color-cyan)]">"Treating the Fire, Not the Smoke."</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative flex flex-col gap-12 sticky top-24"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Cost Comparison Chart */}
            <div className="glass-panel p-4 md:p-6 rounded-xl border border-white/5 overflow-hidden">
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase text-white/50 mb-6 text-center">Economic Burden: Reactive vs. Preventive Care</div>
              <div className="h-[250px] md:h-[400px] w-full -ml-4 md:ml-0 overflow-visible">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={costData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                    <defs>
                      <linearGradient id="colorReactive" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-red)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-red)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPrevention" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-cyan)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-cyan)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="patients" 
                      stroke="rgba(255,255,255,0.8)" 
                      strokeWidth={1}
                      fontSize={9} 
                      tick={{ fill: 'rgba(255,255,255,0.6)' }}
                      tickFormatter={(val) => `${val / 1000}k`}
                      tickMargin={8}
                      axisLine={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1 }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                      label={{ value: 'Patients', position: 'bottom', offset: 0, fill: 'rgba(255,255,255,0.7)', fontSize: 10, fontWeight: 'bold' }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth={1} 
                      fontSize={9} 
                      width={40}
                      tick={{ fill: 'rgba(255,255,255,0.6)' }}
                      tickFormatter={(val) => `$${(val / 1000000)}M`}
                      axisLine={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1 }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#050508', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', padding: '8px' }}
                      itemStyle={{ color: '#fff', paddingTop: '4px', paddingBottom: '4px' }}
                      formatter={(value: number, name: string) => [
                        `$${(value / 1000000).toFixed(1)}M`, 
                        name
                      ]}
                      labelFormatter={(label) => `${Number(label).toLocaleString()} Patients`}
                    />
                    <Legend verticalAlign="top" height={30} iconSize={8} wrapperStyle={{ fontSize: '10px', paddingTop: '0px', marginTop: '-15px', paddingBottom: '15px' }} />
                    <Area type="monotone" dataKey="reactive" name="Reactive Care ($19,630/pt)" stroke="var(--color-red)" fillOpacity={1} fill="url(#colorReactive)" strokeWidth={2} />
                    <Area type="monotone" dataKey="prevention" name="TraumaShield ($300/pt)" stroke="var(--color-cyan)" fillOpacity={1} fill="url(#colorPrevention)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
