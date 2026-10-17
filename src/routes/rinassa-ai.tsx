import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/rinassa-ai")({
  head: () => seo("Rinassa AI — AI-Powered Sales & Revenue Workflows", "Rinassa AI is an upcoming platform from Hunt n Farm for smarter sales work."),
  component: Rinassa,
});

function Rinassa() {
  return (
    <>
      <PageHero eyebrow="Coming soon" title="Rinassa AI" sub="AI-powered sales and revenue workflows. An upcoming platform to help sales professionals and businesses work smarter with AI.">
        <a href="#" className="inline-flex items-center rounded-md bg-gold px-5 py-3 text-sm font-bold text-gold-foreground">Visit Rinassa AI →</a>
      </PageHero>
      <Section>
        <p className="rounded-xl bg-secondary p-6 text-sm text-muted-foreground">Rinassa AI will launch on its own site. This page will link there once it's live.</p>
      </Section>
    </>
  );
}
