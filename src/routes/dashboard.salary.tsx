import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { DollarSign, MessageSquare, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard/salary")({
  component: Salary,
});

function Salary() {
  return (
    <>
      <TopBar title="Salary Negotiator" subtitle="Live comp benchmarks & word-for-word scripts" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { c: "Stripe", l: "Senior PM", b: "$210k", s: "$70k", e: "0.12%" },
                { c: "Linear", l: "Senior PM", b: "$190k", s: "$50k", e: "0.30%" },
                { c: "Vercel", l: "Senior PM", b: "$200k", s: "$60k", e: "0.18%" },
              ].map((c) => (
                <div key={c.c} className="rounded-2xl border border-border/60 bg-secondary/30 p-5">
                  <div className="text-sm font-semibold">{c.c}</div>
                  <div className="text-xs text-muted-foreground">{c.l}</div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div><div className="text-xs text-muted-foreground">Base</div><div className="text-sm font-medium gradient-text">{c.b}</div></div>
                    <div><div className="text-xs text-muted-foreground">Stock</div><div className="text-sm font-medium gradient-text">{c.s}</div></div>
                    <div><div className="text-xs text-muted-foreground">Equity</div><div className="text-sm font-medium gradient-text">{c.e}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4"><MessageSquare className="h-4 w-4 text-primary" /><h3 className="font-semibold">Negotiation Scripts</h3></div>
            <div className="space-y-3">
              {[
                { t: "Counter the initial offer", s: "Thanks so much — I'm genuinely excited about joining the team. Based on the scope of the role and recent benchmarks I've seen for Senior PMs at comparable companies, I was hoping we could land closer to $230k base with $80k in stock. Is there room to move there?" },
                { t: "Push for a signing bonus", s: "I'm leaving meaningful unvested equity to join, so a signing bonus of $25k would help me bridge the gap. Would that work on your side?" },
                { t: "Ask for an early review", s: "If we're stuck on base, could we agree on a 6-month performance review with a defined band for an upward adjustment?" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xs text-primary uppercase tracking-widest">{s.t}</div>
                  <p className="mt-2 text-sm leading-relaxed">{s.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3"><DollarSign className="h-4 w-4 text-[var(--color-teal)]" /><h3 className="font-semibold">Estimated band</h3></div>
            <div className="text-3xl font-semibold gradient-text">$215k – $245k</div>
            <p className="text-xs text-muted-foreground mt-1">Senior PM · SF · 7 yrs · Fintech</p>
            <div className="mt-4 h-2 rounded-full bg-secondary/40 overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-primary to-[var(--color-teal)]" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">You're in the 67th percentile.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3"><TrendingUp className="h-4 w-4 text-[var(--color-orange-glow)]" /><h3 className="font-semibold">Confidence coach</h3></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Anchor first. Say a number, then stop talking.</li>
              <li>• Use silence as leverage. 5 seconds feels eternal.</li>
              <li>• Trade across base, equity, signing, and review.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
