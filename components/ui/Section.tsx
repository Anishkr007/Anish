import { Container } from './Container';
export function Section({ id, label, title, subtitle, children }:
  { id: string; label: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">{label}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-white/60">{subtitle}</p>}
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}