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
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/88 to-[#07080d]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="kicker">
          <span className="h-1 w-1 rounded-full bg-primary" />
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.16),transparent_60%)]" />
      <div className="surface relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-14 sm:py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
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
            "glow-cta mt-7 inline-flex h-12 rounded-full bg-gradient-to-r from-[#8B0000] to-primary px-8 font-semibold"
          )}
        >
          See It On Your Lines
        </Link>
      </div>
    </section>
  );
}
