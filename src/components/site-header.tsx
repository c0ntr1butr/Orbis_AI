"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { modules } from "@/lib/services";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const onProduct = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Orbis FactoryOS home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              pathname === "/" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
            )}
          >
            Home
            {pathname === "/" && (
              <span className="absolute inset-x-3 bottom-[-1.05rem] h-0.5 rounded-full bg-primary" />
            )}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <Link
              href="/services"
              aria-expanded={productOpen}
              className={cn(
                "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                onProduct ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              Product
              <ChevronDown className={cn("size-3.5 transition-transform", productOpen && "rotate-180")} />
              {onProduct && (
                <span className="absolute inset-x-3 bottom-[-1.05rem] h-0.5 rounded-full bg-primary" />
              )}
            </Link>

            {productOpen && (
              <div className="absolute top-full left-1/2 z-50 w-[30rem] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-black/8 bg-white p-3 shadow-[0_16px_40px_rgb(16_17_20_/_12%)]">
                  {modules.map((module) => (
                    <Link
                      key={module.slug}
                      href={module.href}
                      onClick={() => setProductOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-black/[0.04]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/18 to-primary/5">
                        <module.icon className="size-4 text-primary" />
                      </span>
                      <span className="text-xs font-medium text-zinc-800">{module.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setProductOpen(false)}
                    className="col-span-2 mt-1 flex items-center justify-center rounded-lg border-t border-black/8 px-2.5 py-2 text-xs font-semibold text-primary hover:bg-primary/5"
                  >
                    View all {modules.length} modules →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {nav.slice(1).map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
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
        <div className="max-h-[calc(100vh-4.25rem)] overflow-y-auto border-t border-black/8 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-zinc-700 hover:bg-black/5"
            >
              Home
            </Link>

            <button
              type="button"
              aria-expanded={mobileProductOpen}
              onClick={() => setMobileProductOpen((open) => !open)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-zinc-700 hover:bg-black/5"
            >
              Product
              <ChevronDown className={cn("size-4 transition-transform", mobileProductOpen && "rotate-180")} />
            </button>
            {mobileProductOpen && (
              <div className="mb-1 grid grid-cols-2 gap-1 rounded-lg bg-zinc-50 p-2">
                {modules.map((module) => (
                  <Link
                    key={module.slug}
                    href={module.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md px-2 py-2 text-xs font-medium text-zinc-700 hover:bg-white"
                  >
                    <module.icon className="size-3.5 text-primary" />
                    {module.title}
                  </Link>
                ))}
              </div>
            )}

            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-700 hover:bg-black/5"
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
