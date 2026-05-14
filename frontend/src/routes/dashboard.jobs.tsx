import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { Briefcase, MapPin, Sparkles, Filter } from "lucide-react";

export const Route = createFileRoute("/dashboard/jobs")({
  component: Jobs,
});

const jobs = [
  { c: "Stripe", r: "Senior Product Manager, Checkout", l: "Remote · US", s: "$210k–$240k", m: 94, tags: ["Payments", "Growth"] },
  { c: "Linear", r: "Staff PM, Platform", l: "Remote · Worldwide", s: "$220k–$260k", m: 91, tags: ["Platform", "DX"] },
  { c: "Vercel", r: "Senior PM, AI Tools", l: "SF · Hybrid", s: "$200k–$230k", m: 88, tags: ["AI", "DX"] },
  { c: "Notion", r: "PM, AI Search", l: "Remote · US", s: "$190k–$220k", m: 84, tags: ["AI", "Search"] },
  { c: "Arc Browser", r: "Founding PM", l: "NYC", s: "$180k–$220k", m: 80, tags: ["0→1"] },
];

function Jobs() {
  return (
    <>
      <TopBar title="Jobs Scout" subtitle="AI-curated roles ranked by skill match" />
      <div className="p-6 space-y-4">
        <div className="glass rounded-2xl p-4 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><Filter className="h-4 w-4" /> Filter</div>
          {["Remote", "$200k+", "Series B+", "AI", "Fintech"].map((f, i) => (
            <button key={f} className={`rounded-full px-3 py-1.5 text-xs ring-1 transition ${i < 2 ? "bg-primary/15 text-primary ring-primary/40" : "bg-secondary/40 text-muted-foreground ring-border"}`}>{f}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <div key={j.r} className="glass rounded-2xl p-5 group hover:ring-1 hover:ring-primary/30 transition">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-[var(--color-teal)]/30 flex items-center justify-center"><Briefcase className="h-4 w-4 text-primary" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">{j.c}</div>
                    <div className="text-sm font-semibold">{j.r}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold gradient-text">{j.m}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">match</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {j.l}</span>
                <span>·</span>
                <span>{j.s}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {j.tags.map((t) => <span key={t} className="rounded-full bg-secondary/40 px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>)}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-3 py-1.5 text-xs font-medium text-primary-foreground"><Sparkles className="h-3 w-3" /> Auto-apply</button>
                <button className="rounded-xl border border-border/60 px-3 py-1.5 text-xs hover:bg-secondary/40">Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
