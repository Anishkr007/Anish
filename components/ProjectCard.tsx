'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Check, ArrowUpRight } from 'lucide-react';
const Github = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>);

import type { Project } from '@/lib/content';

export function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/40 md:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-5xl font-semibold tracking-tighter text-white/10 transition-colors group-hover:text-white/20">{p.index}</span>
        {p.featured && (
          <span className="rounded-full bg-violet-500/15 px-3 py-1 font-mono text-xs font-medium text-violet-300">Featured</span>
        )}
      </div>

      <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-black">
        {p.icon}
      </div>

      <h3 className="mt-5 text-2xl font-semibold">{p.title}</h3>
      <p className="mt-2 text-white/60">{p.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />{h}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">{t}</span>
        ))}
      </div>

      {p.disclaimer && <p className="mt-4 text-xs font-medium text-amber-400/80">{p.disclaimer}</p>}

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        <a href={p.github} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105">
          <Github className="h-4 w-4" /> GitHub
        </a>
        {p.demo && p.demo !== '#' && (
          <a href={p.demo} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 text-sm">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
        {p.caseStudy && (
          <a href={p.caseStudy} className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-violet-300 hover:text-violet-200">
            Case study <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}