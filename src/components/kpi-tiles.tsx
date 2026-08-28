import { cn } from "@/lib/utils";

export type Kpi = {
  value: string;
  label: string;
  tone?: "live" | "risk" | "neutral";
};

export function KpiTiles({ items, dense = false }: { items: Kpi[]; dense?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-2",
        items.length >= 6
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "kpi-pop rounded-xl border border-black/8 bg-white px-3 py-2.5 shadow-[0_1px_2px_rgb(16_17_20_/_4%)]",
            dense && "px-2.5 py-2"
          )}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <p
            className={cn(
              "text-lg font-semibold leading-tight sm:text-xl",
              item.tone === "live" && "text-live",
              item.tone === "risk" && "text-primary",
              (!item.tone || item.tone === "neutral") && "text-zinc-900"
            )}
          >
            {item.value}
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-zinc-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
