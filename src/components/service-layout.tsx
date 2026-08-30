import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { AiStoryFlow } from "@/components/ai-story-flow";
import { CtaBand, PageBanner } from "@/components/page-banner";
import { KpiTiles } from "@/components/kpi-tiles";
import { ModuleDiagram } from "@/components/module-widgets";
import { Reveal } from "@/components/reveal";
import { modules } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bannerImages = ["/images/factory-operations.jpg", "/images/factory-transform.jpg", "/images/factory-hero.jpg"];

export function ServiceSubnav({ current }: { current: string }) {
  return (
    <div className="border-b border-white/10 bg-[#0a0b12]">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6">
        <Link
          href="/services"
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            current === "hub"
              ? "bg-primary text-white"
              : "text-zinc-400 hover:bg-white/5 hover:text-white"
          )}
        >
          All modules
        </Link>
        {modules.map((module) => (
          <Link
            key={module.slug}
            href={module.href}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              current === module.slug
                ? "bg-primary text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            )}
          >
            {module.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceLayout({ slug }: { slug: string }) {
  const index = modules.findIndex((m) => m.slug === slug);
  const module = modules[index];
  if (!module) return null;

  const prev = modules[(index - 1 + modules.length) % modules.length];
  const next = modules[(index + 1) % modules.length];

  return (
    <div>
      <PageBanner
        kicker={`Module ${module.number} · ${module.kicker}`}
        title={module.title}
        copy={module.pitch}
        image={bannerImages[index % bannerImages.length]}
      />
      <ServiceSubnav current={slug} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <div className="mb-10">
            <p className="kicker">Operational KPIs → ROI</p>
            <div className="mt-4">
              <KpiTiles items={module.kpis} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="surface card-lift p-4 sm:p-6">
            <ModuleDiagram widget={module.widget} />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {module.highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="card-lift surface h-full p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5">
                  <item.icon className="size-5 text-primary" />
                </span>
                <h2 className="mt-3 font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-zinc-400">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-10 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
            )}
          >
            See it on your lines
          </Link>
        </Reveal>

        <AiStoryFlow title={module.title} story={module.aiStory} />

        <Reveal>
          <div className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
            <Link
              href={prev.href}
              className="card-lift surface group flex items-center gap-4 p-5"
            >
              <ArrowLeft className="size-4 shrink-0 text-zinc-500 transition-transform group-hover:-translate-x-1 group-hover:text-primary" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  Previous module
                </p>
                <p className="mt-1 truncate font-semibold text-white">{prev.title}</p>
              </div>
            </Link>
            <Link
              href={next.href}
              className="card-lift surface group flex items-center justify-end gap-4 p-5 text-right"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  Next module
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
