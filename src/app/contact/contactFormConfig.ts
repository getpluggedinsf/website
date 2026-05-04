export type Intent =
  | "assessment"
  | "troubleshooting"
  | "upgrade"
  | "installation"
  | "general";

export type PreferredContact = "email" | "phone" | "either";

export type Timeline = "asap" | "this_week" | "this_month" | "just_exploring" | "";

export type DownNow = "yes" | "no" | "intermittent" | "";

export type SpaceSize = "small" | "medium" | "large" | "not_sure" | "";

export const INTENT_OPTIONS: Array<{
  value: Intent;
  label: string;
}> = [
  { value: "assessment", label: "Request an Assessment" },
  { value: "troubleshooting", label: "Help Troubleshooting a Problem" },
  { value: "upgrade", label: "Upgrade or Improve an Existing Network" },
  { value: "installation", label: "New Installation or Project" },
  { value: "general", label: "General Question" },
];

export const ASSESSMENT_FOCUS_OPTIONS = [
  "Wi-Fi coverage / dead zones",
  "Slow or inconsistent performance",
  "Guest network setup",
  "Network layout / equipment review",
  "Other",
  "Not sure",
] as const;

export const TROUBLESHOOTING_ISSUE_OPTIONS = [
  "Internet drops or outages",
  "Wi-Fi performance issues",
  "POS / payment system connectivity",
  "Guest Wi-Fi problems",
  "Device connection issues",
  "Other",
  "Not sure",
] as const;

export const UPGRADE_GOAL_OPTIONS = [
  "Better Wi-Fi coverage",
  "Improve reliability and performance",
  "Better guest Wi-Fi setup",
  "Add features (e.g., guest access, analytics)",
  "Enable remote monitoring and support",
  "Improve organization or equipment layout",
  "Other",
  "Not sure",
] as const;

export const INSTALLATION_PROJECT_OPTIONS = [
  "New business location",
  "Remodel / expansion",
  "New Wi-Fi network",
  "Wired network equipment or cabling",
  "Guest network",
  "Other",
  "Not sure",
] as const;

export const INPUT_CLASS =
  "rounded-lg border border-[var(--pip-border)] bg-white px-3 py-2.5 text-sm text-[var(--pip-ink)] outline-none transition placeholder:text-slate-400 focus:border-[var(--pip-ink)] focus:ring-2 focus:ring-[color:var(--pip-focus-ring)]";

export const OPTION_CARD_CLASS =
  "rounded-lg border border-[var(--pip-border)] bg-white px-3 py-2.5 text-sm text-[var(--pip-ink)] transition hover:border-slate-400";
