import { BarChart3, Package, TriangleAlert } from "lucide-react";

import { SparkLine } from "@/components/diagrams";
import { ServiceLayout } from "@/components/service-layout";

export default function ProductionServicePage() {
  return (
    <ServiceLayout
      slug="production"
      title="Production Intelligence"
      copy="Live OTIF, OEE, downtime, and orders-at-risk across cells. The same board the control room and the line supervisor share — kits attached, not buried in MES extracts."
      image="/images/factory-operations.jpg"
      diagram={
        <div>
          <p className="mb-4 text-sm font-medium text-zinc-400">Orders-at-risk trend · Line 3</p>
          <SparkLine className="h-40 w-full" />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "OTIF", value: "84.4%" },
              { label: "OEE", value: "78.2%" },
              { label: "Orders at risk", value: "11" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 p-4">
                <p className="text-xs text-zinc-500">{item.label}</p>
                <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: TriangleAlert,
            title: "See the constraint",
            copy: "Orders-at-risk ranked by customer dock, with the cell and kit that will miss first.",
          },
          {
            icon: Package,
            title: "Materials on the same board",
            copy: "Overflow kits, WIP, and shortages sit next to OEE so recovery is not a second login.",
          },
          {
            icon: BarChart3,
            title: "Shift, not overnight",
            copy: "Curves update with MES events. The morning meeting reads what the line already acted on.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-[#101119] p-5">
            <item.icon className="size-5 text-primary" />
            <h2 className="mt-3 font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{item.copy}</p>
          </article>
        ))}
      </div>
    </ServiceLayout>
  );
}
