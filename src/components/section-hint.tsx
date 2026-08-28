"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { setAssistantHint } from "@/lib/assistant-hint";

export function SectionHint({ hint, children }: { hint: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAssistantHint(hint);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hint]);

  return <div ref={ref}>{children}</div>;
}
