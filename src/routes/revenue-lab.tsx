import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/revenue-lab")({
  head: () => seo("Revenue Lab — Free Weekly Sales Workshops", "Join Hunt n Farm's free weekly workshop and community for practical sales insights."),
  component: RevenueLab,
});

const workshops = [
  { m: "AUG", d: "16", t: "Discovery That Gets a Second Meeting" },
  { m: "AUG", d: "30", t: "Enterprise Deal Qualification" },
  { m: "SEP", d: "13", t: "Pricing Conversations Without Fear" },
];

function RevenueLab() {
  const [reg, setReg] = useState<string[]>([]);
  return (
    <>
      <PageHero eyebrow="Community" title="Revenue Lab" sub="Free weekly workshops. Real insights." />
      <Section title="Upcoming Workshops" sub="Sample dates shown — final schedule to be confirmed.">
        <div className="grid gap-6 md:grid-cols-3">
          {workshops.map((w) => (
            <div key={w.t} className="rounded-xl border bg-card p-6 shadow-soft">
              <div className="flex gap-4">
                <div className="rounded-md bg-navy px-3 py-2 text-center text-navy-foreground">
                  <div className="text-xs">{w.m}</div><div className="font-display text-2xl font-bold">{w.d}</div>
                </div>
                <div><h3 className="font-bold text-navy">{w.t}</h3><p className="mt-1 text-sm text-muted-foreground">5:00 PM – 6:30 PM IST</p></div>
              </div>
              <button onClick={() => setReg([...reg, w.t])} disabled={reg.includes(w.t)} className="mt-6 w-full rounded-md bg-gold py-2.5 text-sm font-bold text-gold-foreground disabled:opacity-60">
                {reg.includes(w.t) ? "Registered ✓" : "Register Now"}
              </button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
