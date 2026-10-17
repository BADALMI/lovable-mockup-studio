import { createFileRoute } from "@tanstack/react-router";
import { Btn, PageHero, Section, seo, CheckList } from "@/components/site";

export const Route = createFileRoute("/programs/first-quota")({
  head: () => seo("First Quota — 6-Week Tech Sales Upskilling Cohort", "Curriculum, format and application path for the First Quota live online cohort."),
  component: FirstQuota,
});

const weeks = [
  "Revenue Architecture: How Money Actually Moves",
  "Discovery That Earns the Second Meeting",
  "Enterprise Deal Qualification & Multithreading",
  "Selling to US & Global Buyers",
  "Commercial Acumen: Pricing, Deals & Money Conversations",
  "Selling AI + The Job Sprint",
];

function FirstQuota() {
  return (
    <>
      <PageHero eyebrow="First Quota" title="Tech Sales Upskilling Cohort" sub="A six-week live online cohort for working professionals.">
        <Btn to="/apply">Apply Now</Btn>
      </PageHero>
      <Section title="6-Week Curriculum">
        <ol className="grid gap-4 md:grid-cols-2">
          {weeks.map((w, i) => (
            <li key={w} className="flex items-center gap-4 rounded-xl border bg-card p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold font-display font-bold text-gold-foreground">{i + 1}</span>
              <span className="font-semibold text-navy">{w}</span>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Who It's For" muted>
        <div className="grid gap-10 md:grid-cols-2">
          <CheckList items={["Working professionals moving into tech sales", "Early-career SDRs / BDRs wanting enterprise skills", "Founders and consultants who sell"]} />
          <CheckList items={["Project Atlas — real enterprise deal environment", "Revenue Score — baseline and exit assessment", "Career support and hiring-partner interviews (eligibility applies)"]} />
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn to="/apply">Apply Now</Btn>
          <Btn to="/contact" variant="outlineDark">Request Brochure</Btn>
        </div>
      </Section>
    </>
  );
}
