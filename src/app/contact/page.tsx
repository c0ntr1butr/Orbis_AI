import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { DemoForm } from "@/components/demo-form";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        kicker="Contact us"
        title="Talk to Orbis AI Technologies"
        copy="Whether you are scoping a FactoryOS pilot or need a security review, this reaches the same team that runs plant demos."
        image="/images/factory-operations.jpg"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="card-lift surface flex items-start gap-4 p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <Mail className="size-4 text-primary" />
              </span>
              <span>
                hello@orbisai.tech
                <span className="block text-zinc-500">Sales, demos, and partnerships</span>
              </span>
            </li>
            <li className="card-lift surface flex items-start gap-4 p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <Phone className="size-4 text-primary" />
              </span>
              <span>
                +1 (415) 555-0148
                <span className="block text-zinc-500">Weekdays 9:00–18:00 IST / EST overlap</span>
              </span>
            </li>
            <li className="card-lift surface flex items-start gap-4 p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <MapPin className="size-4 text-primary" />
              </span>
              <span>
                Orbis AI Technologies
                <span className="block text-zinc-500">Plant digitalization · FactoryOS</span>
              </span>
            </li>
            <li className="card-lift surface flex items-start gap-4 p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <Clock className="size-4 text-primary" />
              </span>
              <span>
                Reply within one business day
                <span className="block text-zinc-500">
                  For a live walkthrough, use Request for Demo instead of this form.
                </span>
              </span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <div className="surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-white">Send a message</h2>
            <p className="mt-1 mb-6 text-sm text-zinc-400">
              Tell us the plant, the line, and whether OTIF, downtime, or crew
              fill is the first problem to open.
            </p>
            <DemoForm submitLabel="Send message" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
