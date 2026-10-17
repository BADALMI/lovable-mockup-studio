import { createFileRoute } from "@tanstack/react-router";
import { Field, MockForm, PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/apply")({
  head: () => seo("Apply Now — First Quota Cohort", "Apply for the First Quota six-week tech sales upskilling cohort."),
  component: Apply,
});

function Apply() {
  return (
    <>
      <PageHero eyebrow="First Quota" title="Apply for the Cohort" sub="Tell us about yourself. We review every application and follow up by email." />
      <Section>
        <div className="mx-auto max-w-2xl">
          <MockForm cta="Submit Application" done="Application received — our team will review it and follow up with next steps.">
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Full name" /><Field label="Email" type="email" /></div>
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Phone" type="tel" /><Field label="LinkedIn URL" /></div>
            <Field label="Current role" />
            <Field label="Years of experience" options={["0–1", "1–3", "3–5", "5+"]} />
            <Field label="Why tech sales?" textarea />
          </MockForm>
        </div>
      </Section>
    </>
  );
}
