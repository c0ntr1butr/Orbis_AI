import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/asset";
import { Reveal } from "@/components/reveal";
import { HeroIntelligenceVisual } from "@/components/hero-intelligence-visual";
import { FactoryCopilotChat } from "@/components/factory-copilot-chat";
import { modules, aiNativeCore, platformPillars, homeUseCases } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copilot = modules.find((m) => m.signature)!;

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div
          className="hero-zoom absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/images/factory-operations.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/85 to-[#07080d]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.2),transparent_50%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              AI-native manufacturing platform
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-[3.6rem] lg:leading-[1.06]">
              Transform Factory Operations{" "}
              <span className="text-gradient-orbis">With Intelligence</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              FactoryOS connects manufacturing operations, people, assets, and
              knowledge into one intelligent platform — turning factory data
              into better decisions and productive action.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 text-sm font-semibold glow-cta hover:brightness-110"
                )}
              >
                Request a Demo
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
              >
                Explore FactoryOS
              </Link>
            </div>
          </div>

          <Reveal>
            <HeroIntelligenceVisual />
          </Reveal>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="border-y border-white/8 bg-[#0a0b12] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">Platform</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One Intelligent Platform For Modern Manufacturing
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platformPillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="card-lift surface h-full p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5">
                    <item.icon className="size-5 text-primary" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY AI COPILOT */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,30,36,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <span className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1">
                <copilot.icon className="size-3.5" />
                Signature AI layer
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Meet Factory AI Copilot
              </h2>
              <p className="mt-2 text-lg text-zinc-200">
                Your intelligent assistant for the factory.
              </p>
              <p className="mt-3 max-w-md text-zinc-400">
                Try it below with real prompts — Copilot draws on operations,
                knowledge, people, and assets for a sourced answer, then
                carries out the action once a person confirms it.
              </p>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
                Ask
                <span className="text-zinc-600">·</span>
                Understand
                <span className="text-zinc-600">·</span>
                Act
              </p>
              <div className="mt-6">
                <Link
                  href={copilot.href}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Meet the full Copilot →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FactoryCopilotChat />
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-white/8 bg-[#0a0b12] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">Use cases</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Intelligence Across The Factory
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeUseCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="card-lift surface h-full p-5">
                  <item.icon className="size-5 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / ENTERPRISE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">Trust</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Built AI-Native. Enterprise Ready.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aiNativeCore.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="card-lift surface h-full p-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                    <item.icon className="size-4.5 text-primary" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST DEMO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.18),transparent_60%)]" />
        <div className="surface relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-14 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Ready to make your factory more intelligent?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            See how FactoryOS can transform operational data into connected
            intelligence and action.
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
