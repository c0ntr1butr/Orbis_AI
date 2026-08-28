import { asset } from "@/lib/asset";
import { DemoForm } from "@/components/demo-form";
import { Reveal } from "@/components/reveal";

export default function RequestDemoPage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset("/images/factory-operations.jpg")})` }}
      />
      <div className="absolute inset-0 bg-[#07080d]/88" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 hidden opacity-50 lg:block" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-24">
        <Reveal>
          <p className="kicker">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Request for Demo
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            See FactoryOS on a live plant snapshot
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-300">
            We walk OTIF, OEE, downtime, crew fill, and Copilot on a scenario
            that matches your lines — the same intelligence layer shown on the
            home snapshot of modern industry operations.
          </p>
          <ul className="mt-9 space-y-3 text-sm text-zinc-300">
            <li className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">1</span>
              <span className="pt-0.5">30-minute working session, not a slide tour.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">2</span>
              <span className="pt-0.5">Production and workforce views in one platform.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">3</span>
              <span className="pt-0.5">Optional security Q&A for IT and plant leadership.</span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={90}>
          <div className="surface p-6 backdrop-blur sm:p-8">
            <DemoForm submitLabel="Request for Demo" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
