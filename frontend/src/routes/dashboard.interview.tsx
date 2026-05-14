import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/top-bar";
import { ChevronDown, Mic, Code2, Users2, Brain } from "lucide-react";

export const Route = createFileRoute("/dashboard/interview")({
  component: Interview,
});

const tabs = [
  { id: "tech", label: "Technical", icon: Code2 },
  { id: "hr", label: "HR / Behavioral", icon: Users2 },
  { id: "coding", label: "Coding Topics", icon: Brain },
  { id: "mock", label: "Mock Interview", icon: Mic },
];

const questions = [
  { q: "Walk me through how you'd design Stripe's idempotency layer.", diff: "Hard", area: "System Design", a: "Use idempotency keys hashed against request+account, store in low-latency KV with TTL aligned to settlement window; on collision, return cached response. Discuss race conditions, fencing tokens, and durability tradeoffs." },
  { q: "Tell me about a time you led without authority.", diff: "Medium", area: "Behavioral", a: "Use STAR. Anchor on a measurable outcome and the specific behaviors you used to align stakeholders without formal power." },
  { q: "Implement a rate limiter (sliding window).", diff: "Medium", area: "Coding", a: "Discuss token bucket vs sliding log vs sliding counter. Code the sliding counter using a rolling sum; analyze O(1) per request, memory O(N buckets)." },
  { q: "How would you measure success of a new onboarding flow?", diff: "Easy", area: "Product", a: "Define activation, choose a leading vs lagging metric, design an A/B test with guardrail metrics." },
];

function Interview() {
  const [tab, setTab] = useState("tech");
  return (
    <>
      <TopBar title="Interview Coach" subtitle="Mock interviews, drills & instant feedback" />
      <div className="p-6 space-y-4">
        <div className="glass rounded-2xl p-2 inline-flex">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${tab === t.id ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "text-muted-foreground hover:text-foreground"}`}>
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {questions.map((q, i) => (
            <details key={i} className="glass rounded-2xl px-5 py-4 group">
              <summary className="flex cursor-pointer items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 text-xs text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate text-sm font-medium">{q.q}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="rounded-full bg-secondary/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{q.area}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ring-1 ${q.diff === "Hard" ? "bg-[var(--color-orange-glow)]/10 text-[var(--color-orange-glow)] ring-[var(--color-orange-glow)]/30" : q.diff === "Medium" ? "bg-primary/10 text-primary ring-primary/30" : "bg-[var(--color-teal)]/10 text-[var(--color-teal)] ring-[var(--color-teal)]/30"}`}>{q.diff}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition group-open:rotate-180" />
                </div>
              </summary>
              <div className="mt-4 rounded-xl border border-border/60 bg-secondary/30 p-4 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary text-xs uppercase tracking-widest">AI suggested answer</span>
                <p className="mt-2">{q.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
