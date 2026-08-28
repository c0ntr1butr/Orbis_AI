"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300",
        scrolled ? "border-white/10 bg-[#07080d]/90 shadow-[0_8px_24px_rgb(0_0_0_/_25%)]" : "border-white/5 bg-[#07080d]/60"
      )}
    >
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Orbis FactoryOS home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 bottom-[-1.05rem] h-0.5 rounded-full bg-primary" />
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
