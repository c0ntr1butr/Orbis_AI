import { ArrowRight, MessageSquare, Sparkles, Target, Zap } from "lucide-react";

import { Reveal } from "@/components/reveal";
import type { AiStory } from "@/lib/services";

const STEPS = [
  { key: "ask", label: "Ask", icon: MessageSquare },
  { key: "understand", label: "Understand", icon: Sparkles },
  { key: "decide", label: "Decide", icon: Target },
  { key: "act", label: "Act", icon: Zap },
] as const;

export function AiStoryFlow({ title, story }: { title: string; story: AiStory }) {
  return (
    <div className="mt-16">
      <Reveal>
        <p className="kicker">Orbis AI, applied to {title}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          How the AI works this module
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold tracking-wide text-primary uppercase">
          {STEPS.map((step, i) => (
            <span key={step.key} className="flex items-center gap-2">
              {step.label}
              {i < STEPS.length - 1 && <ArrowRight className="size-3.5 text-zinc-600" />}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="relative mt-8 grid gap-4 lg:grid-cols-4">
        <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:block" />
        {STEPS.map((step, i) => (
          <Reveal key={step.key} delay={i * 100}>
            <article className="card-lift surface relative flex h-full flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="orbis-glow flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-primary/5">
                  <step.icon className="size-4 text-primary" />
                </span>
                <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  {i + 1}. {step.label}
                </p>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
                {story[step.key]}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
