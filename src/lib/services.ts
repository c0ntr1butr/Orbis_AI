import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  Bot,
  ClipboardCheck,
  Clock,
  Cloud,
  Factory,
  FileSignature,
  Focus,
  LayoutDashboard,
  LayoutGrid,
  Lock,
  MessageSquare,
  Network,
  Package,
  Plug,
  Scale,
  Settings,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Truck,
  UserRound,
  Users,
  Workflow,
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
  | "notifications"
  | "vendor"
  | "contracts";

export type AiStory = {
  ask: string;
  understand: string;
  decide: string;
  act: string;
};

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
  aiStory: AiStory;
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
    aiStory: {
      ask: "What actually needs my attention this morning?",
      understand: "Rolls safety, quality, AI risk, and production into the 89% health score, then converts today's downtime, defects, and absenteeism into one dollar figure.",
      decide: "Ranks the five things worth doing today by business impact, not alert volume — $9.2K is on the table before lunch.",
      act: "Surfaces the AI actions queue on the Dashboard, one tap from a work order or a supervisor ping.",
    },
  },
  {
    slug: "production",
    number: "02",
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
    aiStory: {
      ask: "Why is Line 3 behind plan?",
      understand: "Cross-references OEE, MES events, and kit availability to find 18 door-latch kits short and two certified operators on the wrong line.",
      decide: "Names the 6 of 11 at-risk orders still recoverable before the dock cutoff, and the cell that misses first if nothing moves.",
      act: "Assigns the overflow kit and reassigns the operators — the recovery plan becomes a work order, not a meeting.",
    },
  },
  {
    slug: "workforce",
    number: "03",
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
    aiStory: {
      ask: "Which cell needs a certified skill before the shift ends?",
      understand: "Scores crew fill against certified need for the model actually running — not headcount in the building — and sees Cell 4 trending yellow.",
      decide: "Flags the earliest point a changeover or second-shift gap will bite, hours before the line actually waits.",
      act: "Moves the next certified welder or SMT tech before OEE goes red, and logs the overtime it avoided.",
    },
  },
  {
    slug: "analytics",
    number: "04",
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
    aiStory: {
      ask: "How does Plant 2 compare to Plant 1 this shift?",
      understand: "Pulls the same OTIF, downtime, and cost figures corporate and the plant manager already trust — no separate spreadsheet per site.",
      decide: "Points at which site is actually at risk, not just which one reported last.",
      act: "Generates the board report and executive summary in one click — same numbers, no overnight merge.",
    },
  },
  {
    slug: "copilot",
    number: "05",
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
    aiStory: {
      ask: "Where's the SOP for this changeover, and who's certified to run it?",
      understand: "Searches 128 plant documents and live operational state together, so the answer is sourced from what the floor is actually doing right now.",
      decide: "Recommends the next best action — kit, cell, and person — not a list of links.",
      act: "Assigns the work order, notifies the supervisor, or opens a CAPA, and cites the signals it used for every answer.",
    },
  },
  {
    slug: "administration",
    number: "06",
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
    aiStory: {
      ask: "Can IT trust what the AI is allowed to touch?",
      understand: "Maps every connector — MES, WMS, PLC historian — and every AI action to a role, before a single automation runs.",
      decide: "Starts the pilot on one line with three feeds, not a data-lake project IT has to sign off on for a year.",
      act: "Logs every user, change, and AI action to a full audit trail IT and compliance can actually read.",
    },
  },
  {
    slug: "notifications",
    number: "07",
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
    aiStory: {
      ask: "Did anyone see the Line 3 alert?",
      understand: "Tracks acknowledgement — open, seen, closed — on every one of today's 24 alerts, scored critical to low.",
      decide: "Decides, in under 15 minutes, that nobody has acted and the alert needs to move up a level.",
      act: "Escalates operator to supervisor to plant head automatically, with the full trail visible to whoever picks it up.",
    },
  },
  {
    slug: "vendor-management",
    number: "08",
    icon: Truck,
    title: "Vendor Management",
    kicker: "Supplier performance",
    oneLiner: "Every vendor scored on delivery and quality — not who called last.",
    pitch:
      "On-time delivery, quality holds, and responsiveness tracked per supplier, so sourcing and escalation decisions are based on how vendors actually perform.",
    href: "/services/vendor-management",
    widget: "vendor",
    stats: [
      { value: "Tiered", label: "Vendors ranked by performance", tone: "live" },
      { value: "Flagged", label: "Late or quality-hold vendors", tone: "risk" },
      { value: "Live", label: "Scorecards, not year-end review" },
    ],
    kpis: [
      { value: "Tiered", label: "Vendors ranked by performance", tone: "live" },
      { value: "On-time %", label: "Delivery scored per vendor" },
      { value: "Flagged", label: "Late or quality-hold vendors", tone: "risk" },
      { value: "Live", label: "Scorecards, not year-end review" },
      { value: "1", label: "Record per supplier, not per PO" },
      { value: "Audit", label: "Full sourcing history" },
    ],
    highlights: [
      { icon: Truck, title: "Performance, not just a PO history", copy: "Delivery, quality, and responsiveness rolled into one score per vendor, updated as it happens." },
      { icon: TriangleAlert, title: "See the risk before the shortage", copy: "A vendor sliding into a lower tier shows up before the material it supplies runs out." },
      { icon: ShieldCheck, title: "One record per supplier", copy: "Every contact, contract, and incident tied to the same vendor record — not scattered across email and spreadsheets." },
    ],
    aiStory: {
      ask: "Which supplier is the real risk on this order?",
      understand: "Rolls delivery, quality holds, and responsiveness into one live score per vendor — not a year-end scorecard.",
      decide: "Flags the vendor sliding into a lower tier before the material it supplies actually runs out.",
      act: "Ties the incident to that vendor's single record, ready for the next sourcing or escalation call.",
    },
  },
  {
    slug: "contract-management",
    number: "09",
    icon: FileSignature,
    title: "Contract Management",
    kicker: "Compliance & renewals",
    oneLiner: "Contracts and renewal dates surfaced before they're missed.",
    pitch:
      "Every supplier and customer contract in one place, with renewal windows and compliance obligations flagged before they lapse — not discovered after.",
    href: "/services/contract-management",
    widget: "contracts",
    stats: [
      { value: "Tracked", label: "Every active contract", tone: "live" },
      { value: "Flagged", label: "Compliance exceptions", tone: "risk" },
      { value: "Ahead", label: "Renewals surfaced early" },
    ],
    kpis: [
      { value: "Tracked", label: "Every active contract", tone: "live" },
      { value: "Ahead", label: "Renewals surfaced before expiry", tone: "live" },
      { value: "Flagged", label: "Compliance exceptions", tone: "risk" },
      { value: "Linked", label: "Tied to the vendor or customer record" },
      { value: "Searchable", label: "Terms and obligations" },
      { value: "Audit", label: "Full approval history" },
    ],
    highlights: [
      { icon: FileSignature, title: "Renewals, not surprises", copy: "Expiry and renewal windows flagged with enough lead time to renegotiate, not just enough to notice." },
      { icon: ShieldCheck, title: "Compliance terms, surfaced", copy: "Obligations and exceptions pulled out of the document, not buried in page fourteen." },
      { icon: Plug, title: "Tied to the record it governs", copy: "Every contract linked to the vendor, customer, or module it actually governs." },
    ],
    aiStory: {
      ask: "What's expiring that we haven't renegotiated?",
      understand: "Reads every active contract for renewal windows and compliance obligations most teams find on page fourteen.",
      decide: "Surfaces the ones inside their renewal window with enough lead time to actually negotiate.",
      act: "Links the flag to the vendor or customer record it governs, so nothing waits on a shared inbox.",
    },
  },
  {
    slug: "quality",
    number: "10",
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
    aiStory: {
      ask: "Is this defect a one-off or a pattern?",
      understand: "Runs root-cause analysis across scrap, rework, and complaint cost — not just a defect percentage.",
      decide: "Catches the repeat before the fourth occurrence, when it's still a CAPA and not a customer complaint.",
      act: "Opens the CAPA and tracks it to verified close, not lost in an email thread.",
    },
  },
  {
    slug: "warehouse",
    number: "11",
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
    aiStory: {
      ask: "Do we actually have the material for tomorrow's run?",
      understand: "Splits available, reserved, in transit, and blocked by SKU, updated as production consumes it in real time.",
      decide: "Flags the SKUs about to become a shortage before the line discovers it.",
      act: "Puts the ABC-critical items and the release action on the same screen as the plan.",
    },
  },
  {
    slug: "maintenance",
    number: "12",
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
    aiStory: {
      ask: "Which machine is about to break?",
      understand: "Scores every asset 0–100 on health and remaining useful life — not just Running or Down.",
      decide: "Names Machine 15 at 82% failure probability, 14 days out — enough runway to schedule, not scramble.",
      act: "Checks spare-parts coverage and opens the work order before the tech is standing at a stopped line.",
    },
  },
];

