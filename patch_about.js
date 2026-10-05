const fs = require('fs');

let about = `
'use client';
import { useEffect, useRef, useState } from 'react';
import { Section } from './ui/Section';

const COMMANDS: Record<string, string[]> = {
  help: ['about', 'skills', 'projects', 'experience', 'contact', 'clear'],
  about: ['Anish Kumar, final-year CSE (Data Science) at VIT.', 'Builds GenAI apps: multi-agent LLMs, RAG, full-stack.'],
  skills: ['Python, Java, C++, JavaScript', 'LangChain, LangGraph, FastAPI, React, Node'],
  projects: ['01 MedVision AI', '02 Wander AI', '03 NeoCode'],
  experience: ['LLM Evaluation Contributor @ Outlier (2025 - Present)'],
  contact: ['email: anish.kumar@gmail.com', 'github: github.com/Anishkr007'],
};

export function Terminal() {
  const [lines, setLines] = useState<string[]>(['Welcome. Type "help" to see commands.']);
  const [input, setInput] = useState('');
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (box.current) box.current.scrollTop = box.current.scrollHeight;
  }, [lines]);

  function run() {
    const cmd = input.trim().toLowerCase();
    setInput('');
    if (!cmd) return;
    if (cmd === 'clear') return setLines([]);
    setLines((l) => [...l, \`$ \${cmd}\`, ...(COMMANDS[cmd] ?? [\`command not found: \${cmd}\`])]);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] font-mono text-sm h-full flex flex-col">
      <div className="border-b border-white/10 px-4 py-3 text-xs text-white/40">anish@portfolio: ~</div>
      <div ref={box} className="flex-1 space-y-1 overflow-y-auto p-4 text-white/80 min-h-[200px] max-h-[300px]">
        {lines.map((l, i) => (
          <div key={i} className={l.startsWith('$') ? 'text-emerald-400' : ''}>{l}</div>
        ))}
        <div className="flex gap-2">
          <span className="text-emerald-400">$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && run()}
            className="flex-1 bg-transparent outline-none"
            aria-label="Terminal input"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

export function CodeCard() {
  const key = 'text-white/60', str = 'text-amber-300';
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] font-mono text-sm h-full flex flex-col">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-white/40">anish.ts</span>
      </div>
      <div className="flex-1 space-y-1 overflow-x-auto p-5 leading-7">
        <div><span className="text-violet-400">const</span> <span className="text-cyan-300">anish</span> <span className="text-white/50">=</span> {'{'}</div>
        <div className="pl-6"><span className={key}>role:</span> <span className={str}>{'"AI Engineer"'}</span>,</div>
        <div className="pl-6"><span className={key}>school:</span> <span className={str}>{'"VIT"'}</span>,</div>
        <div className="pl-6"><span className={key}>stack:</span> [<span className={str}>{'"LangGraph"'}</span>, <span className={str}>{'"FastAPI"'}</span>],</div>
        <div className="pl-6"><span className={key}>solved:</span> <span className="text-cyan-300">500</span>,</div>
        <div className="pl-6"><span className={key}>openToWork:</span> <span className="text-violet-400">true</span>,</div>
        <div>{'}'}</div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" label="About" title="Behind the code." subtitle="A brief look at who I am and what I do.">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
        <Terminal />
        <CodeCard />
      </div>
    </Section>
  );
}
`;
fs.writeFileSync('components/About.tsx', about, 'utf8');
