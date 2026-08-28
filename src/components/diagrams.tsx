import { flowSteps } from "@/lib/services";

export function SignalFlowDiagram() {
  return (
    <div className="overflow-x-auto">
      <div className="mx-auto flex min-w-[720px] items-start justify-between gap-2 px-2">
        {flowSteps.map((step, index) => (
          <div key={step.title} className="flex flex-1 flex-col items-center text-center">
            <div className="relative flex w-full items-center justify-center">
              {index > 0 && (
                <span className="absolute top-7 right-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-primary/50" />
              )}
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-primary/45 bg-[#101119] shadow-[0_0_0_6px_#07080d]">
                <step.icon className="size-5 text-primary" />
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-white">{step.title}</p>
            <p className="mt-1 max-w-[9.5rem] text-[11px] leading-relaxed text-zinc-400">
              {step.copy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SparkLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 72" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="orbisSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E31E24" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#E31E24" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 52 C 24 48, 36 58, 50 44 C 68 26, 82 38, 100 28 C 118 18, 132 30, 150 22 C 168 14, 184 20, 200 16 L 200 72 L 0 72 Z"
        fill="url(#orbisSparkFill)"
      />
      <path
        d="M0 52 C 24 48, 36 58, 50 44 C 68 26, 82 38, 100 28 C 118 18, 132 30, 150 22 C 168 14, 184 20, 200 16"
        stroke="#E31E24"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BarChart({
  values,
  color = "#22c55e",
}: {
  values: number[];
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 80" className="h-20 w-full" aria-hidden>
      {values.map((value, i) => {
        const w = 200 / values.length - 6;
        const x = i * (200 / values.length) + 4;
        const h = (value / 100) * 68;
        return (
          <rect
            key={i}
            x={x}
            y={76 - h}
            width={w}
            height={h}
            rx="3"
            fill={color}
            opacity={0.55 + (i / values.length) * 0.45}
          />
        );
      })}
    </svg>
  );
}

export function IntegrationDiagram() {
  return (
    <svg viewBox="0 0 560 220" className="h-auto w-full" role="img" aria-label="Factory integrations into FactoryOS">
      <rect x="1" y="1" width="558" height="218" rx="16" fill="#0c0d16" stroke="rgba(255,255,255,0.1)" />
      {[
        [70, 50, "MES"],
        [70, 110, "WMS"],
        [70, 170, "PLC / T&A"],
        [280, 110, "FactoryOS"],
        [470, 70, "Production"],
        [470, 150, "Workforce"],
      ].map(([x, y, label]) => (
        <g key={String(label)}>
          <rect
            x={Number(x) - 58}
            y={Number(y) - 22}
            width="116"
            height="44"
            rx="10"
            fill={label === "FactoryOS" ? "rgba(227,30,36,0.16)" : "#151622"}
            stroke={label === "FactoryOS" ? "#E31E24" : "rgba(255,255,255,0.12)"}
          />
          <text
            x={x}
            y={Number(y) + 5}
            textAnchor="middle"
            fill="#fff"
            fontSize="13"
            fontFamily="Inter, sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
      <path d="M128 50 H200 V110 H222" stroke="#E31E24" strokeWidth="1.5" fill="none" />
      <path d="M128 110 H222" stroke="#E31E24" strokeWidth="1.5" fill="none" />
      <path d="M128 170 H200 V110 H222" stroke="#E31E24" strokeWidth="1.5" fill="none" />
      <path d="M338 110 H412" stroke="#22c55e" strokeWidth="1.5" fill="none" />
      <path d="M412 110 V70 H412" stroke="#22c55e" strokeWidth="1.5" fill="none" />
      <path d="M412 110 V150" stroke="#22c55e" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function LoopDiagram() {
  const labels = ["Detect", "Understand", "Predict", "Recommend", "Act", "Measure"];
  const cx = 180;
  const cy = 160;
  const r = 108;
  return (
    <svg viewBox="0 0 360 320" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Detect to measure loop">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(227,30,36,0.35)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="42" fill="rgba(227,30,36,0.12)" stroke="#E31E24" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Inter, sans-serif">
        FactoryOS
      </text>
      {labels.map((label, i) => {
        const a = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="20" fill="#101119" stroke="#E31E24" />
            <text
              x={x}
              y={y + 4}
              textAnchor="middle"
              fill="#f4f4f5"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              {String(i + 1)}
            </text>
            <text
              x={x}
              y={y + 42}
              textAnchor="middle"
              fill="#a1a1aa"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function ModuleFigure({ slug }: { slug: string }) {
  if (slug === "workforce") {
    return <BarChart values={[48, 62, 55, 74, 68, 92, 80]} />;
  }
  if (slug === "integrations") {
    return (
      <svg viewBox="0 0 200 72" className="h-16 w-full" aria-hidden>
        <path d="M16 36 H70 M70 18 V54 M130 36 H184 M70 36 H130" stroke="#E31E24" strokeWidth="1.6" />
        <circle cx="16" cy="36" r="6" fill="#E31E24" />
        <circle cx="70" cy="18" r="5" fill="#fff" opacity="0.5" />
        <circle cx="70" cy="54" r="5" fill="#fff" opacity="0.5" />
        <rect x="88" y="24" width="42" height="24" rx="6" fill="rgba(227,30,36,0.2)" stroke="#E31E24" />
        <circle cx="184" cy="36" r="6" fill="#22c55e" />
      </svg>
    );
  }
  if (slug === "decision-loop") {
    return (
      <svg viewBox="0 0 200 72" className="h-16 w-full" aria-hidden>
        <circle cx="100" cy="36" r="22" fill="none" stroke="#E31E24" strokeWidth="1.6" className="spark-draw" />
        <circle cx="100" cy="36" r="6" fill="#E31E24" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return <circle key={deg} cx={100 + 22 * Math.cos(a)} cy={36 + 22 * Math.sin(a)} r="3.5" fill="#fff" opacity="0.7" />;
        })}
      </svg>
    );
  }
  if (slug === "copilot") {
    return (
      <svg viewBox="0 0 200 72" className="h-16 w-full" aria-hidden>
        <rect x="12" y="14" width="110" height="18" rx="6" fill="rgba(255,255,255,0.08)" />
        <rect x="28" y="40" width="160" height="22" rx="6" fill="rgba(227,30,36,0.18)" stroke="#E31E24" />
      </svg>
    );
  }
  if (slug === "measurement") {
    return <BarChart values={[60, 64, 70, 76, 82, 88, 92]} color="#E31E24" />;
  }
  return <SparkLine className="h-16 w-full spark-draw" />;
}

export function PlatformWireframe() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101119] shadow-[0_24px_80px_rgb(0_0_0_/_35%)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 text-[11px] tracking-wide text-zinc-500">FactoryOS · Executive overview</span>
      </div>
      <div className="grid lg:grid-cols-[200px_1fr]">
        <aside className="border-b border-white/10 bg-[#0c0d16] p-3 text-sm lg:border-r lg:border-b-0">
          <p className="px-2 py-1.5 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
            Overview
          </p>
          <p className="rounded-lg bg-primary/15 px-3 py-2 text-white">Executive Overview</p>
          <p className="mt-3 px-2 py-1.5 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
            Live modules
          </p>
          <p className="px-3 py-2 text-zinc-300">Production</p>
          <p className="px-3 py-2 text-zinc-400">Workforce</p>
          <p className="mt-3 px-2 py-1.5 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
            AI layer
          </p>
          <p className="px-3 py-2 text-zinc-400">Factory AI Copilot</p>
        </aside>
        <div className="grid gap-3 p-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] text-zinc-400">Production Intelligence</p>
            <p className="mt-2 text-2xl font-semibold text-white">11</p>
            <p className="text-xs text-red-400">Orders at risk</p>
            <SparkLine className="mt-3 h-16 w-full" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] text-zinc-400">Workforce Intelligence</p>
            <p className="mt-2 text-2xl font-semibold text-white">92%</p>
            <p className="text-xs text-live">Crew fill</p>
            <BarChart values={[42, 55, 48, 70, 62, 88, 76]} />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] text-zinc-400">Factory AI Copilot</p>
            <p className="mt-3 rounded-lg bg-white/5 p-2.5 text-[11px] leading-relaxed text-zinc-300">
              <span className="block font-medium text-white">Why is production behind today?</span>
              <span className="mt-1.5 block text-zinc-400">
                Material shortage on Line 3 plus a workforce gap. Pull kit 7B and two certified operators.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
