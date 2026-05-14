import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { Sparkles, Send, Building2 } from "lucide-react";

export const Route = createFileRoute("/dashboard/cover-letter")({
  component: CoverLetter,
});

function CoverLetter() {
  return (
    <>
      <TopBar title="Cover Letter Writer" subtitle="Recruiter-grade letters in your voice" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 space-y-4">
            <Field label="Company"><input className="input-field" defaultValue="Stripe" /></Field>
            <Field label="Role"><input className="input-field" defaultValue="Senior Product Manager" /></Field>
            <Field label="Job Description">
              <textarea rows={6} className="input-field" placeholder="Paste the JD here…" defaultValue="We are looking for a Senior PM to lead checkout..." />
            </Field>
            <Field label="Tone">
              <div className="flex gap-2">
                {["Professional", "Warm", "Confident", "Concise"].map((t, i) => (
                  <button key={t} className={`rounded-full px-3 py-1.5 text-xs ring-1 transition ${i === 1 ? "bg-primary/15 text-primary ring-primary/40" : "bg-secondary/40 text-muted-foreground ring-border"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </Field>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-4 py-2.5 text-sm font-medium text-primary-foreground glow-cyan">
              <Sparkles className="h-4 w-4" /> Generate Cover Letter
            </button>
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Draft preview</h3>
            </div>
            <button className="text-xs text-primary inline-flex items-center gap-1"><Send className="h-3 w-3" /> Copy</button>
          </div>
          <div className="prose prose-invert max-w-none text-sm leading-relaxed text-foreground/90 space-y-3">
            <p>Dear Stripe Hiring Team,</p>
            <p>When I shipped the new checkout flow at Lumen that moved conversion 11% in 60 days, I learned what most PMs forget: the magic is not in the framework, but in the relentless removal of friction…</p>
            <p>Your bet on programmable money rails is the most interesting product surface on the internet. I would love to bring my background in payments, growth experimentation, and platform PM to your checkout team.</p>
            <p>Warmly,<br />Alex Carter</p>
          </div>
        </div>
      </div>

      <style>{`.input-field{width:100%;border-radius:0.75rem;background:oklch(0.20 0.04 255 / 0.5);border:1px solid var(--color-border);padding:0.625rem 0.875rem;font-size:0.875rem;color:var(--color-foreground);outline:none}.input-field:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px oklch(0.72 0.16 230 / 0.2)}`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
