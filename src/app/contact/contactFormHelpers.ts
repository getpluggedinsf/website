import type { Intent } from "./contactFormConfig";

export function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function getIntentFromQuery(raw: string | null): Intent {
  switch (raw) {
    case "troubleshooting":
    case "upgrade":
    case "installation":
    case "general":
      return raw;
    case "assessment":
    default:
      return "assessment";
  }
}

export function getSubmitLabel(intent: Intent) {
  switch (intent) {
    case "assessment":
      return "Request an Assessment";
    case "troubleshooting":
      return "Request Help";
    case "upgrade":
      return "Request Consultation";
    case "installation":
      return "Discuss Your Project";
    case "general":
      return "Send Message";
  }
}

export function getDescriptionPlaceholder(intent: Intent) {
  switch (intent) {
    case "assessment":
      return "Tell us what you'd like assessed, what prompted you to reach out, and anything notable about the site or current setup.";
    case "troubleshooting":
      return "Describe what’s happening, when it started, what’s affected, and whether the issue is currently down or intermittent.";
    case "upgrade":
      return "Tell us what you’d like to improve and what feels limited or frustrating about the current setup.";
    case "installation":
      return "Tell us about the project, the type of space, and what you’re hoping to install or build.";
    case "general":
      return "Tell us a little about your question or what you need.";
  }
}

export function getDetailHeading(intent: Intent) {
  switch (intent) {
    case "assessment":
      return "Assessment details";
    case "troubleshooting":
      return "Troubleshooting details";
    case "upgrade":
      return "Upgrade details";
    case "installation":
      return "Installation details";
    case "general":
      return "";
  }
}

export function toggleValue(current: string[], value: string) {
  return current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];
}
