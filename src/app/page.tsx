import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/asset";
import { Reveal } from "@/components/reveal";
import { HeroIntelligenceVisual } from "@/components/hero-intelligence-visual";
import { FactoryCopilotChat } from "@/components/factory-copilot-chat";
import { SectionHint } from "@/components/section-hint";
import { SymbolGrid } from "@/components/symbol-grid";
import { PhotoCarousel } from "@/components/photo-carousel";
import { ModuleDiagram } from "@/components/module-widgets";
import { ProductMockup } from "@/components/product-mockup";
import { CopilotSteps } from "@/components/copilot-steps";
import { modules, aiNativeCore, platformPillars } from "@/lib/services";
import { useCases } from "@/lib/use-cases";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const copilot = modules.find((m) => m.signature)!;
const homeUseCases = useCases.slice(0, 4);

const moduleCards = modules.map((module) => ({
  key: module.slug,
  href: module.href,
  title: module.title,
  kicker: module.kicker,
  badge: module.signature ? "Signature" : undefined,
  icon: <module.icon className="size-3.5" />,
}));

const caseBannerImages = ["/images/factory-hero.jpg", "/images/factory-operations.jpg", "/images/factory-transform.jpg"];

const showcaseSlugs = ["dashboard", "warehouse", "analytics"];
const showcaseModules = showcaseSlugs
  .map((slug) => modules.find((m) => m.slug === slug))
  .filter((m): m is (typeof modules)[number] => Boolean(m));

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
                FactoryOS connects operations, people, assets, and knowledge
                into one AI-native platform — turning factory data into
                intelligent decisions and productive action.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/request-demo"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 text-sm font-semibold glow-cta hover:brightness-110"
                  )}
                >
                  See It On Your Lines
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

      {/* MODULES */}
      <SectionHint hint="Explore how FactoryOS connects operations.">
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="kicker">Product</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
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
                <PhotoCarousel items={moduleCards} ariaPrefix="module" />
              </div>
            </Reveal>
          </div>
        </section>
      </SectionHint>

      {/* PRODUCT SHOWCASE */}
      <SectionHint hint="This is what's actually running on the screen.">
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker">Inside FactoryOS</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                The Product, Not A Pitch Deck.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-400">
                Real widgets from the live platform — the same ones a plant
                manager sees, not stock screenshots.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {showcaseModules.map((module, i) => (
                <Reveal key={module.slug} delay={i * 100}>
                  <Link
                    href={module.href}
                    className="card-lift surface group flex h-full flex-col p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                        <module.icon className="size-3.5 text-primary" />
                        {module.title}
                      </span>
                      <ArrowRight className="size-3.5 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <div className="mt-4 flex-1">
                      <ModuleDiagram widget={module.widget} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionHint>

      {/* FACTORY AI COPILOT */}
      <SectionHint hint="Try asking me a factory question.">
        <section className="relative overflow-hidden py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="glass orbis-glow relative overflow-hidden p-6 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,30,36,0.16),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.14),transparent_55%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1fr_0.55fr] lg:items-start">
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
                  <ul className="mt-6 space-y-2.5 text-sm text-zinc-300">
                    {[
                      "Understands your operations",
                      "Finds what matters",
                      "Recommends the right actions",
                      "Helps your team act faster",
                    ].map((c) => (
                      <li key={c} className="flex items-center gap-2.5">
                        <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-ai-cyan to-ai-violet" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/ai"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Meet the full Copilot →
                    </Link>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <FactoryCopilotChat />
                </Reveal>
                <Reveal delay={150}>
                  <CopilotSteps />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </SectionHint>

      {/* PLATFORM */}
      <SectionHint hint="See how it all connects.">
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker">Platform</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One Intelligent Platform For Modern Manufacturing
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div>
                <SymbolGrid items={platformPillars} columns={2} />
              </div>
              <Reveal delay={100}>
                <ProductMockup />
              </Reveal>
            </div>
          </div>
        </section>
      </SectionHint>

      {/* USE CASES */}
      <SectionHint hint="Looking for a manufacturing use case?">
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="kicker">Use cases</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Real Plants. Real Figures.
                  </h2>
                </div>
                <Link href="/use-cases" className="text-sm font-medium text-primary hover:underline">
                  View all use cases →
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {homeUseCases.map((item, index) => (
                <Reveal key={item.slug} delay={index * 60}>
                  <Link
                    href={`/use-cases/${item.slug}`}
                    className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-5"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${asset(caseBannerImages[index % caseBannerImages.length])})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/70 to-black/35" />
                    <div className="relative flex h-full flex-col">
                      <p className="text-[11px] font-semibold tracking-wider text-ai-cyan uppercase">
                        {item.industry}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-300">{item.capture}</p>
                      <div className="mt-4">
                        <div className="mb-1 flex justify-between text-[10px] text-zinc-400">
                          <span>{item.beforeLabel}</span>
                          <span className="text-live">{item.afterLabel}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
                          <div
                            className="bar-grow h-full rounded-full bg-gradient-to-r from-ai-violet to-live"
                            style={{ width: `${item.afterPct}%` }}
                          />
                        </div>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ai-cyan group-hover:underline">
                        Read the story <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionHint>

      {/* TRUST / ENTERPRISE */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${asset("/images/factory-transform.jpg")})` }}
        />
        <div className="absolute inset-0 bg-[#07080d]/94" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Reveal>
            <div className="glass relative overflow-hidden p-6 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.1),transparent_55%)]" />
              <p className="kicker">Trust</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Built AI-Native. Enterprise Ready.
              </h2>
              <div className="relative mt-10">
                <SymbolGrid items={aiNativeCore} columns={5} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REQUEST DEMO */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.18),transparent_60%)]" />
        <div className="surface relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-14 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            See Intelligence In Action.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Discover how FactoryOS can transform the way your teams operate,
            decide and act.
          </p>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-8 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold"
            )}
          >
            See It On Your Lines
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
