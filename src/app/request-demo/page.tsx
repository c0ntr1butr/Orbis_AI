import { PageBanner } from "@/components/page-banner";
import { DemoForm } from "@/components/demo-form";
import { Reveal } from "@/components/reveal";

export default function RequestDemoPage() {
  return (
    <div>
      <PageBanner
        kicker="Request a Demo"
        title="Ready to make your factory more intelligent?"
        copy="See how FactoryOS can transform operational data into connected intelligence and action — on a scenario that looks like your lines."
        image="/images/factory-operations.jpg"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-20">
        <Reveal>
          <ul className="space-y-3 text-sm text-zinc-200">
            <li className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">1</span>
              <span className="pt-0.5">A working session, not a slide tour.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">2</span>
              <span className="pt-0.5">Production and workforce views in one platform.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">3</span>
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
