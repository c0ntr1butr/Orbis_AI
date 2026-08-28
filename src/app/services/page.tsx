import Link from "next/link";

import { ModuleFigure, SignalFlowDiagram } from "@/components/diagrams";
import { CtaBand, PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { ServiceSubnav } from "@/components/service-layout";
import { KpiTiles } from "@/components/kpi-tiles";
import { portfolioKpis, services } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        kicker="Services"
        title="Industry standard modules and KPIs"
        copy="FactoryOS is the intelligence layer plants already measure: OTIF, OEE, downtime, crew fill, recovered orders, and payback versus missed docks. Each module below is a live scoreboard — not a pillar slide."
        image="/images/factory-operations.jpg"
      />
      <ServiceSubnav current="hub" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Industry KPIs FactoryOS puts on the floor
          </p>
          <KpiTiles items={portfolioKpis} />
        </Reveal>
        <Reveal>
          <p className="mt-12 mb-6 text-center text-sm font-medium tracking-wide text-zinc-400 uppercase">
            From signals to decisions to measurable value
          </p>
          <SignalFlowDiagram />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <Link
                href={service.href}
                className="tile-glow flex h-full flex-col rounded-2xl border border-white/10 bg-[#101119] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <service.icon className="size-6 text-primary" />
                    <p className="mt-3 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                      {service.kicker}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-white">{service.title}</h2>
                  </div>
                  <div className="w-36 shrink-0 rounded-xl border border-white/8 bg-black/25 p-2">
                    <ModuleFigure slug={service.slug} />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{service.pitch}</p>
                <p className="mt-2 text-sm text-zinc-500">{service.summary}</p>
                <div className="mt-4 grid grid-cols-3 gap-1.5">
                  {service.kpis.map((kpi, kpiIndex) => (
                    <div
                      key={kpi.label}
                      className="kpi-pop rounded-lg border border-white/10 bg-black/30 px-2 py-1.5"
                      style={{ animationDelay: `${kpiIndex * 60}ms` }}
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
                <span className="mt-4 text-sm font-medium text-primary">
                  See the figures on this module →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-primary/25 bg-primary/5 p-6 text-center sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            If these KPIs already run your morning meeting, put them on the line.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-400">
            30 minutes. OTIF, fill-rate, downtime, Copilot. You leave with a recovered-order
            story you can take to the plant manager.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold glow-cta"
            )}
          >
            Request for Demo
          </Link>
        </div>
      </div>
      <CtaBand />
    </div>
  );
}
