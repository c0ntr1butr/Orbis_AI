"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageBanner } from "@/components/page-banner";
import { KpiTiles } from "@/components/kpi-tiles";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCaseFilters, useCases, useCasesPortfolio } from "@/lib/use-cases";
import { asset } from "@/lib/asset";

const bannerImages = ["/images/factory-hero.jpg", "/images/factory-operations.jpg", "/images/factory-transform.jpg"];

export default function UseCasesPage() {
  const [filter, setFilter] = useState<(typeof useCaseFilters)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? useCases : useCases.filter((item) => item.industry === filter)),
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
          <KpiTiles items={useCasesPortfolio} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {useCaseFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                filter === item
                  ? "border-primary bg-primary text-white"
                  : "border-white/12 text-zinc-500 hover:border-white/30 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-white/15 p-10 text-center text-zinc-500">
            No use cases in this filter yet. Choose All to see every plant story.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visible.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <Link
                  href={`/use-cases/${item.slug}`}
                  className="card-lift surface group flex h-full flex-col overflow-hidden p-0"
                >
                  <div className="relative h-28 shrink-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${asset(bannerImages[index % bannerImages.length])})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101119] via-[#101119]/40 to-transparent" />
                    <p className="absolute bottom-2 left-4 text-xs font-semibold tracking-wide text-ai-cyan uppercase">
                      {item.industry}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 flex-1 text-sm font-medium text-zinc-200">{item.capture}</p>
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
                      {item.kpis.slice(0, 3).map((kpi, i) => (
                        <div
                          key={kpi.label}
                          className="kpi-pop rounded-lg border border-white/10 bg-black/30 px-2 py-1.5"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          <p
                            className={cn(
                              "text-sm font-semibold",
                              kpi.tone === "live" && "text-live",
                              kpi.tone === "risk" && "text-primary",
                              (!kpi.tone || kpi.tone === "neutral") && "text-white"
                            )}
                          >
                            {kpi.value}
                          </p>
                          <p className="text-[10px] leading-tight text-zinc-500">{kpi.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:underline">
                      Read the full story <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.1),transparent_65%)]" />
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
