import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/applications")({
  component: Applications,
});

const apps = [
  { c: "Stripe", r: "Senior PM", d: "2 days ago", s: "Submitted" },
  { c: "Linear", r: "Staff PM", d: "5 days ago", s: "Recruiter screen" },
  { c: "Vercel", r: "Senior PM, AI", d: "1 week ago", s: "Onsite" },
  { c: "Notion", r: "PM, Search", d: "2 weeks ago", s: "Rejected" },
];

function Applications() {
  return (
    <>
      <TopBar title="Application Sender" subtitle="Auto-apply, autofill & recruiter outreach" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Applications</h3>
            <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-[var(--color-teal)] px-3 py-1.5 text-xs font-medium text-primary-foreground"><Sparkles className="h-3 w-3" /> New auto-apply</button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground uppercase tracking-wider">
              <tr><th className="text-left py-2 font-medium">Company</th><th className="text-left py-2 font-medium">Role</th><th className="text-left py-2 font-medium">Date</th><th className="text-left py-2 font-medium">Status</th></tr>
            </thead>
            <tbody>
              {apps.map((a, i) => (
                <tr key={i} className="border-t border-border/40">
                  <td className="py-3 font-medium">{a.c}</td>
                  <td className="py-3 text-muted-foreground">{a.r}</td>
                  <td className="py-3 text-muted-foreground">{a.d}</td>
                  <td className="py-3"><span className="rounded-full bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground">{a.s}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3"><Send className="h-4 w-4 text-primary" /><h3 className="font-semibold">Recruiter Outreach</h3></div>
          <p className="text-xs text-muted-foreground mb-4">Templates ready to send</p>
          <div className="space-y-3">
            {["Cold intro to recruiter", "Post-interview thank-you", "Polite status check-in", "Re-engage after silence"].map((t) => (
              <button key={t} className="w-full text-left rounded-xl border border-border/60 bg-secondary/30 px-3 py-2.5 text-sm hover:bg-secondary/50 transition">{t}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
