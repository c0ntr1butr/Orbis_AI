"use client";

import { useEffect, useState } from "react";

const beats = [
  { t: "now", text: "Copilot flagged Line 3 — 18 latch kits short" },
  { t: "12s", text: "Overflow kit 7B reserved · 2 operators reassigned" },
  { t: "41s", text: "Crew fill on Cell 4 climbed 88% → 92%" },
  { t: "1m", text: "3 at-risk orders moved off the red list" },
  { t: "2m", text: "Control room synced OTIF + skill coverage" },
];

export function ActivityFeed() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % beats.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0e16]/80 p-4 backdrop-blur">
      <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        Happening on the floor
      </p>
      <ul className="space-y-2">
        {beats.map((beat, i) => (
          <li
            key={beat.text}
            className={`rounded-lg border px-3 py-2 text-xs transition-all duration-500 ${
              i === index
                ? "border-primary/40 bg-primary/10 text-white"
                : "border-transparent text-zinc-500"
            }`}
          >
            <span className="mr-2 font-mono text-[10px] text-primary">{beat.t}</span>
            {beat.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

