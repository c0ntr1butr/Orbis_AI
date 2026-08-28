import { ArrowRight, Sparkles } from "lucide-react";

import { BarChart, SparkLine } from "@/components/diagrams";
import type { ModuleWidget } from "@/lib/services";

const toneStroke: Record<string, string> = {
  good: "#16a34a",
  warn: "#d97706",
  bad: "#E31E24",
  neutral: "#E31E24",
};

export function HealthRing({
  value,
  display,
  label,
  sub,
  tone = "neutral",
}: {
  value: number;
  display: string;
  label: string;
  sub: string;
  tone?: "good" | "warn" | "bad" | "neutral";
}) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.min(100, Math.max(0, value)) / 100);
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="size-14 shrink-0 -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgb(0 0 0 / 8%)" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke={toneStroke[tone]}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fill="#1a1b1f"
          fontSize="15"
          fontWeight="700"
          transform="rotate(90 32 32)"
        >
          {display}
        </text>
      </svg>
      <div>
        <p className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">{label}</p>
        <p className="mt-0.5 text-xs text-zinc-500">{sub}</p>
      </div>
    </div>
  );
}

export function RingRow({
  items,
}: {
  items: { value: number; display: string; label: string; sub: string; tone?: "good" | "warn" | "bad" | "neutral" }[];
}) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-5">
      {items.map((item) => (
        <HealthRing key={item.label} {...item} />
      ))}
    </div>
  );
}

