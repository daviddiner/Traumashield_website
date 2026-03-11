export function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-white/5 py-10 px-12 flex flex-col items-center gap-4 text-center relative z-10">
      <div className="font-display text-[16px] font-bold tracking-[0.1em] uppercase">
        Trauma<span className="text-[var(--color-cyan)]">Shield</span>
      </div>
      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/20">
        © 2026 TraumaShield · CONFIDENTIAL · ALL RIGHTS RESERVED · Pre-Disclosure · Stealth Stage
      </div>
      <div className="text-[11px] text-white/15 max-w-[600px] leading-[1.7]">
        This material is for qualified investors only and does not constitute a public offering. TraumaShield and its associated technology are in pre-commercial clinical development stage. All clinical data referenced is preliminary and subject to further validation.
      </div>
    </footer>
  );
}
