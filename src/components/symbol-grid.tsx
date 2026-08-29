import type { ComponentType } from "react";

import { Reveal } from "@/components/reveal";

type SymbolItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  copy: string;
};

const COLS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function SymbolGrid({ items, columns = 5 }: { items: SymbolItem[]; columns?: 3 | 4 | 5 }) {
  return (
    <div className={`grid gap-8 sm:grid-cols-2 ${COLS[columns]}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 70}>
          <div className="flex flex-col items-center text-center">
            <div
              className="float-card relative flex items-center justify-center"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <span
                className="absolute inline-flex size-16 animate-ping rounded-full bg-primary/20"
                style={{ animationDuration: "3s" }}
              />
              <span className="orbis-glow relative flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-primary/5 backdrop-blur-sm">
                <item.icon className="size-6 text-primary" />
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-1.5 max-w-[15rem] text-xs leading-relaxed text-zinc-400">{item.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
