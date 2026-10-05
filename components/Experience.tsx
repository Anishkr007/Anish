'use client';
import { motion } from 'framer-motion';
import { Briefcase, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { experience } from '@/lib/content';

export function Experience() {
  return (
    <Section
      id="experience"
      label="Career"
      title="Work Experience."
      subtitle="Hands-on experience evaluating and improving large language models."
    >
      <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-10 ml-2">
        {experience.map((e) => (
          <motion.article
            key={e.role + e.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/40 md:p-8"
          >
            {/* timeline dot */}
            <span className="absolute -left-[calc(1.5rem+5px)] top-8 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)] md:-left-[calc(2.5rem+5px)]" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
              {e.current && <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />}
              {e.period}
            </span>

            <h3 className="mt-4 text-2xl font-semibold">{e.role}</h3>
            <p className="mt-1 inline-flex items-center gap-2 text-violet-300">
              <Briefcase className="h-4 w-4" /> {e.company}
            </p>

            <ul className="mt-5 space-y-3 text-white/70">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {e.skills.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}