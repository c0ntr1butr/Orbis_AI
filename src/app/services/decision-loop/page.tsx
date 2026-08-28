import { ServiceLayout } from "@/components/service-layout";
import { LoopDiagram } from "@/components/diagrams";

export default function DecisionLoopPage() {
  return (
    <ServiceLayout
      slug="decision-loop"
      title="From signals to decisions to measurable value"
      copy="The operating loop on the FactoryOS wireframe: detect, understand, predict, recommend, act, and measure — automated every shift, not as a workshop poster."
      image="/images/factory-transform.jpg"
      diagram={<LoopDiagram />}
    >
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Detect", "Ingest machine, MES, and shift signals as they hit the floor."],
          ["Understand", "Normalize production and workforce into one plant model."],
          ["Predict", "Flag OTIF, downtime, and crew-fill risk while the shift can still recover."],
          ["Recommend", "Copilot names the kit, cell, and certified operator."],
          ["Act", "Supervisors dispatch without leaving the floor tablet."],
          ["Measure", "Close the loop on recovered orders and fill-rate."],
        ].map(([title, copy], i) => (
          <li key={title} className="card-lift surface p-5">
            <p className="text-xs font-semibold text-primary">0{i + 1}</p>
            <h2 className="mt-1 font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{copy}</p>
          </li>
        ))}
      </ol>
    </ServiceLayout>
  );
}
