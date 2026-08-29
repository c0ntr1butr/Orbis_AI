import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyDemoBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/30 bg-[#0b0c12]/92 p-3 backdrop-blur-xl md:hidden">
      <Link
        href="/request-demo"
        className={cn(
          buttonVariants(),
          "h-11 w-full rounded-full bg-gradient-to-r from-[#8B0000] to-primary font-semibold glow-cta"
        )}
      >
        See it on your lines
      </Link>
    </div>
  );
}
