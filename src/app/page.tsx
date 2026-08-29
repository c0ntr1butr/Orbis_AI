import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/asset";
import { Reveal } from "@/components/reveal";
import { HeroIntelligenceVisual } from "@/components/hero-intelligence-visual";
import { FactoryCopilotChat } from "@/components/factory-copilot-chat";
import { SectionHint } from "@/components/section-hint";
import { SymbolGrid } from "@/components/symbol-grid";
import { modules, aiNativeCore, platformPillars, homeUseCases } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copilot = modules.find((m) => m.signature)!;

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <SectionHint hint="Want to see how FactoryOS works?">
        <section className="relative min-h-[90vh] overflow-hidden">
          <div
            className="hero-zoom absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset("/images/factory-operations.jpg")})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/85 to-[#07080d]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.2),transparent_50%)]" />

          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
            <div>
              <p className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                AI-native manufacturing platform
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-[3.6rem] lg:leading-[1.06]">
                Transform Factory Operations{" "}
                <span className="text-gradient-orbis">With Intelligence</span>!
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
                  See it on your lines
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
      </SectionHint>

      {/* PLATFORM */}
      <SectionHint hint="Explore how FactoryOS connects operations.">
        <section className="relative bg-[#0a0b12] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker">Platform</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One Intelligent Platform For Modern Manufacturing
              </h2>
            </Reveal>
            <div className="mt-12">
              <SymbolGrid items={platformPillars} columns={5} />
            </div>
          </div>
        </section>
      </SectionHint>

      {/* FACTORY AI COPILOT */}
      <SectionHint hint="Try asking me a factory question.">
        <section className="relative overflow-hidden bg-[#0a0b12] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,30,36,0.12),transparent_55%)]" />
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
                  One intelligent assistant for the factory.
                </p>
                <p className="mt-3 max-w-md text-zinc-400">
                  Ask a question in plain language — Copilot draws on operations,
                  knowledge, people, and assets for a sourced answer, then
                  carries out the action once a person confirms it.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold tracking-wide text-primary uppercase">
                  <span>Ask</span>
                  <ArrowRight className="size-3.5 text-zinc-600" />
                  <span>Understand</span>
                  <ArrowRight className="size-3.5 text-zinc-600" />
                  <span>Decide</span>
                  <ArrowRight className="size-3.5 text-zinc-600" />
                  <span>Act</span>
                </div>
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
      </SectionHint>

      {/* USE CASES */}
      <SectionHint hint="Looking for a manufacturing use case?">
        <section className="relative bg-[#0a0b12] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker">Use cases</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Intelligence Across The Factory
              </h2>
            </Reveal>
            <div className="mt-12">
              <SymbolGrid items={homeUseCases} columns={3} />
            </div>
          </div>
        </section>
      </SectionHint>

      {/* TRUST / ENTERPRISE */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${asset("/images/factory-transform.jpg")})` }}
        />
        <div className="absolute inset-0 bg-[#07080d]/92" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="kicker">Trust</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Built AI-Native. Enterprise Ready.
            </h2>
          </Reveal>
          <div className="mt-12">
            <SymbolGrid items={aiNativeCore} columns={5} />
          </div>
        </div>
      </section>

      {/* REQUEST DEMO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.18),transparent_60%)]" />
        <div className="surface relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-14 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Build The Factory That Acts On Intelligence.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Move beyond fragmented reports and disconnected workflows. Turn
            factory information into intelligent action.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-8 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold"
            )}
          >
            See it on your lines
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
