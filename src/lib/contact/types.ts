export type ContactIntent =
  | "assessment"
  | "troubleshooting"
  | "upgrade"
  | "installation"
  | "general";

export type PreferredContactMethod = "email" | "phone" | "either";

export type ContactTimeline =
  | "asap"
  | "this_week"
  | "this_month"
  | "just_exploring";

export type ContactDownNow = "yes" | "no" | "intermittent";

export type ContactSpaceSize = "small" | "medium" | "large" | "not_sure";

export type ContactPayload = {
  source?: "contact";
  intent?: ContactIntent;

  full_name?: string;
  business_name?: string;
  email?: string;
  phone?: string;
  preferred_contact?: PreferredContactMethod;

  site_address?: string;
  timeline?: ContactTimeline;
  description?: string;

  assessment_focus?: string[];
  assessment_concerns?: string;

  troubleshooting_issue_types?: string[];
  troubleshooting_down_now?: ContactDownNow;

  upgrade_goals?: string[];

  installation_project_types?: string[];
  installation_space_size?: ContactSpaceSize;

  website?: string;
  timestamp?: string;
};

export type ContactEmailInput = {
  intent: ContactIntent;
  full_name: string;
  business_name?: string;
  email?: string;
  phone?: string;
  preferred_contact: PreferredContactMethod;
  site_address?: string;
  timeline?: ContactTimeline;
  description: string;
  assessment_focus: string[];
  assessment_concerns?: string;
  troubleshooting_issue_types: string[];
  troubleshooting_down_now?: ContactDownNow;
  upgrade_goals: string[];
  installation_project_types: string[];
  installation_space_size?: ContactSpaceSize;
  timestamp: string;
};

export type BuiltEmail = {
  subject: string;
  body: string;
};
