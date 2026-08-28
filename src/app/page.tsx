import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/asset";
import { LiveSnapshot, TrustBadges } from "@/components/live-snapshot";
import { ActivityFeed } from "@/components/live-floor";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { CopilotPreview } from "@/components/module-widgets";
import { modules, platformCapabilities } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copilot = modules.find((m) => m.signature)!;
const gridModules = modules.filter((m) => !m.signature);

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="hero-zoom absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/images/factory-operations.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/85 to-[#07080d]/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.2),transparent_50%)]" />
        <div className="bg-dot-grid pointer-events-none absolute inset-0 hidden opacity-60 lg:block" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
          <div>
            <p className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Intelligence layer for manufacturing
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.04]">
              The <span className="text-gradient-orbis">intelligence layer</span>{" "}
              for a factory this alive.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              One platform, ten live modules, and an AI Copilot that tells
              supervisors which kit and which certified operator recover the
              order — before the dock closes.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 text-sm font-semibold glow-cta hover:brightness-110"
                )}
              >
                See it on your lines
                <ArrowRight className="size-4" />
              </Link>
              <span className="text-xs text-zinc-500">
                30-minute working demo · no slide tour
              </span>
            </div>
            <div className="mt-12 border-t border-white/8 pt-6">
              <TrustBadges />
            </div>
          </div>

          <div className="relative space-y-4">
            <div className="float-card">
              <LiveSnapshot />
            </div>
            <div className="float-card-delayed hidden md:block">
              <ActivityFeed />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0c0d16]">
        <div className="mx-auto grid max-w-6xl gap-8 divide-y divide-white/8 px-4 py-10 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:px-6">
          {[
            { n: 10, suffix: "", label: "live modules on one plant model" },
            { n: 92, suffix: "%", label: "crew fill vs certified need" },
            { n: 30, suffix: "s", label: "for Copilot to answer, sourced" },
            { n: 30, suffix: " min", label: "to a working plant demo" },
          ].map((stat) => (
            <div key={stat.label} className="pt-8 text-center first:pt-0 sm:px-6 sm:pt-0 sm:text-left sm:first:pl-0">
              <p className="text-4xl font-semibold tracking-tight text-white">
                <CountUp value={stat.n} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker">Product</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  One platform, ten live modules
                </h2>
              </div>
              <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                View all modules →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gridModules.map((module, index) => (
              <Reveal key={module.slug} delay={index * 50}>
                <Link href={module.href} className="card-lift surface flex h-full flex-col p-5">
                  <div className="flex items-start justify-between">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/5">
                      <module.icon className="size-4.5 text-primary" />
                    </span>
                    <span className="font-mono text-[11px] text-zinc-600">{module.number}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">{module.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{module.oneLiner}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/8 bg-[#0a0b12] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,30,36,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <span className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1">
              <copilot.icon className="size-3.5" />
              {copilot.kicker}
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {copilot.oneLiner}
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-400">{copilot.pitch}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface mt-8 p-5 sm:p-6">
              <CopilotPreview />
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            {copilot.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
            <Link
              href={copilot.href}
              className="ml-auto text-sm font-medium text-primary hover:underline"
            >
              Meet the full Copilot →
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-10">
        <p className="mb-5 text-center text-sm font-medium text-zinc-500">
          Built for plants that cannot miss a customer dock
        </p>
        <div className="marquee flex min-w-max gap-12 px-8 text-sm font-semibold tracking-[0.22em] text-zinc-500 uppercase">
          {[
            "Automotive body shops",
            "Rail bogie cells",
            "SMT electronics",
            "Industrial OEMs",
            "Tier-1 suppliers",
            "Mixed-model assembly",
            "Automotive body shops",
            "Rail bogie cells",
            "SMT electronics",
            "Industrial OEMs",
            "Tier-1 suppliers",
            "Mixed-model assembly",
          ].map((label, i) => (
            <span key={`${label}-${i}`} className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0c0d16] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">Present on every module</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              One connected platform, not ten separate tools
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformCapabilities.map((cap, index) => (
              <Reveal key={cap.title} delay={index * 70}>
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <cap.icon className="size-4 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold text-white">{cap.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{cap.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.18),transparent_60%)]" />
        <div className="surface relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-14 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Stop defending yesterday’s report. Sell the next recovered order.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Book a 30-minute FactoryOS session. We run OTIF, crew fill, downtime,
            and Copilot on a scenario that looks like your lines — then you decide
            if the intelligence layer belongs in the control room.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-8 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold"
            )}
          >
            Request a Demo
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
