"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type DemoFormProps = {
  submitLabel?: string;
  includeMessage?: boolean;
};

export function DemoForm({
  submitLabel = "Request a demo",
  includeMessage = true,
}: DemoFormProps) {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCompany = company.trim();

    if (!trimmedName || !trimmedEmail || !trimmedCompany) {
      setStatus("error");
      setError("Name, work email, and company are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setError("Enter a valid work email so we can schedule your walkthrough.");
      return;
    }

    setError("");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-live/30 bg-live/10 p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 size-8 text-live" />
        <h3 className="text-lg font-semibold text-white">Demo request received</h3>
        <p className="mt-2 text-sm text-zinc-300">
          A plant operations specialist will follow up within one business day
          with a FactoryOS walkthrough tailored to your lines.
        </p>
      </div>
    );
  }

  const fieldClass =
    "h-10 w-full rounded-lg border border-input bg-white/5 px-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

  return (
    <form onSubmit={onSubmit} method="post" action="#" className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Priya Raman"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Work email</Label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="priya@plant.com"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Company</Label>
        <input
          id="company"
          name="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="Northline Automotive"
          className={fieldClass}
        />
      </div>
      {includeMessage && (
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="OTIF risk, crew fill, downtime, or a specific line..."
            className={cn(fieldClass, "h-auto min-h-24 py-2")}
          />
        </div>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="glow-cta inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-4 text-sm font-semibold text-white hover:brightness-110"
      >
        {submitLabel}
      </button>
    </form>
  );
}
