export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-dot-grid absolute inset-0 opacity-40" />
      <div className="drift-slow absolute -top-24 -left-24 h-128 w-lg rounded-full bg-primary/12 blur-[110px]" />
      <div className="drift-slow-delayed absolute top-1/3 -right-32 h-112 w-md rounded-full bg-ai-violet/10 blur-[110px]" />
      <div className="drift-slow absolute -bottom-40 left-1/4 h-104 w-104 rounded-full bg-ai-cyan/8 blur-[110px]" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" preserveAspectRatio="none" aria-hidden>
        <line
          className="circuit-pulse"
          x1="8%"
          y1="0%"
          x2="8%"
          y2="100%"
          stroke="url(#ambientLine)"
          strokeWidth="1"
          style={{ animationDuration: "6s" }}
        />
        <line
          className="circuit-pulse"
          x1="92%"
          y1="0%"
          x2="92%"
          y2="100%"
          stroke="url(#ambientLine)"
          strokeWidth="1"
          style={{ animationDuration: "7.5s", animationDelay: "1.4s" }}
        />
        <defs>
          <linearGradient id="ambientLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--ai-violet)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--ai-cyan)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
