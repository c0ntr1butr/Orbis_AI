"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

import { asset } from "@/lib/asset";

const images = ["/images/factory-operations.jpg", "/images/factory-transform.jpg", "/images/factory-hero.jpg"];

export type CarouselCard = {
  slug: string;
  href: string;
  title: string;
  kicker: string;
  signature?: boolean;
  icon: ReactNode;
};

export function ModuleCarousel({ modules }: { modules: CarouselCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  function step(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const width = (card?.offsetWidth ?? 300) + 16;

    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;

    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!pausedRef.current) step(1);
    }, 3800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
      >
        {modules.map((module, index) => (
          <Link
            key={module.slug}
            data-card
            href={module.href}
            className="group relative h-64 w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:h-72 sm:w-72"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${asset(images[index % images.length])})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
            {module.signature && (
              <span className="absolute top-3 right-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                Signature
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-white/75">
                {module.icon}
                {module.kicker}
              </p>
              <h3 className="mt-1 text-lg leading-snug font-semibold text-white">{module.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous module"
          onClick={() => step(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next module"
          onClick={() => step(1)}
          className="flex size-9 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform hover:brightness-110 active:scale-95"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
