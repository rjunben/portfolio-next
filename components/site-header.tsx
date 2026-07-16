import { navItems, profile } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/70 shadow-2xl backdrop-blur-2xl">
        <a href="#top" className="font-semibold tracking-tight text-white">{profile.name}</a>
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-white/85">Let&apos;s talk</a>
      </nav>
    </header>
  );
}
