import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function LiveCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 11,870 per hour = ~3.297 per second
    // Updating every 5 seconds = ~16.48 to the counter
    const timer = setInterval(() => {
      setCount((c) => c + 16.48);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (count <= 130 || !isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] max-w-[240px] md:max-w-[280px] pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-[#050508]/95 backdrop-blur-xl border border-[var(--color-red)]/30 p-4 md:p-5 rounded-xl shadow-[0_10px_40px_rgba(255,51,68,0.2)] pointer-events-auto relative"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 md:top-3 md:right-3 text-white/40 hover:text-white transition-colors z-10 p-1"
            aria-label="Close counter"
          >
            <X size={14} />
          </button>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[var(--color-red)] font-sans font-black text-3xl tracking-tighter">
              +{Math.floor(count).toLocaleString()}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-red)] animate-pulse shadow-[0_0_8px_var(--color-red)]"></div>
          </div>
          <p className="text-white/60 text-[11px] leading-relaxed">
            New PTSD cases since you arrived.<br/>
            Their suffering could have been prevented.
          </p>
          <div className="mt-3 text-[var(--color-cyan)] text-[12px] font-bold border-t border-white/10 pt-3">
            We must act now.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
