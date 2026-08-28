import Link from "next/link";

import { Logo } from "@/components/brand/logo";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/production", label: "Production" },
  { href: "/services/workforce", label: "Workforce" },
  { href: "/services/copilot", label: "Copilot" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact Us" },
  { href: "/request-demo", label: "Request for Demo" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05060a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <Logo />
          <p className="text-sm leading-relaxed text-zinc-400">
            Orbis AI Technologies builds FactoryOS — the intelligence layer that
            transforms modern industry operations: production, workforce, and
            Copilot on one plant model.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          {footerNav.map((item) => (
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
      <div className="border-t border-white/5 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Orbis AI Technologies. All rights reserved.
      </div>
    </footer>
  );
}
