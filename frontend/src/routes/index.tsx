import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlowBackground } from "@/components/glow-bg";
import { AgentCard } from "@/components/agent-card";
import {
  Sparkles, ArrowRight, FileText, PenLine, Mic, Linkedin, DollarSign,
  Briefcase, Send, Play, Check, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareerCopilot AI — Your AI Career Operating System" },
      { name: "description", content: "Land better jobs faster with intelligent AI agents for resume optimization, interview prep, LinkedIn enhancement, salary negotiation, and automated career workflows." },
      { property: "og:title", content: "CareerCopilot AI" },
      { property: "og:description", content: "An AI-powered career operating system from the future." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GlowBackground />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[var(--color-teal)] ring-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">CareerCopilot</span>
          <span className="rounded-full border border-border/60 bg-secondary/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">AI OS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#agents" className="hover:text-foreground transition">Agents</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="hidden sm:inline-block text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
          <Link to="/dashboard" className="rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-4 py-2 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.02]">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
          New • 7 specialized AI agents now live
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Your <span className="gradient-text">AI Career</span><br />Copilot.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Land better jobs faster with intelligent agents for resume optimization, interview prep,
          LinkedIn enhancement, salary negotiation, and automated career workflows.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-5 py-3 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.03]">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-secondary/40 transition">
            <Play className="h-4 w-4 text-primary" /> Watch Demo
          </a>
        </motion.div>

        {/* Mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-border/60 p-3 ring-glow">
            <div className="rounded-2xl bg-background/60 p-6">
              <div className="flex items-center gap-1.5 mb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-orange-glow)]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]/60" />
              </div>
              <div className="grid grid-cols-4 gap-3 text-left">
                {[
                  { l: "ATS Score", v: "82", s: "+6" },
                  { l: "Applied", v: "47", s: "+12" },
                  { l: "Replies", v: "9", s: "+3" },
                  { l: "Match", v: "91%", s: "+4" },
                ].map((m) => (
                  <div key={m.l} className="rounded-xl border border-border/60 bg-card/40 p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                    <div className="mt-1 text-2xl font-semibold gradient-text">{m.v}</div>
                    <div className="text-[10px] text-[var(--color-teal)]">{m.s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl border border-border/60 bg-card/40 p-4 h-40 relative overflow-hidden">
                  <div className="absolute inset-0 shimmer" />
                  <div className="text-xs text-muted-foreground">Application velocity</div>
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="mt-3 h-24 w-full">
                    <path d="M0,40 L10,32 L20,35 L30,28 L40,22 L50,25 L60,18 L70,14 L80,10 L90,8 L100,4" stroke="oklch(0.72 0.16 230)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
                <div className="rounded-xl border border-border/60 bg-card/40 p-4 h-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-semibold gradient-text">82</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Resume Health</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary">Features</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">An OS for your career, not just a tool.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: "Always-on agents", d: "Seven specialists work in parallel — resume, interviews, outreach, negotiation." },
            { t: "Recruiter-grade output", d: "ATS-tuned bullets, keyword density, formatting verified across 200+ trackers." },
            { t: "Workflow automation", d: "From job discovery to follow-ups — let n8n + AI handle the busywork." },
            { t: "Cinematic insights", d: "Live analytics on velocity, response rate, skill match and readiness." },
            { t: "Privacy first", d: "Your resume never trains a model. Encrypted at rest, scoped per agent." },
            { t: "Built for speed", d: "Cmd+K, keyboard-first, instant agent invocations. Zero friction." },
          ].map((f, i) => (
            <motion.div key={f.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6">
              <div className="h-9 w-9 rounded-xl bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center text-primary">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-semibold">{f.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[var(--color-teal)]">Agents</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Meet your seven copilots.</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">Each agent is purpose-built and orchestrated through a unified workspace.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <AgentCard icon={FileText} title="Resume Doctor" description="ATS optimization, keyword gap analysis, AI rewrite." href="/dashboard/resume" tags={["ATS", "Rewrite"]} />
          <AgentCard icon={PenLine} title="Cover Letter Writer" description="Recruiter-grade letters tuned to each job and tone." href="/dashboard/cover-letter" accent="teal" tags={["Tone"]} />
          <AgentCard icon={Mic} title="Interview Coach" description="Mock interviews, technical drills, behavioral prep." href="/dashboard/interview" accent="orange" tags={["Mock"]} />
          <AgentCard icon={Linkedin} title="LinkedIn Optimizer" description="Profile rewrite, recruiter keyword tuning, strength score." href="/dashboard/linkedin" tags={["Profile"]} />
          <AgentCard icon={DollarSign} title="Salary Negotiator" description="Live comp benchmarks and word-for-word scripts." href="/dashboard/salary" accent="teal" tags={["Comp"]} />
          <AgentCard icon={Briefcase} title="Jobs Scout" description="AI-curated roles ranked by match, remote, and stage." href="/dashboard/jobs" accent="orange" tags={["Discovery"]} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[var(--color-orange-glow)]">Loved by 12,000+ job seekers</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Offers in weeks, not months.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { q: "I tripled my recruiter response rate in 10 days. The Resume Doctor is genuinely better than my coach.", n: "Maya R.", r: "Senior PM, Stripe" },
            { q: "The mock interview coach caught gaps I didn't know I had. Got the L5 offer.", n: "Daniel K.", r: "SWE, Google" },
            { q: "Negotiated a $42k bump using the salary scripts. Paid for itself 1000x.", n: "Priya S.", r: "Design Lead" },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-6">
              <div className="flex gap-0.5 text-[var(--color-orange-glow)]">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-[var(--color-teal)]" />
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Simple, scales with your search.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { n: "Starter", p: "$0", d: "Try the basics", f: ["3 resume scans", "5 cover letters", "Interview prep (limited)", "Community support"], cta: "Start free" },
            { n: "Pro", p: "$24", d: "Most popular", f: ["Unlimited resume rewrites", "Unlimited cover letters", "Mock interview engine", "LinkedIn optimizer", "Salary scripts", "Priority AI agents"], cta: "Start Pro", featured: true },
            { n: "Career+", p: "$49", d: "Full automation", f: ["Everything in Pro", "Auto-apply workflows", "Recruiter outreach", "Job tracker + Kanban", "Dedicated success coach"], cta: "Go Career+" },
          ].map((p) => (
            <div key={p.n} className={`relative rounded-2xl p-6 ${p.featured ? "glass-strong ring-1 ring-primary/40 ring-glow" : "glass"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-[var(--color-teal)] px-3 py-0.5 text-[10px] uppercase tracking-widest text-primary-foreground">Most popular</span>
              )}
              <div className="text-sm text-muted-foreground">{p.n}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold gradient-text">{p.p}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
              <ul className="mt-5 space-y-2">
                {p.f.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-[var(--color-teal)] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dashboard" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${p.featured ? "bg-gradient-to-r from-primary to-[var(--color-teal)] text-primary-foreground glow-cyan hover:scale-[1.02]" : "border border-border/60 hover:bg-secondary/40"}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[var(--color-teal)]">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {[
            { q: "How is CareerCopilot different from ChatGPT?", a: "Specialized agents, ATS scoring, recruiter benchmarks, automation flows, and a dashboard built for the entire job hunt — not a single chat box." },
            { q: "Will my resume be used to train models?", a: "Never. Your data is encrypted at rest and scoped per agent. We do not share with third-party training pipelines." },
            { q: "Do you support remote and international roles?", a: "Yes — Jobs Scout filters by remote, country, salary band, and stage." },
            { q: "Can I cancel anytime?", a: "Yes, cancel in one click from Settings. No questions asked." },
          ].map((f, i) => (
            <details key={i} className="glass rounded-2xl px-5 py-4 group">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                {f.q}
                <ChevronDown />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-12 text-center">
          <div className="absolute inset-0 -z-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.72 0.16 230 / 0.25), transparent 70%)" }} />
          <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight">Land your next offer with an unfair advantage.</h2>
          <p className="relative mt-4 text-muted-foreground">Free to start. No credit card. Cancel anytime.</p>
          <Link to="/dashboard" className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-6 py-3 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.03]">
            Launch CareerCopilot <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/60 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            © 2026 CareerCopilot AI. Built for the future of work.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
