export function TopBanner() {
  return (
    <div className="bg-[#0a0000] border-b border-red-900/30 text-red-500/80 text-[10px] md:text-xs font-mono py-2.5 px-4 text-center tracking-[0.2em] uppercase sticky top-0 z-50 flex justify-center items-center gap-3 backdrop-blur-md">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
      Strictly Confidential — Not for public distribution — Authorized personnel only
    </div>
  );
}
