import { BadgeCheck, Clock, Users } from "lucide-react";

import { BarChart } from "@/components/diagrams";
import { ServiceLayout } from "@/components/service-layout";

export default function WorkforceServicePage() {
  return (
    <ServiceLayout
      slug="workforce"
      title="Workforce Intelligence"
      copy="Crew fill, skill coverage, and absentee risk mapped to the same cells as production. A full roster can still be a dark station if the certified skill is on another line."
      image="/images/factory-transform.jpg"
      diagram={
        <div>
          <p className="mb-4 text-sm font-medium text-zinc-400">Crew fill vs certified need · Shift B</p>
          <BarChart values={[48, 62, 55, 74, 68, 92, 80]} />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Crew fill", value: "92%" },
              { label: "Certified coverage", value: "Cell 4 yellow" },
              { label: "Reassign ready", value: "2 operators" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs text-zinc-500">{item.label}</p>
                <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Users,
            title: "Fill-rate that means something",
            copy: "Scored against certified need for the running model, not headcount in the building.",
          },
          {
            icon: BadgeCheck,
            title: "Skills on the cell",
            copy: "The next certified welder or SMT tech is visible when OEE goes yellow — not after it goes red.",
          },
          {
            icon: Clock,
            title: "Earlier than the stop",
            copy: "Changeovers and second-shift gaps surface hours before the line actually waits.",
          },
        ].map((item) => (
          <article key={item.title} className="card-lift surface p-5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5">
              <item.icon className="size-5 text-primary" />
            </span>
            <h2 className="mt-3 font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{item.copy}</p>
          </article>
        ))}
      </div>
    </ServiceLayout>
  );
}
