'use client';
import { Section } from './ui/Section';
import { skills, coreCS } from '@/lib/content';

export function Skills() {
  return (
    <Section id="skills" label="Capabilities" title="Skills & Technologies." subtitle="The tools I use to build intelligent systems.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.category} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 transition-colors hover:border-violet-400/40">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-400">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold">{s.category}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 transition-colors hover:border-violet-400/40">
         <h3 className="text-lg font-semibold whitespace-nowrap">Core CS</h3>
         <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
           {coreCS.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">{c}</span>
           ))}
         </div>
      </div>
    </Section>
  );
}