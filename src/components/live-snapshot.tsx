import { Activity, Plug, Lock, Shield, Sparkles } from "lucide-react";

export function TrustBadges() {
  const items = [
    { icon: Sparkles, label: "AI-Native Core", lead: true },
    { icon: Shield, label: "Enterprise Cloud" },
    { icon: Lock, label: "Secure by Design" },
    { icon: Activity, label: "Role-Based Access" },
    { icon: Plug, label: "API-Ready Integrations" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map(({ icon: Icon, label, lead }) => (
        <li
          key={label}
          className={
            "flex items-center gap-2 text-xs " + (lead ? "font-semibold text-primary" : "text-zinc-300")
          }
        >
          <Icon className={lead ? "size-3.5 text-primary" : "size-3.5 text-zinc-400"} />
          {label}
        </li>
      ))}
    </ul>
  );
}
