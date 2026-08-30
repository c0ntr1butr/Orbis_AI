import { MessageSquare, Sparkles, Target, Zap } from "lucide-react";

const STEPS = [
  { key: "ask", label: "Ask", icon: MessageSquare, copy: "You ask in natural language." },
  { key: "understand", label: "Understand", icon: Sparkles, copy: "AI understands the context." },
  { key: "decide", label: "Decide", icon: Target, copy: "AI analyzes and prioritizes." },
  { key: "act", label: "Act", icon: Zap, copy: "Recommendations become actions." },
] as const;

export function CopilotSteps({ title = "How Copilot Works" }: { title?: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-ai-violet uppercase">{title}</p>
      <div className="mt-4 space-y-5 border-l border-white/10 pl-4">
        {STEPS.map((step) => (
          <div key={step.key} className="relative">
            <span className="absolute top-1 -left-[1.32rem] size-2.5 rounded-full bg-gradient-to-br from-ai-cyan to-ai-violet shadow-[0_0_0_3px_rgb(7_8_13)]" />
            <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <step.icon className="size-3.5 text-ai-cyan" />
              {step.label}
            </p>
            <p className="mt-0.5 text-xs text-zinc-500">{step.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
