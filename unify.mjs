import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

// Standard patterns we want to map to:
// H1: font-sans font-bold text-[clamp(48px,7vw,100px)] tracking-[-0.04em] leading-none uppercase
// H2: font-sans font-extrabold text-[clamp(36px,5vw,64px)] tracking-tight leading-tight
// H3: font-sans font-bold text-3xl tracking-tight leading-snug
// Eyebrow/Subtitle (uppercase tracking): font-sans font-bold text-xs uppercase tracking-[0.2em]
// Body Text (p): font-sans font-light text-lg leading-relaxed text-white/80
// Small UI / Labels: font-sans font-medium text-[11px] uppercase tracking-wider

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip font-display and font-mono entirely (we will use only font-sans as requested)
  content = content.replace(/\bfont-(display|mono)\b/g, 'font-sans');
  
  // Also fix h1 sizes to purely unified
  content = content.replace(/text-\[clamp\(48px,7vw,100px\)\]/g, 'text-[clamp(48px,7vw,100px)]');
  
  // H2 mappings (clamp sizes)
  content = content.replace(/text-\[clamp\(28px,4vw,52px\)\]/g, 'text-[clamp(36px,5vw,64px)]');
  content = content.replace(/text-[45]xl md:text-[56]xl/g, 'text-[clamp(36px,5vw,64px)]');
  
  // H3 mappings
  content = content.replace(/text-2xl md:text-3xl/g, 'text-3xl');
  content = content.replace(/text-\[2[0248]px\]/g, 'text-3xl');
  
  // Subtitle/Eyebrow mappings (usually small text with wide tracking)
  content = content.replace(/tracking-\[0\.[12]5?em\] uppercase/g, 'tracking-[0.2em] uppercase');
  
  // Normalizing body text across P tags
  content = content.replace(/text-\[1[78]px\]|text-xl|text-base/g, 'text-lg');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Typography unified");
