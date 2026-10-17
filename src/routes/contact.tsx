import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Field, MockForm, PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Hunt n Farm", "Get in touch about programs, consulting or Revenue Lab."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's Talk." />
      <Section>
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <MockForm cta="Send Message" done="Thanks — we'll get back to you soon.">
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Name" /><Field label="Email" type="email" /></div>
            <Field label="I'm interested in" options={["Programs", "For Companies", "Revenue Lab", "Other"]} />
            <Field label="Message" textarea />
          </MockForm>
          <div className="space-y-6">
            <div className="flex gap-3"><Mail className="text-gold" /><div><p className="font-bold text-navy">Email</p><p className="text-sm text-muted-foreground">To be added</p></div></div>
            <div className="flex gap-3"><MapPin className="text-gold" /><div><p className="font-bold text-navy">Address</p><p className="text-sm text-muted-foreground">To be added later</p></div></div>
          </div>
        </div>
      </Section>
    </>
  );
}
