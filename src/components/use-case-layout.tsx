import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CtaBand, PageBanner } from "@/components/page-banner";
import { KpiTiles } from "@/components/kpi-tiles";
import { Reveal } from "@/components/reveal";
import { useCases } from "@/lib/use-cases";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bannerImages = ["/images/factory-transform.jpg", "/images/factory-hero.jpg", "/images/factory-operations.jpg"];

export function UseCaseLayout({ slug }: { slug: string }) {
  const index = useCases.findIndex((c) => c.slug === slug);
  const item = useCases[index];
  if (!item) return null;

  const prev = useCases[(index - 1 + useCases.length) % useCases.length];
  const next = useCases[(index + 1) % useCases.length];

  return (
    <div>
      <PageBanner
        kicker={`${item.industry} · Use case`}
        title={item.title}
        copy={item.capture}
        image={bannerImages[index % bannerImages.length]}
      />
      <div className="border-b border-white/10 bg-[#0a0b12]">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3 sm:px-6">
          <Link
            href="/use-cases"
            className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            ← All use cases
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <div className="surface p-5 sm:p-6">
            <div className="flex justify-between text-xs text-zinc-500">
              <span>{item.beforeLabel}</span>
              <span className="text-live">{item.afterLabel}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="bar-grow h-full rounded-full bg-gradient-to-r from-[#8B0000] to-live"
                style={{ width: `${item.afterPct}%` }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10">
            <p className="kicker">Result, in the numbers</p>
            <div className="mt-4">
              <KpiTiles items={item.kpis} />
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal>
            <article className="card-lift surface h-full p-6">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">Before</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.problem}</p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="card-lift surface h-full p-6">
              <p className="text-xs font-semibold tracking-wide text-live uppercase">With FactoryOS</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.result}</p>
            </article>
          </Reveal>
        </div>

        {item.service && (
          <Reveal delay={120}>
            <Link
              href={item.service.href}
              className="card-lift surface mt-6 flex items-center justify-between p-5"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  Powered by
                </p>
                <p className="mt-1 font-semibold text-white">{item.service.label}</p>
              </div>
              <ArrowRight className="size-4 text-zinc-500" />
            </Link>
          </Reveal>
        )}

        <Reveal delay={160}>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-10 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
            )}
          >
            Walk through your use case
          </Link>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
            <Link href={`/use-cases/${prev.slug}`} className="card-lift surface group flex items-center gap-4 p-5">
              <ArrowLeft className="size-4 shrink-0 text-zinc-500 transition-transform group-hover:-translate-x-1 group-hover:text-primary" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  Previous use case
                </p>
                <p className="mt-1 truncate font-semibold text-white">{prev.title}</p>
              </div>
            </Link>
            <Link
              href={`/use-cases/${next.slug}`}
              className="card-lift surface group flex items-center justify-end gap-4 p-5 text-right"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  Next use case
                </p>
                <p className="mt-1 truncate font-semibold text-white">{next.title}</p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </div>
        </Reveal>
      </div>
      <CtaBand />
    </div>
  );
}
