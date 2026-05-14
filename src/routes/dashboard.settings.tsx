import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/top-bar";
import { Bell, CreditCard, Shield, User } from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" subtitle="Account, billing & preferences" />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4"><User className="h-4 w-4 text-primary" /><h3 className="font-semibold">Profile</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full name" value="Alex Carter" />
              <Field label="Email" value="alex@careercopilot.ai" />
              <Field label="Headline" value="Senior PM · Payments & Growth" />
              <Field label="Location" value="San Francisco, CA" />
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4"><Bell className="h-4 w-4 text-primary" /><h3 className="font-semibold">Notifications</h3></div>
            {["New AI suggestions", "Recruiter replies", "Weekly digest", "Auto-apply alerts"].map((n, i) => (
              <div key={n} className="flex items-center justify-between py-3 border-t border-border/40 first:border-t-0">
                <span className="text-sm">{n}</span>
                <span className={`relative h-5 w-9 rounded-full transition ${i % 2 === 0 ? "bg-primary" : "bg-secondary"}`}>
                  <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${i % 2 === 0 ? "left-4" : "left-0.5"}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3"><CreditCard className="h-4 w-4 text-[var(--color-teal)]" /><h3 className="font-semibold">Billing</h3></div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="text-xs uppercase tracking-widest text-primary">Current plan</div>
              <div className="mt-1 text-2xl font-semibold gradient-text">Pro</div>
              <div className="text-xs text-muted-foreground">Renews Mar 28 · $24/mo</div>
            </div>
            <button className="mt-3 w-full rounded-xl border border-border/60 px-3 py-2 text-sm hover:bg-secondary/40">Manage subscription</button>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3"><Shield className="h-4 w-4 text-[var(--color-orange-glow)]" /><h3 className="font-semibold">Security</h3></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Two-factor: Enabled</li>
              <li>• Active sessions: 2</li>
              <li>• Last login: 1h ago · SF</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input defaultValue={value} className="w-full rounded-xl bg-secondary/40 border border-border px-3 py-2 text-sm focus:border-primary outline-none" />
    </label>
  );
}
