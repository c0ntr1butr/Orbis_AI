import { Activity, Plug, Lock, Shield } from "lucide-react";

export function TrustBadges() {
  const items = [
    { icon: Shield, label: "Enterprise Cloud" },
    { icon: Lock, label: "Secure by Design" },
    { icon: Activity, label: "Role-Based Access" },
    { icon: Plug, label: "API-Ready Integrations" },
  ];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 text-xs text-zinc-300">
          <Icon className="size-3.5 text-zinc-400" />
          {label}
        </li>
      ))}
    </ul>
  );
}
