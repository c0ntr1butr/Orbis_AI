import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Plug,
  Shield,
} from "lucide-react";

import { asset } from "@/lib/asset";
import { LiveSnapshot, TrustBadges } from "@/components/live-snapshot";
import { ActivityFeed } from "@/components/live-floor";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { PlatformWireframe, SignalFlowDiagram } from "@/components/diagrams";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Cpu,
    title: "AI-native by design",
    copy: "Copilot sits on live plant data — not a slide deck bolted onto yesterday’s reports.",
    href: "/services/copilot",
    link: "Factory AI Copilot",
  },
  {
    icon: Shield,
    title: "Secure. Enterprise-ready",
    copy: "Role-based access, encrypted transit, and plant-level tenancy from the first pilot cell.",
    href: "/contact",
    link: "Talk security",
  },
  {
    icon: Plug,
    title: "Connect your factory",
    copy: "MES, WMS, time & attendance, and PLC historians through API-ready connectors.",
    href: "/services/integrations",
    link: "Integrations",
  },
  {
    icon: BookOpen,
    title: "Industry playbooks",
    copy: "Automotive, rail, electronics, and tier-1 playbooks that FactoryOS was built to run.",
    href: "/use-cases",
    link: "Use cases",
  },
];

const transformations = [
  {
    before: "OTIF discovered in the morning meeting",
    after: "Orders-at-risk scored live on Line 3, with kits and skills attached",
  },
  {
    before: "Crew fill in a separate HR extract",
    after: "Certified heads mapped to the same cells as OEE and downtime",
  },
  {
    before: "Why is the line behind? emailed after the shift",
    after: "Copilot answers from plant state: 18 latch kits short, two operators to move",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="hero-zoom absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/images/factory-operations.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/82 to-[#07080d]/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.18),transparent_50%)]" />
        <CircuitOverlay />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Intelligence layer for manufacturing
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              The <span className="text-gradient-orbis">intelligence layer</span>{" "}
              that makes your factory look this alive.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Robots already weld. AGVs already move. FactoryOS is what sells
              the next shift: live OTIF, crew fill, downtime, and a Copilot that
              tells supervisors which kit and which certified operator recover
              the order — before the dock closes.
            </p>
            <div className="mt-8">
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
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              30-minute working demo · no slide tour · production + workforce in one view
            </p>
            <div className="mt-10">
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

      <section className="border-y border-primary/20 bg-[#0c0d16]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
          {[
            { n: 6, suffix: " / 11", label: "at-risk orders recovered in-shift" },
            { n: 92, suffix: "%", label: "crew fill vs certified need" },
            { n: 4, suffix: " hrs", label: "earlier fill-rate risk signal" },
            { n: 30, suffix: " min", label: "to a working plant demo" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold text-white">
                <CountUp value={stat.n} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${asset("/images/factory-transform.jpg")})` }}
        />
        <div className="absolute inset-0 bg-[#07080d]/88" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              How FactoryOS transforms operations
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-semibold text-white">
              From isolated machines and spreadsheets to one live plant decision
              loop
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              The floor already has robots, tablets, and a control room. The
              gap is a shared model of production and workforce — and an AI
              layer that turns that model into the next action.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {transformations.map((item, index) => (
              <Reveal key={item.after} delay={index * 90}>
                <article className="card-lift h-full rounded-2xl border border-white/10 bg-[#101119]/90 p-5">
                  <p className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">
                    Before FactoryOS
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{item.before}</p>
                  <div className="my-4 h-px bg-gradient-to-r from-primary/80 to-transparent" />
                  <p className="text-[11px] font-semibold tracking-wide text-primary uppercase">
                    With FactoryOS
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">{item.after}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101119] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Why operations leaders book FactoryOS this quarter
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "It sells itself on the floor",
                copy: "A live snapshot beats a 40-slide deck. Supervisors watch OTIF and crew fill move while Copilot names the kit and the certified operator.",
              },
              {
                title: "One model, not two war rooms",
                copy: "Material shortage and workforce gap land on the same ticket. That is the pitch: stop splitting production and people into two tools.",
              },
              {
                title: "Pilot without a data lake",
                copy: "One line, one MES feed, one attendance source. Two to four weeks to recovered-order proof you can take to the plant manager.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="card-lift h-full rounded-2xl border border-white/10 p-5">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a0b12] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-center text-sm font-medium tracking-wide text-zinc-400 uppercase">
              From signals to decisions to measurable value
            </p>
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-3xl font-semibold text-white">
              How FactoryOS runs every shift
            </h2>
          </Reveal>
          <div className="mt-10">
            <SignalFlowDiagram />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white">
              Industry standard modules and KPIs
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Production, workforce, Copilot, and a closed detect-to-measure loop —
              scored on OTIF, OEE, fill-rate, recovered orders, and payback versus
              missed docks.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10">
              <PlatformWireframe />
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/services/production" className="text-sm text-primary hover:underline">
                  Production Intelligence →
                </Link>
                <Link href="/services/workforce" className="text-sm text-primary hover:underline">
                  Workforce Intelligence →
                </Link>
                <Link href="/services/copilot" className="text-sm text-primary hover:underline">
                  Factory AI Copilot →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/5 bg-[#0a0b12] py-10">
        <p className="mb-5 text-center text-sm font-medium text-zinc-400">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 80}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-white/10 bg-[#101119] p-5">
                <feature.icon className="size-7 text-primary" />
                <h3 className="mt-4 text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {feature.copy}
                </p>
                <Link
                  href={feature.href}
                  className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                  {feature.link} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#101119] px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-semibold text-white">
            Stop defending yesterday’s report. Sell the next recovered order.
          </h2>
          <p className="mt-3 text-zinc-400">
            Book a 30-minute FactoryOS session. We run OTIF, crew fill, downtime,
            and Copilot on a scenario that looks like your lines — then you decide
            if the intelligence layer belongs in the control room.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold glow-cta"
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

function CircuitOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-1/2 opacity-30 lg:block"
      viewBox="0 0 400 600"
      fill="none"
      aria-hidden
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <g key={i} className="circuit-pulse" style={{ animationDelay: `${i * 0.12}s` }}>
          <line
            x1="0"
            y1={40 + i * 38}
            x2={80 + (i % 4) * 18}
            y2={40 + i * 38}
            stroke="#E31E24"
            strokeWidth="1.4"
          />
          <circle cx="4" cy={40 + i * 38} r="2.5" fill="#E31E24" />
        </g>
      ))}
    </svg>
  );
}
