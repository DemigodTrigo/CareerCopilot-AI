import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/dashboard/linkedin")({
  component: LinkedInOpt,
});

function LinkedInOpt() {
  return (
    <>
      <TopBar title="LinkedIn Optimizer" subtitle="Recruiter-tuned headline, About & keywords" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Section title="Headline" before="Senior PM at Lumen" after="Senior PM • Payments & Growth • Shipped checkout that lifted conversion 11% • ex-Stripe partner" />
          <Section title="About" before="Experienced product manager with a passion for building delightful experiences across multiple industries." after="I lead 0→1 payments & growth surfaces. Recent: shipped Lumen's new checkout (+11% conv, $4.2M ARR). I obsess over activation, run sharp A/B programs, and mentor PMs into staff roles. Previously at Stripe partner team. Open to Senior/Staff PM roles in fintech." />
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center text-primary"><Linkedin className="h-7 w-7" /></div>
            <div className="mt-4 text-3xl font-semibold gradient-text">87%</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Profile Strength</div>
            <div className="mt-4 h-2 w-full rounded-full bg-secondary/40 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "87%" }} transition={{ duration: 1.4 }} className="h-full bg-gradient-to-r from-primary to-[var(--color-teal)]" />
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Recruiter Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {["payments", "checkout", "growth", "0-to-1", "experimentation", "fintech", "platform PM", "leadership"].map((k) => (
                <span key={k} className="rounded-full bg-primary/10 ring-1 ring-primary/30 text-primary px-2.5 py-1 text-xs">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, before, after }: { title: string; before: string; after: string }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <button className="inline-flex items-center gap-1.5 text-xs text-primary"><Sparkles className="h-3.5 w-3.5" /> Regenerate</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Before</div>
          <p className="text-sm text-muted-foreground">{before}</p>
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 ring-glow">
          <div className="text-[10px] uppercase tracking-widest text-primary mb-2">AI optimized</div>
          <p className="text-sm">{after}</p>
        </div>
      </div>
    </div>
  );
}
