import { BarChart, SparkLine } from "@/components/diagrams";

const readouts = [
  { value: "92.4%", label: "Factory health", tone: "text-live" },
  { value: "96%", label: "Copilot accuracy", tone: "text-ai-cyan" },
  { value: "1,234", label: "Signals / min", tone: "text-ai-violet" },
];

export function ProductMockup() {
  return (
    <div className="relative">
      <div className="drift-slow pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-ai-cyan/15 blur-3xl" />
      <div className="drift-slow-delayed pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-ai-violet/15 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgb(56_189_248/14%),0_30px_70px_rgb(0_0_0/45%)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="ml-2 flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-live" />
            </span>
            FactoryOS — Live
          </span>
        </div>
        <div className="space-y-4 p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-3">
            {readouts.map((r) => (
              <div key={r.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <p className={`text-lg font-semibold ${r.tone} sm:text-xl`}>{r.value}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-zinc-500">{r.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <p className="mb-2 text-[11px] font-medium text-zinc-500">OTIF trend</p>
            <SparkLine className="h-24 w-full" color="#38bdf8" gradientId="productMockupSpark" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <p className="mb-2 text-[11px] font-medium text-zinc-500">Crew fill vs certified need</p>
            <BarChart values={[48, 62, 55, 74, 68, 92, 80]} color="#38bdf8" />
          </div>
        </div>
      </div>
    </div>
  );
}