export const platformCapabilities = [
  { icon: Focus, title: "Global Factory Search", copy: "Machines, employees, orders, parts, suppliers, documents — one search bar, every module." },
  { icon: Sparkles, title: "Persistent Factory AI", copy: "Not buried in one tab. A floating Copilot on every screen, in every module." },
  { icon: UserRound, title: "Role-Based Experiences", copy: "CEO, plant head, supervisor, or operator — everyone sees the view built for their job." },
  { icon: Activity, title: "Mobile & Tablet Ready", copy: "The floor doesn't carry a laptop. Every module runs on the tablet already on the line." },
];

export const aiNativeCore = [
  { icon: Sparkles, title: "AI-Native by Design", copy: "Intelligence built into every module." },
  { icon: Cloud, title: "Enterprise Cloud", copy: "Built for plant-level operations and scale." },
  { icon: Lock, title: "Secure by Design", copy: "Encryption, RBAC, and isolated enterprise environments." },
  { icon: Scale, title: "Integrity & Governance", copy: "AI actions scoped, logged, and auditable." },
  { icon: Plug, title: "API-Ready Integrations", copy: "Connect with MES, WMS, ERP, and industrial systems." },
];

export const platformPillars = [
  { icon: Network, title: "Connected Operations", copy: "Production, workforce, quality, maintenance, and warehouse on one live plant model — not five systems that don't talk to each other." },
  { icon: LayoutGrid, title: "AI-Native Modules", copy: "Intelligence built into every module from day one, not a chatbot layered on top of a legacy dashboard." },
  { icon: Bot, title: "Factory AI Copilot", copy: "Ask a question in plain language and get a sourced answer that can act — across the factory, not one screen." },
  { icon: Workflow, title: "Intelligent Workflows", copy: "Recommendations become actions — a work order, a reassignment, an alert — without leaving the platform." },
  { icon: Scale, title: "Enterprise Governance", copy: "Every AI action scoped, logged, and auditable, with human oversight where it matters." },
];
