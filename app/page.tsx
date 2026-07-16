import { GlassCard, Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { metrics, process, profile, projects, services } from "@/lib/portfolio";

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-6 pb-16 pt-36 sm:pb-24 sm:pt-44 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-hero-radial" />
      <div className="absolute inset-0 -z-30 bg-graphite-950" />
      <div className="absolute left-1/2 top-0 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
            {profile.availability}
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">{profile.summary}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90">View selected work</a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-center font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08]">Start a project</a>
          </div>
        </div>

        <GlassCard className="relative overflow-hidden p-4 sm:p-6">
          <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-white/20 blur-3xl" />
          <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-white/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Launches that feel quiet, precise, and unmistakably premium.">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <GlassCard key={project.title} className="group overflow-hidden p-0">
            <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-90 transition duration-500 group-hover:scale-[1.03]`} />
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{project.description}</p>
              <p className="mt-6 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/75">{project.impact}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="Capabilities" title="A full-stack design partner for teams that care about the details.">
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <GlassCard key={service} className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">✦</span>
            <p className="text-lg font-medium tracking-[-0.02em] text-white/88">{service}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" eyebrow="Process" title="From product intent to polished production in three focused moves.">
      <div className="grid gap-5 md:grid-cols-3">
        {process.map((item) => (
          <GlassCard key={item.step}>
            <p className="font-mono text-sm text-white/35">{item.step}</p>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-white/58">{item.copy}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-10 pt-12 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white text-black shadow-glow">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-black/45">Contact</p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Have a product that deserves a premium first impression?</h2>
          </div>
          <a href={`mailto:${profile.email}`} className="rounded-full bg-black px-7 py-4 text-center font-semibold text-white transition hover:bg-black/80">{profile.email}</a>
        </div>
      </div>
      <footer className="flex flex-col gap-3 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Built with Next.js and Tailwind CSS.</p>
        <p>{profile.role} · {profile.location}</p>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-graphite-950 text-white">
      <SiteHeader />
      <Hero />
      <Work />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
