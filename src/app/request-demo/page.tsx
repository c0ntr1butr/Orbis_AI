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
      <div className="absolute inset-0 bg-[#07080d]/86" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Request for Demo
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-white">
            See FactoryOS on a live plant snapshot
          </h1>
          <p className="mt-4 text-zinc-300">
            We walk OTIF, OEE, downtime, crew fill, and Copilot on a scenario
            that matches your lines — the same intelligence layer shown on the
            home snapshot of modern industry operations.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-zinc-400">
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="font-semibold text-primary">01</span>
              <span className="ml-2">30-minute working session, not a slide tour.</span>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="font-semibold text-primary">02</span>
              <span className="ml-2">Production and workforce views in one platform.</span>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="font-semibold text-primary">03</span>
              <span className="ml-2">Optional security Q&A for IT and plant leadership.</span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={90}>
          <div className="rounded-2xl border border-white/10 bg-[#101119]/92 p-6 backdrop-blur sm:p-8">
            <DemoForm submitLabel="Request for Demo" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
