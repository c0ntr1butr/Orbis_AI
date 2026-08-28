import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { modules } from "@/lib/services";

const productLinks = [
  { href: "/services", label: `All ${modules.length} modules` },
  ...modules.slice(0, 5).map((m) => ({ href: m.href, label: m.title })),
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
            Orbis AI Technologies builds FactoryOS — the AI-native operating
            system that turns production and workforce data into one live
            plant decision loop.
          </p>
          <a
            href="https://www.orbisfactoryos.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-white"
          >
            Visit our site
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="flex items-start gap-2 text-sm text-zinc-500">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
            <span>
              ONYX Office Plaza, 29777 Telegraph Road, Suite 4200
              <span className="block">Southfield, MI 48034, USA</span>
            </span>
          </p>
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
              href="mailto:info@orbisfactoryos.ai"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 text-primary" />
              info@orbisfactoryos.ai
            </a>
            <a
              href="tel:+17143631592"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 text-primary" />
              +1 714 363 1592
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-xs text-zinc-500 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Orbis AI Technologies Inc. All rights reserved.</p>
          <p>www.orbisfactoryos.ai</p>
        </div>
      </div>
    </footer>
  );
}
