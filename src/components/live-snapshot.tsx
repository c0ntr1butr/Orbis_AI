"use client";

import { useEffect, useState } from "react";
import { Activity, Plug, Lock, Shield } from "lucide-react";

const sparks = [
  "0,38 16,34 32,36 48,22 64,26 80,14 96,18 112,10 128,16 144,8 160,12",
  "0,30 16,28 32,32 48,18 64,24 80,12 96,20 112,8 128,14 144,6 160,10",
  "0,42 16,36 32,40 48,26 64,30 80,16 96,22 112,12 128,18 144,10 160,14",
];

export function LiveSnapshot() {
  const [spark, setSpark] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSpark((value) => (value + 1) % sparks.length);
      setPulse(true);
      window.setTimeout(() => setPulse(false), 420);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="orbis-glow relative overflow-hidden rounded-2xl border border-white/12 bg-[#0d0e16]/90 p-4 backdrop-blur-xl sm:p-5">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="relative mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
            Factory AI — Live Snapshot
          </p>
          <p className="text-sm text-zinc-500">Line 3 · Body shop · Shift B</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2.5 py-1 text-[11px] font-semibold text-live">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live" />
          Live
        </span>
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        <Metric label="OTIF" value="84.4%" delta="+2.1 pts recovered" positive hot={pulse} />
        <Metric label="OEE" value="78.2%" delta="-1.4 pts vs plan" />
        <Metric label="Downtime" value="21.5 hrs" delta="+3.2 hrs unplanned" />
        <Metric label="Orders at risk" value="11" delta="6 recoverable now" positive hot={pulse} />
      </div>
      <svg viewBox="0 0 160 48" className="mt-4 h-12 w-full">
        <polyline
          fill="none"
          stroke="#E31E24"
          strokeWidth="2.4"
          className="spark-draw"
          points={sparks[spark]}
        />
      </svg>
      <p className="text-[11px] text-zinc-500">Risk curve · last 90 minutes</p>
    </div>
  );
}

function Metric({
  label,
  value,
  delta,
  positive = false,
  hot = false,
}: {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
  hot?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border bg-white/4 p-3 transition-colors ${
        hot ? "border-primary/50" : "border-white/8"
      }`}
    >
      <p className="text-[11px] tracking-wide text-zinc-400 uppercase">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
      <p className={positive ? "text-xs text-live" : "text-xs text-red-400"}>{delta}</p>
    </div>
  );
}

export function TrustBadges() {
  const items = [
    { icon: Shield, label: "Enterprise Cloud" },
    { icon: Lock, label: "Secure by Design" },
    { icon: Activity, label: "Role-Based Access" },
    { icon: Plug, label: "API-Ready Integrations" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 text-xs text-zinc-500">
          <Icon className="size-3.5 text-zinc-600" />
          {label}
        </li>
      ))}
    </ul>
  );
}
