"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

import { asset } from "@/lib/asset";

const DEFAULT_IMAGES = ["/images/factory-operations.jpg", "/images/factory-transform.jpg", "/images/factory-hero.jpg"];

export type PhotoCarouselItem = {
  key: string;
  href?: string;
  title: string;
  kicker: string;
  badge?: string;
  icon: ReactNode;
};

export function PhotoCarousel({
  items,
  images = DEFAULT_IMAGES,
  imageOffset = 0,
  ariaPrefix = "item",
}: {
  items: PhotoCarouselItem[];
  images?: string[];
  imageOffset?: number;
  ariaPrefix?: string;
}) {
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
        {items.map((item, index) => {
          const cardClass =
            "group relative h-64 w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:h-72 sm:w-72";
          const content = (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${asset(images[(index + imageOffset) % images.length])})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
              {item.badge && (
                <span className="absolute top-3 right-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                  {item.badge}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-white/75">
                  {item.icon}
                  {item.kicker}
                </p>
                <h3 className="mt-1 text-lg leading-snug font-semibold text-white">{item.title}</h3>
              </div>
            </>
          );

          return item.href ? (
            <Link key={item.key} data-card href={item.href} className={cardClass}>
              {content}
            </Link>
          ) : (
            <div key={item.key} data-card className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label={`Previous ${ariaPrefix}`}
          onClick={() => step(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label={`Next ${ariaPrefix}`}
          onClick={() => step(1)}
          className="flex size-9 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform hover:brightness-110 active:scale-95"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
