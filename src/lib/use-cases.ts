import type { Kpi } from "@/components/kpi-tiles";

export type UseCase = {
  slug: string;
  industry: string;
  title: string;
  capture: string;
  problem: string;
  result: string;
  service: { href: string; label: string };
  beforePct: number;
  afterPct: number;
  beforeLabel: string;
  afterLabel: string;
  kpis: Kpi[];
};

export const useCasesPortfolio: Kpi[] = [
  { value: "6/11", label: "Orders recovered in-shift", tone: "live" },
  { value: "+2.1 pts", label: "OTIF recovered", tone: "live" },
  { value: "92%", label: "Crew fill vs need", tone: "live" },
  { value: "4 hrs", label: "Earlier SMT signal", tone: "live" },
  { value: "18%", label: "Overtime avoided", tone: "live" },
  { value: "3.2×", label: "Payback vs missed docks", tone: "live" },
];

export const useCases: UseCase[] = [
  {
    slug: "automotive-otif-recovery",
    industry: "Automotive",
    title: "Body-shop OTIF recovery",
    capture: "Stop selling a 40-slide OTIF deck. Show 6 of 11 orders back on the dock before the shift ends.",
    problem:
      "Eleven customer orders slipped because door-latch kits and two certified operators were on the wrong line. The gap showed up in the morning OTIF meeting.",
    result:
      "Copilot rerouted overflow kits and labor on the live snapshot. OTIF recovered 6 of 11 orders before the shift closed.",
    service: { href: "/services/production", label: "Production Intelligence" },
    beforePct: 45,
    afterPct: 84,
    beforeLabel: "OTIF 55%",
    afterLabel: "OTIF 84.4%",
    kpis: [
      { value: "11", label: "At risk", tone: "risk" },
      { value: "6", label: "Recovered", tone: "live" },
      { value: "84.4%", label: "OTIF", tone: "live" },
      { value: "18", label: "Kits short", tone: "risk" },
      { value: "2", label: "Operators moved" },
      { value: "3.2×", label: "ROI vs missed OTIF", tone: "live" },
    ],
  },
  {
    slug: "rail-bogie-cell-downtime",
    industry: "Rail & transit",
    title: "Bogie cell downtime",
    capture: "Move the certified welder at yellow — not after eight hours of red OEE.",
    problem:
      "Unplanned downtime stacked on a welding cell with no shared view of crew fill vs. machine state.",
    result:
      "FactoryOS tied OEE to skill coverage so the next certified welder was already moving when the cell went yellow.",
    service: { href: "/services/workforce", label: "Workforce Intelligence" },
    beforePct: 38,
    afterPct: 78,
    beforeLabel: "Hours lost",
    afterLabel: "+8h avoided",
    kpis: [
      { value: "Yellow", label: "Cell state", tone: "risk" },
      { value: "1", label: "Welder en route", tone: "live" },
      { value: "+8h", label: "Hours avoided", tone: "live" },
      { value: "OEE", label: "Tied to skill" },
      { value: "Shift", label: "Recovery window" },
      { value: "2.4×", label: "ROI vs downtime", tone: "live" },
    ],
  },
  {
    slug: "electronics-smt-changeover-risk",
    industry: "Electronics",
    title: "SMT changeover risk",
    capture: "Four hours of fill-rate warning is the difference between a held feeder and a stopped SMT line.",
    problem:
      "Changeovers collided with a thin second-shift roster. Supervisors discovered the gap after the line stopped.",
    result:
      "Workforce Intelligence flagged fill-rate four hours earlier; Production Intelligence held the feeder setup.",
    service: { href: "/services/workforce", label: "Workforce Intelligence" },
    beforePct: 50,
    afterPct: 92,
    beforeLabel: "Fill after stop",
    afterLabel: "Fill 92% in time",
    kpis: [
      { value: "4h", label: "Earlier signal", tone: "live" },
      { value: "92%", label: "Fill vs need", tone: "live" },
      { value: "0", label: "Stopped changeovers", tone: "live" },
      { value: "SMT", label: "Feeder held" },
      { value: "18%", label: "OT avoided", tone: "live" },
      { value: "2.9×", label: "ROI vs scrap/wait", tone: "live" },
    ],
  },
  {
    slug: "industrial-oems-multi-plant-exceptions",
    industry: "Industrial OEMs",
    title: "Multi-plant exceptions",
    capture: "One Copilot question replaces overnight spreadsheet merges across plants.",
    problem:
      "Each plant ran a different MES extract. Corporate could not see which sites were truly at risk.",
    result:
      "A shared plant model and Copilot questions replaced overnight spreadsheet merges.",
    service: { href: "/services/copilot", label: "Factory AI Copilot" },
    beforePct: 20,
    afterPct: 90,
    beforeLabel: "Overnight merge",
    afterLabel: "<30s answer",
    kpis: [
      { value: "1", label: "Plant model", tone: "live" },
      { value: "0", label: "Overnight merges", tone: "live" },
      { value: "<30s", label: "Copilot answer" },
      { value: "N plants", label: "Same questions" },
      { value: "Live", label: "Exception list" },
      { value: "4.1×", label: "ROI vs war-room hrs", tone: "live" },
    ],
  },
  {
    slug: "tier1-customer-call-off-swings",
    industry: "Tier-1 suppliers",
    title: "Customer call-off swings",
    capture: "Load cells before the EDI file ages — overtime and idle both drop.",
    problem:
      "Call-offs moved faster than labor planning. Overtime and idle time both spiked.",
    result:
      "Predicted demand vs. certified heads let planners load cells before the EDI file aged.",
    service: { href: "/services/workforce", label: "Workforce" },
    beforePct: 40,
    afterPct: 82,
    beforeLabel: "OT + idle spike",
    afterLabel: "18% OT avoided",
    kpis: [
      { value: "EDI", label: "Before file aged", tone: "live" },
      { value: "18%", label: "OT avoided", tone: "live" },
      { value: "Idle", label: "Cells pre-loaded" },
      { value: "Cert.", label: "Heads vs demand" },
      { value: "Shift", label: "Plan cycle" },
      { value: "2.7×", label: "ROI vs OT+idle", tone: "live" },
    ],
  },
];

export const useCaseFilters = [
  "All",
  "Automotive",
  "Rail & transit",
  "Electronics",
  "Industrial OEMs",
  "Tier-1 suppliers",
] as const;
