import { ServiceLayout } from "@/components/service-layout";
import { IntegrationDiagram } from "@/components/diagrams";

export default function IntegrationsPage() {
  return (
    <ServiceLayout
      slug="integrations"
      title="Connect your factory"
      copy="MES, WMS, PLC historians, and time & attendance feed FactoryOS through API-ready connectors. Start with one line — not a six-month warehouse project."
      image="/images/factory-operations.jpg"
      diagram={<IntegrationDiagram />}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="card-lift surface p-5">
          <h2 className="font-semibold text-white">What we connect first</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            One MES feed for the pilot cell, one attendance or T&A source, and material status from WMS or kit lists. Historians join when downtime needs machine context.
          </p>
        </article>
        <article className="card-lift surface p-5">
          <h2 className="font-semibold text-white">What you do not need</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            A finished data lake, a new historian, or a plant-wide cutover. FactoryOS is the intelligence layer on systems you already run.
          </p>
        </article>
      </div>
    </ServiceLayout>
  );
}
