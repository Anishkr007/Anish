'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Mail } from 'lucide-react';
const Github = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>);
const Linkedin = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const Instagram = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);




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

export function Hero() {
  useEffect(() => {
    console.log('%c👋 Hey, fellow dev!', 'font-size:16px;color:#8b5cf6');
    console.log("Like what you see? Let's talk: anish.kumar@gmail.com");
  }, []);

  return (
    <section className="relative flex min-h-screen items-center pb-16 pt-32">
      <div className="absolute inset-0 -z-10 bg-grid" />
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs tracking-wider text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for work
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            I build{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">intelligent</span>{' '}
            systems.
          </h1>
          <div className="mt-6"><Typewriter words={ROLES} /></div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="rounded-full bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105">View Work</a>
            <button className="rounded-full border border-white/15 px-6 py-3 font-medium hover:bg-white/5 transition-colors" onClick={() => document.dispatchEvent(new CustomEvent('open-chat'))}>Ask my AI</button>
          </div>
          <div className="mt-10 flex gap-5 text-white/50">
             <a href="https://github.com/Anishkr007" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="h-5 w-5"/></a>
             <a href="https://linkedin.com/in/anishkumar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5"/></a>
             <a href="mailto:anish.kumar@gmail.com" className="hover:text-white transition-colors"><Mail className="h-5 w-5"/></a>
             <a href="https://www.instagram.com/_anish_kashyap17/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Instagram className="h-5 w-5"/></a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-2xl" />
          <div className="relative animate-float overflow-hidden rounded-3xl border border-white/10 p-1.5 bg-gradient-to-br from-violet-500/40 to-cyan-400/30">
            <Image src="/anish.jpeg" alt="Anish Kumar" width={420} height={520} priority
                   className="h-auto w-full rounded-[1.25rem] object-cover" />
          </div>
          <div className="absolute -left-6 top-12 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-4 py-2 font-mono font-mono text-xs font-medium text-white shadow-xl animate-float-delayed">
            GenAI Engineer
          </div>
          <div className="absolute -right-6 bottom-24 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-4 py-2 text-xs font-medium text-white shadow-xl animate-float-delayed-2">
            VIT &apos;27
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="h-8 w-5 rounded-full border-2 border-white/20 flex justify-center pt-1">
           <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-scroll-down" />
         </div>
      </div>
    </section>
  );
}