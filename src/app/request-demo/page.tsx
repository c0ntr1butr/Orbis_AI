import { PageBanner } from "@/components/page-banner";
import { DemoForm } from "@/components/demo-form";
import { Reveal } from "@/components/reveal";

export default function RequestDemoPage() {
  return (
    <div>
      <PageBanner
        kicker="Request for Demo"
        title="See FactoryOS on a live plant snapshot"
        copy="We walk OTIF, OEE, downtime, crew fill, and Copilot on a scenario that matches your lines — the same intelligence layer shown across the platform."
        image="/images/factory-operations.jpg"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-20">
        <Reveal>
          <ul className="space-y-3 text-sm text-zinc-800">
            <li className="flex items-start gap-3 rounded-xl bg-zinc-50 p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/12 font-mono text-xs text-primary">1</span>
              <span className="pt-0.5">30-minute working session, not a slide tour.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-zinc-50 p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/12 font-mono text-xs text-primary">2</span>
              <span className="pt-0.5">Production and workforce views in one platform.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-zinc-50 p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/12 font-mono text-xs text-primary">3</span>
              <span className="pt-0.5">Optional security Q&A for IT and plant leadership.</span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={90}>
          <div className="surface p-6 sm:p-8">
            <DemoForm submitLabel="Request for Demo" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
