"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Orbis FactoryOS home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <span className="mx-auto mt-1 block h-0.5 w-5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href="/request-demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-5 text-sm font-semibold text-white glow-cta hover:brightness-110"
            )}
          >
            Request for Demo
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "lg:hidden"
          )}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0d0e16] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-demo"
              onClick={() => setMenuOpen(false)}
              className={cn(
                buttonVariants(),
                "mt-3 h-11 rounded-full bg-gradient-to-r from-[#8B0000] to-primary font-semibold"
              )}
            >
              Request for Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
