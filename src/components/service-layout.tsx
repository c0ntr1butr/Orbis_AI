import Link from "next/link";
import type { ReactNode } from "react";

import { CtaBand, PageBanner } from "@/components/page-banner";
import { KpiTiles } from "@/components/kpi-tiles";
import { services } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceSubnav({ current }: { current: string }) {
  return (
    <div className="border-b border-white/10 bg-[#0a0b12]">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6">
        <Link
          href="/services"
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium",
            current === "hub"
              ? "bg-primary text-white"
              : "text-zinc-400 hover:text-white"
          )}
        >
          All services
        </Link>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium",
              current === service.slug
                ? "bg-primary text-white"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceLayout({
  slug,
  title,
  copy,
  image,
  diagram,
  children,
}: {
  slug: string;
  title: string;
  copy: string;
  image: string;
  diagram: ReactNode;
  children: ReactNode;
}) {
  const meta = services.find((s) => s.slug === slug);
  return (
    <div>
      <PageBanner kicker={meta?.kicker ?? "Services"} title={title} copy={copy} image={image} />
      <ServiceSubnav current={slug} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {meta?.kpis && (
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Operational KPIs → ROI
            </p>
            <KpiTiles items={[...meta.kpis]} />
          </div>
        )}
        <div className="rounded-2xl border border-white/10 bg-[#0c0d16] p-4 sm:p-6">{diagram}</div>
        <div className="mt-10">{children}</div>
        <Link
          href="/request-demo"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
          )}
        >
          Request a demo of this module
        </Link>
      </div>
      <CtaBand />
    </div>
  );
}
