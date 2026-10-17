import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, Users, Tag, Building2, Gauge, Handshake, LifeBuoy } from "lucide-react";
import { Btn, PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/programs/")({
  head: () => seo("Programs — Hunt n Farm Academy", "Practical, live and career-focused tech sales training, starting with First Quota."),
  component: Programs,
});

const facts = [
  { icon: CalendarDays, t: "6 weeks · Live online" },
  { icon: Clock, t: "8–10 hrs / week" },
  { icon: Users, t: "Cohort size: 8 (max)" },
  { icon: Tag, t: "Founding price: ₹35,000" },
];
const diff = [
  { icon: Building2, t: "Project Atlas", s: "Real enterprise deal environment" },
  { icon: Gauge, t: "Revenue Score", s: "Baseline and exit assessment" },
  { icon: Handshake, t: "Hiring Partner Interviews", s: "Subject to eligibility" },
  { icon: LifeBuoy, t: "Placement Support", s: "Career prep after the cohort" },
];

function Programs() {
  return (
    <>
      <PageHero eyebrow="Academy" title="Programs" sub="Practical, live and career-focused tech sales training." />
      <Section>
        <div className="rounded-2xl border bg-card p-10 shadow-soft">
          <p className="eyebrow">First Quota</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Tech Sales Upskilling Cohort</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.t} className="flex items-center gap-3 rounded-lg bg-secondary p-4 text-sm font-semibold text-navy"><f.icon className="h-5 w-5 text-gold" />{f.t}</div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Btn to="/apply">Apply for the Cohort</Btn>
            <Btn to="/programs/first-quota" variant="outlineDark">View Details</Btn>
          </div>
        </div>
      </Section>
      <Section title="What Makes It Different" muted>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diff.map((d) => (
            <div key={d.t} className="rounded-xl bg-card p-6">
              <d.icon className="h-7 w-7 text-navy" />
              <h3 className="mt-4 font-bold text-navy">{d.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.s}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
