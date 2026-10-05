'use client';
import { Section } from './ui/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/content';

export function Projects() {
  return (
    <Section id="work" label="Portfolio" title="Selected Works.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </Section>
  );
}