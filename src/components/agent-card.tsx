import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  accent?: "cyan" | "teal" | "orange";
  tags?: string[];
}

const accentMap = {
  cyan: "from-[oklch(0.72_0.16_230/0.6)] to-[oklch(0.72_0.16_230/0)]",
  teal: "from-[oklch(0.72_0.13_195/0.6)] to-[oklch(0.72_0.13_195/0)]",
  orange: "from-[oklch(0.72_0.18_50/0.55)] to-[oklch(0.72_0.18_50/0)]",
};

export function AgentCard({ icon: Icon, title, description, href = "/dashboard", accent = "cyan", tags = [] }: AgentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative"
    >
      <Link to={href} className="block">
        <div className="glass relative overflow-hidden rounded-2xl p-6 h-full">
          <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-radial ${accentMap[accent]} opacity-60 blur-2xl transition-opacity group-hover:opacity-100`}
               style={{ background: `radial-gradient(closest-side, var(--tw-gradient-stops))` }} />
          <div className="relative flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <h3 className="relative mt-5 text-lg font-semibold text-foreground">{title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          {tags.length > 0 && (
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-border/60 bg-secondary/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
