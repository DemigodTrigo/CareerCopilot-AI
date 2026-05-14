import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TopBar } from "@/components/top-bar";
import { StatCard } from "@/components/stat-card";
import { ATSRing } from "@/components/ats-ring";
import { AgentCard } from "@/components/agent-card";
import {
  FileText, PenLine, Mic, Linkedin, DollarSign, Search, Send,
  TrendingUp, Briefcase, Target, Sparkles, ChevronRight, Activity,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const sparklinePoints = [12, 18, 16, 24, 22, 30, 28, 36, 34, 42, 48, 46, 58, 64];

function Sparkline() {
  const max = Math.max(...sparklinePoints);
  const path = sparklinePoints
    .map((v, i) => {
      const x = (i / (sparklinePoints.length - 1)) * 100;
      const y = 100 - (v / max) * 100;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.16 230 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.72 0.16 230 / 0)" />
        </linearGradient>
      </defs>
      <path d={`${path} L100,100 L0,100 Z`} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="oklch(0.72 0.16 230)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function DashboardHome() {
  return (
    <>
      <TopBar title="Mission Control" subtitle="Your career operating system, live." />
      <div className="p-6 space-y-6">
        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <StatCard label="ATS Score" value={82} suffix="/100" icon={Target} delta="+6 this week" />
          <StatCard label="Jobs Applied" value={47} icon={Send} delta="+12 vs last week" accent="teal" />
          <StatCard label="Recruiter Replies" value={9} icon={Activity} delta="3 new today" accent="orange" />
          <StatCard label="Skill Match" value={91} suffix="%" icon={TrendingUp} delta="+4% with new keywords" />
        </motion.div>

        {/* Health + chart row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center">
            <ATSRing score={82} />
            <p className="mt-4 text-xs text-center text-muted-foreground max-w-[200px]">
              Resume health analyzed across 14 signals. Tap to see suggestions.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold">Weekly Progress</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Application velocity & response curve</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" />Applied</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--color-teal)]" />Replies</span>
              </div>
            </div>
            <div className="mt-6 h-48 relative">
              <Sparkline />
            </div>
          </div>
        </div>

        {/* AI insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="glass rounded-2xl p-6 lg:col-span-2 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, oklch(0.72 0.16 230 / 0.35), transparent)" }} />
            <div className="relative flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">AI Suggestions</span>
            </div>
            <div className="relative mt-4 space-y-3">
              {[
                { t: "Add 3 quantified bullets to your last role", a: "+12 ATS", icon: FileText },
                { t: "Generate cover letter for Stripe — Senior PM", a: "Draft now", icon: PenLine },
                { t: "Practice 8 system design questions for Tuesday", a: "Start prep", icon: Mic },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/30 p-3 hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><s.icon className="h-4 w-4" /></div>
                    <span className="text-sm">{s.t}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-primary">{s.a}<ChevronRight className="h-3 w-3" /></span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold">Interview Readiness</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Across technical, behavioral, system design</p>
            <div className="mt-5 space-y-4">
              {[
                { l: "Technical", v: 78, c: "bg-primary" },
                { l: "Behavioral", v: 88, c: "bg-[var(--color-teal)]" },
                { l: "System Design", v: 64, c: "bg-[var(--color-orange-glow)]" },
              ].map((b) => (
                <div key={b.l}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-muted-foreground">{b.l}</span>
                    <span className="font-medium">{b.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary/40 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${b.v}%` }} transition={{ duration: 1.2, ease: "easeOut" }} className={`h-full rounded-full ${b.c}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agents */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Your AI Agents</h2>
              <p className="text-xs text-muted-foreground">Seven specialized copilots, always on.</p>
            </div>
            <Link to="/dashboard/jobs" className="text-xs text-primary hover:underline">Browse jobs →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <AgentCard icon={FileText} title="Resume Doctor" description="ATS optimization, keyword extraction, AI scoring & rewrite." href="/dashboard/resume" tags={["ATS", "Rewrite"]} />
            <AgentCard icon={PenLine} title="Cover Letter Writer" description="Personalized, recruiter-grade letters in your voice." href="/dashboard/cover-letter" accent="teal" tags={["Personalized"]} />
            <AgentCard icon={Mic} title="Interview Coach" description="Mock interviews, system design drills, instant feedback." href="/dashboard/interview" accent="orange" tags={["Mock", "Coding"]} />
            <AgentCard icon={Linkedin} title="LinkedIn Optimizer" description="Headline, About & keyword tuning for recruiter search." href="/dashboard/linkedin" />
            <AgentCard icon={DollarSign} title="Salary Negotiator" description="Comp benchmarks, scripts & confidence coaching." href="/dashboard/salary" accent="teal" />
            <AgentCard icon={Briefcase} title="Jobs Scout" description="AI-discovered roles, perfectly matched to your skills." href="/dashboard/jobs" accent="orange" />
          </div>
        </div>
      </div>
    </>
  );
}
