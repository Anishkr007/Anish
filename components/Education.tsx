'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section } from './ui/Section';
import { education } from '@/lib/content';

export function Education() {
  return (
    <Section id="education" label="Academic" title="Education.">
      <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-10 ml-2">
        {education.map((e) => (
          <motion.article
            key={e.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/40 md:p-8"
          >
            <span className="absolute -left-[calc(1.5rem+5px)] top-8 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)] md:-left-[calc(2.5rem+5px)]" />
            
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
              {e.period}
            </span>
            <h3 className="mt-4 text-2xl font-semibold">{e.degree}</h3>
            <p className="mt-1 inline-flex items-center gap-2 text-violet-300">
              <GraduationCap className="h-4 w-4" /> {e.school}
            </p>
            <p className="mt-4 text-white/70">{e.details}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}