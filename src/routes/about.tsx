import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, User } from "lucide-react";
import founder from "@/assets/founder.jpg.asset.json";
import { PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About Hunt n Farm — Our Story & Purpose", "Building stronger technology-sales professionals and helping businesses build better revenue engines."),
  component: About,
});

const values = [
  { icon: Target, t: "Our Mission", s: "Build people, revenue and opportunities." },
  { icon: Compass, t: "Our Approach", s: "Practical. Real-world. Career-focused." },
  { icon: User, t: "Founder-led", s: "Taught by practitioners who sell." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Our Story. Our Purpose." sub="Building stronger technology-sales professionals and helping businesses build better revenue engines." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="rounded-xl border bg-card p-6"><v.icon className="h-7 w-7 text-gold" /><h3 className="mt-4 font-bold text-navy">{v.t}</h3><p className="mt-1 text-sm text-muted-foreground">{v.s}</p></div>
          ))}
        </div>
      </Section>
      <Section title="Meet the Founder" muted>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <img src={founder.url} alt="Founder of Hunt n Farm" loading="lazy" className="h-48 w-48 rounded-2xl object-cover shadow-soft" />
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-navy">Founder name</h3>
            <p className="mt-1 text-sm font-semibold text-gold">Founder, Hunt n Farm</p>
            <p className="mt-4 text-muted-foreground">Founder bio and experience to be supplied and approved by the owner.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
