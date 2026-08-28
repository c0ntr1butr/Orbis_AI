"use client";

import Link from "next/link";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";

type ChatEntry = { role: "bot" | "user"; text: string };

type Topic = {
  label: string;
  reply: string;
  cta?: { label: string; href: string };
};

const TOPICS: Topic[] = [
  {
    label: "What is FactoryOS?",
    reply:
      "FactoryOS is Orbis AI's AI-native manufacturing platform — it connects operations, people, assets, and knowledge into one intelligent layer, with a Factory AI Copilot that turns data into action.",
  },
  {
    label: "What can it do?",
    reply:
      "FactoryOS covers production, workforce, quality, maintenance, warehouse, analytics, vendors, contracts, and more — all AI-native, all on one connected plant model, not ten separate logins.",
    cta: { label: "Explore the platform", href: "/services" },
  },
  {
    label: "Tell me about the Copilot",
    reply:
      "Factory AI Copilot is your intelligent assistant for the whole factory. Ask a plain-language question and it draws on live operations and workflows for a sourced answer — then acts once you confirm.",
    cta: { label: "Meet the Copilot", href: "/services/copilot" },
  },
  {
    label: "I want a demo",
    reply:
      "A FactoryOS session is the fastest way to see this on your own lines — about the closest thing to trying the product before it's installed anywhere.",
    cta: { label: "Request a Demo", href: "/request-demo" },
  },
];

export function OrbisAssistant() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<ChatEntry[]>([
    { role: "bot", text: "Hi, I'm Orbis AI. What would you like to explore?" },
  ]);
  const [lastCta, setLastCta] = useState<Topic["cta"] | null>(null);

  function pick(topic: Topic) {
    setHistory((h) => [...h, { role: "user", text: topic.label }, { role: "bot", text: topic.reply }]);
    setLastCta(topic.cta ?? null);
  }

  return (
    <div className="fixed right-5 bottom-24 z-60 md:bottom-5">
      {open && (
        <div className="animate-in fade-in slide-in-from-bottom-2 mb-3 w-[19rem] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e16] shadow-[0_24px_60px_rgb(0_0_0_/_55%)] duration-200 sm:w-80">
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

          <div className="flex max-h-72 flex-col gap-2.5 overflow-y-auto p-4">
            {history.map((entry, i) => (
              <div
                key={i}
                className={
                  entry.role === "user"
                    ? "ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-primary px-3 py-2 text-xs text-white"
                    : "max-w-[92%] rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-zinc-200"
                }
              >
                {entry.text}
              </div>
            ))}
            {lastCta && (
              <Link
                href={lastCta.href}
                className="w-fit rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#0d0e16] transition-transform hover:scale-105"
              >
                {lastCta.label} →
              </Link>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-white/8 p-3">
            {TOPICS.map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => pick(t)}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-300 transition-colors hover:border-primary/40 hover:text-white"
              >
                {t.label}
              </button>
            ))}
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
