"use client";

const items = [
  "Line 3 · kit 7B pulled from overflow — 2 orders recovered",
  "Body shop · certified welder moving to Cell 4 (yellow OEE)",
  "Shift B · crew fill 92% vs certified need",
  "Copilot · material shortage + workforce gap on the same ticket",
  "OTIF · 6 of 11 at-risk orders still recoverable this shift",
  "SMT · changeover held — fill-rate risk flagged 4 hours early",
  "Rail cell · downtime yellow, next certified skill already en route",
  "FactoryOS · production and workforce now on one plant model",
];

export function LiveTicker() {
  const loop = [...items, ...items];
  return (
    <div className="relative z-40 overflow-hidden border-b border-black/8 bg-zinc-50">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-50 to-transparent" />
      <div className="flex items-center gap-3 py-2">
        <span className="relative z-20 ml-4 shrink-0 rounded-full border border-live/40 bg-zinc-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-live uppercase">
          Live
        </span>
        <div className="marquee flex min-w-max gap-10 pr-10 text-[12px] text-zinc-600">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
