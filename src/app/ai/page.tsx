import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CopilotSteps } from "@/components/copilot-steps";
import { CtaBand, PageBanner } from "@/components/page-banner";
import { FactoryCopilotChat } from "@/components/factory-copilot-chat";
import { Reveal } from "@/components/reveal";
import { modules } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const capabilities = [
  "Understands your operations",
  "Finds what matters",
  "Recommends the right actions",
  "Helps your team act faster",
];

export default function AiPage() {
  const copilot = modules.find((m) => m.signature)!;

  return (
    <div>
      <PageBanner
        kicker="Factory AI Copilot"
        title="Meet Factory AI Copilot"
        copy="One intelligent assistant for the factory. Ask a question in plain language — Copilot draws on operations, knowledge, people, and assets for a sourced answer, then carries out the action once a person confirms it."
        image="/images/factory-hero.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="glass relative overflow-hidden p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.14),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.14),transparent_55%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1fr_0.55fr] lg:items-start">
            <Reveal>
              <span className="kicker rounded-full border border-primary/25 bg-primary/8 px-3 py-1">
                <copilot.icon className="size-3.5" />
                Signature AI layer
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                One assistant. Every operation.
              </h2>
              <ul className="mt-6 space-y-2.5 text-sm text-zinc-300">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2.5">
                    <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-ai-cyan to-ai-violet" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={copilot.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  See the full module <ArrowRight className="size-3.5" />
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

        <Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {copilot.highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="card-lift surface h-full p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-ai-violet/25 via-ai-cyan/10 to-ai-violet/5">
                    <item.icon className="size-5 text-ai-cyan" />
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-cta mt-10 h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold"
            )}
          >
            See It On Your Lines
          </Link>
        </Reveal>
      </div>
      <CtaBand />
    </div>
  );
}