export function StageTrack({
  stages,
}: {
  stages: { n: string | number; label: string; tone?: "running" | "delayed" }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
      {stages.map((s) => (
        <div
          key={s.label}
          className={
            "rounded-xl border p-3 text-center " +
            (s.tone === "delayed"
              ? "border-primary/35 bg-primary/6"
              : s.tone === "running"
                ? "border-primary/25 bg-black/[0.02]"
                : "border-black/8 bg-black/[0.015]")
          }
        >
          <p
            className={
              "text-xl font-semibold " +
              (s.tone === "delayed" ? "text-primary" : s.tone === "running" ? "text-zinc-900" : "text-zinc-600")
            }
          >
            {s.n}
          </p>
          <p className="mt-1 text-[10px] tracking-wide text-zinc-500 uppercase">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function SegmentedBar({
  segments,
}: {
  segments: { pct: number; label: string; color: string }[];
}) {
  return (
    <div>
      <div className="flex h-7 overflow-hidden rounded-lg border border-black/8">
        {segments.map((seg) => (
          <div key={seg.label} style={{ width: `${seg.pct}%`, background: seg.color }} />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {segments.map((seg) => (
          <span key={seg.label} className="flex items-center gap-1.5 text-xs text-zinc-500">
            <span className="size-2 rounded-sm" style={{ background: seg.color }} />
            {seg.label} {seg.pct}%
          </span>
        ))}
      </div>
    </div>
  );
}

export function EscalationChain({
  levels,
}: {
  levels: { label: string; sub: string; critical?: boolean }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {levels.map((lvl, i) => (
        <div key={lvl.label} className="flex items-center gap-2">
          <div
            className={
              "min-w-28 rounded-xl border px-3 py-2.5 text-center " +
              (lvl.critical ? "border-primary/40 bg-primary/6 text-primary" : "border-black/8 bg-black/[0.02] text-zinc-800")
            }
          >
            <p className="text-xs font-semibold">{lvl.label}</p>
            <p className="mt-0.5 text-[10px] text-zinc-500 uppercase tracking-wide">{lvl.sub}</p>
          </div>
          {i < levels.length - 1 && <ArrowRight className="size-3.5 shrink-0 text-zinc-400" />}
        </div>
      ))}
    </div>
  );
}

export function ImpactRow({
  items,
}: {
  items: { label: string; value: string; amount: string; tag: string; tone?: "bad" | "good" | "neutral" }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-black/8 bg-black/[0.015] p-4">
          <p className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">{item.label}</p>
          <p className="mt-1.5 text-xl font-semibold text-zinc-900">{item.value}</p>
          <div className="mt-3 flex items-center gap-2 border-t border-dashed border-black/10 pt-3">
            <span
              className={
                "text-sm font-semibold " +
                (item.tone === "bad" ? "text-primary" : item.tone === "good" ? "text-live" : "text-zinc-500")
              }
            >
              {item.amount}
            </span>
            <span className="text-[10px] tracking-wide text-zinc-500 uppercase">{item.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ConnectorGrid({
  items,
}: {
  items: { label: string; status: "connected" | "pending" | "warn" }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-black/8 bg-black/[0.015] p-3.5 text-center">
          <p className="text-xs font-medium text-zinc-800">{item.label}</p>
          <span
            className={
              "mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold " +
              (item.status === "connected"
                ? "bg-live/10 text-live"
                : item.status === "warn"
                  ? "bg-amber-500/10 text-amber-700"
                  : "bg-black/6 text-zinc-500")
            }
          >
            {item.status === "connected" ? "Connected" : item.status === "warn" ? "Needs attention" : "Not set up"}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CopilotPreview() {
  const questions = [
    "Why is production behind?",
    "Which machines need maintenance?",
    "What caused today's defects?",
    "Which shift performed best?",
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
      <div className="flex flex-col gap-3 rounded-xl border border-black/8 bg-black/[0.015] p-4">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">
          <Sparkles className="size-3.5 text-primary" />
          Ask Factory AI
        </p>
        <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-primary text-white px-3.5 py-2.5 text-sm">
          Why is production behind today?
        </div>
        <div className="max-w-[90%] rounded-xl rounded-bl-sm border border-black/8 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-zinc-700">
          Line 3 is short 18 door-latch kits (material shortage) and two certified operators are on
          Line 1 (workforce gap). Pull kit 7B from overflow and reassign those two operators to
          recover 6 of 11 at-risk orders.
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 text-white px-2.5 py-1 text-[11px] font-semibold">
            Generate CAPA →
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <p className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">Suggested questions</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {questions.map((q) => (
              <span key={q} className="rounded-full border border-primary/25 bg-primary/6 px-2.5 py-1 text-[11px] text-primary">
                {q}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">AI can act, not just answer</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Assign work order", "Notify supervisor", "Generate CAPA", "Schedule maintenance", "Export report"].map(
              (a) => (
                <span key={a} className="rounded-lg bg-black/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-zinc-700">
                  {a}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartFrame({
  title,
  metric,
  ticks,
  children,
}: {
  title: string;
  metric: string;
  ticks: string[];
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <p className="text-xs font-medium text-zinc-500">{title}</p>
        <p className="text-sm font-semibold text-zinc-900">{metric}</p>
      </div>
      {children}
      <div className="mt-1.5 flex justify-between text-[10px] tracking-wide text-zinc-400 uppercase">
        {ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function ModuleDiagram({ widget }: { widget: ModuleWidget }) {
  switch (widget) {
    case "dashboard":
      return (
        <RingRow
          items={[
            { value: 89, display: "89%", label: "Factory health", sub: "↑ 3 pts vs yesterday", tone: "good" },
            { value: 62, display: "62", label: "AI risk score", sub: "4 critical alerts", tone: "bad" },
            { value: 100, display: "102%", label: "Production", sub: "Today, vs plan", tone: "good" },
          ]}
        />
      );
    case "copilot":
      return <CopilotPreview />;
    case "production":
      return (
        <StageTrack
          stages={[
            { n: 18, label: "Not started" },
            { n: 64, label: "Running", tone: "running" },
            { n: 9, label: "Paused" },
            { n: 31, label: "Completed" },
            { n: 6, label: "Delayed", tone: "delayed" },
          ]}
        />
      );
    case "workforce":
      return (
        <ChartFrame
          title="Crew fill vs certified need · Shift B"
          metric="92% fill"
          ticks={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        >
          <BarChart values={[48, 62, 55, 74, 68, 92, 80]} />
        </ChartFrame>
      );
    case "quality":
      return (
        <ImpactRow
          items={[
            { label: "Scrap cost", value: "$3,800", amount: "↑ 6%", tag: "This week", tone: "bad" },
            { label: "Rework cost", value: "$2,150", amount: "flat", tag: "This week", tone: "neutral" },
            { label: "Customer complaints", value: "3", amount: "↑ 1", tag: "Open", tone: "bad" },
          ]}
        />
      );
    case "maintenance":
      return (
        <RingRow
          items={[
            { value: 92, display: "92%", label: "Fleet health", sub: "↑ 1.1% this week", tone: "good" },
            { value: 82, display: "82%", label: "Machine 15", sub: "Failure probability", tone: "bad" },
            { value: 86, display: "86%", label: "Spare parts", sub: "Coverage", tone: "good" },
          ]}
        />
      );
    case "warehouse":
      return (
        <SegmentedBar
          segments={[
            { pct: 58, label: "Available", color: "#16a34a" },
            { pct: 18, label: "Reserved", color: "#3A6FD8" },
            { pct: 14, label: "In transit", color: "#d97706" },
            { pct: 10, label: "Blocked", color: "#E31E24" },
          ]}
        />
      );
    case "analytics":
      return (
        <ChartFrame title="OTIF trend · last 7 shifts" metric="84.4%, +12.4 pts" ticks={["Shift 1", "Shift 4", "Shift 7"]}>
          <SparkLine className="h-32 w-full" />
        </ChartFrame>
      );
    case "administration":
      return (
        <ConnectorGrid
          items={[
            { label: "MES", status: "connected" },
            { label: "WMS", status: "connected" },
            { label: "T&A / PLC", status: "warn" },
            { label: "ERP", status: "pending" },
          ]}
        />
      );
    case "notifications":
      return (
        <EscalationChain
          levels={[
            { label: "Operator", sub: "0–15 min" },
            { label: "Supervisor", sub: "15–30 min" },
            { label: "Production mgr", sub: "30–60 min" },
            { label: "Plant head", sub: "60+ min", critical: true },
          ]}
        />
      );
    default:
      return null;
  }
}
