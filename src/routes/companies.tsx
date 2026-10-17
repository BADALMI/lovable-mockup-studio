import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Target, Users, Wrench, TrendingUp } from "lucide-react";
import companies from "@/assets/companies.jpg";
import { Btn, PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/companies")({
  head: () => seo("For Companies — Hunt n Farm Consulting", "GTM strategy, pipeline development, sales process improvement and sales team training."),
  component: Companies,
});

const services = [
  { icon: BarChart3, t: "Go-to-Market Strategy" },
  { icon: Target, t: "Outbound & Pipeline Development" },
  { icon: Users, t: "Sales Team Training" },
  { icon: Wrench, t: "Sales Process & Tools" },
  { icon: TrendingUp, t: "Advisory for Scaling Revenue" },
];

function Companies() {
  return (
    <>
      <PageHero eyebrow="Consulting" title="For Companies" sub="GTM strategy, pipeline development and sales team training." image={companies}>
        <Btn to="/contact">Book a Consultation</Btn>
      </PageHero>
      <Section title="Services">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="flex items-center gap-4 rounded-xl border bg-card p-6">
              <span className="rounded-md bg-gold/20 p-3"><s.icon className="h-6 w-6 text-navy" /></span>
              <span className="font-bold text-navy">{s.t}</span>
            </div>
          ))}
        </div>
        <div className="mt-10"><Btn to="/contact">Book a Consultation</Btn></div>
      </Section>
    </>
  );
}
