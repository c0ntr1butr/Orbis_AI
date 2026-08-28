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
    <div className="relative z-40 overflow-hidden border-b border-primary/15 bg-[linear-gradient(90deg,rgba(227,30,36,0.05),rgba(227,30,36,0.01)_30%,rgba(227,30,36,0.05))]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#fdf4f4] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#fdf4f4] to-transparent" />
      <div className="flex items-center gap-3 py-2.5">
        <span className="relative z-20 ml-4 flex shrink-0 items-center gap-1.5 rounded-full bg-live px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-[0_2px_8px_rgb(21_128_61_/_35%)]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-white" />
          </span>
          Live
        </span>
        <div className="marquee flex min-w-max gap-10 pr-10 text-[12px]">
          {loop.map((item, index) => {
            const [lead, ...rest] = item.split(" · ");
            const tail = rest.join(" · ");
            return (
              <span key={`${item}-${index}`} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span className="font-semibold text-zinc-800">{lead}</span>
                {tail && <span className="text-zinc-500"> · {tail}</span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
