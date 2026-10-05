const fs = require('fs');

// 1. layout.tsx
let layout = fs.readFileSync('app/layout.tsx', 'utf8');
if (!layout.includes('JetBrains_Mono')) {
  layout = layout.replace(
    "import { Syne, Inter } from 'next/font/google';",
    "import { Syne, Inter, JetBrains_Mono } from 'next/font/google';"
  );
  layout = layout.replace(
    "const inter = Inter({",
    "const mono = JetBrains_Mono({\n  subsets: ['latin'],\n  variable: '--font-jetbrains',\n  display: 'swap',\n});\n\nconst inter = Inter({"
  );
  layout = layout.replace(
    "className={`\\${syne.variable} \\${inter.variable} scroll-smooth`}",
    "className={`\\${syne.variable} \\${inter.variable} \\${mono.variable} scroll-smooth`}"
  );
  fs.writeFileSync('app/layout.tsx', layout, 'utf8');
}

// 2. globals.css
let css = fs.readFileSync('app/globals.css', 'utf8');
if (!css.includes('--font-mono')) {
  css = css.replace(
    "--font-body: var(--font-body);",
    "--font-body: var(--font-body);\n  --font-mono: var(--font-jetbrains);"
  );
  css += `\n
.bg-grid {
  background-image:
    linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
}\n`;
  fs.writeFileSync('app/globals.css', css, 'utf8');
}

// 3. Section.tsx
let section = fs.readFileSync('components/ui/Section.tsx', 'utf8');
section = section.replace(
  '<p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">{label}</p>',
  '<p className="font-mono text-sm tracking-wider text-violet-400">// {label.toLowerCase()}</p>'
);
fs.writeFileSync('components/ui/Section.tsx', section, 'utf8');

// 4. Hero.tsx
let hero = fs.readFileSync('components/Hero.tsx', 'utf8');
if (!hero.includes('Typewriter')) {
  hero = hero.replace("'use client';", "'use client';\nimport { useEffect, useState } from 'react';");
  
  const typewriterCode = `
export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];
    const done = text === word;
    const delay = done && !del ? 1400 : del ? 35 : 70;
    const t = setTimeout(() => {
      if (done && !del) setDel(true);
      else if (del && text === '') { setDel(false); setI((i + 1) % words.length); }
      else setText(del ? word.slice(0, -1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <p className="font-mono text-lg text-white/60">
      <span className="text-emerald-400">$</span> {text}
      <span className="animate-pulse text-violet-400">▍</span>
    </p>
  );
}

const ROLES = ['Generative AI Developer', 'Multi-agent LLM Builder', 'RAG Engineer', 'Full-stack Developer'];
`;

  hero = hero.replace('export function Hero() {', typewriterCode + '\nexport function Hero() {');
  
  // Replace the old description with Typewriter
  hero = hero.replace(/<p className="mt-6 max-w-lg text-lg text-white\/60">[\s\S]*?<\/p>/, '<div className="mt-6"><Typewriter words={ROLES} /></div>');
  
  // Easter egg
  hero = hero.replace('export function Hero() {', `export function Hero() {\n  useEffect(() => {\n    console.log('%c👋 Hey, fellow dev!', 'font-size:16px;color:#8b5cf6');\n    console.log("Like what you see? Let's talk: anish.kumar@gmail.com");\n  }, []);\n`);
  
  // Add Grid bg
  hero = hero.replace('<section className="relative flex min-h-screen items-center pb-16 pt-32">', '<section className="relative flex min-h-screen items-center pb-16 pt-32">\n      <div className="absolute inset-0 -z-10 bg-grid" />');
  
  // Make meta tags mono
  hero = hero.replace('text-xs uppercase tracking-widest', 'font-mono text-xs tracking-wider');
  hero = hero.replace('text-xs font-medium text-white shadow-xl', 'font-mono text-xs font-medium text-white shadow-xl');
  hero = hero.replace('text-xs font-medium text-white shadow-xl', 'font-mono text-xs font-medium text-white shadow-xl');
  
  fs.writeFileSync('components/Hero.tsx', hero, 'utf8');
}

// 5. Replace mono tags globally
const applyMonoRegex = (file, replacements) => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([regex, to]) => {
    content = content.replace(regex, to);
  });
  fs.writeFileSync(file, content, 'utf8');
};

applyMonoRegex('components/Experience.tsx', [
  [/text-xs text-white\/70/g, 'font-mono text-xs text-white/70']
]);
applyMonoRegex('components/Education.tsx', [
  [/text-xs text-white\/70/g, 'font-mono text-xs text-white/70']
]);
applyMonoRegex('components/Skills.tsx', [
  [/text-sm text-white\/70/g, 'font-mono text-sm text-white/70']
]);
applyMonoRegex('components/ProjectCard.tsx', [
  [/text-xs font-medium text-violet-300/g, 'font-mono text-xs font-medium text-violet-300'],
  [/text-5xl font-semibold/g, 'font-mono text-5xl font-semibold tracking-tighter'],
  [/text-xs text-white\/70/g, 'font-mono text-xs text-white/70']
]);
