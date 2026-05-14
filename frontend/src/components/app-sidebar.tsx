import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard, FileText, PenLine, Mic, Linkedin, DollarSign,
  Search, Send, KanbanSquare, Settings, Sparkles, LogOut,
} from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/resume", label: "Resume Doctor", icon: FileText },
  { to: "/dashboard/cover-letter", label: "Cover Letters", icon: PenLine },
  { to: "/dashboard/interview", label: "Interview Coach", icon: Mic },
  { to: "/dashboard/linkedin", label: "LinkedIn Optimizer", icon: Linkedin },
  { to: "/dashboard/salary", label: "Salary Negotiator", icon: DollarSign },
  { to: "/dashboard/jobs", label: "Jobs Scout", icon: Search },
  { to: "/dashboard/applications", label: "Applications", icon: Send },
  { to: "/dashboard/tracker", label: "Job Tracker", icon: KanbanSquare },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
] as const;

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/60 bg-sidebar/60 backdrop-blur-2xl">
      <Link to="/" className="flex items-center gap-2 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[var(--color-teal)] ring-glow">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <div>
          <div className="text-sm font-semibold tracking-tight">CareerCopilot</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">AI OS</div>
        </div>
      </Link>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {nav.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/15 to-transparent ring-1 ring-primary/30"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className="relative h-4 w-4" />
              <span className="relative">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/60 p-4">
        <div className="glass rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-[var(--color-teal)]" />
            <div className="flex-1 min-w-0">
              <div className="truncate text-xs font-semibold">Alex Carter</div>
              <div className="truncate text-[10px] text-muted-foreground">Pro plan</div>
            </div>
            <button className="text-muted-foreground hover:text-foreground"><LogOut className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </aside>
  );
}
