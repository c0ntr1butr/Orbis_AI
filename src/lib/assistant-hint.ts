"use client";

type Listener = (hint: string) => void;

export const DEFAULT_HINT = "Want to see how FactoryOS works?";

let currentHint = DEFAULT_HINT;
const listeners = new Set<Listener>();

export function setAssistantHint(hint: string) {
  if (hint === currentHint) return;
  currentHint = hint;
  listeners.forEach((l) => l(hint));
}

export function subscribeAssistantHint(listener: Listener) {
  listeners.add(listener);
  listener(currentHint);
  return () => {
    listeners.delete(listener);
  };
}
