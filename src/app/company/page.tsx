import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SymbolGrid } from "@/components/symbol-grid";
import { modules, aiNativeCore } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CompanyPage() {
  const copilot = modules.find((m) => m.signature)!;

  const tiers = [
    {
      name: "Orbis AI Technologies",
      role: "The company",
      copy: "Orbis AI Technologies builds FactoryOS — the AI-native operating system that turns production and workforce data into one live plant decision loop.",
    },
    {
      name: "FactoryOS",
      role: "The flagship product",
      copy: "The AI-native platform that connects operations, people, assets, and knowledge into one factory model — not a dozen disconnected logins.",
    },
    {
      name: "Factory AI Copilot",
      role: "The intelligent product experience",
      copy: copilot.pitch,
    },
  ];

  return (
    <div>
      <PageBanner
        kicker="Company"
        title="Orbis AI Technologies"
        copy="We build the intelligence layer for modern manufacturing — an AI-native platform, not a legacy dashboard with a chatbot bolted on."
        image="/images/factory-transform.jpg"
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="kicker">What we build</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Company. Product. Intelligence.
          </h2>
        </Reveal>
        <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-ai-violet/30 to-transparent lg:block" />
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <article className="card-lift surface relative flex h-full flex-col p-5">
                <p className="text-[11px] font-semibold tracking-wider text-ai-cyan uppercase">{tier.role}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{tier.copy}</p>
                {i < tiers.length - 1 && (
                  <ArrowRight className="mt-3 size-4 text-zinc-600 lg:hidden" />
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-16">
            <p className="kicker">What we value</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Built AI-Native. Enterprise Ready.
            </h2>
            <div className="mt-10">
              <SymbolGrid items={aiNativeCore} columns={5} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
            <div className="surface p-5">
              <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">Reach us</p>
              <div className="mt-3 space-y-2.5 text-sm text-zinc-300">
                <a href="mailto:info@orbisfactoryos.ai" className="flex items-center gap-2 hover:text-white">
                  <Mail className="size-3.5 text-ai-cyan" />
                  info@orbisfactoryos.ai
                </a>
                <a href="tel:+17143631592" className="flex items-center gap-2 hover:text-white">
                  <Phone className="size-3.5 text-ai-cyan" />
                  +1 714 363 1592
                </a>
                <p className="flex items-start gap-2 text-zinc-400">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-ai-cyan" />
                  <span>
                    ONYX Office Plaza, 29777 Telegraph Road, Suite 4200
                    <span className="block">Southfield, MI 48034, USA</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="surface flex flex-col justify-center p-5 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-white">See it on your lines</h3>
              <p className="mt-1.5 text-sm text-zinc-400">
                The fastest way to know Orbis AI Technologies is a working session on your plant.
              </p>
              <Link
                href="/request-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "glow-cta mt-4 h-11 self-center rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-6 font-semibold sm:self-start"
                )}
              >
                See It On Your Lines
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
