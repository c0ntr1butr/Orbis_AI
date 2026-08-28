import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  Bot,
  ClipboardCheck,
  Clock,
  Factory,
  Focus,
  LayoutDashboard,
  MessageSquare,
  Package,
  Plug,
  Settings,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

import type { Kpi } from "@/components/kpi-tiles";

export type ModuleWidget =
  | "dashboard"
  | "copilot"
  | "production"
  | "workforce"
  | "quality"
  | "maintenance"
  | "warehouse"
  | "analytics"
  | "administration"
  | "notifications";

export type Module = {
  slug: string;
  number: string;
  icon: typeof Factory;
  title: string;
  kicker: string;
  oneLiner: string;
  pitch: string;
  href: string;
  signature?: boolean;
  widget: ModuleWidget;
  stats: Kpi[];
  kpis: Kpi[];
  highlights: { icon: typeof Factory; title: string; copy: string }[];
};

export const modules: Module[] = [
  {
    slug: "dashboard",
    number: "01",
    icon: LayoutDashboard,
    title: "Dashboard",
    kicker: "Command center",
    oneLiner: "One screen: what needs your attention right now.",
    pitch:
      "Factory health, business impact in dollars, and the AI's top 5 actions for today — not forty widgets, one answer.",
    href: "/services/dashboard",
    widget: "dashboard",
    stats: [
      { value: "89%", label: "Factory health", tone: "live" },
      { value: "$9.2K", label: "Impact flagged today", tone: "risk" },
      { value: "5", label: "AI actions queued", tone: "live" },
    ],
    kpis: [
      { value: "89%", label: "Factory health score", tone: "live" },
      { value: "62", label: "AI risk score", tone: "risk" },
      { value: "102%", label: "Production vs plan", tone: "live" },
      { value: "42 days", label: "Safety incident-free", tone: "live" },
      { value: "$9.2K", label: "Business impact flagged today", tone: "risk" },
      { value: "5", label: "Top actions, AI-ranked", tone: "live" },
    ],
    highlights: [
      { icon: Sparkles, title: "Business impact, not just KPIs", copy: "Downtime, defects, and absenteeism converted to dollars, so the first five minutes of the day are the five minutes that matter." },
      { icon: ShieldCheck, title: "Factory health in one score", copy: "Safety, quality, AI risk, and production rolled into a single number executives actually check." },
      { icon: Activity, title: "AI-ranked, not just listed", copy: "Top 5 actions today, ordered by the AI — not a 40-row exception report nobody opens." },
    ],
  },
  {
    slug: "copilot",
    number: "02",
    icon: Bot,
    title: "Factory AI Copilot",
    kicker: "Signature AI layer",
    oneLiner: "Ask why the line is behind. Get an answer that can act.",
    pitch:
      "Copilot explains, predicts, and acts — assign a work order, notify a supervisor, generate a CAPA — sourced from live plant state, not a chatbot FAQ.",
    href: "/services/copilot",
    signature: true,
    widget: "copilot",
    stats: [
      { value: "<30s", label: "Time to sourced answer" },
      { value: "7", label: "AI skills" },
      { value: "5", label: "Actions it can take", tone: "live" },
    ],
    kpis: [
      { value: "<30s", label: "Time to sourced answer" },
      { value: "6/11", label: "Orders named as recoverable", tone: "live" },
      { value: "7", label: "AI skills" },
      { value: "5", label: "AI actions: assign, notify, CAPA, schedule, export", tone: "live" },
      { value: "128", label: "SOPs and documents searchable" },
      { value: "4.1×", label: "ROI vs war-room hours", tone: "live" },
    ],
    highlights: [
      { icon: MessageSquare, title: "Questions operations actually ask", copy: "Why is the line behind, which orders recover, who is certified to move — not a chatbot FAQ." },
      { icon: Sparkles, title: "Next best action", copy: "Kit, cell, and people in one recommendation. Supervisors act from the tablet." },
      { icon: ShieldCheck, title: "Sourced answers", copy: "Every reply cites the signals it used so plant leadership can audit the AI layer." },
    ],
  },
  {
    slug: "production",
    number: "03",
    icon: Factory,
    title: "Production",
    kicker: "Live modules",
    oneLiner: "Order-to-dock visibility with AI bottleneck detection.",
    pitch:
      "OTIF, OEE, downtime, and order-at-risk on one live cell board — with the machine, material, or labor gap the AI already named.",
    href: "/services/production",
    widget: "production",
    stats: [
      { value: "128", label: "Orders tracked live" },
      { value: "6", label: "Delayed, flagged early", tone: "risk" },
      { value: "84.4%", label: "OTIF this shift", tone: "live" },
    ],
    kpis: [
      { value: "84.4%", label: "OTIF this shift", tone: "live" },
      { value: "78.2%", label: "OEE vs plan", tone: "risk" },
      { value: "11", label: "Orders at risk" },
      { value: "6", label: "Recoverable before dock", tone: "live" },
      { value: "21.5h", label: "Downtime today", tone: "risk" },
      { value: "3.2×", label: "ROI vs missed OTIF", tone: "live" },
    ],
    highlights: [
      { icon: TriangleAlert, title: "See the constraint", copy: "Orders-at-risk ranked by customer dock, with the cell and kit that will miss first." },
      { icon: Package, title: "Materials on the same board", copy: "Overflow kits, WIP, and shortages sit next to OEE so recovery is not a second login." },
      { icon: BarChart3, title: "Shift, not overnight", copy: "Curves update with MES events. The morning meeting reads what the line already acted on." },
    ],
  },
  {
    slug: "workforce",
    number: "04",
    icon: Users,
    title: "Workforce",
    kicker: "Live modules",
    oneLiner: "Crew fill and certified skills on the same cells as production.",
    pitch:
      "Overtime, training, and productivity intelligence layered on attendance and scheduling — a full roster is still a dark station if the certified skill is on another line.",
    href: "/services/workforce",
    widget: "workforce",
    stats: [
      { value: "92%", label: "Crew fill vs certified need", tone: "live" },
      { value: "2", label: "Operators ready to move" },
      { value: "4h", label: "Earlier fill-rate signal", tone: "live" },
    ],
    kpis: [
      { value: "92%", label: "Crew fill vs certified need", tone: "live" },
      { value: "2", label: "Operators ready to move" },
      { value: "4h", label: "Earlier fill-rate signal", tone: "live" },
      { value: "18%", label: "Overtime avoided", tone: "live" },
      { value: "Cell 4", label: "Yellow skill coverage", tone: "risk" },
      { value: "2.4×", label: "ROI vs idle + OT", tone: "live" },
    ],
    highlights: [
      { icon: Users, title: "Fill-rate that means something", copy: "Scored against certified need for the running model, not headcount in the building." },
      { icon: BadgeCheck, title: "Skills on the cell", copy: "The next certified welder or SMT tech is visible when OEE goes yellow — not after it goes red." },
      { icon: Clock, title: "Earlier than the stop", copy: "Changeovers and second-shift gaps surface hours before the line actually waits." },
    ],
  },
  {
    slug: "quality",
    number: "05",
    icon: ShieldCheck,
    title: "Quality",
    kicker: "Cost of quality",
    oneLiner: "Quality scored in dollars, not just defect percent.",
    pitch:
      "Scrap, rework, and complaint cost on one board, with AI root-cause analysis that catches a repeat defect before the fourth occurrence.",
    href: "/services/quality",
    widget: "quality",
    stats: [
      { value: "$5.9K", label: "Cost of quality this week", tone: "risk" },
      { value: "1", label: "Repeat defect, AI-flagged", tone: "risk" },
      { value: "9", label: "CAPAs in flight" },
    ],
    kpis: [
      { value: "$3,800", label: "Scrap cost this week", tone: "risk" },
      { value: "$2,150", label: "Rework cost this week" },
      { value: "3", label: "Open customer complaints", tone: "risk" },
      { value: "9", label: "CAPAs in flight" },
      { value: "1", label: "Repeat defect, AI-flagged", tone: "risk" },
      { value: "12", label: "CAPAs closed this month", tone: "live" },
    ],
    highlights: [
      { icon: ShieldCheck, title: "Cost, not just count", copy: "Scrap, rework, and complaints in dollars so quality sits on the same P&L conversation as downtime." },
      { icon: Sparkles, title: "AI root cause", copy: "Pattern and repeat-defect detection catches the fourth occurrence before it becomes a customer complaint." },
      { icon: ClipboardCheck, title: "CAPA that closes", copy: "Every corrective action tracked from open to verified, not lost in an email thread." },
    ],
  },
  {
    slug: "maintenance",
    number: "06",
    icon: Wrench,
    title: "Maintenance",
    kicker: "Predictive",
    oneLiner: "Asset health scored 0–100, with failure predicted in advance.",
    pitch:
      "Every machine gets a health score and a remaining-useful-life estimate — schedule the fix before the breakdown, not after the line stops.",
    href: "/services/maintenance",
    widget: "maintenance",
    stats: [
      { value: "92%", label: "Fleet average health", tone: "live" },
      { value: "82%", label: "Failure probability flagged", tone: "risk" },
      { value: "14 days", label: "Prediction window" },
    ],
    kpis: [
      { value: "92%", label: "Fleet average health", tone: "live" },
      { value: "2.4h", label: "Mean time to repair" },
      { value: "86%", label: "Spare parts coverage", tone: "live" },
      { value: "21", label: "Open work orders" },
      { value: "82%", label: "Failure probability, Machine 15", tone: "risk" },
      { value: "14 days", label: "Predicted failure window", tone: "risk" },
    ],
    highlights: [
      { icon: Activity, title: "Health score, not a light", copy: "Every asset scored 0–100 with remaining useful life, not just Running or Down." },
      { icon: Sparkles, title: "AI failure prediction", copy: "Machine 15 flagged at 82% failure probability, 14 days out — enough time to schedule, not scramble." },
      { icon: Package, title: "Spare parts on the same screen", copy: "Coverage checked before the work order is created, not after the tech arrives." },
    ],
  },
  {
    slug: "warehouse",
    number: "07",
    icon: Package,
    title: "Warehouse",
    kicker: "Material intelligence",
    oneLiner: "Live material availability, tied straight to the plan.",
    pitch:
      "Available, reserved, in transit, or blocked — by SKU, updated as production consumes it, not a static count from last night's cycle.",
    href: "/services/warehouse",
    widget: "warehouse",
    stats: [
      { value: "1,204", label: "SKUs tracked" },
      { value: "58%", label: "Available right now", tone: "live" },
      { value: "17", label: "Low-stock alerts", tone: "risk" },
    ],
    kpis: [
      { value: "₹2.1Cr", label: "Inventory value" },
      { value: "17", label: "Low stock items", tone: "risk" },
      { value: "4,120", label: "Units consumed today" },
      { value: "₹8.4L", label: "Dead stock flagged", tone: "risk" },
      { value: "58%", label: "Available for production", tone: "live" },
      { value: "10%", label: "Blocked, needs release", tone: "risk" },
    ],
    highlights: [
      { icon: Package, title: "Available, not just counted", copy: "Reserved, in transit, and blocked material split out so production knows what's actually usable today." },
      { icon: BarChart3, title: "Consumption, live", copy: "Fast-moving SKUs tracked as they're used, not reconciled at month-end." },
      { icon: ShieldCheck, title: "ABC classification built in", copy: "Critical stock flagged automatically so nobody discovers a shortage on the line." },
    ],
  },
  {
    slug: "analytics",
    number: "08",
    icon: BarChart3,
    title: "Analytics",
    kicker: "Executive reporting",
    oneLiner: "Plant and shift comparisons with an AI-written summary.",
    pitch:
      "A board report in one click, not a week of spreadsheet merges — the same figures corporate and the plant manager both trust.",
    href: "/services/analytics",
    widget: "analytics",
    stats: [
      { value: "3", label: "Plants compared live" },
      { value: "1 click", label: "AI board report" },
      { value: "0", label: "Overnight merges", tone: "live" },
    ],
    kpis: [
      { value: "3", label: "Plants compared live" },
      { value: "3", label: "Shifts compared live" },
      { value: "1 click", label: "AI-generated board report", tone: "live" },
      { value: "0", label: "Overnight spreadsheet merges", tone: "live" },
      { value: "Daily", label: "Auto-generated factory report" },
      { value: "4.1×", label: "ROI vs analyst hours", tone: "live" },
    ],
    highlights: [
      { icon: BarChart3, title: "Plant vs plant, shift vs shift", copy: "The same KPIs, compared side by side, so corporate sees which sites are actually at risk." },
      { icon: Sparkles, title: "AI-written summary", copy: "A board report and an executive summary generated on demand, not assembled overnight." },
      { icon: Activity, title: "One version of the truth", copy: "Finance and the plant manager read the same OTIF and downtime numbers." },
    ],
  },
  {
    slug: "administration",
    number: "09",
    icon: Settings,
    title: "Administration",
    kicker: "Connect everything",
    oneLiner: "ERP connectors and AI configuration IT actually approves.",
    pitch:
      "API-ready connectors to MES, WMS, and PLC historians, role-based AI permissions, and a full audit log — start with one line, not a data lake.",
    href: "/services/administration",
    widget: "administration",
    stats: [
      { value: "API", label: "Ready connectors" },
      { value: "Role-based", label: "AI permissions" },
      { value: "100%", label: "Audit trail", tone: "live" },
    ],
    kpis: [
      { value: "1", label: "Line to start" },
      { value: "3", label: "Feeds in a pilot: MES, T&A, WMS" },
      { value: "2–4w", label: "To recovered-order proof" },
      { value: "0", label: "Data lake required" },
      { value: "Role-based", label: "AI permissions" },
      { value: "5.0×", label: "ROI vs warehouse project", tone: "live" },
    ],
    highlights: [
      { icon: Plug, title: "Connect what you already run", copy: "MES, WMS, and PLC historians through API-ready connectors — no forklift replacement." },
      { icon: ShieldCheck, title: "AI permissions, role by role", copy: "Every AI action scoped to who's allowed to take it, logged for audit." },
      { icon: Users, title: "Full audit trail", copy: "Every user, every change, every approval — visible to IT and compliance." },
    ],
  },
  {
    slug: "notifications",
    number: "10",
    icon: Bell,
    title: "Notifications",
    kicker: "Nothing missed",
    oneLiner: "Priority alerts that escalate themselves.",
    pitch:
      "Operator to supervisor to plant head, automatically, if nobody acknowledges — with full acknowledgement tracking on every alert.",
    href: "/services/notifications",
    widget: "notifications",
    stats: [
      { value: "4", label: "Escalation levels" },
      { value: "<15 min", label: "To first escalation", tone: "live" },
      { value: "100%", label: "Acknowledgement tracked", tone: "live" },
    ],
    kpis: [
      { value: "4", label: "Critical alerts open", tone: "risk" },
      { value: "7", label: "High priority open", tone: "risk" },
      { value: "4", label: "Escalation levels" },
      { value: "<15 min", label: "To first escalation", tone: "live" },
      { value: "24", label: "Total alerts today" },
      { value: "100%", label: "Acknowledgement tracked", tone: "live" },
    ],
    highlights: [
      { icon: Bell, title: "Priority that means something", copy: "Critical, high, medium, low — scored, not just timestamped." },
      { icon: Activity, title: "Escalates itself", copy: "Operator to supervisor to plant head automatically if nobody acknowledges." },
      { icon: ShieldCheck, title: "Acknowledgement tracked", copy: "Open, acknowledged, closed — visible on every alert, not just the ones someone remembers." },
    ],
  },
];

export const platformCapabilities = [
  { icon: Focus, title: "Global search", copy: "Machines, employees, orders, parts, suppliers, documents — one search bar, every module." },
  { icon: Sparkles, title: "Persistent Factory AI", copy: "Not buried in one tab. A floating Copilot on every screen, in every module." },
  { icon: UserRound, title: "Role-based dashboards", copy: "CEO, plant head, supervisor, or operator — everyone sees the view built for their job." },
  { icon: Activity, title: "Mobile & tablet ready", copy: "The floor doesn't carry a laptop. Every module runs on the tablet already on the line." },
];
