import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TopBar } from "@/components/top-bar";
import { ATSRing } from "@/components/ats-ring";
import { Upload, FileText, Sparkles, Check, AlertTriangle, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard/resume")({
  component: ResumeDoctor,
});

function ResumeDoctor() {
  const keywords = [
    { k: "TypeScript", ok: true }, { k: "System Design", ok: true }, { k: "Leadership", ok: false },
    { k: "GraphQL", ok: true }, { k: "A/B Testing", ok: false }, { k: "Mentorship", ok: true },
    { k: "Roadmapping", ok: false }, { k: "OKRs", ok: true },
  ];
  return (
    <>
      <TopBar title="Resume Doctor" subtitle="ATS optimization, keyword analysis & rewrite" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8">
            <div className="flex flex-col items-center justify-center text-center border-2 border-dashed border-border/60 rounded-xl py-14 hover:border-primary/40 transition cursor-pointer">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center text-primary float">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">Drop your resume here</h3>
              <p className="mt-1 text-sm text-muted-foreground">PDF, DOCX up to 10MB · or paste text</p>
              <button className="mt-5 rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-5 py-2 text-sm font-medium text-primary-foreground glow-cyan">Choose file</button>
            </div>
          </motion.div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">AI Recommendations</h3>
            </div>
            <div className="space-y-3">
              {[
                { t: "Replace 'responsible for' with active verbs in 6 bullets", s: "+8 ATS", icon: TrendingUp },
                { t: "Quantify outcomes in your last role (3 bullets missing metrics)", s: "+5 ATS", icon: TrendingUp },
                { t: "Add missing keyword: 'A/B Testing', 'Roadmapping'", s: "+9 ATS", icon: AlertTriangle },
                { t: "Trim summary from 6 lines to 3", s: "+2 ATS", icon: Check },
              ].map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/30 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><r.icon className="h-4 w-4" /></div>
                    <span className="text-sm">{r.t}</span>
                  </div>
                  <span className="text-xs font-medium text-[var(--color-teal)]">{r.s}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Keyword Gap</h3>
              <span className="text-xs text-muted-foreground">vs Senior PM at Stripe</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <span key={k.k} className={`rounded-full px-3 py-1.5 text-xs ring-1 ${k.ok ? "bg-[var(--color-teal)]/10 text-[var(--color-teal)] ring-[var(--color-teal)]/30" : "bg-[var(--color-orange-glow)]/10 text-[var(--color-orange-glow)] ring-[var(--color-orange-glow)]/30"}`}>
                  {k.k} {k.ok ? "✓" : "+"}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 flex flex-col items-center">
            <ATSRing score={82} size={200} />
            <div className="mt-4 grid grid-cols-3 gap-3 w-full text-center">
              {[{ l: "Format", v: 92 }, { l: "Keywords", v: 74 }, { l: "Impact", v: 80 }].map((s) => (
                <div key={s.l}>
                  <div className="text-lg font-semibold gradient-text">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3"><FileText className="h-4 w-4 text-primary" /><h3 className="font-semibold">Recent Scans</h3></div>
            <ul className="space-y-2 text-sm">
              {["Resume_v4.pdf · 82", "Resume_v3.pdf · 71", "Resume_v2.pdf · 64"].map((r) => (
                <li key={r} className="flex items-center justify-between rounded-lg border border-border/60 bg-secondary/30 px-3 py-2">
                  <span className="truncate text-muted-foreground">{r}</span>
                  <span className="text-xs text-primary">View</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
