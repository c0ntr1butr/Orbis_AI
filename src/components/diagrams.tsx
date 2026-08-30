export function SparkLine({
  className = "",
  color = "#E31E24",
  gradientId = "orbisSparkFill",
}: {
  className?: string;
  color?: string;
  gradientId?: string;
}) {
  return (
    <svg viewBox="0 0 200 72" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 52 C 24 48, 36 58, 50 44 C 68 26, 82 38, 100 28 C 118 18, 132 30, 150 22 C 168 14, 184 20, 200 16 L 200 72 L 0 72 Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M0 52 C 24 48, 36 58, 50 44 C 68 26, 82 38, 100 28 C 118 18, 132 30, 150 22 C 168 14, 184 20, 200 16"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BarChart({
  values,
  color = "#16a34a",
}: {
  values: number[];
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 80" className="h-20 w-full" aria-hidden>
      {values.map((value, i) => {
        const w = 200 / values.length - 6;
        const x = i * (200 / values.length) + 4;
        const h = (value / 100) * 68;
        return (
          <rect
            key={i}
            x={x}
            y={76 - h}
            width={w}
            height={h}
            rx="3"
            fill={color}
            opacity={0.55 + (i / values.length) * 0.45}
          />
        );
      })}
    </svg>
  );
}
