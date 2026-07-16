import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
      <div className="mb-10 max-w-3xl sm:mb-14">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-white/45">{eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-card backdrop-blur-xl ${className}`}>{children}</div>;
}
