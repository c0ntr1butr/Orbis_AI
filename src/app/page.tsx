import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/asset";
import { Reveal } from "@/components/reveal";
import { CopilotPreview } from "@/components/module-widgets";
import { ModuleCarousel } from "@/components/module-carousel";
import { modules, platformCapabilities, aiNativeCore } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copilot = modules.find((m) => m.signature)!;

const carouselCards = modules.map((module) => ({
  slug: module.slug,
  href: module.href,
  title: module.title,
  kicker: module.kicker,
  signature: module.signature,
  icon: <module.icon className="size-3.5" />,
}));

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="hero-zoom absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/images/factory-operations.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/80 to-[#07080d]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/35" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
          <div>
            <p className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              AI-native manufacturing platform
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-[3.75rem] lg:leading-[1.06]">
              Turn Factory Operations Into{" "}
              <span className="text-gradient-orbis">Intelligent Action</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              FactoryOS connects operations, people, assets, knowledge, and
              workflows into one AI-native manufacturing platform — helping
              teams see what matters, decide faster, and act with confidence.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 text-sm font-semibold glow-cta hover:brightness-110"
                )}
              >
                Book a FactoryOS Session
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
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker">Product</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
                  AI-Native Modules. One Connected Factory.
                </h2>
              </div>
              <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                View all modules →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-8">
              <ModuleCarousel modules={carouselCards} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-black/8 bg-zinc-50 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,30,36,0.06),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <span className="kicker rounded-full border border-primary/25 bg-primary/6 px-3 py-1">
              <copilot.icon className="size-3.5" />
              {copilot.kicker}
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Meet the Factory AI Copilot.
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-zinc-700">
              One intelligent assistant for the entire factory.
            </p>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Ask a question in plain language and Copilot draws on operations,
              knowledge, people, assets, and workflows for a sourced answer —
              then carries out the action once a person confirms it.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface mt-8 p-5 sm:p-6">
              <CopilotPreview />
            </div>
          </Reveal>
          <div className="mt-6">
            <Link
              href={copilot.href}
              className="text-sm font-medium text-primary hover:underline"
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
        <div className="marquee flex min-w-max gap-12 px-8 text-sm font-semibold tracking-[0.22em] text-zinc-400 uppercase">
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

      <section className="border-y border-black/8 bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">Present on every module</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              One Connected Platform. Not Separate Tools.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformCapabilities.map((cap, index) => (
              <Reveal key={cap.title} delay={index * 70}>
                <div className="rounded-xl border border-black/8 bg-white p-4 shadow-[0_1px_2px_rgb(16_17_20_/_4%)]">
                  <cap.icon className="size-4 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold text-zinc-900">{cap.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{cap.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">Trust</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Built AI-Native. Enterprise Ready.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aiNativeCore.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="card-lift surface h-full p-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/18 to-primary/5">
                    <item.icon className="size-4.5 text-primary" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.08),transparent_60%)]" />
        <div className="surface relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-14 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl">
            Build the Factory That Acts on Intelligence.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-600">
            Move beyond fragmented reports and disconnected workflows. Give
            every team a connected view of operations — and an intelligent
            assistant that turns information into action.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-8 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold"
            )}
          >
            Book a FactoryOS Session
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
