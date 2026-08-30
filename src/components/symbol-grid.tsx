import type { ComponentType } from "react";

import { Reveal } from "@/components/reveal";

export type SymbolTone = "violet" | "cyan" | "primary";

type SymbolItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  copy: string;
  tone?: SymbolTone;
};

const COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

const TONE_CLASSES: Record<SymbolTone, { ping: string; ring: string; icon: string; glow: string }> = {
  violet: {
    ping: "bg-ai-violet/20",
    ring: "from-ai-violet/25 to-ai-violet/5",
    icon: "text-ai-violet",
    glow: "shadow-[0_0_0_1px_rgb(139_92_246/25%),0_12px_40px_rgb(139_92_246/22%)]",
  },
  cyan: {
    ping: "bg-ai-cyan/20",
    ring: "from-ai-cyan/25 to-ai-cyan/5",
    icon: "text-ai-cyan",
    glow: "shadow-[0_0_0_1px_rgb(56_189_248/25%),0_12px_40px_rgb(56_189_248/22%)]",
  },
  primary: {
    ping: "bg-primary/20",
    ring: "from-primary/25 to-primary/5",
    icon: "text-primary",
    glow: "shadow-[0_0_0_1px_rgb(227_30_36/25%),0_12px_40px_rgb(227_30_36/22%)]",
  },
};

export function SymbolGrid({ items, columns = 5 }: { items: SymbolItem[]; columns?: 2 | 3 | 4 | 5 }) {
  return (
    <div className={`grid gap-8 sm:grid-cols-2 ${COLS[columns]}`}>
      {items.map((item, index) => {
        const tone = TONE_CLASSES[item.tone ?? "violet"];
        return (
          <Reveal key={item.title} delay={index * 70}>
            <div className="flex flex-col items-center text-center">
              <div
                className="float-card relative flex items-center justify-center"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <span
                  className={`absolute inline-flex size-16 animate-ping rounded-full ${tone.ping}`}
                  style={{ animationDuration: "3s" }}
                />
                <span
                  className={`relative flex size-16 items-center justify-center rounded-full bg-gradient-to-br ${tone.ring} ${tone.glow} backdrop-blur-sm`}
                >
                  <item.icon className={`size-6 ${tone.icon}`} />
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 max-w-[15rem] text-xs leading-relaxed text-zinc-400">{item.copy}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
