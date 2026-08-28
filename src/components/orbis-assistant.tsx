"use client";

import Link from "next/link";
import { MessageCircle, Send, Sparkles, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Cta = { label: string; href: string };
type ChatEntry = { role: "bot" | "user"; text: string; cta?: Cta };

type Rule = { match: RegExp; reply: string; cta?: Cta };

const RULES: Rule[] = [
  {
    match: /human|person|agent|representative|support|talk to (someone|somebody)|escalat/i,
    reply:
      "Of course — I'll connect you with our team. You can reach a person directly at info@orbisfactoryos.ai or +1 714 363 1592, or leave your details and someone will follow up within one business day.",
    cta: { label: "Contact our team", href: "/contact" },
  },
  {
    match: /price|pricing|cost|how much/i,
    reply:
      "Pricing depends on the modules and number of lines in your pilot — the fastest way to get a real number is a short working session where we scope it against your plant.",
    cta: { label: "Request a Demo", href: "/request-demo" },
  },
  {
    match: /what (is|'s) factoryos|about factoryos/i,
    reply:
      "FactoryOS is Orbis AI's AI-native manufacturing platform — it connects operations, people, assets, and knowledge into one intelligent layer, with a Factory AI Copilot that turns data into action.",
  },
  {
    match: /module|what can it do|feature|capabilit/i,
    reply:
      "FactoryOS covers production, workforce, quality, maintenance, warehouse, analytics, vendors, contracts, and more — all AI-native, all on one connected plant model, not ten separate logins.",
    cta: { label: "Explore the platform", href: "/services" },
  },
  {
    match: /copilot/i,
    reply:
      "Factory AI Copilot is your intelligent assistant for the whole factory. Ask a plain-language question and it draws on live operations and workflows for a sourced answer — then acts once you confirm.",
    cta: { label: "Meet the Copilot", href: "/services/copilot" },
  },
  {
    match: /demo|trial|try it|see it/i,
    reply:
      "A FactoryOS session is the fastest way to see this on your own lines — the closest thing to trying the product before it's installed anywhere.",
    cta: { label: "Request a Demo", href: "/request-demo" },
  },
  {
    match: /secur|governance|complian|audit/i,
    reply:
      "FactoryOS is secure and governed by design — encrypted in transit and at rest, plant-level tenancy, and every AI action scoped, logged, and auditable.",
  },
];

const FALLBACK: Omit<Rule, "match"> = {
  reply:
    "Good question — that's exactly the kind of thing our team can walk through on a live scenario. Want me to connect you?",
  cta: { label: "Contact our team", href: "/contact" },
};

const SUGGESTIONS = ["What is FactoryOS?", "What can it do?", "Tell me about the Copilot", "I want a demo"];

export function OrbisAssistant() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<ChatEntry[]>([
    { role: "bot", text: "Hi, I'm Orbis AI. What would you like to explore?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typing]);

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setHistory((h) => [...h, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const rule = RULES.find((r) => r.match.test(trimmed)) ?? FALLBACK;
    window.setTimeout(() => {
      setTyping(false);
      setHistory((h) => [...h, { role: "bot", text: rule.reply, cta: rule.cta }]);
    }, 550 + Math.random() * 400);
  }

  return (
    <div className="fixed right-5 bottom-24 z-60 md:bottom-5">
      {open && (
        <div className="animate-in fade-in slide-in-from-bottom-2 mb-3 flex w-[19rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e16] shadow-[0_24px_60px_rgb(0_0_0_/_55%)] duration-200 sm:w-80">
          <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.02] px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <Sparkles className="size-4 text-primary" />
              Orbis AI
            </p>
            <button
              type="button"
              aria-label="Close Orbis AI assistant"
              onClick={() => setOpen(false)}
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <X className="size-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex max-h-72 flex-col gap-2.5 overflow-y-auto p-4">
            {history.map((entry, i) => (
              <div key={i} className={entry.role === "user" ? "ml-auto max-w-[85%]" : "max-w-[92%]"}>
                <div
                  className={
                    entry.role === "user"
                      ? "rounded-xl rounded-br-sm bg-primary px-3 py-2 text-xs text-white"
                      : "rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-zinc-200"
                  }
                >
                  {entry.text}
                </div>
                {entry.cta && (
                  <Link
                    href={entry.cta.href}
                    className="mt-1.5 inline-block rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#0d0e16] transition-transform hover:scale-105"
                  >
                    {entry.cta.label} →
                  </Link>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex w-fit items-center gap-1 rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.03] px-3 py-2.5">
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
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-300 transition-colors hover:border-primary/40 hover:text-white disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
              <button
                type="button"
                onClick={() => ask("I'd like to talk to a person")}
                disabled={typing}
                className="flex items-center gap-1 rounded-full border border-primary/25 bg-primary/8 px-2.5 py-1 text-[11px] text-primary transition-colors hover:bg-primary/15 disabled:opacity-50"
              >
                <UserRound className="size-3" />
                Talk to a person
              </button>
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
                placeholder="Ask Orbis AI..."
                className="h-9 flex-1 rounded-full border border-white/10 bg-white/5 px-3.5 text-xs text-white outline-none placeholder:text-zinc-500 focus-visible:border-primary/50"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={typing}
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform hover:brightness-110 disabled:opacity-50"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Orbis AI assistant" : "Open Orbis AI assistant"}
        className="flex size-13 items-center justify-center rounded-full bg-gradient-to-r from-[#8B0000] to-primary text-white shadow-[0_10px_30px_rgb(227_30_36_/_45%)] transition-transform hover:scale-105"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5.5" />}
      </button>
    </div>
  );
}
