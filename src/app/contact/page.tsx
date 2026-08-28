import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";

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
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="surface divide-y divide-white/8 text-sm text-zinc-200">
            <div className="flex items-center gap-3 p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <Mail className="size-4 text-primary" />
              </span>
              <a href="mailto:info@orbisfactoryos.ai" className="hover:text-primary">
                info@orbisfactoryos.ai
                <span className="ml-1.5 text-zinc-500">Sales, demos, partnerships</span>
              </a>
            </div>
            <div className="flex items-center gap-3 p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <Phone className="size-4 text-primary" />
              </span>
              <a href="tel:+17143631592" className="hover:text-primary">
                +1 714 363 1592
                <span className="ml-1.5 text-zinc-500">Weekdays, business hours (ET)</span>
              </a>
            </div>
            <div className="flex items-center gap-3 p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <MapPin className="size-4 text-primary" />
              </span>
              <span>
                ONYX Office Plaza, 29777 Telegraph Road, Suite 4200
                <span className="ml-1.5 text-zinc-500">Southfield, MI 48034, USA</span>
              </span>
            </div>
            <div className="flex items-center gap-3 p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                <Globe className="size-4 text-primary" />
              </span>
              <a href="https://www.orbisfactoryos.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                www.orbisfactoryos.ai
                <span className="ml-1.5 text-zinc-500">Product, docs, and pricing</span>
              </a>
            </div>
          </div>
          <p className="mt-3 flex items-center gap-2 px-1 text-xs text-zinc-500">
            <Clock className="size-3.5 text-primary" />
            Reply within one business day — for a live walkthrough, use Request for Demo.
          </p>
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
