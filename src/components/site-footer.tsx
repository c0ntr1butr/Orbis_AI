import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { Logo } from "@/components/brand/logo";

const productLinks = [
  { href: "/services", label: "All services" },
  { href: "/services/production", label: "Production Intelligence" },
  { href: "/services/workforce", label: "Workforce Intelligence" },
  { href: "/services/copilot", label: "Factory AI Copilot" },
  { href: "/services/decision-loop", label: "Signals to decisions" },
  { href: "/services/integrations", label: "Connect your factory" },
];

const companyLinks = [
  { href: "/use-cases", label: "Use cases" },
  { href: "/contact", label: "Contact us" },
  { href: "/request-demo", label: "Request a demo" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05060a]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div className="max-w-sm space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-zinc-400">
            Orbis AI Technologies builds FactoryOS — the intelligence layer that
            turns production and workforce data into one live plant decision loop.
          </p>
          <a
            href="https://orbisfactoryos.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-white"
          >
            Visit our site
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Platform
          </p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm">
            {productLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Company
          </p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm">
            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 space-y-2.5 text-sm text-zinc-400">
            <a
              href="mailto:hello@orbisai.tech"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 text-primary" />
              hello@orbisai.tech
            </a>
            <a
              href="tel:+14155550148"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 text-primary" />
              +1 (415) 555-0148
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-xs text-zinc-500 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Orbis AI Technologies. All rights reserved.</p>
          <p>Plant digitalization · FactoryOS</p>
        </div>
      </div>
    </footer>
  );
}
