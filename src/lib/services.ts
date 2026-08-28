import {
  Activity,
  BarChart3,
  Bot,
  Factory,
  Focus,
  Plug,
  Sparkles,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

import type { Kpi } from "@/components/kpi-tiles";

export const services = [
  {
    slug: "production",
    icon: Factory,
    title: "Production Intelligence",
    kicker: "Live modules",
    summary: "OTIF, OEE, downtime, and orders-at-risk on one board — kits and cells included.",
    pitch:
      "Industry-standard production KPIs on a live cell board: OTIF, OEE, downtime hours, and orders-at-risk with the kit that will miss first.",
    href: "/services/production",
    kpis: [
      { value: "84.4%", label: "OTIF this shift", tone: "live" },
      { value: "78.2%", label: "OEE vs plan", tone: "risk" },
      { value: "11", label: "Orders at risk" },
      { value: "6", label: "Recoverable before dock", tone: "live" },
      { value: "21.5h", label: "Downtime today", tone: "risk" },
      { value: "3.2×", label: "ROI vs missed OTIF", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    slug: "workforce",
    icon: Users,
    title: "Workforce Intelligence",
    kicker: "Live modules",
    summary: "Crew fill and certified skills mapped to the same lines as production.",
    pitch:
      "Fill-rate versus certified need — the workforce KPI plants already run, now on the same cells as OEE.",
    href: "/services/workforce",
    kpis: [
      { value: "92%", label: "Crew fill vs certified need", tone: "live" },
      { value: "2", label: "Operators ready to move" },
      { value: "4h", label: "Earlier fill-rate signal", tone: "live" },
      { value: "18%", label: "Overtime avoided", tone: "live" },
      { value: "Cell 4", label: "Yellow skill coverage", tone: "risk" },
      { value: "2.4×", label: "ROI vs idle + OT", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    slug: "copilot",
    icon: Bot,
    title: "Factory AI Copilot",
    kicker: "AI layer",
    summary: "Ask why the line is behind. Get the kit, the machine, and the operator to move.",
    pitch:
      "Turns two standard exceptions — material shortage and workforce gap — into one sourced action in under 30 seconds.",
    href: "/services/copilot",
    kpis: [
      { value: "<30s", label: "Time to sourced answer" },
      { value: "6/11", label: "Orders named as recoverable", tone: "live" },
      { value: "2", label: "Signals in one ticket" },
      { value: "18", label: "Kits short on Line 3", tone: "risk" },
      { value: "1 tap", label: "Dispatch from tablet" },
      { value: "4.1×", label: "ROI vs war-room hours", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    slug: "decision-loop",
    icon: Activity,
    title: "Signals to decisions",
    kicker: "Operating loop",
    summary: "Detect → understand → predict → recommend → act → measure, every shift.",
    pitch:
      "The ISA-style detect-to-measure loop operations already know, closed every shift instead of in a morning meeting.",
    href: "/services/decision-loop",
    kpis: [
      { value: "6", label: "Steps closed each shift" },
      { value: "Live", label: "Not overnight extracts", tone: "live" },
      { value: "1", label: "Plant model" },
      { value: "Shift", label: "Action window" },
      { value: "Audit", label: "Every recommendation" },
      { value: "2.8×", label: "ROI vs morning meetings", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    slug: "integrations",
    icon: Plug,
    title: "Connect your factory",
    kicker: "Integrations",
    summary: "MES, WMS, historians, and time & attendance without a six-month data lake.",
    pitch:
      "Standard plant systems in, industry KPIs out — one line, three feeds, recovered-order proof in 2–4 weeks.",
    href: "/services/integrations",
    kpis: [
      { value: "1", label: "Line to start" },
      { value: "3", label: "Feeds in a pilot: MES, T&A, WMS" },
      { value: "2–4w", label: "To recovered-order proof" },
      { value: "0", label: "Data lake required" },
      { value: "API", label: "Ready connectors" },
      { value: "5.0×", label: "ROI vs warehouse project", tone: "live" },
    ] satisfies Kpi[],
  },
  {
    slug: "measurement",
    icon: BarChart3,
    title: "Closed-loop measurement",
    kicker: "Value",
    summary: "Score recovered orders, recovered hours, and fill-rate — not dashboard logins.",
    pitch:
      "Payback in the language of OTIF, recovered hours, and fill-rate movement so finance and the plant manager share one scorecard.",
    href: "/services/measurement",
    kpis: [
      { value: "6", label: "Orders recovered in-shift", tone: "live" },
      { value: "+8h", label: "Downtime hours avoided", tone: "live" },
      { value: "+4 pts", label: "Fill-rate movement", tone: "live" },
      { value: "OTIF", label: "Pilot success metric" },
      { value: "Hrs", label: "Labor hours recovered" },
      { value: "3.6×", label: "Payback vs missed docks", tone: "live" },
    ] satisfies Kpi[],
  },
] as const;

export const flowSteps = [
  { icon: Activity, title: "Detect", copy: "Machine, MES, and shift signals as they hit the floor." },
  { icon: Focus, title: "Understand", copy: "One plant model for production and people." },
  { icon: BarChart3, title: "Predict", copy: "OTIF, downtime, and crew-fill risk in the shift." },
  { icon: Sparkles, title: "Recommend", copy: "Next best kit, cell, and certified operator." },
  { icon: UserRound, title: "Act", copy: "Dispatch from the floor tablet, not a war room." },
  { icon: Wrench, title: "Measure", copy: "Audit recovered orders and fill-rate movement." },
];

export const portfolioKpis: Kpi[] = [
  { value: "6/11", label: "At-risk orders recovered", tone: "live" },
  { value: "92%", label: "Crew fill vs certified need", tone: "live" },
  { value: "4 hrs", label: "Earlier risk signal", tone: "live" },
  { value: "18%", label: "Overtime avoided", tone: "live" },
  { value: "3.2×", label: "Typical module ROI", tone: "live" },
  { value: "30 min", label: "Working demo", tone: "neutral" },
];
