import { ServiceLayout } from "@/components/service-layout";
import { SparkLine, BarChart } from "@/components/diagrams";

export default function MeasurementPage() {
  return (
    <ServiceLayout
      slug="measurement"
      title="Closed-loop measurement"
      copy="Pilot success is recovered OTIF and recovered labor hours. Every Copilot recommendation can be scored so operations can defend the AI layer."
      image="/images/factory-transform.jpg"
      diagram={
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs text-zinc-500">Recovered orders</p>
            <SparkLine className="h-28 w-full" />
          </div>
          <div>
            <p className="mb-2 text-xs text-zinc-500">Fill-rate movement</p>
            <BarChart values={[60, 64, 70, 76, 82, 88, 92]} />
          </div>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Recovered orders", "At-risk orders that made the dock after a FactoryOS action."],
          ["Recovered hours", "Downtime avoided when skill coverage moved at yellow, not red."],
          ["Fill-rate delta", "Certified coverage vs need, before and after the recommendation."],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#101119] p-5">
            <h2 className="font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{copy}</p>
          </article>
        ))}
      </div>
    </ServiceLayout>
  );
}
