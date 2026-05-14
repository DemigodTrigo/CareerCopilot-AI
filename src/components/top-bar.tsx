import { Bell, Search, Command } from "lucide-react";

export function TopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border/60 bg-background/40 px-6 py-4 backdrop-blur-xl">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/30 px-3 py-1.5 text-sm text-muted-foreground">
          <Search className="h-3.5 w-3.5" />
          <span>Search agents, jobs…</span>
          <kbd className="ml-3 flex items-center gap-0.5 rounded border border-border/60 px-1.5 py-0.5 text-[10px]">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </div>
        <button className="relative rounded-xl border border-border/60 bg-secondary/30 p-2 text-muted-foreground hover:text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-orange-glow)]" />
        </button>
      </div>
    </header>
  );
}
