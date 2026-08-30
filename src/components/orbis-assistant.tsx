"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, Sparkles, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { DEFAULT_HINT, setAssistantHint, subscribeAssistantHint } from "@/lib/assistant-hint";

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
    cta: { label: "See it on your lines", href: "/request-demo" },
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
    match: /copilot|factory question/i,
    reply:
      "Factory AI Copilot is your intelligent assistant for the whole factory. Ask a plain-language question and it draws on live operations and workflows for a sourced answer — then acts once you confirm.",
    cta: { label: "Meet the Copilot", href: "/services/copilot" },
  },
  {
    match: /use case|example|industry/i,
    reply:
      "FactoryOS runs across production, workforce, maintenance, quality, warehouse, and analytics use cases — every one framed around a business outcome, not a dashboard feature.",
    cta: { label: "See use cases", href: "/use-cases" },
  },
  {
    match: /demo|trial|try it|see it/i,
    reply:
      "A FactoryOS session is the fastest way to see this on your own lines — the closest thing to trying the product before it's installed anywhere.",
    cta: { label: "See it on your lines", href: "/request-demo" },
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

const ROUTE_HINTS: Record<string, string> = {
  "/": "Want to see how FactoryOS works?",
  "/services": "Explore how FactoryOS connects operations.",
  "/use-cases": "Looking for a manufacturing use case?",
  "/contact": "Ready to explore FactoryOS?",
  "/request-demo": "Ready to explore FactoryOS?",
};

export function OrbisAssistant() {
  const pathname = usePathname();
  const [hint, setHint] = useState(DEFAULT_HINT);
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [history, setHistory] = useState<ChatEntry[]>([
    { role: "bot", text: `Hi, I'm Orbis AI. ${DEFAULT_HINT}` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => subscribeAssistantHint(setHint), []);

  useEffect(() => {
    const base = ROUTE_HINTS[pathname] ?? (pathname.startsWith("/services/") ? "Try asking me a factory question." : DEFAULT_HINT);
    setAssistantHint(base);
  }, [pathname]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typing]);

  function toggle() {
    setOpen((o) => {
      const next = !o;
      if (next && !touched) {
        setHistory([{ role: "bot", text: `Hi, I'm Orbis AI. ${hint}` }]);
      }
      return next;
    });
  }

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setTouched(true);
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
    <div className="fixed right-5 bottom-24 z-60 flex flex-col items-end md:bottom-5">
      {open && (
        <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-2 mb-3 flex w-[19rem] flex-col overflow-hidden rounded-2xl border border-ai-violet/20 bg-[#0d0e16]/55 shadow-[0_24px_60px_rgb(0_0_0_/_55%),0_0_0_1px_rgb(139_92_246_/_8%)] backdrop-blur-2xl duration-200 sm:w-80">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <Sparkles className="size-4 text-ai-cyan" />
              Orbis AI
            </p>
            <button
              type="button"
              aria-label="Close Orbis AI assistant"
              onClick={() => setOpen(false)}
              className="text-zinc-400 transition-colors hover:text-white"
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
                      : "rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-3 py-2 text-xs leading-relaxed text-zinc-100 backdrop-blur-sm"
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
              <div className="flex w-fit items-center gap-1 rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm">
                <span className="size-1.5 animate-bounce rounded-full bg-zinc-300 [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-zinc-300 [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-zinc-300" />
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  disabled={typing}
                  className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-zinc-200 transition-colors hover:border-primary/40 hover:text-white disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
              <button
                type="button"
                onClick={() => ask("I'd like to talk to a person")}
                disabled={typing}
                className="flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] text-primary transition-colors hover:bg-primary/20 disabled:opacity-50"
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
                className="h-9 flex-1 rounded-full border border-white/15 bg-white/5 px-3.5 text-xs text-white outline-none placeholder:text-zinc-400 focus-visible:border-primary/50"
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

      {!open && (
        <div key={hint} className="animate-in fade-in slide-in-from-bottom-1 mb-3 max-w-52 rounded-2xl rounded-br-sm border border-white/15 bg-[#0d0e16]/55 px-3.5 py-2.5 text-xs text-zinc-100 shadow-[0_12px_30px_rgb(0_0_0_/_35%)] backdrop-blur-2xl duration-300">
          {hint}
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close Orbis AI assistant" : "Open Orbis AI assistant"}
        className="flex size-13 items-center justify-center rounded-full bg-gradient-to-br from-ai-violet via-primary to-[#8B0000] text-white shadow-[0_10px_30px_rgb(139_92_246_/_35%)] transition-transform hover:scale-105"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5.5" />}
      </button>
    </div>
  );
}
