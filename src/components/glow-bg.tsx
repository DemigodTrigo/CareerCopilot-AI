export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.72 0.16 230 / 0.35), transparent)" }} />
      <div className="absolute bottom-[-200px] right-[-100px] h-[480px] w-[480px] rounded-full blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.72 0.13 195 / 0.30), transparent)" }} />
      <div className="absolute top-1/3 left-[-120px] h-[360px] w-[360px] rounded-full blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.72 0.18 50 / 0.18), transparent)" }} />
    </div>
  );
}
