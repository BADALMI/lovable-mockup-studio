import { createFileRoute } from "@tanstack/react-router";
import { Btn, PageHero, Section, seo, CheckList } from "@/components/site";

export const Route = createFileRoute("/placement")({
  head: () => seo("Placement & Careers — Hunt n Farm", "Career preparation, interview practice and hiring-partner introductions for eligible learners."),
  component: Placement,
});

function Placement() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Placement & Careers" sub="From skills to opportunities." />
      <Section title="How we support you">
        <div className="grid gap-10 md:grid-cols-2">
          <CheckList items={["Career preparation and positioning", "Hiring-partner interviews", "Resume and LinkedIn support", "Interview preparation", "Ongoing placement support after the cohort"]} />
          <div className="rounded-xl border-l-4 border-gold bg-card p-6 text-sm text-muted-foreground">
            <p className="font-bold text-navy">Eligibility</p>
            <p className="mt-2">Placement support is available to learners who complete the program and meet assessment criteria. Hunt n Farm does not guarantee employment or a job offer.</p>
          </div>
        </div>
        <div className="mt-10"><Btn to="/apply">Apply Now</Btn></div>
      </Section>
    </>
  );
}
