import Link from "next/link";

import { asset } from "@/lib/asset";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageBanner({
  kicker,
  title,
  copy,
  image = "/images/factory-transform.jpg",
}: {
  kicker: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset(image)})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/86 to-[#07080d]/45" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#101119] px-6 py-11 text-center sm:px-12">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Ready to put a live plant on the screen?
        </h2>
        <p className="mt-3 text-zinc-400">
          See Orbis FactoryOS recover orders, fill, and downtime on a working
          snapshot — then decide if the intelligence layer belongs in your
          control room.
        </p>
        <Link
          href="/request-demo"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-7 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold shadow-[0_10px_32px_rgb(227_30_36_/_40%)]"
          )}
        >
          Request for Demo
        </Link>
      </div>
    </section>
  );
}
