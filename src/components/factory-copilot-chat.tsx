"use client";

import { Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
  actions?: string[];
};

type QaRule = {
  match: RegExp;
  response: string;
  actions?: string[];
};

const RULES: QaRule[] = [
  {
    match: /quality|defect/i,
    response:
      "Quality is stable — one repeat-pattern defect is flagged on Line 1 and a CAPA is already open. Nothing else is trending toward a customer complaint right now.",
  },
  {
    match: /maintenance|machine|breakdown/i,
    response:
      "One asset is flagged for preventive service before it becomes a breakdown. Everything else on the floor is within its normal health range.",
  },
  {
    match: /priorit/i,
    response:
      "Three things need attention this shift: recovering the at-risk orders on Line 3, moving a certified welder to Cell 4 before OEE slips further, and confirming the SMT changeover against a thin second shift.",
  },
  {
    match: /attention|area|watch|needs.*today/i,
    response:
      "Cell 4 needs attention first — OEE has trended down for two shifts and the next certified skill isn't scheduled until tomorrow. Line 3's kit shortage is contained for now.",
  },
  {
    match: /understand|explain|issue|help/i,
    response:
      "Here's the shape of it: a material shortage and a workforce gap landed on the same line at the same time. Those normally live in two different systems — Copilot connects them into one action instead of two open tickets.",
  },
  {
    match: /production|today|behind/i,
    response:
      "Line 3 is running behind plan — 18 door-latch kits are short (material shortage) and two certified operators are on Line 1 (workforce gap). Pulling kit 7B from overflow and reassigning both operators recovers the affected orders.",
    actions: ["Assign work order", "Notify supervisor"],
  },
];

const FALLBACK =
  "Once connected to your plant data, Copilot answers exactly this kind of question in seconds — sourced from your live operations, not a script. Book a session to see it running on your lines.";

const SUGGESTIONS = [
  "What needs attention today?",
  "What's affecting production?",
  "Show current operational priorities.",
];

function StreamingText({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 3;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 14);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{shown}</>;
}

export function FactoryCopilotChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Ask me about today's shift — production, workforce, quality, or maintenance.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const rule = RULES.find((r) => r.match.test(trimmed));
    const delay = 650 + Math.random() * 500;
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { role: "ai", text: rule?.response ?? FALLBACK, actions: rule?.actions },
      ]);
    }, delay);
  }

  return (
    <div className="surface flex flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          <Sparkles className="size-3.5 text-primary" />
          Factory AI Copilot
        </p>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-live">
          <span className="size-1.5 animate-pulse rounded-full bg-live" />
          Try it — demo data
        </span>
      </div>

      <div ref={scrollRef} className="flex max-h-80 min-h-64 flex-col gap-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "ml-auto max-w-[80%]" : "max-w-[88%]"}>
            <div
              className={
                m.role === "user"
                  ? "rounded-xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-white"
                  : "rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm leading-relaxed text-zinc-200"
              }
            >
              {m.role === "ai" ? <StreamingText text={m.text} /> : m.text}
            </div>
            {m.actions && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {m.actions.map((a) => (
                  <span
                    key={a}
                    className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-[#0d0e16]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        {typing && (
          <div className="flex w-fit items-center gap-1 rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.03] px-3.5 py-3">
            <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-zinc-400" />
          </div>
        )}
      </div>

      <div className="border-t border-white/8 p-3">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {SUGGESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => ask(q)}
              disabled={typing}
              className="rounded-full border border-primary/25 bg-primary/8 px-2.5 py-1 text-[11px] text-primary transition-colors hover:bg-primary/15 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Factory AI Copilot..."
            className="h-10 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus-visible:border-primary/50"
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={typing}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform hover:brightness-110 disabled:opacity-50"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
