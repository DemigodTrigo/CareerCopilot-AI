import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  delta?: string;
  accent?: "cyan" | "teal" | "orange";
}

export function StatCard({ label, value, suffix = "", icon: Icon, delta, accent = "cyan" }: StatCardProps) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [value, mv]);

  const accentColor = accent === "teal" ? "text-[var(--color-teal)]" : accent === "orange" ? "text-[var(--color-orange-glow)]" : "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
        <Icon className={`h-4 w-4 ${accentColor}`} />
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <motion.span className="text-3xl font-semibold tracking-tight gradient-text">{rounded}</motion.span>
        {suffix && <span className="text-lg text-muted-foreground">{suffix}</span>}
      </div>
      {delta && <p className="mt-1 text-xs text-[var(--color-teal)]">{delta}</p>}
    </motion.div>
  );
}
