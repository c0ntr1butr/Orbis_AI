import Link from "next/link";

import { CtaBand, PageBanner } from "@/components/page-banner";
import { KpiTiles } from "@/components/kpi-tiles";
import { ModuleDiagram } from "@/components/module-widgets";
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

  return (
    <div>
      <PageBanner
        kicker={`Module ${module.number} / ${modules.length} · ${module.kicker}`}
        title={module.title}
        copy={module.pitch}
        image={bannerImages[index % bannerImages.length]}
      />
      <ServiceSubnav current={slug} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-10">
          <p className="kicker">Operational KPIs → ROI</p>
          <div className="mt-4">
            <KpiTiles items={module.kpis} />
          </div>
        </div>
        <div className="surface p-4 sm:p-6">
          <ModuleDiagram widget={module.widget} />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {module.highlights.map((item) => (
            <article key={item.title} className="card-lift surface p-5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5">
                <item.icon className="size-5 text-primary" />
              </span>
              <h2 className="mt-3 font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{item.copy}</p>
            </article>
          ))}
        </div>
        <Link
          href="/request-demo"
          className={cn(
            buttonVariants({ size: "lg" }),
            "glow-cta mt-10 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
          )}
        >
          Request a demo of this module
        </Link>
      </div>
      <CtaBand />
    </div>
  );
}
