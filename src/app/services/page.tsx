import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand, PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { ServiceSubnav } from "@/components/service-layout";
import { modules, platformCapabilities } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const signature = modules.find((m) => m.signature);
  const rest = modules.filter((m) => !m.signature);

  return (
    <div>
      <PageBanner
        kicker="Product"
        title="One Platform. Every AI-Native Module."
        copy="Everything a plant runs on — production, workforce, quality, maintenance, warehouse, analytics, vendors, and contracts — built AI-native from the ground up, with a Copilot that sits across all of it. Not a dozen logins. One factory model."
        image="/images/factory-operations.jpg"
      />
      <ServiceSubnav current="hub" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {signature && (
          <Reveal>
            <Link
              href={signature.href}
              className="card-lift glass orbis-glow group relative block overflow-hidden p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.18),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.14),transparent_55%)]" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-lg">
                  <span className="kicker rounded-full border border-primary/25 bg-primary/6 px-3 py-1">
                    <signature.icon className="size-3.5" />
                    Signature AI layer
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {signature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{signature.pitch}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:underline">
                    Meet the Copilot <ArrowRight className="size-3.5" />
                  </span>
                </div>
                <div className="flex gap-6 lg:flex-col lg:items-end">
                  {signature.stats.map((stat) => (
                    <div key={stat.label} className="text-right">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((module, index) => (
            <Reveal key={module.slug} delay={index * 60}>
              <Link
                href={module.href}
                className="card-lift surface group relative flex h-full flex-col overflow-hidden p-5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-ai-violet to-ai-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="orbis-glow flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-ai-violet/10 to-primary/5">
                  <module.icon className="size-5 text-primary" />
                </span>
                <p className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-live" />
                  </span>
                  {module.kicker}
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight text-white">{module.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{module.oneLiner}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/10 pt-3">
                  {module.stats.map((stat) => (
                    <span key={stat.label} className="text-xs text-zinc-500">
                      <span
                        className={cn(
                          "font-semibold",
                          stat.tone === "live" && "text-live",
                          stat.tone === "risk" && "text-primary",
                          (!stat.tone || stat.tone === "neutral") && "text-zinc-200"
                        )}
                      >
                        {stat.value}
                      </span>{" "}
                      {stat.label}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View module <ArrowRight className="size-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14">
            <p className="kicker">Present on every module</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">The platform layer</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {platformCapabilities.map((cap, index) => (
                <Reveal key={cap.title} delay={index * 60}>
                  <div className="card-lift surface h-full p-4">
                    <span className="orbis-glow flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-ai-violet/10 to-primary/5">
                      <cap.icon className="size-4 text-primary" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-white">{cap.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{cap.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.1),transparent_65%)]" />
          <h2 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            If these modules already run your morning meeting, put them on the line.
          </h2>
          <p className="relative mx-auto mt-2 max-w-2xl text-sm text-zinc-400">
            30 minutes. Pick the module that hurts most. You leave with a recovered-order
            story you can take to the plant manager.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta relative mt-6 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
            )}
          >
            See It On Your Lines
          </Link>
        </div>
      </div>
      <CtaBand />
    </div>
  );
}
