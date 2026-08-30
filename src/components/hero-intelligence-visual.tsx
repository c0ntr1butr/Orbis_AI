import { Sparkles } from "lucide-react";

const signals = ["Machine signals", "MES events", "Attendance", "Quality checks"];
const actions = ["Reassign operator", "Flag the risk", "Schedule service", "Notify supervisor"];

export function HeroIntelligenceVisual() {
  return (
    <div className="glass orbis-glow relative overflow-hidden rounded-2xl p-5 sm:p-6">
      <div className="drift-slow pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl" />
      <div className="drift-slow-delayed pointer-events-none absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-ai-violet/20 blur-3xl" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <path
          className="circuit-pulse"
          d="M0 20 C 30 20, 30 50, 50 50"
          stroke="url(#heroLine)"
          strokeWidth="0.4"
          fill="none"
          style={{ animationDuration: "3.2s" }}
        />
        <path
          className="circuit-pulse"
          d="M0 80 C 30 80, 30 50, 50 50"
          stroke="url(#heroLine)"
          strokeWidth="0.4"
          fill="none"
          style={{ animationDuration: "3.8s", animationDelay: "0.4s" }}
        />
        <path
          className="circuit-pulse"
          d="M100 15 C 70 15, 70 50, 50 50"
          stroke="url(#heroLine)"
          strokeWidth="0.4"
          fill="none"
          style={{ animationDuration: "3.5s", animationDelay: "0.2s" }}
        />
        <path
          className="circuit-pulse"
          d="M100 85 C 70 85, 70 50, 50 50"
          stroke="url(#heroLine)"
          strokeWidth="0.4"
          fill="none"
          style={{ animationDuration: "4.1s", animationDelay: "0.6s" }}
        />
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--ai-cyan)" />
            <stop offset="100%" stopColor="var(--ai-violet)" />
          </linearGradient>
        </defs>
      </svg>

      <p className="relative flex items-center gap-2 text-[11px] font-semibold tracking-wide text-zinc-400 uppercase">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-live" />
        </span>
        Factory intelligence, live
      </p>

      <div className="relative mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <div className="min-w-0 space-y-2">
          {signals.map((s, i) => (
            <div key={s} className="relative">
              <div
                className="circuit-pulse truncate rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2 text-[11px] text-zinc-300 sm:text-xs"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-ai-cyan align-middle" />
                {s}
              </div>
              <span
                className="particle-flow absolute top-1/2 -right-2 hidden size-1 rounded-full bg-ai-cyan sm:block"
                style={{ ["--particle-distance" as string]: "10px", animationDelay: `${i * 0.35}s` }}
              />
            </div>
          ))}
        </div>

        <div className="relative flex shrink-0 items-center justify-center">
          <span className="absolute inline-flex size-16 animate-ping rounded-full bg-ai-violet/25" />
          <span
            className="absolute inline-flex size-16 animate-ping rounded-full bg-primary/20"
            style={{ animationDelay: "0.6s" }}
          />
          <span className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-ai-violet via-primary to-[#8B0000] shadow-[0_8px_28px_rgb(139_92_246_/_35%)]">
            <Sparkles className="size-6 text-white" />
          </span>
        </div>

        <div className="min-w-0 space-y-2">
          {actions.map((a, i) => (
            <div key={a} className="relative">
              <span
                className="particle-flow absolute top-1/2 -left-2 hidden size-1 rounded-full bg-primary sm:block"
                style={{ ["--particle-distance" as string]: "10px", animationDelay: `${i * 0.35}s` }}
              />
              <div
                className="float-card truncate rounded-lg border border-primary/25 bg-primary/8 px-2.5 py-2 text-right text-[11px] text-zinc-100 sm:text-xs"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {a}
                <span className="ml-1.5 inline-block size-1.5 rounded-full bg-live align-middle" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="relative mt-5 text-center text-[11px] text-zinc-500">
        Signals → insight → action, continuously.
      </p>
    </div>
  );
}
