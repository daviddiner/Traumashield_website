import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Convert "The problem:" h3 to h2 section-title
  content = content.replace(/<h3 className="text-3xl font-display font-bold text-white mb-4">The problem:<\/h3>/g, 
    '<h2 className="section-title text-white mb-4">The problem:</h2>');

  // Convert "Before the Golden Hour" h2 to section-title
  content = content.replace(/<h2 className="font-sans text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">/g, 
    '<h2 className="section-title text-white mb-6">');

  // Convert all top-level h2s in other components
  content = content.replace(/<h2 className="font-display text-\[clamp\([^\]]+\)\] font-extrabold max-w-\d+px\]?[^>]+>/g, (match) => {
    return `${match.split('className="')[0]}className="section-title text-white mb-5">`;
  });
  content = content.replace(/<h2 className="font-display text-\[clamp\([^\]]+\)\] font-extrabold[^>]+>/g, (match) => {
    return `${match.split('className="')[0]}className="section-title text-white mb-5">`;
  });
  content = content.replace(/<h2 className="font-display text-5xl md:text-6xl font-medium tracking-tight mb-8">/g, (match) => {
    return `<h2 className="section-title text-white mb-8">`;
  });

  // Join section unique glitch title
  content = content.replace(/<h2 className="font-display text-\[clamp\([^\]]+\)\] font-extrabold leading-\[1\.0\] tracking-\[-0\.03em\] mb-5 glitch" data-text="This window won't stay open\.">/g,
    '<h2 className="section-title text-white mb-5 glitch" data-text="This window won\'t stay open.">');

  // Scientific Validation h3 inside Solution
  content = content.replace(/<h3 className="font-display text-\[28px\] md:text-\[36px\] font-bold text-white tracking-\[-0\.02em\]">/g,
    '<h2 className="section-title text-white mb-6">');

  // Convert subtitles (Eyebrows)
  content = content.replace(/<span className="font-mono text-\[1[12]px\] tracking-\[0\.25em\] uppercase text-\[rgba\(0,207,255,0\.8\)\]">/g, 
    '<span className="section-subtitle text-[var(--color-cyan)] mb-4 inline-block">');

  // "The Crisis" eyebrow
  content = content.replace(/<span className="font-display text-\[var\(--color-red\)\] text-sm uppercase tracking-\[0\.3em\] font-bold">The Crisis<\/span>/g, 
    '<span className="section-subtitle text-[var(--color-red)]">The Crisis</span>');

  // Descriptions in these sections
  content = content.replace(/<p className="max-w-\[680px\] mx-auto text-white\/80 text-\[18px\] leading-\[1\.75\] font-light">/g, 
    '<p className="section-desc max-w-[680px] mx-auto text-center mb-10">');
  content = content.replace(/<p className="text-xl text-white\/90 leading-relaxed font-light mb-4">/g, 
    '<p className="section-desc mb-4">');
  content = content.replace(/<p className="text-\[17px\] text-white\/80 leading-relaxed font-light">/g, 
    '<p className="section-desc">');
  content = content.replace(/<p className="text-lg text-white\/70 leading-relaxed font-light">/g, 
    '<p className="section-desc">');

  // Write file
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Updated components for exact global typography mapping.");
