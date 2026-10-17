import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Field, MockForm, Section, seo } from "@/components/site";

export const Route = createFileRoute("/login")({
  head: () => seo("Login — Hunt n Farm", "Learner and admin access for Hunt n Farm."),
  component: Login,
});

function Login() {
  const [tab, setTab] = useState<"Learner" | "Admin">("Learner");
  return (
    <Section>
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-bold text-navy">Login</h1>
        <p className="mt-1 text-muted-foreground">Access your account.</p>
        <div className="mt-6 flex border-b">
          {(["Learner", "Admin"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 text-sm font-semibold ${tab === t ? "border-b-2 border-gold text-navy" : "text-muted-foreground"}`}>{t} Login</button>
          ))}
        </div>
        <div className="mt-6">
          <MockForm cta="Login" done="Placeholder — learner access will open via the agreed platform.">
            <Field label="Email" type="email" /><Field label="Password" type="password" />
          </MockForm>
        </div>
        <p className="mt-4 rounded-md bg-secondary p-4 text-xs text-muted-foreground">At launch, this may redirect to Zoom / WhatsApp or show a message until the full learner portal is built.</p>
      </div>
    </Section>
  );
}
