import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyDemoBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/8 bg-white/95 p-3 shadow-[0_-4px_16px_rgb(16_17_20_/_8%)] backdrop-blur-xl md:hidden">
      <Link
        href="/request-demo"
        className={cn(
          buttonVariants(),
          "h-11 w-full rounded-full bg-gradient-to-r from-[#8B0000] to-primary font-semibold glow-cta"
        )}
      >
        Request for Demo
      </Link>
    </div>
  );
}
