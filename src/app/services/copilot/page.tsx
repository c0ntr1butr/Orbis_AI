import { MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

import { ServiceLayout } from "@/components/service-layout";

export default function CopilotServicePage() {
  return (
    <ServiceLayout
      slug="copilot"
      title="Factory AI Copilot"
      copy="Ask why production is behind. Copilot answers from plant state — material shortages and workforce gaps on the same ticket — so the recommendation is sourced, not generic."
      image="/images/factory-operations.jpg"
      diagram={
        <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-[#101119] p-5">
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            Factory AI Copilot
          </p>
          <div className="mt-4 rounded-xl bg-white/5 p-3 text-sm text-white">
            Why is production behind today?
          </div>
          <div className="mt-3 rounded-xl border border-primary/25 bg-primary/10 p-3 text-sm leading-relaxed text-zinc-200">
            Line 3 is short 18 door-latch kits (material shortage) and two certified operators are on Line 1 (workforce gap). Pull kit 7B from overflow and reassign those two operators to recover 6 of 11 at-risk orders.
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: MessageSquare,
            title: "Questions operations actually ask",
            copy: "Why is the line behind, which orders recover, who is certified to move — not a chatbot FAQ.",
          },
          {
            icon: Sparkles,
            title: "Next best action",
            copy: "Kit, cell, and people in one recommendation. Supervisors act from the tablet.",
          },
          {
            icon: ShieldCheck,
            title: "Sourced answers",
            copy: "Every reply cites the signals it used so plant leadership can audit the AI layer.",
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
