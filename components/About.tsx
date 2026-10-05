'use client';
import { Section } from './ui/Section';
import { Award } from 'lucide-react';
import { stats } from '@/lib/content';

export function About() {
  return (
    <Section id="about" label="About" title="Behind the code." subtitle="A brief look at who I am and what I do.">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="space-y-6 text-lg leading-relaxed text-white/70">
          <p>
            I&apos;m a final-year B.Tech CSE student at Vellore Institute of Technology, specializing in Data Science. I build end-to-end AI products — from RAG pipelines and multi-agent systems to full-stack web applications.
          </p>
          <p>
            I also work as an LLM Evaluation Contributor at Outlier, where I assess and improve model responses. I believe in shipping working products, not just demos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-violet-400/40">
              <div className="text-4xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left transition-colors hover:border-violet-400/40">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-400">
          <Award className="h-8 w-8" />
        </div>
        <div>
          <h4 className="text-xl font-semibold">IBM Generative AI Professional Certificate</h4>
          <p className="mt-1 text-white/60">Issued July 2026</p>
        </div>
      </div>
    </Section>
  );
}