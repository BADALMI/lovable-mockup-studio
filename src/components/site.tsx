import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowRight, Check } from "lucide-react";

const primaryNav = [
  { to: "/programs", label: "Programs" },
  { to: "/companies", label: "For Companies" },
  { to: "/revenue-lab", label: "Resources" },
] as const;
const utilityNav = [
  { to: "/rinassa-ai", label: "Rinassa AI" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/login", label: "Login" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="leading-none">
      <div className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-navy-foreground" : "text-navy"}`}>HUNT N FARM</div>
      <div className={`text-xs ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>Tech Sales. Real Growth.</div>
    </Link>
  );
}

export function Btn({ to, children, variant = "gold" }: { to: string; children: ReactNode; variant?: "gold" | "outline" | "outlineDark" }) {
  const styles = {
    gold: "bg-gold text-gold-foreground hover:brightness-95",
    outline: "border border-gold text-navy-foreground hover:bg-gold/10",
    outlineDark: "border border-navy text-navy hover:bg-navy hover:text-navy-foreground",
  }[variant];
  return (
    <Link to={to} className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${styles}`}>
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-cream/95 backdrop-blur">
      <div className="hidden bg-navy md:block">
        <div className="mx-auto flex max-w-7xl justify-end gap-6 px-6 py-1.5 text-xs text-navy-foreground/80">
          {utilityNav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-gold" activeProps={{ className: "text-gold" }}>{n.label}</Link>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-navy hover:text-gold" activeProps={{ className: "text-gold" }}>{n.label}</Link>
          ))}
          <Link to="/apply" className="rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground hover:brightness-95">Apply Now</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t px-6 py-4 md:hidden">
          {[...primaryNav, ...utilityNav, { to: "/apply", label: "Apply Now" }].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-semibold text-navy">{n.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1fr_2fr]">
        <Logo light />
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-foreground/80 md:justify-end">
          {[...primaryNav, { to: "/placement", label: "Placement" }, ...utilityNav].map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-gold">{n.label}</Link>
          ))}
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-4 text-xs text-navy-foreground/60">
          <span>© 2026 Hunt n Farm. All rights reserved.</span>
          <span>Privacy Policy · Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub, image, children }: { eyebrow?: string; title: string; sub?: string; image?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      {image && <div className="absolute inset-0 bg-hero-overlay" />}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-navy-foreground/80">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ title, sub, children, muted }: { title?: string; sub?: string; children: ReactNode; muted?: boolean }) {
  return (
    <section className={muted ? "bg-secondary" : ""}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {title && <h2 className="text-3xl font-bold text-navy">{title}</h2>}
        {sub && <p className="mt-2 max-w-2xl text-muted-foreground">{sub}</p>}
        <div className={title || sub ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span>{i}</span></li>
      ))}
    </ul>
  );
}

export function Field({ label, type = "text", textarea, options }: { label: string; type?: string; textarea?: boolean; options?: string[] }) {
  const cls = "mt-1.5 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
  return (
    <label className="block text-sm font-semibold text-navy">
      {label}
      {textarea ? <textarea rows={4} className={cls} /> : options ? (
        <select className={cls}>{options.map((o) => <option key={o}>{o}</option>)}</select>
      ) : <input type={type} className={cls} />}
    </label>
  );
}

export function MockForm({ children, cta, done }: { children: ReactNode; cta: string; done: string }) {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="rounded-xl border bg-card p-8 text-center shadow-soft"><Check className="mx-auto h-10 w-10 text-gold" /><p className="mt-4 font-semibold text-navy">{done}</p><p className="mt-1 text-xs text-muted-foreground">(Mockup — no data is sent yet.)</p></div>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-xl border bg-card p-8 shadow-soft">
      {children}
      <button className="w-full rounded-md bg-gold py-3 text-sm font-bold text-gold-foreground hover:brightness-95">{cta}</button>
    </form>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
