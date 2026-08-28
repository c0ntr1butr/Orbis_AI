"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { PageBanner } from "@/components/page-banner";
import { KpiTiles, type Kpi } from "@/components/kpi-tiles";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const portfolio: Kpi[] = [
  { value: "6/11", label: "Orders recovered in-shift", tone: "live" },
  { value: "+2.1 pts", label: "OTIF recovered", tone: "live" },
  { value: "92%", label: "Crew fill vs need", tone: "live" },
  { value: "4 hrs", label: "Earlier SMT signal", tone: "live" },
  { value: "18%", label: "Overtime avoided", tone: "live" },
  { value: "3.2×", label: "Payback vs missed docks", tone: "live" },
];

const cases = [
  {
    industry: "Automotive",
    title: "Body-shop OTIF recovery",
    capture: "Stop selling a 40-slide OTIF deck. Show 6 of 11 orders back on the dock before the shift ends.",
    problem:
      "Eleven customer orders slipped because door-latch kits and two certified operators were on the wrong line. The gap showed up in the morning OTIF meeting.",
    result:
      "Copilot rerouted overflow kits and labor on the live snapshot. OTIF recovered 6 of 11 orders before the shift closed.",
    service: { href: "/services/production", label: "Production Intelligence" },
    beforePct: 45,
    afterPct: 84,
    beforeLabel: "OTIF 55%",
    afterLabel: "OTIF 84.4%",
    kpis: [
      { value: "11", label: "At risk", tone: "risk" },
      { value: "6", label: "Recovered", tone: "live" },
      { value: "84.4%", label: "OTIF", tone: "live" },
      { value: "18", label: "Kits short", tone: "risk" },
      { value: "2", label: "Operators moved" },
      { value: "3.2×", label: "ROI vs missed OTIF", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    industry: "Rail & transit",
    title: "Bogie cell downtime",
    capture: "Move the certified welder at yellow — not after eight hours of red OEE.",
    problem:
      "Unplanned downtime stacked on a welding cell with no shared view of crew fill vs. machine state.",
    result:
      "FactoryOS tied OEE to skill coverage so the next certified welder was already moving when the cell went yellow.",
    service: { href: "/services/workforce", label: "Workforce Intelligence" },
    beforePct: 38,
    afterPct: 78,
    beforeLabel: "Hours lost",
    afterLabel: "+8h avoided",
    kpis: [
      { value: "Yellow", label: "Cell state", tone: "risk" },
      { value: "1", label: "Welder en route", tone: "live" },
      { value: "+8h", label: "Hours avoided", tone: "live" },
      { value: "OEE", label: "Tied to skill" },
      { value: "Shift", label: "Recovery window" },
      { value: "2.4×", label: "ROI vs downtime", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    industry: "Electronics",
    title: "SMT changeover risk",
    capture: "Four hours of fill-rate warning is the difference between a held feeder and a stopped SMT line.",
    problem:
      "Changeovers collided with a thin second-shift roster. Supervisors discovered the gap after the line stopped.",
    result:
      "Workforce Intelligence flagged fill-rate four hours earlier; Production Intelligence held the feeder setup.",
    service: { href: "/services/workforce", label: "Workforce Intelligence" },
    beforePct: 50,
    afterPct: 92,
    beforeLabel: "Fill after stop",
    afterLabel: "Fill 92% in time",
    kpis: [
      { value: "4h", label: "Earlier signal", tone: "live" },
      { value: "92%", label: "Fill vs need", tone: "live" },
      { value: "0", label: "Stopped changeovers", tone: "live" },
      { value: "SMT", label: "Feeder held" },
      { value: "18%", label: "OT avoided", tone: "live" },
      { value: "2.9×", label: "ROI vs scrap/wait", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    industry: "Industrial OEMs",
    title: "Multi-plant exceptions",
    capture: "One Copilot question replaces overnight spreadsheet merges across plants.",
    problem:
      "Each plant ran a different MES extract. Corporate could not see which sites were truly at risk.",
    result:
      "A shared plant model and Copilot questions replaced overnight spreadsheet merges.",
    service: { href: "/services/copilot", label: "Factory AI Copilot" },
    beforePct: 20,
    afterPct: 90,
    beforeLabel: "Overnight merge",
    afterLabel: "<30s answer",
    kpis: [
      { value: "1", label: "Plant model", tone: "live" },
      { value: "0", label: "Overnight merges", tone: "live" },
      { value: "<30s", label: "Copilot answer" },
      { value: "N plants", label: "Same questions" },
      { value: "Live", label: "Exception list" },
      { value: "4.1×", label: "ROI vs war-room hrs", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    industry: "Tier-1 suppliers",
    title: "Customer call-off swings",
    capture: "Load cells before the EDI file ages — overtime and idle both drop.",
    problem:
      "Call-offs moved faster than labor planning. Overtime and idle time both spiked.",
    result:
      "Predicted demand vs. certified heads let planners load cells before the EDI file aged.",
    service: { href: "/services/decision-loop", label: "Signals to decisions" },
    beforePct: 40,
    afterPct: 82,
    beforeLabel: "OT + idle spike",
    afterLabel: "18% OT avoided",
    kpis: [
      { value: "EDI", label: "Before file aged", tone: "live" },
      { value: "18%", label: "OT avoided", tone: "live" },
      { value: "Idle", label: "Cells pre-loaded" },
      { value: "Cert.", label: "Heads vs demand" },
      { value: "Shift", label: "Plan cycle" },
      { value: "2.7×", label: "ROI vs OT+idle", tone: "live" },
    ] satisfies Kpi[],
  },
];

const filters = [
  "All",
  "Automotive",
  "Rail & transit",
  "Electronics",
  "Industrial OEMs",
  "Tier-1 suppliers",
] as const;

export default function UseCasesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? cases : cases.filter((item) => item.industry === filter)),
    [filter]
  );

  return (
    <div>
      <PageBanner
        kicker="Use cases"
        title="Industry KPIs that close the sale on the floor"
        copy="Every story is a scoreboard: recovered orders, OTIF points, fill-rate, downtime hours, overtime avoided, and payback versus missed docks. Show the figure. Book the demo."
        image="/images/factory-transform.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="kicker">Captured results across these plants</p>
        <div className="mt-4">
          <KpiTiles items={portfolio} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                filter === item
                  ? "border-primary bg-primary text-white"
                  : "border-white/12 text-zinc-400 hover:border-white/30 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-white/15 p-10 text-center text-zinc-400">
            No use cases in this filter yet. Choose All to see every plant story.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visible.map((item) => (
              <article
                key={item.title}
                className="card-lift surface p-5"
              >
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {item.industry}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm font-medium text-zinc-200">{item.capture}</p>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-[10px] text-zinc-500">
                    <span>{item.beforeLabel}</span>
                    <span className="text-live">{item.afterLabel}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="bar-grow h-full rounded-full bg-gradient-to-r from-[#8B0000] to-live"
                      style={{ width: `${item.afterPct}%` }}
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-1.5">
                  {item.kpis.map((kpi, i) => (
                    <div
                      key={kpi.label}
                      className="kpi-pop rounded-lg border border-white/10 bg-black/30 px-2 py-1.5"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <p
                        className={
                          kpi.tone === "live"
                            ? "text-sm font-semibold text-live"
                            : kpi.tone === "risk"
                              ? "text-sm font-semibold text-red-400"
                              : "text-sm font-semibold text-white"
                        }
                      >
                        {kpi.value}
                      </p>
                      <p className="text-[10px] leading-tight text-zinc-500">{kpi.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-zinc-400">
                  <span className="font-medium text-zinc-200">Before: </span>
                  {item.problem}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  <span className="font-medium text-zinc-200">With FactoryOS: </span>
                  {item.result}
                </p>
                {item.service && (
                  <Link
                    href={item.service.href}
                    className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {item.service.label} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        )}

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.14),transparent_65%)]" />
          <h2 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Bring your line. We will put these figures on it.
          </h2>
          <p className="relative mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            A working session on OTIF, fill, downtime, and Copilot — the same KPIs on this page,
            mapped to your cells.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta relative mt-6 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
            )}
          >
            Walk through your use case
          </Link>
        </div>
      </div>
    </div>
  );
}
