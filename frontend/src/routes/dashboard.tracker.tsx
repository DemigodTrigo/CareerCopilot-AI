import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { motion } from "framer-motion";

export const Route = createFileRoute("/dashboard/tracker")({
  component: Tracker,
});

const columns = [
  { id: "applied", title: "Applied", accent: "primary", cards: [
    { c: "Stripe", r: "Senior PM", s: "$210k", d: "Mar 12", rec: "Sara K." },
    { c: "Notion", r: "PM, Search", s: "$190k", d: "Mar 10", rec: "James L." },
  ]},
  { id: "int", title: "Interviewing", accent: "teal", cards: [
    { c: "Linear", r: "Staff PM", s: "$240k", d: "Mar 8", rec: "Dan B." },
    { c: "Vercel", r: "Senior PM AI", s: "$210k", d: "Mar 5", rec: "Ana R." },
  ]},
  { id: "off", title: "Offer", accent: "orange", cards: [
    { c: "Arc Browser", r: "Founding PM", s: "$200k", d: "Mar 3", rec: "Josh H." },
  ]},
  { id: "rej", title: "Rejected", accent: "muted", cards: [
    { c: "Figma", r: "Senior PM", s: "$220k", d: "Feb 28", rec: "—" },
  ]},
];

const accentBar: Record<string, string> = {
  primary: "bg-primary",
  teal: "bg-[var(--color-teal)]",
  orange: "bg-[var(--color-orange-glow)]",
  muted: "bg-muted-foreground",
};

function Tracker() {
  return (
    <>
      <TopBar title="Job Tracker" subtitle="Pipeline view of every conversation" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {columns.map((col, ci) => (
            <div key={col.id} className="glass rounded-2xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${accentBar[col.accent]}`} />
                  <h3 className="text-sm font-semibold">{col.title}</h3>
                </div>
                <span className="rounded-full bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground">{col.cards.length}</span>
              </div>
              <div className="space-y-3 min-h-[120px]">
                {col.cards.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ci * 0.05 + i * 0.04 }}
                    className="rounded-xl border border-border/60 bg-secondary/30 p-3 hover:bg-secondary/50 transition cursor-grab"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold">{c.c}</div>
                        <div className="text-xs text-muted-foreground">{c.r}</div>
                      </div>
                      <span className="text-xs gradient-text font-medium">{c.s}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>{c.d}</span>
                      <span>{c.rec}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
