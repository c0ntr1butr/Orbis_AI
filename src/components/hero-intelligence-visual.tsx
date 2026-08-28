import { ChevronRight, Sparkles } from "lucide-react";

const signals = ["Machine signals", "MES events", "Attendance", "Quality checks"];
const actions = ["Reassign operator", "Flag the risk", "Schedule service"];

export function HeroIntelligenceVisual() {
  return (
    <div className="glass orbis-glow relative overflow-hidden rounded-2xl p-5 sm:p-6">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl" />
      <p className="relative text-[11px] font-semibold tracking-wide text-zinc-400 uppercase">
        Factory intelligence, live
      </p>

      <div className="relative mt-5 flex items-center gap-2 sm:gap-3">
        <div className="min-w-0 flex-1 space-y-2">
          {signals.map((s, i) => (
            <div
              key={s}
              className="circuit-pulse truncate rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2 text-[11px] text-zinc-300 sm:text-xs"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-primary align-middle" />
              {s}
            </div>
          ))}
        </div>

        <ChevronRight className="size-4 shrink-0 text-zinc-600" />

        <div className="relative flex shrink-0 items-center justify-center">
          <span className="absolute inline-flex size-14 animate-ping rounded-full bg-primary/30" />
          <span className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#8B0000] shadow-[0_8px_24px_rgb(227_30_36_/_45%)]">
            <Sparkles className="size-6 text-white" />
          </span>
        </div>

        <ChevronRight className="size-4 shrink-0 text-zinc-600" />

        <div className="min-w-0 flex-1 space-y-2">
          {actions.map((a, i) => (
            <div
              key={a}
              className="float-card truncate rounded-lg border border-primary/25 bg-primary/8 px-2.5 py-2 text-right text-[11px] text-zinc-100 sm:text-xs"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {a}
              <span className="ml-1.5 inline-block size-1.5 rounded-full bg-live align-middle" />
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
