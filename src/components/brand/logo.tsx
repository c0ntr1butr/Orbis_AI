import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="rounded-md bg-white px-2 py-1 shadow-[0_0_0_1px_rgb(255_255_255_/_18%)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/orbis-logo.png")}
          alt="Orbis AI Technologies"
          className="h-9 w-auto max-w-[190px] object-contain object-center sm:h-11 sm:max-w-[230px]"
        />
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-[11px] font-semibold tracking-[0.22em] text-white uppercase">
          FactoryOS
        </span>
        <span className="mt-0.5 block text-[10px] text-zinc-400">
          Plant intelligence
        </span>
      </span>
    </span>
  );
}
